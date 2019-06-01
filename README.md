# vue-mobile-demo

> 移动端练习(vue2 + mint-ui + axios)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## summary

>mint-ui 组件

#### js组件

1. toast 消息提示，支持文字配置、展示时长、位置等

2. Indicator  加载提示，支持loading icon 与 展示时长

3. loadmore 上拉刷新，下拉加载，支持自定义手指滑动阈值、加载提示文字 ?????

4. infiniteScroll 无限滚动(每次向下滚动超过阈值，就会无限加载)； 可以设置不触发无限滚动

ps: 个人感觉，电脑上，下拉加载，不是很灵敏~

5. MessageBox

* alert
* confirm
* prompt

6. actionsheet 下方滑入操作表

7. 轮播swipe

结构

mint-swipe
    |__mint-swipe-items-wrap
        |___mint-swipe-item
        |___mint-swipe-item

    |___mint-swipe-indicators

8. lazyLoad 通过v-lazy,注意：区分相对于window全局滚动，还是相对于 局部元素滚动

9. picker  滚动显示，省市联动，日期选择等

10. IndexList 字母表  左侧列表，与右侧字母表相对应

#### css组件

1. header固顶部

2. tab 底部切换 

3. ??  tab-container 是如何与 Navbar tabbar 相结合????

4. 头部 navbar切换

5. mt-cell 横向单元格

6. mt-cell-swipe 右滑删除

7. spinner 加载样式

8. search  搜索

9. badge 徽章
