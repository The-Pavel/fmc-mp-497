// pages/landing/landing.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  goToStories: function() {
    wx.navigateTo({
      url: '/pages/stories/stories',
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log('loading...')
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */

  welcomeMessage: function () {
    console.log('hello dear user!')
  },

  onReady: function () {
    console.log('ready...')
    this.welcomeMessage()
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    console.log('showing...')
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {
    console.log('hiding page...')
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