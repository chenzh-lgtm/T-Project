Page({
  data: {
    bookings: []
  },

  onLoad() {
    this.loadBookings();
  },

  onShow() {
    this.loadBookings();
  },

  loadBookings() {
    const bookings = wx.getStorageSync('bookings') || [];
    this.setData({ bookings });
  },

  onBookingTap(e) {
    const bookingId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/booking-detail/booking-detail?id=${bookingId}`
    });
  },

  cancelBooking(e) {
    const bookingId = e.currentTarget.dataset.id;
    wx.showModal({
      title: '取消预约',
      content: '确定要取消这次预约吗？',
      success: (res) => {
        if (res.confirm) {
          const bookings = wx.getStorageSync('bookings') || [];
          const filteredBookings = bookings.filter(b => b.id !== bookingId);
          wx.setStorageSync('bookings', filteredBookings);
          this.loadBookings();
          wx.showToast({
            title: '已取消',
            icon: 'success'
          });
        }
      }
    });
  }
});