<template>
    <div class="cart-box">
        <p v-if="lists.length === 0" class="no-list">
            还没有任何订单
        </p>
        <ul>
            <li v-for="(item , index) in lists" 
                :key="index"                
                @touchstart='touchStart($event,index)' 
                @touchend='touchEnd'>
                <div :class="[item.isShow?'margin':'', 'name']">
                    <input type="checkbox" 
                        @click="handlerCheck(index)"
                        :checked="item.checkbox"/>
                    {{item.name}}
                </div>
                <div class="number">数量:{{item.number}}</div>
                <div class="price">￥{{item.number*item.price}}</div>
                <div class="btn-box">
                    <button class="num-btn btn" @click="add(index)">+</button>
                    <button class="num-btn btn" @click="jian(index)">-</button>
                </div>
                <mt-button class="btn-delele" type="danger" v-if="item.isShow" @click.stop="handlerDelete(index)">删除</mt-button>
            </li>
        </ul>
        <div class="call-boss">
            <p>
                全选：
                <input type="checkbox" class="total-check" :checked="totalCheck" @click="handlerOnoff"/>
                总价：￥{{totalPrice}}
            </p>
            <mt-button class="btn phone" @click="callBoss">
            联系店主
            </mt-button>
        </div>
    </div>
</template>

<script>
let x = 0;
let time = 0;
let interval = '';
let num = 0;

export default {
    name:'Cart',
    data () {
        return {
            lists:[],
            totalCheck:false
        }
    },
    created () {
        if ( localStorage.patCart) {
            let lists = JSON.parse(localStorage.patCart);
            lists.forEach( item => {
                item.isShow = false;
                if (item.checkbox === undefined) {
                    item.checkbox = false;
                }
            });
            this.lists = lists;
        }
    },
    watch:{
        lists: {
            handler () {
                if (this.lists.length === 0) {
                    this.totalCheck = false;
                    return false;
                };
                for (let i = 0; i < this.lists.length; i++) {
                    if (!this.lists[i].checkbox) {
                        this.totalCheck = false;
                        break;
                    }else {
                        this.totalCheck = true;
                    }
                }
            },
            deep:true
        }
    },
    computed:{
        totalPrice () {
            let totalPrice = 0;
            this.lists.forEach ( item => {
                if (item.checkbox) {
                    totalPrice += item.number*item.price
                }
            })
            return totalPrice
        }
    },
    methods:{
        add (index) {
            this.lists[index].number ++;
            localStorage.patCart = JSON.stringify(this.lists);
        },
        jian (index) {
            this.lists[index].number --;
            if (this.lists[index].number === 0 ) {
                this.lists.splice(index, 1)
            };
            localStorage.patCart = JSON.stringify(this.lists);
        },
        touchStart (e, index) {
            x = e.changedTouches[0].clientX;
            num = index;
            interval = setInterval( () => {
                time++;
            }, 100);
        },
        touchEnd (e) {
            clearInterval(interval);
            if (x - e.changedTouches[0].clientX > 50 && time <= 5) {//左滑
                this.lists[num].isShow = true;
            } else if (e.changedTouches[0].clientX - x >= 50 && time <= 5) {
                this.lists[num].isShow = false;
            };
            time = 0;
        },
        handlerDelete (index) {
            this.lists.splice(index,1);
            localStorage.patCart = JSON.stringify(this.lists);
        },
        callBoss () {
            this.$message({
                title:'联系店主',
                message:'Tel:18301436778(同微信)',
                confirmButtonText:'拨打',
                showCancelButton:true
            }).then(action => {
                if (action === 'confirm') {
                    let a = document.createElement('a');
                    a.setAttribute('href', 'tel:18301436778');
                    a.click()
                }   
            });
        },
        handlerCheck (index) {
            this.lists[index].checkbox = !this.lists[index].checkbox;
            localStorage.patCart = JSON.stringify(this.lists);
        },
        handlerOnoff () {
            if (this.totalCheck) {
                this.lists.forEach( item => {
                    item.checkbox = false;
                })
            }else {
                this.lists.forEach( item => {
                    item.checkbox = true;
                })
            }
            localStorage.patCart = JSON.stringify(this.lists);
        }
    }
}
</script>

<style lang="scss" scoped>
    .cart-box{
        margin: 55px 0 110px 0;

        .no-list {
            text-align: center;
            padding-top: 120px;
            color: #666666;
        }

        ul{
            padding: 0 0.1rem;

            li{
                height: 60px;
                display: flex;
                display: -ms-flex;
                display: -webkit-flex;
                display: -moz-flex;
                justify-content: space-between;
                -webkit-justify-content: space-between;
                -ms-justify-content: space-between;
                -moz-justify-content: space-between;
                align-items: center;
                -moz-align-items: center;
                -webkit-align-items: center;
                -ms-align-items: center;

                .name {
                    width: 1.5rem;
                    transition: margin 0.5s;
                    -webkit-transition: margin 0.5s;
                    -ms-transition: margin 0.5s;
                    -moz-transition: margin 0.5s;
                    &.margin {
                        margin-left: -100px;
                    }
                }
                .number {
                    width: 0.5rem;
                    text-align: left;
                }
                .price {
                    width: 0.6rem;
                }
                .btn-box{
                    width: 0.8rem;
                    max-width: 120px;
                    display: flex;
                    justify-content: space-around;
                }
            }
        }

        .call-boss{
            bottom: 55px;

            .total-check{
                margin-right: 0.3rem;
            }

            p{  
                width: 2.7rem;  
                float: left;
                line-height: 55px;
                font-size: 18px;
            }
        }
    }
    .num-btn{
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 0;
        margin: 0;
        padding: 0;
        color: #fff;
        font-size: 22px;
    }
    .btn-delele{
        white-space: nowrap;
    }
</style>
