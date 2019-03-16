import {
  BookModel
} from '../../models/book.js'

const bookModel = new BookModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [],
    searching: false,
    more: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    bookModel.getHotList()
      .then(res=>{
        this.setData({
          books:res
        })
      })
    //promise的错误用法
    // const hotList = bookModel.getHotList()
    // hotList.then((res) => {
    //   console.log(res)
    //   bookModel.getMyBookCount()
    //     .then((res) => {
    //       console.log(res)
    //       bookModel.getMyBookCount()
    //         .then((res) => {
    //           console.log(res)
    //         })
    //     })
    // })



    //promise是一个对象
    // promise第一步
    // 异步代码 写在promise的函数中 第二步
    //const promise=new Promise((resolve,reject)=>{
    // pending  fulfilled rejected
    // 进行中     已成功    已失败
    //wx.getSystemInfo({
    //success: (res)=> {
    //resolve(res)
    //resolve把状态进行中改变成已成功
    //}, 
    //fail: (error) => {
    //reject(error)
    //reject把状态进行中改变成已失败
    //},
    //})
    //})

    //promise.then((res)=>{
    //已成功的回调函数 顺序不能颠倒
    //console.log(res)
    //},(error)=>{
    //已失败的回调函数 顺序不能颠倒
    //console.log(error)
    //})

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})