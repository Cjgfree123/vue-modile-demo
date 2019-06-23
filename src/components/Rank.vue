<template>
  <div class="loading">
    <h1>榜单页面</h1>
    <ul>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
        <li>999</li>
    </ul>
    <div v-show="!bookList.length" class="loading-container">
      <loading></loading>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Loading from "./Loading";
export default {
  data() {
    return {
      bookList: []
    };
  },
  components: {
    Loading
  }
};
</script>
<style scoped lang="less" rel="stylesheet/stylus">
</style>
