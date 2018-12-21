<template>
    <div class="detail-box">
        <div class="img-box">
            <img src=''>
        </div>
        <h3>TEST TEST TEST TEST</h3>
        <div class="data-box">
            <p>快递：0.00</p>
            <p>月销：10</p>
            <p>货源地：北美</p>
        </div>
        <div class="line"></div>
        <div class="serve">
            服务：正品保证
        </div>
        <div class="line"></div>
        <div class="number">
            数量：
            <button class="num-btn btn"
            @click="add">+</button>
            {{number}}
            <button class="num-btn btn"
            @click="jian" v-if="number >= 1">-</button>
        </div>
        <div class="baby">
            {{'—  宝贝详情  —'}}
        </div>
        <buy-cart
            :setCart="setCart"
        ></buy-cart>
    </div>
</template>

<script>
import BuyCart from './BuyCart';

export default {
    name:'Detail',
    data () {
        return {
            number: 0,
            name:'TEST洋洋3'
        }
    },
    props:['detailName'],
    components:{
        BuyCart
    },
    methods:{
        add () {
            this.number++ ;
        },
        jian () {
            this.number-- ;
        },
        setCart () {
            if (this.number === 0) {
                this.$message({
                    title:'订购',
                    message:'数量不能为0',
                });
                return false;
            };
            let obj = {
                number: this.number,
                name: this.name
            };
            let list = JSON.parse(localStorage.getItem('patCart'));
            if ( list && list.length > 0) {
                for (let i = 0; i< list.length; i++) {
                    if (obj.name === list[i].name) {
                        list[i].number += obj.number;
                        break;
                    } else {
                        list.unshift(obj);
                        break;
                    }
                }
                localStorage.patCart = JSON.stringify(list);
            } else {
                list = [];
                list.unshift(obj);
                localStorage.patCart = JSON.stringify(list);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .detail-box{
        margin-top: 55px;

        .img-box{
            height: 2.2rem;
            background: #ccc;
        }

        h3{
            padding: 0 0.1rem;
            height: 30px;
            line-height: 30px;
            color: #333;
        }

        .data-box{
            padding: 0 0.1rem;
            height: 30px;
            line-height: 30px;
            color: #666666;
            display: flex;
            display: -webkit-flex;
            display: -ms-flex;
            display: -moz-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            -ms-justify-content: space-between;
            -moz-justify-content: space-between;
        }

        .serve {
            padding: 0 0.1rem;
            color: #666666;
            height: 30px;
            line-height: 30px;
        }

        .baby{
            color: #666666;
            text-align: center;
            height: 50px;
            line-height: 50px;
            background: #efefef;
        }

        .number{
            padding: 0 0.1rem;
            color: #666666;
            height: 30px;
            line-height: 30px;

            .num-btn{
                width: 24px;
                height: 20px;
                line-height: 20px;
                border: none;
                border-radius: 0;
                margin: 0;
                padding: 0;
                color: #fff;
            }
        }
    }
</style>
