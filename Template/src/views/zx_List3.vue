<template>
  <div class="">
    <l-top>
      <p slot="left">
        <img class="logo" src="/切图/logo.png" alt="" />
      </p>
      <p slot="middle">房先森</p>
    </l-top>
    <div class="zx_nei">
      <div>
        <span>观澜时代国际花园云邸5幢 </span>
        <span class="span3">泥木工程</span>
      </div>
      <div>
        <span>户型：<span class="span2">二室</span> </span>&emsp;&emsp;&emsp;
        <span>面积：<span class="span2">60-90m</span> </span>&emsp;&emsp;&emsp;
        <span>装修预算： <span class="span2">18万</span> </span>
      </div>
      <div>
        <span
          >工地概括:
          <span class="span2"
            >百万平米超级大盘，占据钱塘江北岸最美的江湾和湿地</span
          >
        </span>
      </div>
    </div>
    <div class="re">
      <div class="re-left">
        <i class="iconfont">&#xe62c;</i>
        <span>评论（10）</span>
      </div>
      <div class="re-right">
        <i class="iconfont">&#xe626;</i>
        <span>预约参观工地</span>
      </div>
    </div>
    <div class="box">
      <div class="box-top">
        <span>设计师：<span class="span1">吴飞柯</span></span>
        <span>项目经理：<span class="span2">王永龙</span></span>
      </div>
      <div class="box-nei">
        <span class="box-yuan"></span>
        <span></span>
        <button>2016-07-11</button>
        <button>泥土</button>
        <button>验收阶段</button>
      </div>
      <div class="box-img">
        <div class="box-text">泥木工程验收成功</div>
        <div class="img">
          <!-- <div> -->
          <img src="/切图/设计师/3.jpg" alt="" />
          <img src="/切图/设计师/4.jpg" alt="" />
          <img src="/切图/设计师/5.jpg" alt="" />
          <img src="/切图/设计师/6.jpg" alt="" />
          <img src="/切图/设计师/7.jpg" alt="" />
          <img src="/切图/设计师/8.jpg" alt="" />

          <!-- </div> -->
        </div>
      </div>
      <div class="box-nei">
        <span class="box-yuan"></span>
        <span></span>
        <button>2016-07-11</button>
        <button>泥土</button>
        <button>验收阶段</button>
      </div>
      <div class="box-img">
        <div class="box-text">泥木工程验收成功</div>
        <div class="img">
          <!-- <div> -->
          <img src="/切图/设计师/3.jpg" alt="" />
          <img src="/切图/设计师/4.jpg" alt="" />
          <img src="/切图/设计师/5.jpg" alt="" />
          <img src="/切图/设计师/6.jpg" alt="" />
          <img src="/切图/设计师/7.jpg" alt="" />
          <img src="/切图/设计师/8.jpg" alt="" />

          <!-- </div> -->
        </div>
      </div>
      <div class="box-nei">
        <span class="box-yuan"></span>
        <span></span>
        <button>2016-07-11</button>
        <button>泥土</button>
        <button>验收阶段</button>
      </div>
      <div class="box-img">
        <div class="box-text">泥木工程验收成功</div>
        <div class="img">
          <!-- <div> -->
          <img src="/切图/设计师/3.jpg" alt="" />
          <img src="/切图/设计师/4.jpg" alt="" />
          <img src="/切图/设计师/5.jpg" alt="" />
          <img src="/切图/设计师/6.jpg" alt="" />
          <img src="/切图/设计师/7.jpg" alt="" />
          <img src="/切图/设计师/8.jpg" alt="" />

          <!-- </div> -->
        </div>
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped >
.zx_buttom i {
  font-size: 0.4rem;
  color: #2bb281;
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
* {
  padding: 0rem;
  margin: 0rem;
}
.logo {
  width: 130%;
}
.zx_nei {
  div {
    line-height: 0.63rem;
    padding-left: 0.25rem;
  }
  span {
    font-size: 0.28rem;
    color: #000;
  }
  .span2 {
    font-size: 0.24rem;
    color: #999;
  }
  .span3 {
    background-color: #39c984;
    color: #ffffff;
  }
}
.re {
  display: flex;
  width: 100%;
  height: 0.7rem;
  font-size: 0.35rem;
  line-height: 0.7rem;
  text-align: center;
}
.re-left {
  width: 50%;
  height: 100%;
  color: #1b9af7;
  border: 0.01rem solid #eaeaea;
}
.re-right {
  width: 50%;
  height: 100%;
  color: #39c894;
  border: 0.01rem solid #eaeaea;
}
.box {
  width: 100%;
  height: 100%;
  background-color: #dddddd;
  .box-top {
    font-size: 0.3rem;
    height: 0.9rem;
    line-height: 0.9rem;
    span {
      padding-left: 0.3rem;
    }
    .span1 {
      color: #39c894;
    }
    .span2 {
      color: #999;
    }
  }
}
.box-nei {
  font-size: 0.4rem;
  display: flex;
  // line-height: 0.45rem;
  flex-direction: row;
  // justify-items: center;
  .box-yuan {
    width: 45px;
    height: 45px;
    display: block;
    background-color: #39c894;
    border-radius: 50%;
  }

  button:nth-child(3) {
    background-color: rgb(192, 192, 192);
    outline: none;
    border: none;
  }
  button:nth-child(4) {
    background-color: #39c894;
    outline: none;
    border: none;
    color: #ffffff;
    width: 1.2rem;
  }
  button:nth-child(5) {
    background-color: #feb505;
    outline: none;
    border: none;
    color: #ffffff;
    margin-left: 0.2rem;
    width: 2.5rem;
  }
}
.box-img {
  .box-text {
    font-size: 0.5rem;
  }
}
.img {
  display: flex;
  flex-wrap: wrap;
  img {
    width: 2.5rem;
    height: 4rem;
  }
}
</style>