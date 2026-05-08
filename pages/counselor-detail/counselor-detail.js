const { counselors } = require('../../data/mock-data.js');

Page({
  data: {
    counselor: {},
    selectedDate: '',
    selectedTime: '',
    showTimePicker: false,
    availableSlots: [],
    currentDateIndex: 0,
    availableTimes: []
  },

  onLoad(options) {
    const counselorId = parseInt(options.id);
    const counselor = counselors.find(c => c.id === counselorId);
    
    const availableTimes = this.generateAvailableTimes(counselor);
    
    this.setData({
      counselor: counselor || {},
      availableTimes: availableTimes,
      selectedDate: availableTimes[0]?.date || '',
      availableSlots: availableTimes[0]?.slots || []
    });
  },

  generateAvailableTimes(counselor) {
    const times = [];
    const today = new Date();
    
    for (let i = 0; i < 5; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dateStr = date.toISOString().split('T')[0];
      
      const originalTime = counselor?.availableTimes?.find(t => t.date === dateStr);
      const slots = originalTime?.slots || ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
      
      times.push({
        date: dateStr,
        slots: slots
      });
    }
    
    return times;
  },

  selectDate(e) {
    const index = e.currentTarget.dataset.index;
    const dateInfo = this.data.availableTimes[index];
    
    this.setData({
      currentDateIndex: index,
      selectedDate: dateInfo.date,
      availableSlots: dateInfo.slots,
      selectedTime: ''
    });
  },

  selectTime(e) {
    const time = e.currentTarget.dataset.time;
    this.setData({
      selectedTime: time
    });
  },

  confirmBooking() {
    if (!this.data.selectedTime) {
      wx.showToast({
        title: '请选择预约时间',
        icon: 'none'
      });
      return;
    }

    const booking = {
      id: Date.now(),
      counselorId: this.data.counselor.id,
      counselorName: this.data.counselor.name,
      counselorAvatar: this.data.counselor.avatar,
      date: this.data.selectedDate,
      time: this.data.selectedTime,
      location: this.data.counselor.location,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    const bookings = wx.getStorageSync('bookings') || [];
    bookings.push(booking);
    wx.setStorageSync('bookings', bookings);

    wx.showToast({
      title: '预约成功',
      icon: 'success'
    });

    setTimeout(() => {
      wx.navigateBack();
    }, 1500);
  }
});