<template>
      
  <div class="">
    <lTop>
      <p slot="left">
        <img src="/切图/logo.png" alt="" class="logo" />
      </p>
      <p slot="middle">效果图</p>
    </lTop>
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
      
      </div>
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
.logo {
  width: 130%;
}
#xrp_box {
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
