<template>
  <li class="common_gs_li">
    <div class="common_gs_img">
      <span class="good_img_wrapper"><img class="good_img" :src="goodInfo.goodImg"></span>
      <span v-if="goodInfo.goodsTagList.activity != '' " class="activity_img_wrapper"><img class="activity" :src="goodInfo.goodsTagList.activity"></span>
      <span class="good_stock_wrapper"><img class="good_stock" :src="goodInfo.goodsTagList.goodStock"></span>
    </div>
    <div class="common_gs_detail">
      <div class="good_desc">
          <span class="is_direct" v-if="!!goodInfo.isDirect">直发</span>
          {{goodInfo.goodName}}
        </div>
      <span class="more_icon" @click="toggleBrandModal"><img class="more_icon_img" src="http://mjs.xiaomei360.com/img/icons_new/more.png"></span>
      <div class="good_promotions">
        <span class="discount" v-if="goodInfo.discount != '' ">{{goodInfo.discount}}</span>
        <span class="taocan"  v-if="goodInfo.promotions.taocan != '' ">
          <span class="taocan_icon">套餐</span>
          <span class="taocan_text">{{goodInfo.promotions.taocan}}</span>
        </span>
        <span class="manjian"  v-if="goodInfo.promotions.manjian != '' ">
          <span class="manjian_icon">满减</span>
          <span class="manjian_text">{{goodInfo.promotions.manjian}}</span>
        </span>
        <span class="manzeng"  v-if="goodInfo.promotions.manzeng != '' ">
          <span class="manzeng_icon">满赠</span>
          <span class="manzeng_text">{{goodInfo.promotions.manzeng}}</span>
        </span>
        <span class="juhuasuan" v-if="goodInfo.goodsTagList.juhuasuan">巨划算</span>
      </div>
      <div class="sale_info">
        <span class="profit_rate">利润率{{goodInfo.profitRate}}</span>
        <span class="sales">销量{{goodInfo.sales}}</span>
      </div>
      <div class="price_info">
        <span class="good_price">{{goodInfo.goodPrice}}</span>
        <span class="save">
          <span class="save_info">
            <span class="save_icon">省</span>
            <span class="save_price">¥{{goodInfo.savePrice}}</span>
          </span>
        </span>
        <span class="sale_out" v-if="!!goodInfo.saleOut">即将到货</span>
        <span class="purchase" v-else="!goodInfo.saleOut" @click="show"><img class="purchase_img" src="http://mjs.xiaomei360.com/img/icons_new/cart_icon.png"></span>
      </div>
    </div>
    <div :class="active ? 'brand_show' : 'brand_hide'" class="brand_info">
      <p class="brand_title">{{goodInfo.brandInfo.brandTitle}}</p>
      <p class="trench">市场渠道：<span>{{goodInfo.brandInfo.trench}}</span></p>
      <p class="goods_number">供应产品：<span>{{goodInfo.brandInfo.goodsNumber}}</span></p>
      <p class="price_range">指导定价：<span>{{goodInfo.brandInfo.priceRange}}</span></p>
    </div>
  </li>
</template>

<script>
export default {
  props: ['goodInfo', 'active'],
  methods: {
    toggleBrandModal: function () {
      console.log('hello')
      this.$emit('changeBrandModal')
    }
  }
}
</script>

<style>
.common_gs_img{
  display: inline-block;
  height: 280rpx;
  width: 210rpx;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
}
.good_img,.activity,.good_stock,.purchase_img,.more_icon_img{
  vertical-align:top;
  max-width:100%;
  max-height:100%;
}
.good_img_wrapper{
  display: inline-block;
  height: 200rpx;
  width: 200rpx;
  position: absolute;
  top: 40rpx;
  left: 10rpx;
}
.good_stock_wrapper{
  display: inline-block;
  height: 30rpx;
  width: 110rpx;
  position: absolute;
  bottom: 10rpx;
  left: 0;
}
.activity_img_wrapper{
  display: inline-block;
  height: 56rpx;
  width: 60rpx;
  position: absolute;
  left: 10rpx;
  top: 0rpx;
}
.common_gs_detail{
  width: 540rpx;
  position: absolute;
  top: 30rpx;
  left: 210rpx;
}
.good_desc{
  text-align: left;
  width: 442rpx;
  height: 80rpx;
  font-size: 30rpx;
  overflow: hidden;
}
.is_direct{
  display: inline-block;
  text-align: center;
  background: #f36;
  color: #fff;
  border-radius: 2rpx;
  font-size: 24rpx;
  padding: 1rpx 4rpx;
  height: 32rpx;
}
.more_icon{
  display: inline-block;
  width: 28rpx;
  height: 6rpx;
  position: absolute;
  top: 20rpx;
  right: 24rpx;
}
.good_promotions{
  height: 60rpx;
  width: 442rpx;
  text-align: left;
  overflow: hidden;
}
.discount{
  font-size: 22rpx;
  color: #fc8b06;
  border: 1rpx solid #fc8b06;
  border-radius: 2rpx;
  width: 54rpx;
  margin-right: 10rpx;
}
.juhuasuan{
  background: #fee442;
  color: #ff3950;
  height: 28rpx;
  display: inline-block;
  padding: 0;
  margin-right: 10rpx;
  font-size: 22rpx;
  padding: 2rpx 2rpx 0 0;
}
/*********套餐**********/
.taocan{
  border: solid 1rpx #fe3e86;
  height: 28rpx;
  display: inline-block;
  padding: 0;
  margin-right: 10rpx;
  font-size: 0;
}
.taocan_icon{
  text-align: center;
  font-size: 22rpx;
  color: #fff;
  background-color: #fe3e86;
  width: 52rpx;
  line-height: 28rpx;
  height: 28rpx;
  display: inline-block;
  padding: 2rpx 2rpx 0 0;
}
.taocan_text{
  font-size: 22rpx;
  height: 28rpx;
  line-height: 32rpx;
  color: #fe3e86;
  border-radius: 2rpx;
  vertical-align:top;
}
/*********满减**********/
.manjian{
  border: solid 1rpx #ff3950;
  height: 28rpx;
  display: inline-block;
  margin-right: 10rpx;
  padding: 0;
  font-size: 0;
}
.manjian_icon{
  text-align: center;
  font-size: 22rpx;
  color: #fff;
  background-color: #ff3950;
  width: 52rpx;
  line-height: 28rpx;
  height: 28rpx;
  display: inline-block;
  padding: 2rpx 2rpx 0 0;
}
.manjian_text{
  font-size: 22rpx;
  height: 28rpx;
  line-height: 32rpx;
  color: #ff3950;
  border-radius: 2rpx;
  vertical-align:top;
}
/*********满赠**********/
.manzeng{
  border: solid 1rpx  #ff3950;;
  height: 28rpx;
  display: inline-block;
  margin-right: 10rpx;
  padding: 0;
  font-size: 0;
}
.manzeng_icon{
  text-align: center;
  font-size: 22rpx;
  color: #fff;
  background-color: #ff3950;;
  width: 52rpx;
  line-height: 28rpx;
  height: 28rpx;
  display: inline-block;
  padding: 2rpx 2rpx 0 0;
}
.manzeng_text{
  font-size: 22rpx;
  height: 28rpx;
  line-height: 32rpx;
  color: #ff3950;
  border-radius: 2rpx;
  vertical-align:top;
}
.sale_info{
  height: 30rpx;
  width: 442rpx;
  text-align: left;
  font-size: 22rpx;
  color: #9ca7a7;
  vertical-align:center;
}
.sale_info > span {
  margin: 0 10rpx;
}
.price_info{
  position: absolute;
  text-align: left;
  bottom: -60rpx;
  left: 0;
  width: 510rpx;
  display:flex;
  align-items: center;
}
.good_price::before{
  content: "¥";
  display: inline-block;
  font-size: 24rpx;
  font-weight: bold;
  color: #ff3366;
  padding-right: 5rpx;
}
.good_price{
  display: inline-block;
  font-size: 36rpx;
  font-weight: bold;
  color: #ff3366;
}
.save{
  height: 28rpx;
  vertical-align: center;
  margin-left: 10rpx;
}
.save_info{
  display: inline-block;
  border: #fc8b06 1rpx solid;
  height: 26rpx;
}
.save_icon{
  display: inline-block;
  font-size: 22rpx;
  color: white;
  height: 26rpx;
  background-color: #fc8b06;
  vertical-align:top;
  text-align: center;
}
.save_price{
  display: inline-block;
  font-size: 22rpx;
  height: 26rpx;
  color: #fc8b06;
  vertical-align:top;
}
.sale_out{
  display: inline-block;
  background-color: #dce4e6;
  width: 115rpx;
  text-align: center;
  font-size: 24rpx;
  padding: 2rpx;
  position: absolute;
  right: 10rpx;
  top: 10rpx;
}
.purchase{
  display: inline-block;
  height: 30rpx;
  width: 30rpx;
  position: absolute;
  right: 10rpx;
  top: 10rpx;
}
.common_gs_li {
  height: 280rpx;
  widows: 750rpx;
  background: #fff;
  position: relative;
  /* margin-bottom:1rem; */
  border-bottom: 2rpx solid #e9f3f5;
  border: springgreen 1rpx solid;
}
.lacked{
  display: inline-block;
}
.brand_info{
  position: absolute;
  top:0;
  left:750rpx;
  height:200rpx;
  width:536rpx;
  text-align: left;
  border: olive 1rpx solid;
  background-color: #fff;
  transition: all 2s;
  -moz-transition: all 2s; /* Firefox 4 */
  -webkit-transition: all 2s; /* Safari 和 Chrome */
  -o-transition: all 2s; /* Opera */
}
.brand_title,.trench,.goods_number,.price_range{
  font-size: 24rpx;
  color: rgb(47,58,64);
  max-height: 30rpx;
  max-width: 442rpx;
  overflow: hidden;
}
.trench>span,.goods_number>span,.price_range>span{
  color:rgb(136,150,150);
}
.brand_show{
  position: absolute;
  top:0;
  left: 206rpx;
  height:200rpx;
  width:536rpx;
  text-align: left;
  border: olive 1rpx solid;
  background-color: #fff;
  transition: all 2s;
  -moz-transition: all 2s; /* Firefox 4 */
  -webkit-transition: all 2s; /* Safari 和 Chrome */
  -o-transition: all 2s; /* Opera */
}
.brand_hide{
  position: absolute;
  top:0;
  left:750rpx;
  height:200rpx;
  width:536rpx;
  text-align: left;
  border: olive 1rpx solid;
  background-color: #fff;
  transition: all 2s;
  -moz-transition: all 2s; /* Firefox 4 */
  -webkit-transition: all 2s; /* Safari 和 Chrome */
  -o-transition: all 2s; /* Opera */
}
</style>
