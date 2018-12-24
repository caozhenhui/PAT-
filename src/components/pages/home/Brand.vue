<template>
    <div class="brand-box">
        <div class="brand" v-for="item in lists" :key="item.id">
            <img v-lazy="item.img" width="100%" height="100%"/>
            <div class="title">
                <h3>{{item.name}}</h3>
                <h3 v-if="item.lastname">{{item.lastname}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Brand',
    data () {
        return {
            lists:[
                {
                    id:0, 
                    name:'NYX彩妆', 
                    img:'../../../../static/imgs/pic1.jpg'
                },
                {
                    id:1, 
                    name:'MAC', 
                    img:'../../../../static/imgs/pic2.jpg'
                },
                {
                    id:2, 
                    name:'MK', 
                    img:'../../../../static/imgs/pic3.jpg'
                },
                {
                    id:3, 
                    name:'COACH', 
                    img:'../../../../static/imgs/pic4.jpg'
                },
                {
                    id:4, 
                    name:'维多利亚',
                    lastname:'的秘密' ,
                    img:'../../../../static/imgs/pic5.jpg'
                },
                {
                    id:5, 
                    name:'科颜氏', 
                    img:'../../../../static/imgs/pic6.jpg'
                },
                {
                    id:6, 
                    name:'雅诗兰黛', 
                    img:'../../../../static/imgs/pic7.jpg'
                },
                {
                    id:7, 
                    name:'Dior迪奥', 
                    img:'../../../../static/imgs/pic8.jpg'
                },
                {
                    id:8, 
                    name:'Lancome', 
                    lastname:'兰蔻',
                    img:'../../../../static/imgs/pic9.jpg'
                },
                {
                    id:9, 
                    name:'其它商品', 
                    img:'../../../../static/imgs/pic10.jpg'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .brand-box{
        overflow:auto;
        padding:0 0.1rem;

        .brand{
            float: left;
            width: 1.72rem;
            height: 1.24rem;
            margin-bottom: 10px;
            background: #ccc;
            position: relative;

            img[lazy=loading] {
                background: #ccc;
            }

            .title{
                width: 100%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                
                h3{
                    color: #fff;
                    font-weight: 400;
                    text-align: center;
                }
            }
        }

        .brand:nth-last-child(2), .brand:last-child{
            margin-bottom: 0px;
        }

        .brand:nth-child(2n) {
            float: right;
        }
    }
</style>
