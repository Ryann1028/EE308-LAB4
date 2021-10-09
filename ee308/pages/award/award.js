// pages/award/award.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModalStatus: false,
    list: [
      {
        id: 0,
        name : "        ",
        introduce: "                点击查看奖项 ",
        src: '../../image/状元.png',
        showModalStatus: false,
        catalog: [
          { section: "1. 现金666" },
          { section: "2. 现金666" },
          { section: "3. 现金666" },
          { section: "4. 现金666" },
        ]
      },
      {
        id: 1,
        name: "",
        introduce: "                点击查看奖项 ",
        src: '../../image/对堂.png',
        showModalStatus: false,
        catalog: [
          { section: "1. 特仑苏" },
        ]
      },
      {
        id: 2,
        name: "",
        introduce: "                点击查看奖项 ",
        src: '../../image/三红.png',
        showModalStatus: false,
        catalog: [
          { section: "1. 自嗨锅" },
          { section: "2. 牛肉干" },
          { section: "3. 坚果" },
        ]
      },
      {
        id: 3,
        name: "",
        introduce: "                点击查看奖项 ",
        src: '../../image/四进.png',
        showModalStatus: false,
        catalog: [
          { section: "1. 椰子" },
          { section: "2. 乐事薯片芝士棒" },
          { section: "3. 水果糖" },
        ]
      },
      {
        id: 4,
        name: "",
        introduce: "                点击查看奖项 ",
        src: '../../image/二举.png',
        showModalStatus: false,
        catalog: [
          { section: "1. 可爱多" },
          { section: "2. 好丽友" },
          { section: "3. 费列罗" },
          { section: "4. 巧乐兹" },
        ]
      },
      {
        id: 5,
        name: "",
        introduce: "                点击查看奖项 ",
        src: '../../image/一秀.png',
        showModalStatus: false,
        catalog: [
          { section: "1. 纸巾" },
          { section: "2. 面板" },
          { section: "3. 旺仔牛奶" },
          { section: "4. 柠檬茶" },
        ]
      },
    ]
  
  },

  /**
   * 自己添加的 powerDrawer
   */
  powerDrawer: function (e) {
    console.log("clicked");

    var currentStatu = e.currentTarget.dataset.statu;
    var index = e.currentTarget.id;

    // 关闭
    if (currentStatu == 'close') {
      this.data.list[index].showModalStatus = false;
      this.setData({
        showModalStatus: false,
        list: this.data.list,
      });
    }

    // 显示
    if (currentStatu == 'open') {
      this.data.list[index].showModalStatus = true;
      this.setData({
        showModalStatus: true,
        list: this.data.list,
      });
    }
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
  
  },

  
})