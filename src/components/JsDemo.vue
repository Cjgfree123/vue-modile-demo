<template>
  <div id="js-demo">
    <p>这是首页</p>
    <hr>
    <p>toast</p>
    <Button @click="showTip">展示toast</Button>
    <hr>
    <p>自定义文本和加载图标</p>
    <Button @click="showLoading">展示loading</Button>
    <hr>
    <p>加载更多</p>
    <mt-loadmore :top-method="loadTop" ref="loadmore">
      <ul>
        <li v-for="val in list" :key="val">{{ val }}</li>
      </ul>
    </mt-loadmore>
    <hr>
    <p>向下无限滚动</p>
    <!-- <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>-->
    <hr>
    <p>消息提示框</p>
    <Button @click="showMsg">展示消息</Button>
    <hr>
    <p>sheet(下方滑入)</p>
    <Button @click="fn">下方滑入</Button>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    <hr>
    <p>轮播</p>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="i in 10" :key="i">{{i}}</mt-swipe-item>
    </mt-swipe>
    <hr>
    <p>图片懒加载</p>
    <div id="container">
      <img v-lazy.container="ImgUrl" alt="大图片" class="big-pic">
    </div>
    <hr>
    <p>字母表</p>
    <mt-index-list :show-indicator="false">
      <mt-index-section index="A">
        <mt-cell title="Aaron"></mt-cell>
        <mt-cell title="Alden"></mt-cell>
        <mt-cell title="Austin"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>...
      <mt-index-section index="Z">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
import {
  Toast,
  Button,
  Indicator,
  Loadmore,
  InfiniteScroll,
  MessageBox,
  Actionsheet,
  Swipe,
  SwipeItem,
  Lazyload,
  IndexList,
  IndexSection
} from "mint-ui";
import ImgUrl from "../assets/1.jpg";
export default {
  name: "JsDemo",
  data() {
    return {
      list: [1, 2, 3, 4, 5],
      loading: false,
      actions: [
        {
          name: "ali",
          method: () => {
            alert("回调");
          }
        }
      ],
      sheetVisible: false,
      ImgUrl: ImgUrl
    };
  },
  methods: {
    showTip() {
      // Toast("提示信息");

      // Toast({
      //   message: "提示",
      //   position: "bottom",
      //   duration: 5000
      // });

      // Toast({
      //   message: "操作成功",
      //   iconClass: "icon icon-success"
      // });

      let instance = Toast("提示信息");
      setTimeout(() => {
        instance.close();
      }, 2000);
    },
    showLoading() {
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
    },
    loadTop() {
      console.log("....");
      this.$refs.loadmore.onTopLoaded();
    },
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        // 连续无限添加元素
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
      }, 2500);
    },
    showMsg() {
      MessageBox.prompt("请输入姓名").then(({ value, action }) => {
        if (!value) {
          MessageBox("提示", "不允许为空");
        } else {
          console.log(value, action); // value  confirm
          MessageBox("提示", "操作成功");
        }
      });
    },
    fn() {
      this.sheetVisible = true;
    }
  }
};
</script>

<style lang="less" scoped>
#js-demo {
  .mint-swipe {
    height: 200px;
    background: pink;
    .mint-swipe-item {
      line-height: 200px;
    }
  }
  .big-pic[lazy="loading"] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
}
</style>