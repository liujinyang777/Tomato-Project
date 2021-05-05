<template>
  <div class="l_max">
    <div class="head">
      <div class="le">
        <slot name="left"> </slot>
      </div>
      <div class="middle">
        <slot name="middle"></slot>
      </div>
      <div class="ri">
        <div class="user">
          <i class="iconfont icon-user"></i>
          <div class="ic_ri">我的</div>
        </div>
        <div class="nav">
          <i class="iconfont icon-nav"></i>
          <div class="ic_ri">导航</div>
        </div>
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

<style lang="scss">
.l_max {
  width: 100%;
  .head {
    width: 95%;
    margin: 0.1rem auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 1rem;
    .ic_ri {
      font-size: 0.3rem;
    }
    .iconfont {
      font-size: 0.5rem;
    }
    .le {
      width: 25%;
    }
    .middle {
      width: 50%;
      font-size: 0.4rem;
      text-align: center;
    }
    .ri {
      width: 25%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 0rem;
      color: #999999;
      text-align: center;
      // .user {
      //   // font-size: .9rem;
      // }
      .nav {
        margin-left: 0.2rem;
        // font-size: .66rem;
      }
    }
  }
}
</style>