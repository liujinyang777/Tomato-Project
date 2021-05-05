<template>
  <div class="l-bottom">
    <div class="wrap">
      <div class="top">
        <span> <i class="iconfont icon-tel"></i></span>
        <span>服务热线:17757169861</span>
      </div>
      <div class="bottom">
        <span>触屏版</span>
        <span>电脑版</span>
        <span>关于我们</span>
        <span>联系我们</span>
      </div>
    </div>
    <div class="wrb"  v-show="show">
      <div class="pic">
        <div class="le">
          <span><img @click="hide" src="/切图/common/icon_close.png" alt="" /></span>
        </div>
        <div class="mod">
          <img src="/切图/quoten_bottom.png" alt="" />
        </div>
        <div class="ri">
          <div class="ma">
            <div class="cont">免费获取报价</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:["show"],
    data(){
        return{
        }
    },
    methods:{
        hide(){
            this.$emit("show")
        }
    }
};
</script>

<style lang="scss">
.l-bottom {
  width: 100%;
  .wrap {
    width: 90%;
    margin: 0 auto;
    .top {
      width: 50%;
      margin: 0 auto;
      display: flex;
      span:nth-child(1) {
        font-size: 0.32rem;
        color: #39c894;
      }
      span:nth-child(2) {
        font-size: 0.28rem;
        color: #333;
      }
    }
    .bottom {
      width: 100%;
      margin: 0.2rem auto;
      display: flex;
      justify-content: space-between;
      font-size: 0.3rem;
      span:hover {
        color: #39c894;
      }
    }
  }
  .wrb {
    width: 100%;
    padding: 0.32rem auto;
    background-color: #000;
    background: rgba(0,0,0,0.8);
    position: relative;
    .pic {
      width: 100%;
      display: flex;
      font-size: 0.24rem;
      align-items: center;

      .le {
        width: 10%;
        position: absolute;
        left: 0;
        top: 0;
        span{
            img{
                width: .4rem;
                height: .4rem;
                color: #39c894;
            }
        }
      }
      .mod {
        width: 55%;
        margin: 0.32rem auto;

        img {
          width: 100%;
        }
      }
      .ri {
        width: 35%;
        color: white;
        line-height: 1.06rem;
        .ma {
          width: 2rem;
          margin: 0 auto;
          .cont {
            background-color: #feb605;
            width: 2rem;
            line-height: 0.5rem;
            border-radius: 20px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>