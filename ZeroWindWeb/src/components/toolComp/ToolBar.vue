<script lang="ts" setup>
import { ref } from 'vue'
//图标获取
const icon = new URL("../../assets/icon/tools-fill.svg", import.meta.url).href

//是否显示列表
const show = ref(false)
const showChange = () => {
    show.value = !show.value
}

const tools = [
    {
        name: "网站收藏",
        url:"/web"
    },
    {
        name: "SQL生成器",
        url: "/sqlCreator"
    },
    {
        name: "后台管理",
        url: "/sys"
    }
]
</script>


<template>
    <div class="toolbar">
        <button class="toolbar-btn" @click="showChange">
            <img :src="icon" alt="工具箱" />
        </button>
        <transition name="fade">
            <ul class="toolbar-list" v-show="show">
                <router-link v-for="(it,i) in tools" :key="i" :to="it.url" @click="showChange">
                    <li>{{it.name}}</li>
                </router-link>
            </ul>
        </transition>
    </div>
</template>


<style lang="scss" scoped>
.toolbar{
    position: fixed;
    top: 0;
    right: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px) {
        &-btn-text{
            display: none;
        }
    }
    &-list{
        a{
            text-decoration: none;
        }
        li{
            display: flex;
            justify-content: center;
            align-items: center;
            list-style: none;
            padding: 10px 25px;
            margin: 5px;
            font-size: 14px;
            font-weight: bold;
            color: #000;
            border-radius: 5px;
            box-shadow: 0 0 5px #ddd;
            background-color: #fff;
            transition: all .25s;
            &:hover {
                box-shadow: 0 0 10px #aaa;
            }
            @media screen and (max-width: 768px) {
                padding: 10px 15px;
                margin: 5px;
            }
        }
    }
    &-btn{
        cursor: pointer;
        display: flex;
        justify-content: right;
        align-items: center;
        width: 125px;
        padding: 10px 25px;
        margin: 5px;
        font-size: 16px;
        font-weight: bold;
        border-radius: 5px;
        border: none;
        background-color: #fff;
        transition: all .25s;
        img{
            width: 22px;
        }
        @media screen and (max-width: 768px) {
            padding: 10px 15px;
            margin: 5px;
            
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: all .5s ease;
}

.fade-enter-from,
.fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>