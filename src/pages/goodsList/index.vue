<template>
  <div class="goods-warp">
    <h3>商品列表</h3>
    <GoodsList :goodInfo="item" v-for="item in goodsList" :key="item.id" @changeBrandModal="changeActive" :active="isActive"></GoodsList>
    <a href="/pages/index/main" class="home">去往首页</a>
  </div>
</template>

<script>
// Use Vuex
import store from './store'
import GoodsList from '@/components/goodsList'

export default {
  components: {
    GoodsList
  },
  computed: {
    goodsListTitle () {
      return store.state.goodsListTitle
    },
    goodsList () {
      return store.state.goodsList
    },
    isActive () {
      return store.state.isActive
    }
  },
  mounted: function () {
    this.getGoodsList()
  },
  methods: {
    getGoodsList () {
      store.dispatch('getGoodsListAction')
    },
    changeActive () {
      store.dispatch('changeActiveAction')
    }
  }
}

</script>

<style>
.goods-warp {
  text-align: center;
  margin-top: 10rpx;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}

</style>
