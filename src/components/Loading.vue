<template>
  <div class="loading">
    <img width="24" height="24" src="./loading.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: "正在加载..."
    }
  }
};
</script>
<style scoped lang="less" rel="stylesheet/stylus">
.loading {
  position: relative;
  width: 100%;
  text-align: center;
  img {
    position: absolute;
    bottom: 0;
    margin: 0 auto;
  }
  .desc {
    line-height: 20px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
  }
}
</style>
