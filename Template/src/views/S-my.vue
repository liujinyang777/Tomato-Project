<template>
  <div>
    <lTop>
      <p slot="left">
        <img class="logo" src="/切图/logo.png" alt="" />
      </p>
      <p slot="middle">关于我们</p>
    </lTop>
    <div class="s-im">
      <img src="/house_info.jpg" alt="" />
    </div>

    <div class="s-qq">房先森简介</div>
    <div class="s-qw"></div>

    <div class="s-qq">
      <p>
        房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐
        + 个性化定制服务。
      </p>
    </div>

    <div class="s-tpp">
        <img src="/2.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang='scss' scoped>
.s-tpp {
    width: 100%;
    img {
        width: 100%;
    }
}
.s-qq {
  padding: 13px 0;
  width: 100%;
  p {
    text-indent: 2em;
    font-size: 16px;
  }
}
.s-qw {
  width: 100%;
  border: 1px solid #ccc;
}
.s-qq {
  width: 100%;
  text-align: center;
  font-size: 30px;
}
.s-im {
  width: 100%;
  img {
    width: 100%;
    height: 200px;
  }
}
.logo {
  width: 130%;
}
</style>
