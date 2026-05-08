Page({
  data: {
    booking: {},
    showReview: false,
    rating: 0,
    comment: ''
  },

  onLoad(options) {
    const bookingId = parseInt(options.id);
    const bookings = wx.getStorageSync('bookings') || [];
    const booking = bookings.find(b => b.id === bookingId);
    this.setData({ booking: booking || {} });
  },

  completeBooking() {
    wx.showModal({
      title: '完成咨询',
      content: '确定要标记为已完成吗？',
      success: (res) => {
        if (res.confirm) {
          const bookings = wx.getStorageSync('bookings') || [];
          const updatedBookings = bookings.map(b => {
            if (b.id === this.data.booking.id) {
              return { ...b, status: 'completed' };
            }
            return b;
          });
          wx.setStorageSync('bookings', updatedBookings);
          this.setData({ 'booking.status': 'completed' });
          wx.showToast({
            title: '已完成',
            icon: 'success'
          });
        }
      }
    });
  },

  openReview() {
    this.setData({ showReview: true });
  },

  closeReview() {
    this.setData({ showReview: false, rating: 0, comment: '' });
  },

  selectRating(e) {
    const rating = e.currentTarget.dataset.rating;
    this.setData({ rating });
  },

  inputComment(e) {
    this.setData({ comment: e.detail.value });
  },

  submitReview() {
    if (this.data.rating === 0) {
      wx.showToast({
        title: '请选择评分',
        icon: 'none'
      });
      return;
    }

    const bookings = wx.getStorageSync('bookings') || [];
    const updatedBookings = bookings.map(b => {
      if (b.id === this.data.booking.id) {
        return { 
          ...b, 
          rating: this.data.rating,
          comment: this.data.comment,
          reviewedAt: new Date().toISOString()
        };
      }
      return b;
    });
    wx.setStorageSync('bookings', updatedBookings);
    
    this.setData({ 
      showReview: false, 
      'booking.rating': this.data.rating,
      'booking.comment': this.data.comment,
      rating: 0, 
      comment: '' 
    });
    
    wx.showToast({
      title: '评价成功',
      icon: 'success'
    });
  },

  goBack() {
    wx.navigateBack();
  },

  goToConsult() {
    wx.switchTab({
      url: '/pages/consult/consult'
    });
  }
});