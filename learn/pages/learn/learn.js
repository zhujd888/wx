// pages/learn/learn.js

// 导入网络请求工具包
import request from '../../service/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:["标题","精选","分类"],
    titleIndex:0

  },

  selectTab(e){
    console.log("---------");
    const index = e.detail.index
    if(!index){
       console.log("index为空，第一次进入页面，选择第一个。调用把样式传给第一栏")
       //把样式传过去，硬些的，方法不好。直接在组件里处理就好了，在这里是为了实验从页面把样式传过去。

       //----注意：从页面差异化传递样式，使不同的item显示不同，这样的精准控制，不可行，实验结束。
       //因为那个options:{}只能是整体上搞，item，这样的搞不了，整个组件都用页面给的样式，页面样式无法覆盖组件样式，故，另想办法，在组件内处理。
    }
    console.log(e.detail.index);

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    
//   this.get_data_origin();
// 工具类的调用
// request({
//   url:'http://baidu.com'   //这个里面数据组成options，变成一个对象，方便工具类里面调用
// })


  },

  get_data_origin(){
    // 1.简单的get请求，无参数。
    // wx.request({
    //   url: 'http://baidu.com',
    //   success:function(res){
    //     console.log(res);
    //   }
    // })

    //2.有参数的get请求
    //  wx.request({
    //    url: 'https://www.baidu.com/s?tn=request_27_pg&word=abc',
    //    success:function(res){
    //      console.log(res);
    //    }
    //  })

    //3.有参数的post请求
    // wx.request({
    //   url: 'https://www.baidu.com/s',
    //   method: 'post',
    //   data: {

    //     word: "abc"
    //   },
    //   success: function (res) {
    //     console.log(res);
    //   }
    // })


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