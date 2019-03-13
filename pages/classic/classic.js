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
    classic:null
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //数据更新
    classicModel.getLatest((res)=>{
      this.setData({
        classic:res
      })
      console.log(this.data)
    })
  },
  
  onLike: function (event) {
    console.log(event)
    let behavior = event.detail.behavior
    likeModel.like(behavior, this.data.classic.id, this.data.classic.type)
  },


})