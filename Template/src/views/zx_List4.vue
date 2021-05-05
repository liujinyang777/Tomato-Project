<template>
  <div>
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
    <div class="add">
      <button>厨房</button>
      <button>卫生间</button>
      <button>阳台</button>
      <button>卧室/客房/书房</button>
      <button>客厅</button>
    </div>
    <table width="100%" height="300px" border="1px" >
      <tr>
        <td>项目</td>
        <td>品牌</td>
        <td>详细说明</td>
      </tr>
      <tr>
        <td>地柜</td>
        <td>定制橱柜</td>
        <td>3延米以内</td>
      </tr>
      <tr>
        <td>吊柜</td>
        <td>定制橱柜</td>
        <td>1.2延米内、阻尼抽屉2个(单色石英台面)</td>
      </tr>
      <tr>
        <td>台面</td>
        <td>石英石</td>
        <td>3延以内</td>
      </tr>
      <tr>
        <td>套装门/移门及五金</td>
        <td>樱花</td>
        <td>
          含门以及门安装、三维可调试合页、门锁、门吸,厨房空间提供一樘门,平面和插框造型,仅限原始户型空间配们。若为移门,只限3平方米
        </td>
      </tr>
      <tr>
        <td>门套</td>
        <td>双诺</td>
        <td>定制</td>
      </tr>
      <tr>
        <td>小地砖</td>
        <td>马可波罗瓷砖</td>
        <td>地砖满铺</td>
      </tr>
    </table>
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
export default {};
</script>

<style lang="scss" scoped>
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
td{
    font-size: 0.3rem;
    width: 20px;
    // text-align: center;
}
.b {
  font-weight: 600;
}
.zx_xian {
  height: 0.2rem;
  background-color: #eaeaea;
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
</style>