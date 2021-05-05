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
      <footers />
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
.hh {
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
