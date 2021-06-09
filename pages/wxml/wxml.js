// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:"你好，小程序",
    firstname:"kobe",
    lastname:"bryant",
    age:17,
    nowTime:new Date().toLocaleString(),
    isActive:false,
    isShow:false,
    score:45,
    movies:['星际穿越','盗梦空间','大话西游'],
    nums:[
      [1,2,4,7],
      [12,31,27,89],
      [110,899,234,564]
    ],
    letters:['a','b','c']
  },
  handleSwitchColor(){
    this.setData({
      isActive:!this.data.isActive
    })
  },
  handleSwitchShow(){
    this.setData({
      isShow:!this.data.isShow
    })
  },
  handleIncrement(){
    this.setData({
      score:this.data.score+10
    })
  },
  handleSubtraction(){
    this.setData({
      score:this.data.score-10
    })
  },
  numberToFixed(value){
    return value.toFixed(2)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(()=>{
      this.setData({
        nowTime:new Date().toLocaleString()
      })
    },1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})