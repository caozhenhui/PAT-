<template>
    <div class="new-product-box">
        <div class="product" v-for="item in lists" :key="item.id">
            <div class="img-box">
                <img :src="item.url" width="100%" height="100%"/>
            </div>
            <h3>{{item.title}}</h3>
            <p>{{item.describe}}</p>
            <div class="more-box">
                <p class="more">了解更多</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'NewProduct',
    data () {
        return {
            lists:[
                { 
                    id:1, 
                    title:"Kirh's科颜氏新款红石榴精华保湿妆前乳", 
                    url:'../../../../static/imgs/new1.jpg',
                    describe:'萃取天然红石榴营养素，为肌肤注入年轻活力，抗氧化、防衰老。科颜氏所有产品原料都是纯天然提取，不含激素和刺激性成分。孕妇可以放心使用。', 
                    type:'kys'
                },
                { 
                    id:2, 
                    title:"NYX彩妆 SUGER HIGH 12色眼影盘", 
                    url:'../../../../static/imgs/new2.jpg', 
                    describe:'粉质细腻，堪比大牌的质量，易上色不飞粉，珠光和哑光结合，一盘可以用到地老天荒，2018夏季新款眼影盘。', 
                    type:'nyx'
                },
                { 
                    id:3, 
                    title:"MAC 子弹头see sheer水润西柚红", 
                    url:'../../../../static/imgs/new3.jpg', 
                    describe:'性价比超高的口红，味道很好闻，see sheer颜色非常温柔，滋润不起皮，适合搭配温柔系妆容，水润质地。', 
                    type:'mac'
                },
                { 
                    id:4, 
                    title:"MK 2018夏季新款单肩链条亮皮背包", 
                    url:'../../../../static/imgs/new4.jpg', 
                    describe:'亮蓝色和亮粉色，开启夏季清新活力，最新设计的logo配饰凸显了简洁的设计感，夏季少女必备。', 
                    type:'mk'
                },
                { 
                    id:5, 
                    title:"维密 夏季新款蕾丝舒适法式内衣", 
                    url:'../../../../static/imgs/new5.jpg', 
                    describe:'夏季新款蕾丝舒适法式内衣，解放双乳，轻薄透气', 
                    type:'wdly'
                },
                { 
                    id:6,
                    title:"Dior 烈焰黑金唇膏哑光传奇 #999 Matte", 
                    url:'../../../../static/imgs/new6.jpg', 
                    describe:'一支涂上想结婚的口红，迪奥999，必备口红色号，一生珍藏。', type:'dior'
                }
		    ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .new-product-box{
        padding:0 0.1rem;

        .product{
            padding: 10px 10px;
            border-radius: 8px;
            border: 1px solid #ccc;
            margin-bottom: 10px;

            .img-box{
                height: 1.22rem;
                margin: 0 auto;
                background: #ccc;
            }

            h3{
                text-align: center;
                height: 34px;
                line-height: 34px;
                color: #333;
            }
            p{
                text-indent: 2em;
                color: #666666;
            }
            .more-box{
                overflow: auto;
                .more{
                    color: #a85fb5;
                    float: right;
                    height: 20px;
                    line-height: 20px;
                }
            }
        }
    }
</style>
