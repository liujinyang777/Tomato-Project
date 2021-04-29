<template>
      
  <div class="">
    <div id="xrp_box">
      <ul>
        <li>户型<i class="iconfont icon-down"></i></li>
        <span>|</span>
        <li>区域<i class="iconfont icon-down"></i></li>
        <span>|</span>
        <li>风格<i class="iconfont icon-down"></i></li>
        <span>|</span>
        <li>
          <i class="iconfont icon-search"></i>
        </li>
      </ul>
      <div class="box-botoom">
        <div>
          <img src="/切图/xrp_list/1.jpg" alt="" />
          <p>欧美文化的抽象美感</p>
          <ul>
            <li>混搭</li>
            <li>三室</li>
            <li>1100元/㎡</li>
          </ul>
        </div>
        <div>
          <img src="/切图/xrp_list/2.jpg" alt="" />
          <p>欧美文化的抽象美感</p>
          <ul>
            <li>混搭</li>
            <li>三室</li>
            <li>1100元/㎡</li>
          </ul>
        </div>
        <div>
          <img src="/切图/xrp_list/1.jpg" alt="" />
          <p>欧美文化的抽象美感</p>
          <ul>
            <li>混搭</li>
            <li>三室</li>
            <li>1100元/㎡</li>
          </ul>
        </div>
        <div>
          <img src="/切图/xrp_list/2.jpg" alt="" />
          <p>欧美文化的抽象美感</p>
          <ul>
            <li>混搭</li>
            <li>三室</li>
            <li>1100元/㎡</li>
          </ul>
        </div>
        <div>
          <img src="/切图/xrp_list/1.jpg" alt="" />
          <p>欧美文化的抽象美感</p>
          <ul>
            <li>混搭</li>
            <li>三室</li>
            <li>1100元/㎡</li>
          </ul>
        </div>
        <div>
          <img src="/切图/xrp_list/2.jpg" alt="" />
          <p>欧美文化的抽象美感</p>
          <ul>
            <li>混搭</li>
            <li>三室</li>
            <li>1100元/㎡</li>
          </ul>
        </div>
        <footer class="bom">
          <div class="left">上一页</div>
          <div class="cent">2/30</div>
          <div class="right">下一页</div>
        </footer>
        <nav class="cent">
          房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐
          + 个性化定制服务。
        </nav>
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
#xrp_box {
  .zzc {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    img {
      width: 70%;
    }
    div{
      background-color: #feb505;
      border-radius: 15px;
      font-size: 0.3rem;
      padding: 0.1rem;
      color: #fff;
      font-weight: 700;
    }
  }
  background-color: #eee;
  .foot {
    background-color: #fff;
    margin-top: 0.32rem;
    padding-top: 0.2rem;
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
  .icon-hot-line {
    color: #39c894;
  }
  .cent {
    font-size: 0.35rem;
    line-height: 0.5rem;
    color: #666666;
    background: #fff;
  }
  .bom {
    margin: 0 !important;
    display: flex;
    justify-content: space-around;
    width: 7.2rem !important;
    margin: 0 auto;
    font-size: 0.36rem;
    text-align: center;
    margin: 0 auto !important;
    .left {
      color: #fff;
      margin: 0;
      flex: 1;
      background-color: #39c894;
    }
    .right {
      color: #fff;
      margin: 0;
      flex: 1;
      background-color: #39c894;
    }
    .cent {
      margin: 0;
      flex: 1;
    }
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
  .box-botoom {
    background-color: #f4f4f4;
    overflow: hidden;
    padding-top: 0.12rem;
    div {
      margin-left: 0.12rem;
      margin-bottom: 0.12rem;
      float: left;
      width: 3.5rem;
      border: 1px solid #eaeaea;
      background: #eaeaea;
      img {
        width: 100%;
        height: 2.35rem;
        vertical-align: top;
      }
      ul {
        height: 0.2rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 0.2rem;
        color: #999;
        margin-bottom: 0.25rem;
        border: 0;
      }
      p {
        font-size: 0.36rem;
        color: #000;
        padding-top: 0.25rem;
        padding-bottom: 0.2rem;
      }
    }
  }
}
</style>
