<template>
      
  <div class="">
    <div class="hh">
      <lTop>
        <p slot="left">
          <img src="/切图/logo.png" alt="" class="logo" />
        </p>
        <p slot="middle">装修流程</p>
      </lTop>
      <div id="xrp_home">
        <img src="/切图/process/process1.jpg" alt="" />
        <img src="/切图/process/process2.jpg" alt="" />
        <img src="/切图/process/process3.png" alt="" />
        <img src="/切图/process/process4.jpg" alt="" />
      </div>
      <div class="coent">
        房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐
        + 个性化定制服务。
      </div>
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

<style lang='scss'>
.hh {
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
    background-color: #fff;
    margin-top: 0.32rem;
    padding-top: 0.2rem;
    div {
      p {
        font-size: 0.38rem;
        text-align: center;
        margin: 0.15rem 0;
      }
      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 0.4rem;
        .bg {
          color: #39c894;
        }
      }
    }
  }
  .coent {
    background-color: #fff;
    font-size: 0.4rem;
    text-indent: 2em;
    margin: 0.2rem 0;
  }
  .logo {
    width: 130%;
  }

  #xrp_home {
    img {
      width: 100%;
      vertical-align: top;
    }
  }
}
</style>
