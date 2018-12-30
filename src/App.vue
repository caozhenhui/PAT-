<template>
    <div id="app">
        <mt-header fixed :title="title">
            <mt-button slot="left" icon="back" @click="handlerBack"></mt-button>
            <mt-button slot="right" icon="search"></mt-button>
        </mt-header>
        <router-view/>
        <mt-tabbar v-model="selected" fixed v-if="tabbarIsShow">
            <mt-tab-item :id="item.title" v-for="item in tabbarLists" :key="item.id">
                <img slot="icon" :src="item.src">
                {{item.title}}
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
            title:'PAT北美代购',
            tabbarIsShow: true,
            selected: '首页',
            historyNum: 0,
            tabbarLists:[
                {
                    id:0, 
                    title:'首页', 
                    src:'../static/imgs/home1.png'
                },
                {
                    id:1, 
                    title:'订购车',
                    src:'../static/imgs/cart1.png'
                },
                {
                    id:2, 
                    title:'我的',
                    src:'../static/imgs/user1.png'
                }
            ]
        }
    },
    created () {
        this.$router.beforeEach((to, from, next) => {
            switch (to.name) {
                case 'Home': 
                    this.tabbarIsShow = true;
                    this.selected = '首页'; break;
                case 'User': 
                    this.tabbarIsShow = true;
                    this.selected = '我的'; break;
                case 'Cart': 
                    this.tabbarIsShow = true;
                    this.selected = '订购车'; break;
                case 'Detail':
                    this.tabbarIsShow = false;
                default:break;
            };
            next();
        })
    },
    watch:{
        selected: {
            handler (val) {
                switch (val) {
                    case '首页': 
                        this.handlerTabbar(val); break;
                    case '订购车': 
                        this.handlerTabbar(val); break;
                    case '我的': 
                        this.handlerTabbar(val); break;
                    default: ; break;
                }
            },
            immediate:true
        }
    },
    methods:{
        handlerTabbar (title) {
            switch (title) {
                case '首页': 
                    this.tabbarLists[0].src = '../static/imgs/home2.png'; 
                    this.tabbarLists[1].src = '../static/imgs/cart1.png';
                    this.tabbarLists[2].src = '../static/imgs/user1.png';
                    this.$router.push({name: 'Home'});
                    break;
                case '订购车': 
                    this.tabbarLists[0].src = '../static/imgs/home1.png'; 
                    this.tabbarLists[1].src = '../static/imgs/cart2.png';
                    this.tabbarLists[2].src = '../static/imgs/user1.png';
                    this.$router.push({name: 'Cart'});
                    break;
                case '我的': 
                    this.tabbarLists[0].src = '../static/imgs/home1.png'; 
                    this.tabbarLists[1].src = '../static/imgs/cart1.png';
                    this.tabbarLists[2].src = '../static/imgs/user2.png';
                    this.$router.push({name: 'User'});
                    break; 
                default: break;                          
            }
        },
        handlerBack () {
            this.$router.back(-1);
        }
    }
}
</script>
<style lang="scss" scoped>
    .mint-header{
        height: 55px;
    }
    .mint-tab-item{
        color: #666666;
    }
</style>

