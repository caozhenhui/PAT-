<template>
    <div class="hot-box">
        <div class="hot-item" v-for="item in hotLists" :key="item.id">
            <div class="img-box">
                <img :src="item.src" width="100%" height="100%"/>
            </div>
            <p class="name">{{item.name}}</p>
            <div class="price-box">
                <span class="price">￥{{item.price}}</span>
                <i class="discount" v-if="item.discount">{{item.discount}}off</i>
            </div>
            <div class="btn-box">
                <mt-button size="small" class="btn"
                @click="toDetail(item.name, item.price)">
                    立即购买
                </mt-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Hot',
    data () {
        return {
            hotLists:[
                {
                    id: 0,
                    name: 'NYX经典眼影',
                    price: 186,
                    src: '../../../../static/imgs/sale1.jpg',
                    discount:'70%'
                },
                {
                    id: 1,
                    name: 'MK新款背包',
                    price: 986,
                    src: '../../../../static/imgs/sale2.jpg',
                    discount:'90%'
                },
                {
                    id: 2,
                    name: 'MAC子弹头',
                    price: 146,
                    src: '../../../../static/imgs/sale3.jpg',
                    discount:'70%'
                }
            ]
        }
    },
    methods:{
        toDetail (name, price) {
            this.$router.push({
                name:'Detail',
                params: {
                    detailName: name,
                    price: price
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .hot-box{
        width: 100%;
        padding:0 0.1rem;
        display: flex;
        display: -webkit-flex;
        display: -ms-flex;
        display: -moz-flex;
        justify-content: space-between;
        -webkit-justify-content: space-between;
        -ms-justify-content: space-between;
        -moz-justify-content: space-between;

        .hot-item{
            width: 1.1rem;
            background: #fff;
            border: 1px solid #ccc;
            padding: 0 0.1rem 0.1rem;

            .img-box{
                height: 0.76rem;
                margin: 8px auto 0;
            }

            .name{
                height: 20px;
                line-height: 20px;
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
            }
            .price-box{
                height: 20px;
                line-height: 20px;
                .price{
                    color: #a85fb5;
                    font-weight: 700;
                }
                .discount{
                    font-size: 12px;
                    color: #888;
                }
            }
            .btn-box{
                margin-top: 4px;
                text-align: center;
            }
        }
    }
</style>
