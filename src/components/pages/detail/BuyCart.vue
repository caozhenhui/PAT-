<template>
    <div class="call-boss">
        <mt-button class="btn phone" @click="callBoss">
           联系店主
        </mt-button>
        <mt-button class="btn" @click="setCart">加入订购车</mt-button>
    </div>
</template>

<script>
export default {
    name:'BuyCart',
    props:['setCart'],
    methods:{
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
        }
    }
}
</script>
