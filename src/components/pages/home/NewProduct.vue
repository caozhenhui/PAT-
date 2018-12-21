<template>
    <div class="new-product-box">
        <div class="product">
            <div class="img-box"></div>
            <h3>NYN ADNDA TEST</h3>
            <p>中新社纽约12月20日电纽约股市三大股指20日延续前一天大幅下跌的态势，道琼斯工业平均指数下跌超过460点，纳斯达克综合指数走势接近熊市。</p>
            <div class="more-box">
                <p class="more">了解更多</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'NewProduct'
}
</script>

<style lang="scss" scoped>
    .new-product-box{
        padding:0 0.1rem;

        .product{
            padding: 10px 10px;
            border-radius: 8px;
            border: 1px solid #ccc;

            .img-box{
                height: 1.8rem;
                margin: 0 auto;
                background: black;
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
