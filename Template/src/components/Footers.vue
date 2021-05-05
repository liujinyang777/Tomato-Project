<template>
      
  <div class="fot">
    <nav class="cent">
      房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐
      + 个性化定制服务。
    </nav>
    <div class="foot">
      <div>
        <p>
          <i class="iconfont icon-hot-line"></i>
          <span>服务热线：400——9977——658</span>
        </p>
        <ul>
          <li class="bg">触屏版</li>
          <li>电脑版</li>
          <li>关于我们</li>
          <li>联系我们</li>
        </ul>
      </div>
    </div>
    <div class="zzc">
      <img src="/切图/quoten_bottom.png" alt="" />
      <div>免费获取报价</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
.fot{
}
.cent {
  font-size: 0.35rem;
  line-height: 0.5rem;
  color: #666666;
  background: #fff;
}
ul {
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
  height: 1rem;
  font-size: 0.36rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  li {
    color: #000;
  }
  .iconfont {
    font-size: 0.36rem;
  }
  .icon-down {
    font-size: 0.25rem;
    color: #999;
  }
  .icon-search {
    color: #39c894;
  }
  span {
    color: #f4f4f4;
  }
}
.zzc {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  img {
    width: 70%;
  }
  div {
    background-color: #feb505;
    border-radius: 15px;
    font-size: 0.3rem;
    padding: 0.1rem;
    color: #fff;
    font-weight: 700;
  }
}
.foot {
  div {
    p {
      font-size: 0.38rem;
      text-align: center;
    }
    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .bg {
        color: #39c894;
      }
    }
  }
}
</style>
