<template>
  <div id="css-demo">
    <!-- 头部 -->
    <!-- <mt-header fixed title="固定在顶部"></mt-header> -->

    <!-- 底部tab -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">外卖</mt-tab-item>
      <mt-tab-item id="订单">订单</mt-tab-item>
      <mt-tab-item id="发现">发现</mt-tab-item>
      <mt-tab-item id="我的">我的</mt-tab-item>
    </mt-tabbar>

    <!-- 头部tab -->
    <mt-navbar v-model="selected" style="background:pink;">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>

    <!-- 横向单元格 -->
    <mt-cell title="标题文字" to="//github.com" is-link value="带链接"></mt-cell>

    <!-- 右滑删除 -->
    <mt-cell-swipe
      title="标题文字"
      :right="[
    {
      content: 'Delete',
      style: { background: 'red', color: '#fff' },
      handler: () => this.$messagebox('delete')
    }
  ]"
    ></mt-cell-swipe>

    <!-- 加载样式 -->
    <mt-spinner color="#26a2ff"></mt-spinner>
    <mt-spinner color="rgb(100, 100, 100)"></mt-spinner>
    <mt-spinner color="yellow"></mt-spinner>

    <!-- 搜索 -->
    <mt-search v-model="serachVal">
      <mt-cell v-for="(item,idx) in result" :title="item.title" :value="item.value" :key="idx"></mt-cell>
    </mt-search>

    <!-- 徽章 -->
    <mt-badge size="small">30</mt-badge>
  </div>
</template>

<script>
import {
  Header,
  TabContainer,
  TabContainerItem,
  Tabbar,
  TabItem,
  CellSwipe,
  Badge,
  Search
} from "mint-ui";
export default {
  name: "CssDemo",
  data() {
    return {
      active: "tab-container2", // id控制
      selected: "外卖",
      result: [
        {
          title: "结果",
          value: "xxx"
        }
      ],
      serachVal: "" // 搜索结果
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
#css-demo {
}
</style>