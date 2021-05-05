<template>
  <div class="">
      <l-top>
      <p slot="left">
        <img class="logo" src="/切图/logo.png" alt="" />
      </p>
      <p slot="middle">房先森aaaass</p>
    </l-top>
    <div class="box-top">
      <div class="img">
        <img src="/切图/设计师/2.jpg" alt="" />
      </div>
      <div class="nei">
        <span class="b">699全包精装套餐</span>
        <span>价格:&emsp;<span class="red">￥699元/m²</span> </span>
        <span>已预约:&emsp;<span class="b">221套</span></span>
        <span>正式发售:&emsp;<span class="red">全包套餐火爆预约中</span></span>
      </div>
    </div>
    <div class="text">
      <div>精装全包套餐,包设计/包主材/包监理。采用知名辅材,一线主材,</div>
      <div>工厂直供F2模式</div>
    </div>
    <div class="zx_xian"></div>
    <div class="nav">
      <div>套餐详情</div>
      <div>配置清单</div>
      <div>施工工艺</div>
      <div>服务流程</div>
    </div>
    <div class="mg" >
        <img src="/切图/设计师/9.jpg" alt="">
    </div>
     <div class="mg" >
        <img src="/切图/设计师/9.jpg" alt="">
    </div>
     <div class="mg" >
        <img src="/切图/设计师/9.jpg" alt="">
    </div>
     <p class="aa">
        房先森互联网家装有别于传统装修公司与其他装修中介平台以自营模式整合设计师与项目经理，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐+个性化定制服务。
      </p>
      <div class="zx_xian"></div>

      <div class="zx_buttom">
        <i class="iconfont">&#xe607;</i>服务热线:400-9977-658
      </div>
      <div class="zx_buttom2">
        <span>触屏版</span>
        <span>电脑版</span>
        <span>关于我们</span>
        <span>联系我们</span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .zx_xian {
  height: 0.2rem;
  background-color: #eaeaea;
}
.aa {
  font-size: 0.28rem;
  height: 1.7rem;
}
.zx_buttom2 {
  width: 100%;
  height: 1.1rem;
  font-size: 0.35rem;
  line-height: 1.1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.zx_xian {
  height: 0.2rem;
  background-color: #eaeaea;
}
.zx_buttom {
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.3rem;
  text-align: center;
}
.b {
  font-weight: 600;
}
.zx_buttom {
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.3rem;
  text-align: center;
}
.logo {
  width: 130%;
}
.box-top {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.nei {
  font-size: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.img {
  img {
    width: 3.5rem;
    height: 2.5rem;
  }
}
.red {
  color: red;
}
.text {
  font-size: 0.27rem;
  div {
    padding-top: 0.2rem;
  }
}
.nav {
  display: flex;
  div {
    width: 25%;
    height: 0.8rem;
    font-size: 0.35rem;
    text-align: center;
    line-height: 0.8rem;
    border-bottom: 0.01rem solid #999;
  }
}
.add {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  button {
    font-size: 0.35rem;
    border-radius: 0.5rem;
    border: 1px solid #39c984;
    background-color: #ffffff;
    color: #39c984;
  }
}
.mg{
    width: 100%;
    height:3.5rem;
    img{
        width: 100%;
        height: 100%;
    }
}
</style>