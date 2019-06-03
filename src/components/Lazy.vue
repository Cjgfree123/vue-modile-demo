<template>
  <div id="js-demo">
    <main>
      <ul id="refreshContainer" ref="refreshContainer">
        <li>111</li>
        <li>222</li>
        <li>333</li>
        <li>444</li>
        <li>555</li>...
      </ul>
      <p class="refreshText" ref="refreshText"></p>
    </main>
  </div>
</template>

<script>
export default {
  name: "LazyLoad",
  data() {
    return {};
  },
  mounted() {
    console.log(this)
    let that = this;
    window.addEventListener("scroll", function() {
      console.log(that)
      console.log(that.getScrollTop())
      console.log(that.getClientHeight())
      console.warn(that.getScrollHeight())
      if (
        that.getScrollTop() + that.getClientHeight() ==
        that.getScrollHeight()
      ) {
        console.log("ref",that.$refs)
        that.$refs.refreshText.innerHTML = "加载中...";
        that.throttle(that.fetchData);
      }
    });
  },
  methods: {
    // 获取当前滚动条的位置
    getScrollTop() {
      var scrollTop = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
      } else if (document.body) {
        scrollTop = document.body.scrollTop;
      }
      return scrollTop;
    },

    // 获取当前可视范围的高度
    getClientHeight() {
      var clientHeight = 0;
      if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(
          document.body.clientHeight,
          document.documentElement.clientHeight
        );
      } else {
        clientHeight = Math.max(
          document.body.clientHeight,
          document.documentElement.clientHeight
        );
      }
      return clientHeight;
    },

    // 获取文档完整的高度
    getScrollHeight() {
      return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
    },

    // 节流函数
    throttle(method, context) {
      clearTimeout(method.tId);
      method.tId = setTimeout(function() {
        method.call(context);
      }, 300);
    },

    fetchData() {
      let that = this;
      setTimeout(function() {
        that.$refs.refreshContainer.insertAdjacentHTML("beforeend", "<li>new add...</li>");
      }, 1000);
    }
  }
};
</script>

<style lang="less" scoped>
li{
  height: 200px;
  border-bottom: 1px solid #ccc;
}
</style>