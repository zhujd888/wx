// components/my-head.js
Component({

  options: {
    //------从页面传递样式给组件--------
    // 默认isolated,隔离apply-shared页面影响组件，shared
    // styleIsolation: "apply-shared"
    
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:Array,
      value:[]
    },
    see:String

  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0

  },

  /**
   * 组件的方法列表，实现组件的方法，写在methods里。
   */
  methods: {
    selectTab1:function(e){
      console.log(e);
      // 发送的事件名字起名叫abc，那边监听的就是abc事件，bind:abc="方法名"
      const index=e.currentTarget.dataset.index;
      var currentIndex;
      //点击事件由组件传递到页面
      this.setData({ currentIndex:index});
      console.log("++++++++"+this.data.currentIndex);
      this.triggerEvent('abc',{index:index},{})

    }

  }
})
