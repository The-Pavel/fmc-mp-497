// pages/stories/stories.js
Page({

  /**
   * Page initial data
   */
  data: {
    loggedIn: false
  },

  logIn: function() {
    // reading local data
    console.log(this.data)

    // getting global data and setting it to local data
    this.setData({userInfo: getApp().globalData.userInfo})

    // writing (creating/updating) local data
    this.setData({loggedIn: true})
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const base_url = 'http://localhost:3000/api/v1/'
    const page = this
    wx.request({
      url: base_url + 'stories',
      success: function(response) {
        const stories = response.data.stories
        page.setData({ stories })
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    
  },
  // defining our own function that changes page local data
  changeData: function() {
    this.setData({
      title: "OOP",
      content: "Orange Tree was tooouuuugh! But we loved it!"
    })
  },

  goToShow: function(event) {
    const id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/show/show?id=${id}`,
    })
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