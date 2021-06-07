// miniprogram/pages/home/home.js
// getApp()获取App()产生的实例对象
// const app=getApp()
// const name=app.globalData.name;
// const age=app.globalData.age;

Page({
  // ---------- 2.初始化数据 -------------------------
  data:{
    message:'哈哈哈哈',
    list:[]
  },
  
  // ----------- 1.监听页面的生命周期函数 ----------------
  // 页面被加载出来
  onLoad(){
     console.log('onLoad');
     wx.request({
       url: 'http://152.136.185.210:7878/api/m5/recommend',
       success:(res)=>{
        console.log(res);
        const data=res.data.data.list
        this.setData({
          list:data
        })
       }
     })
  },
  // 页面初次渲染完成时
  onReady(){
    console.log('onReady');
  },
  // 页面显示出来时
  onShow(){
    console.log('onShow');
  },
  // 当页面隐藏起来时
  onHide(){
    console.log('onHide');
  },
  onUnload(){
    console.log('onUnload');
  },

  // ---------3.监听wxml中相关的一些时间----------
  handleGetUserInfo(event){
    // console.log(event);
  },

  handleViewClick(){
    console.log('哈哈哈哈被点击了');
  },

  // --------- 4.监听其它时间----------
  // 监听页面的滚动
  onPageScroll(obj){
    console.log(obj);
  },
  // 监听页面滚动到底部
  onReachBottom(){
    console.log('页面滚动到底部了');
  },
  onPullDownRefresh(){
    console.log('下拉刷新的事件');
  }
})