// pages/post/post.js
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
    if (options.id) {
      const id = options.id
      const page = this
      wx.request({
        url: `http://localhost:3000/api/v1/stories/${id}`,
        success: function(res) {
          const story = res.data
          page.setData(story)
        }
      })
    }
  },

  formSubmit: function(event) {
    // retrieving two inputs as an object from the form
    const story = event.detail.value
    // setting our own key (image key)
    story.image = "https://tse4-mm.cn.bing.net/th/id/OIP.7TDiuv0n4d7ibq7oMYetiQHaLH?pid=Api&w=640&h=960&rs=1"
    // this is checking if we are editing an existing story (id present) or creating new story (no id yet)
    if (this.data.id) {
      wx.request({
        url: `http://localhost:3000/api/v1/stories/${this.data.id}`,
        method: 'PUT',
        data: story,
        success: function(res) {
          wx.navigateBack({
            delta: 1,
          })
        }
      })
    } else {
      wx.request({
        url: 'http://localhost:3000/api/v1/stories',
        method: 'POST',
        data: story,
        success: function(res) {
          if (res.data.status == "success") {
            wx.showToast({
              title: 'Created!',
            })
            wx.reLaunch({
              url: '/pages/stories/stories',
            })
          }
        }
      })
    }
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