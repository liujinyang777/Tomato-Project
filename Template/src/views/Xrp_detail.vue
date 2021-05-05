<template>
      
  <div class="">
    <div class="xrp_detail">
      <lTop>
        <p slot="left">
          <i class="iconfont icon-back"></i>
        </p>
        <p slot="middle">欧美文化抽象美感</p>
      </lTop>

      <div class="come">
        <img src="/切图/xrp_list/11.jpg" alt="" class="ims" />
        <div class="xian"></div>
        <div class="qs">
          <span class="qiu"></span>
          <span class="qiu"></span>
          <span class="qiu"></span>
          <span class="qiu"></span>
          <span class="qiu"></span>
          <span class="qiu"></span>
        </div>
        <ul class="us">
          <li>(2)</li>
          <li>(1)</li>
          <li>(2)</li>
          <li>(3)</li>
          <li>(1)</li>
          <li>(4)</li>
        </ul>
      </div>
      <p class="gets">
        房先森互联网家具定制有别于别的装饰公司，一自营模式整合设计师和项目经理，杜绝项目外包通过环保，提供装修套餐+个性化定制服务。
      </p>

      <footer>
        <div>
          <i class="iconfont icon-design"></i>
          <span class="contt">预约设计</span>
        </div>
      </footer>
      <footers></footers>
    </div>

  </div>
</template>

<script>
import footers from "@/components/Footers.vue";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {
    footers,
  },
};
</script>

<style lang="scss">
.xrp_detail {
  position: relative;
  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(234, 85, 95, 0.8);
    opacity: 0.4;
    div {
      text-align: center;
      .icon-design {
        font-size: 1rem;
      }
      .contt {
        font-size: 1rem;
      }
    }
  }
  .gets {
    color: #ccc;
    line-height: 0.6rem;
    font-size: 0.3rem;
    border-bottom: 8px solid #ececec;
    border-top: 10px solid #ececec;
  }
  .come {
    position: relative;
    z-index: -1;
    .us {
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 1000;
      color: #38ca94;
      font-size: 0.3rem;
    }
    .qs {
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 999;
    }
    .qiu {
      display: inline-block;
      width: 0.45rem;
      height: 0.45rem;
      border-radius: 50%;
      border: 2px solid #38ca94;
      background-color: black;
      z-index: 999;
    }
    .xian {
      position: absolute;
      bottom: 30px;
      height: 2px;
      background-color: #38ca94;
      width: 100%;
      z-index: 998;
    }
    background-color: black;
    .ims {
      width: 7.5rem;
      padding: 0.3rem 0;
    }
  }
}
</style>
