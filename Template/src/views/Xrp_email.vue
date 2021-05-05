<template>
      
  <div class="">
    <div class="xrp_ema">
      <lTop>
        <p slot="left">
          <img src="/切图/logo.png" alt="" class="logo" />
        </p>
        <p slot="middle">业主评价</p>
      </lTop>

      <ul>
        <li>
          <div>
            <p><i class="iconfont icon-user"></i> <span>x*p</span></p>

            <p>2016-05-19</p>
          </div>
          <p class="con">这篇文章很有用，正在装修，刚好可以用来参考一下</p>
        </li>
        <li>
          <div>
            <p><i class="iconfont icon-user"></i> <span>x*p</span></p>

            <p>2016-05-19</p>
          </div>
          <p class="con">这篇文章很有用，正在装修，刚好可以用来参考一下</p>
        </li>
        <li>
          <div>
            <p><i class="iconfont icon-user"></i> <span>x*p</span></p>

            <p>2016-05-19</p>
          </div>
          <p class="con">这篇文章很有用，正在装修，刚好可以用来参考一下</p>
        </li>
        <li>
          <div>
            <p><i class="iconfont icon-user"></i> <span>x*p</span></p>

            <p>2016-05-19</p>
          </div>
          <p class="con">这篇文章很有用，正在装修，刚好可以用来参考一下</p>
        </li>
        <li>
          <div>
            <p><i class="iconfont icon-user"></i> <span>x*p</span></p>

            <p>2016-05-19</p>
          </div>
          <p class="con">这篇文章很有用，正在装修，刚好可以用来参考一下</p>
        </li>
        <footer class="bom">
          <div class="left">上一页</div>
          <div class="cent">2/30</div>
          <div class="right">下一页</div>
        </footer>
      </ul>
      <footers></footers>
      <div class="pl" is-link @click="showPopup">
        <i class="iconfont icon-pencle"></i>
      </div>
      <van-popup
        v-model="show"
        position="bottom"
        close-icon-position="top-left"
        :style="{ height: '30%' }"
      >
        <div v-if="$store.state.user != ''">
          <ul class="uus">
            <li @click="scoo" class="bta">取消</li>
            <li>写评论</li>
            <li class="btb">发送</li>
          </ul>
          <form action="">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              style="
                resize: none;
                width: 95%;
                height: 2.4rem;
                margin: 0 auto;
                font-size: 0.4rem;
                background-color: #eaeaea;
                white-space: nowrap;
                overflow: none;
              "
            ></textarea>
          </form>
        </div>
        <div class="hie" v-else>
          <p>
            请先<span class="ces"> 登录 </span>或<span class="ces">
              注册成为房先森用户
            </span>
          </p>
          <p>登陆后才可以评论</p>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
import footers from "@/components/Footers.vue";
export default {
  data() {
    return { show: false };
  },
  mounted() {},
  methods: {
    showPopup() {
      this.show = true;
    },
    scoo() {
      this.show = false;
    },
  },
  components: {
    footers,
  },
};
</script>

<style lang="scss">
.hie {
  margin-top: 0.5rem;
  font-size: 0.4rem;
  p {
    text-align: center;
    span {
      color: #39c894;
    }
  }
}
.xrp_ema {
  .uus {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .bta {
    background-color: #cccccc;
    width: 1.32rem;
    height: 0.2rem;
    font-size: 0.28rem;
    text-align: center;
    line-height: 0.3rem;
    border-radius: 0.13rem;
  }
  .btb {
    background-color: #39c894;
    width: 1.32rem;
    height: 0.2rem;
    font-size: 0.28rem;
    text-align: center;
    line-height: 0.3rem;
    border-radius: 0.13rem;
  }
  .pl {
    background-color: #1b9af7;
    width: 0.94rem;
    height: 0.94rem;
    font-size: 0.46rem;
    color: #fff;
    text-align: center;
    line-height: 0.94rem;
    border-radius: 50%;
    position: fixed;
    bottom: 3.5rem;
    right: 0.3rem;
  }
  .logo {
    width: 130%;
  }
  ul {
    margin: 0.2rem 0 0.2rem 0;
    li {
      padding-bottom: 0.3rem;
      padding-top: 0.15rem;
      border-top: 1px solid #eaeaea;
      border-bottom: 1px solid #eaeaea;

      font-size: 0.4rem;
      .con {
        font-size: 0.5rem;
      }
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.15rem;
        margin: 0.35rem 0;
        span {
          color: #39c894;
        }
      }
    }

    .bom {
      margin: 0 !important;
      display: flex;
      justify-content: space-around;
      width: 7.2rem !important;
      font-size: 0.36rem;
      text-align: center;
      margin: 0.3rem auto !important;
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
  }
}

</style>
