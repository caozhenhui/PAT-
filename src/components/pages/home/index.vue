<template>
    <div class="home-box">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in bannerLists" :key="item.id"> 
                <img :src="item.src" width="100%">
            </mt-swipe-item>
        </mt-swipe>
        <div class="title-box">
            <div></div>
            <h3>折扣专区</h3>
        </div>
        <hot/>
        <div class="title-box">
            <div></div>
            <h3>品牌馆</h3>
        </div>
        <brand/>
        <div class="title-box">
            <div></div>
            <h3>热门新品</h3>
        </div>
        <new-product/>
        <footer>更多新品敬请期待~</footer>
    </div>
</template>

<script>
import Hot from './Hot';
import Brand from './Brand';
import NewProduct from './NewProduct';

export default {
    name:'Home',
    data () {
        return {
            bannerLists:[
                {id:0, src:'/static/imgs/banner1.jpg'},
                {id:1, src:'/static/imgs/banner2.jpg'},
                {id:2, src:'/static/imgs/banner3.jpg'}
            ]
        }
    },
    components:{
        Hot,
        Brand,
        NewProduct
    }
}
</script>

<style lang="scss" scoped>
    .home-box{
        margin-top: 55px;
        .mint-swipe {
            height: 1.32rem;
            background: #ccc;
        }
        footer {
            text-align: center;
            color: #666666;
            height: 30px;
            line-height: 30px;
            margin:10px 0 65px 0;
        }
    }
</style>
