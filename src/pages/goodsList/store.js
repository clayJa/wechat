import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    goodsListTitle: 'This is the goods list page',
    isActive: false,
    goodsList: [
      {
        'goodId': 1,
        'goodImg': 'http://img.xiaomei360.com/goods-cover/122/2378/thumb-59a53dff2571d.jpg',
        'goodName': '美迪惠尔芦荟舒缓泡沫洁面芦荟舒缓泡沫洁面',
        'isDirect': true,
        'discount': '5.6折',
        'goodPrice': 26.3,
        'savePrice': 12.3,
        'profitRate': '60%~80%',
        'sales': '19963',
        'goodsTagList': {
          'activity': '',
          'goodStock': '    ',
          'juhuasuan': true
        },
        'promotions': {
          'taocan': '1:1送冻膜5ml'
        },
        'saleOut': false,
        'brandInfo': {
          'brandTitle': '自然乐园Nature Republic',
          'trench': '入驻妍丽',
          'goodsNumber': 11,
          'priceRange': '¥100-¥120'
        }
      }]
  },
  mutations: {
    GET_GOODS_LIST (state, payload) {
      // console.log(payload)
      state.goodsList = payload.goodsList
    },
    CHANGE_ACTIVE (state) {
      console.log(state)
      state.isActive = !state.isActive
    }
  },
  actions: {
    getGoodsListAction (context) {
      wx.request({
        url: 'https://easy-mock.com/mock/5ad86860c1196e47fdb233cc/xiaomei360/goods-list',
        success: function (res) {
          console.log(res.data)
          context.commit('GET_GOODS_LIST', {goodsList: res.data.data.goodsList})
        },
        fail: function (err) {
          console.log(err)
        }
      })
    },
    changeActiveAction (context) {
      context.commit('CHANGE_ACTIVE')
    }

  }

})

export default store

