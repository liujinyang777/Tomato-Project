<template>
  <div class="lh13">
    <l-top>
      <p slot="left">
        <img class="logo" src="/切图/logo.png" alt="" />
      </p>
      <p slot="middle">装修方案</p>
    </l-top>

    <div class="max">
      <div class="top">
        <div class="im">
          <img src="/切图/case/case.jpg" alt="" />
        </div>
        <div class="und">
          <div class="le">
            <div class="tip">399元/平方半包装修套餐</div>
            <div class="bot">特惠：<span>可选300元/平方品牌主材包</span></div>
          </div>
          <div class="ri">
            <div class="shap">已预约295套</div>
          </div>
        </div>
      </div>
      <div class="top">
        <div class="im">
          <img src="/切图/case/case1.jpg" alt="" />
        </div>
        <div class="und">
          <div class="le">
            <div class="tip">699元/平方半包装修套餐</div>
            <div class="bot">正在发售：<span>全包套餐火爆预约中</span></div>
          </div>
          <div class="ri">
            <div class="shap">已预约221套</div>
          </div>
        </div>
      </div>
    </div>

    <div class="introduce">
      <div class="inner">
        房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐
        + 个性化定制服务。
      </div>
    </div>
    <div class="gray" style="margin: 0.36rem 0"></div>
    <l-bot @show="show" :show="shows"></l-bot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shows: true,
    };
  },
  mounted: {},
  methods: {
    show() {
      this.shows = !this.shows;
    },
  },
};
</script>

<style lang="scss">
.lh13 {
  .logo {
    width: 130%;
  }
  .gray {
    width: 100%;
    height: 0.18rem;
    background-color: rgba(204, 204, 204, 0.404);
  }
  .max {
    width: 100%;
    background-color: rgb(244, 244, 244);
    .top {
      width: 95%;
      margin: 0 auto .25rem;
      padding: 0.25rem 0;
      background-color: rgb(244, 244, 244);
      .im {
        width: 100%;
        img {
          width: 100%;
        }
      }
      .und {
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        font-size: 0.3rem;
        .le {
        padding-left: .2rem;
          width: 55%;
          .tip {
            font-size: 0.34rem;
          }
          .bot {
            color: #999;
            span {
              color: #ff4351;
            }
          }
        }
        .ri {
          width: 38%;
          .shap {
            height: 0.8rem;
            line-height: 0.8rem;
            font-size: 0.32rem;
            background-color: #ff4351;
            color: white;
            padding-left: 0.4rem;
            border-bottom-left-radius: 20px;
            border-top-left-radius: 20px;
          }
        }
      }
    }
  }

  .introduce {
    width: 100%;
    .inner {
      width: 95%;
      margin: 0 auto;
      font-size: 0.28rem;
      color: #333;
      text-indent: 2em;
    }
  }
}
</style>