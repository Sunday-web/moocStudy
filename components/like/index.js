// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type:Boolean
      //value:false
      //默认值可以省略 默认false
    },
    count:{
      type:Number
      //value:0
      //默认值可以省略 默认0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // like:true,
    // count:9,
    yesSrc:'images/like.png',
    noSrc:'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(e){
      //自定义事件
      let like=this.properties.like
      let count = this.properties.count
      count=like?count-1:count+1
      this.setData({
        like: !like,
        count: count
      })
      //激活
      let behavior=this.properties.like?'like':'cancel'
      this.triggerEvent('like', { behavior: behavior},{})
    }
  }
})
