// miniprogram/pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:['衣服','裤子','鞋子']
  },
  handleBtnClick(){
    console.log('按钮发生点击');
  },

  handleTouchStart(){
    console.log('触摸开始手势');
  },
  handleTouchMove(){
    console.log('触摸移动手势');
  },
  handleTouchEnd(){
    console.log('触摸结束手势');
  },
  handleTap(){
    console.log('轻点手势');
  },
  handleLongpress(){
    console.log('长按手势');
  },

  handleEventClick(event){
    console.log('---------',event);
  },

  handleEventEnd(event){
    console.log('+++++++++',event);
  },

  handleInner(event){
    console.log(event);
  },
  handleOuter(event){
    console.log(event);
  },

  handleItemClick(event){
    console.log(event);
    const item=event.currentTarget.dataset.item
    const index=event.currentTarget.dataset.index
    console.log(item,index);
  },

  //事件冒泡和事件捕获
  handleCaptrueView1(){
    console.log('handleCaptrueView1');
  },
  handleCaptrueView2(){
    console.log('handleCaptrueView2');
  },
  handleCaptrueView3(){
    console.log('handleCaptrueView3');
  },

  handleBindView1(){
    console.log('handleBindView1');
  },
  handleBindView2(){
    console.log('handleBindView2');
  },
  handleBindView3(){
    console.log('handleBindView3');
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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