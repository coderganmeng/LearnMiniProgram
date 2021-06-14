// pages/detail/detail.js
Page({

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
  },
  onUnload(){
    // 1.获取首页的页面对象
    // getCurrentPages当前所有栈的页面
    const pages=getCurrentPages()
    console.log(pages);
    const home=pages[pages.length-2]

    // 2.调用页面对象的setData

    home && home.setData({
      title:'呵呵呵'
    })
  },

  handleBackHome(){
    wx.navigateBack({
      delta:1
    })
  }

})