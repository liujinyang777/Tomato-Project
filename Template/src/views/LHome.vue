<template>
  <div class="l_max">
    <l-top>
      <p slot="left">
        <img class="logo" src="/切图/logo.png" alt="" />
      </p>
    </l-top>
    <div class="swp">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item> </van-swipe-item>
        <van-swipe-item> </van-swipe-item>
        <van-swipe-item> </van-swipe-item>
      </van-swipe>
    </div>
    <div class="l_nav">
      <div class="wrap">
        <div class="inner">
          <div class="son">
            <i class="iconfont icon-case"></i>
            <p>装修方案</p>
          </div>
        </div>
        <div class="inner">
          <div class="son">
            <i class="iconfont icon-pics"></i>
            <p>效果图</p>
          </div>
        </div>
        <div class="inner">
          <div class="son">
            <i class="iconfont icon-designer"></i>
            <p>设计师</p>
          </div>
        </div>
        <div class="inner">
          <div class="son">
            <i class="iconfont icon-construction-site"></i>
            <p>装修工地</p>
          </div>
        </div>
        <div class="inner">
          <div class="son">
            <i class="iconfont icon-decorate"></i>
            <p>装修攻略</p>
          </div>
        </div>
        <div class="inner">
          <div class="son">
            <i class="iconfont icon-bank"></i>
            <p>装修货款</p>
          </div>
        </div>
        <div class="inner">
          <div class="son">
            <i class="iconfont icon-pencle"></i>
            <p>免费预约</p>
          </div>
        </div>
        <div class="inner">
          <div class="son">
            <i class="iconfont icon-ten"></i>
            <p>十秒报价</p>
          </div>
        </div>
      </div>
    </div>
    <div class="gray"></div>
    <div class="cont1">
      <div class="top">
        <div class="le1"><b>|</b></div>
        <div class="le2">全屋装修</div>
        <div class="le3">包设计、包主材、包水电、包施工</div>
      </div>
      <div class="moddle">
        <div class="pic">
          <img class="ig" src="/切图/img1.jpg" alt="" />
        </div>
      </div>
      <div class="bottom">
        <div class="inner">
          <div class="lef1">
            <i class="iconfont icon-zero"> </i> 0增项，标准施工
          </div>
          <div class="lef2">
            <i class="iconfont icon-protection-fill"> </i> 杜绝项目外包
          </div>
          <div class="lef3"><i class="iconfont icon-price"> </i> 装修货款</div>
        </div>
      </div>
    </div>
    <div class="gray"></div>
    <div class="cont1">
      <div class="top">
        <div class="le1"><b>|</b></div>
        <div class="le2">装修预约</div>
        <div class="le3">免费上门量房，设计方案满意为止</div>
      </div>
      <div class="apply">
        <div class="inner">
          <input class="inp" placeholder="小区" type="text" />
          <input class="inp" placeholder="手机号" type="text" />
          <input class="inp" placeholder="建筑面积" type="text" />
          <div class="inp">立即申请</div>
        </div>
      </div>
    </div>
    <div class="gray" style="margin:.36rem 0"></div>
    <div class="cont1">
      <div class="top">
        <div class="le1"><b>|</b></div>
        <div class="le2">设计师</div>
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

<style lang="scss" >
.logo {
  width: 130%;
}
.l_max {
  width: 100%;
  .swp {
    width: 100%;
    .van-swipe-item:nth-child(1) {
      width: 100%;
      height: 3rem;
      background: url(/切图/banner1.jpg) no-repeat center;
      background-size: 170%;
      background-position: -5rem -1rem;
    }
    .van-swipe-item:nth-child(2) {
      width: 100%;
      height: 3rem;
      background: url(/切图/banner2.jpg) no-repeat center;
      background-size: 170%;
      background-position: -5rem -1rem;
    }
    .van-swipe-item:nth-child(3) {
      width: 100%;
      height: 3rem;
      background: url(/切图/banner3.jpg) no-repeat center;
      background-size: 170%;
      background-position: -5rem -1rem;
    }
  }
}
.l_nav {
  width: 100%;
  .wrap {
    width: 95%;
    margin: 0.2rem auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .inner {
      width: 20%;
      margin-top: 0.2rem;
      margin-left: 0.01rem;
      height: 2rem;
      text-align: center;
      .son {
        width: 90%;
        height: 1.2rem;
        background-color: #39c894;
        border-radius: 50%;
        text-align: center;
      }
    }
    .inner:nth-child(2) {
      .son {
        background-color: #feb505;
      }
    }
    .inner:nth-child(3) {
      .son {
        background-color: #eed215;
      }
    }
    .inner:nth-child(4) {
      .son {
        background-color: #00b2b2;
      }
    }
    .inner:nth-child(5) {
      .son {
        background-color: #1b9af7;
      }
    }
    .inner:nth-child(6) {
      .son {
        background-color: #7b72e9;
      }
    }
    .inner:nth-child(7) {
      .son {
        background-color: #ff4351;
      }
    }
    .inner:nth-child(8) {
      .son {
        background-color: #fe8864;
      }
    }
    .iconfont {
      line-height: 1.2rem;
      font-size: 0.8rem;
      color: white;
    }
    p {
      margin-top: 0.2rem;
      font-size: 0.3rem;
    }
  }
}
.gray {
  width: 100%;
  height: 0.18rem;
  background-color: rgba(204, 204, 204, 0.404);
}
.cont1 {
  width: 100%;
  .top {
    width: 95%;
    margin: 0.32rem auto;
    display: flex;
    align-items: baseline;
    .le1 {
      color: #39c894;
      height: 0.42rem;
      font-size: 0.5rem;
    }
    .le2 {
      margin-left: 0.15rem;
      font-size: 0.36rem;
    }
    .le3 {
      margin-left: 0.15rem;
      font-size: 0.24rem;
      color: #999;
    }
  }
  .moddle {
    width: 100%;
    .pic {
      width: 95%;
      margin: 0 auto;
      .ig {
        width: 100%;
      }
    }
  }
  .bottom {
    width: 100%;
    .inner {
      width: 95%;
      margin: 0.36rem auto;
      display: flex;
      align-items: center;
      font-size: 0.28rem;
      .lef1 {
        display: flex;
      }
      .lef2 {
        margin: 0 0.4rem;
        display: flex;
      }
      .lef3 {
        display: flex;
      }
      i {
        margin-right: 0.1rem;
        color: #39c894;
        font-size: 0.36rem;
      }
    }
  }
}
.cont1 {
  width: 100%;
  .apply {
    width: 100%;
    .inner {
      width: 100%;
      display: flex;
      flex-direction: column;
      height: 4rem;
      justify-content: space-around;
      .inp {
        width: 80%;
        padding-left: 0.2rem;
        margin: 0 auto;
        height: 0.7rem;
        font-size: 0.28rem;
        color: #cacaca;
        outline: none;
      }
      .inp:nth-child(4){
        background-color: #feb505;
        color: white;
        font-size: .36rem;
        text-align: center;
        line-height: 0.7rem;
      }
    }
  }
}
</style>