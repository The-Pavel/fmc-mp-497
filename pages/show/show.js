// pages/show/show.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({id: options.id})
    
  },

  goToEdit: function() {
    wx.navigateTo({
      url: `/pages/post/post?id=${this.data.id}`,
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    const page = this
    wx.request({
      url: `http://localhost:3000/api/v1/stories/${this.data.id}`,
      success: function(res) {
        const story = res.data
        page.setData(story)
      }
    })
  },

  destroy: function() {
    const id = this.data.id

    wx.showModal({
      title: 'Are you really sure?',
      content: 'reallly really really sure?!?!?!',
      cancelText: 'Keep it',
      confirmText: 'Destroy',
      success (res) {
        if (res.confirm) {
          wx.request({
            url: `http://localhost:3000/api/v1/stories/${id}`,
            method: 'DELETE',
            success: function(res) {
              wx.reLaunch({
                url: '/pages/stories/stories',
              })
            }
          })
        }
      }
    })

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})