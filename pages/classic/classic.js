// pages/classic/classic.js
import { ClassicModel} from '../../models/classic.js'
import { LikeModel} from '../../models/like.js'
let classicModel=new ClassicModel()
let likeModel = new LikeModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic:null,
    latest:true,
    first:false,
    likeCount:0,
    likeStatus:false
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //数据更新
    classicModel.getLatest((res)=>{
      //this._getLikeStatus(res.id,res.type)
      this.setData({
        // ...res   es6扩展运算符 把res展开
        classic:res,
        likeCount:res.fav_nums,
        likeStatus:res.like_status
      })
    })
  },
  
  onLike: function (event) {
    console.log(event)
    let behavior = event.detail.behavior
    likeModel.like(behavior, this.data.classic.id, this.data.classic.type)
  },
  onNext:function(){
    this._updateClassic('next')
  },
  onPrevious: function () {
    this._updateClassic('previous')
  },
  _updateClassic: function (nextOrPrevious){
    let index = this.data.classic.index
    classicModel.getClassic(index, nextOrPrevious,(res) => {
      // console.log(res)
      this._getLikeStatus(res.id,res.type)
      this.setData({
        classic: res,
        latest: classicModel.isLatest(res.index),
        first: classicModel.isFirst(res.index)
      })
    })
  },

  _getLikeStatus:function(artID,category){
    likeModel.getClassLikeStatus(artID, category,(res)=>{
      this.setData({
        likeCount:res.fav_nums,
        likeStatus:res.like_status
      })
    })
  }
})