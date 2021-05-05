<template>
  <div>
    <l-top>
      <p slot="left">
        <img class="logo" src="/切图/logo.png" alt="" />
      </p>
      <p slot="middle">设计师</p>
    </l-top>
    <div class="line"></div>
    <div class="introduce">
      <div class="le">
        <div class="im">
          <img :src="designer.pic" alt="" />
        </div>
      </div>
      <div class="ri">
        <div class="tip">
          <span class="namex">{{ designer.name }}</span
          ><span class="green">优秀</span>
        </div>
        <div class="produce">
          作品：<span>{{ designer.production }}</span
          >&emsp;经验：<span>{{ designer.experience }}</span>
        </div>
        <div class="herstyle">
          擅长风格：<span>{{ designer.style }}</span>
        </div>
        <div class="skill">
          设计理念：<span>{{ designer.style }}</span>
        </div>
      </div>
    </div>
    <div class="good">
      <div class="inner">
        <div class="one">
          <div class="ico"><i class="iconfont icon-thumb-up"></i></div>
          <p>人气（618）</p>
        </div>
        <div class="two">
          <div class="ico"><i class="iconfont icon-pencle"></i></div>
          <p>评价（10）</p>
        </div>
        <div class="three">
          <div class="ico"><i class="iconfont icon-design"></i></div>
          <p>找我设计</p>
        </div>
      </div>
    </div>
    <div class="personalintroduce">
      <div class="inner">
        个人简介:
        <span>
          毕业于浙江理工大学环境艺术（室内设计专业），主要作品有湘湖美地、名门世家、下沙观澜时代云邸（LOFT）、瑞金华庭（LOFT）、星悦湾、青秀城、仁苑等
        </span>
      </div>
    </div>
    <div class="gray" style="margin: 0.3rem 0"></div>
    <div class="designproduction">
      <div class="top">
        <div class="le1"><b>|</b></div>
        <div class="le2">设计作品</div>
      </div>
      <div class="productions">
        <div class="inner">
          <div class="self" v-for="(a, b) in details" :key="b">
            <div class="tip">
              <img :src="a.img" alt="" />
            </div>
            <div class="cont">
              {{ a.title }}
            </div>
            <div class="bot">
              <span>{{ a.style }}</span>
              <span class="mid">{{ a.house }}</span>
              <span>{{ a.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gray" style="margin: 0.36rem 0"></div>
    <div class="introduce">
      <div class="inner">
        房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐
        + 个性化定制服务。
      </div>
    </div>
    <div class="gray" style="margin: 0.36rem 0"></div>
    <l-bot @show="show" :show="shows"></l-bot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      designer: this.$route.query.x,
      details: [],
      shows: true,
    };
  },
  mounted() {
    this.$http("/designProduction.json").then((res) => {
      console.log(res);
      this.details = res.data.data;
    });
  },
  methods: {
    show() {
      this.shows = !this.shows;
    },
  },
};
</script>

<style lang="scss">
.logo {
  width: 130%;
}
.line {
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.096);
}
.gray {
  width: 100%;
  height: 0.18rem;
  background-color: rgba(204, 204, 204, 0.404);
}
.introduce {
  width: 100%;
  margin: 0.3rem 0;
  display: flex;
  justify-content: space-around;
  .le {
    width: 20%;
    .im {
      width: 90%;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
  }
  .ri {
    width: 70%;
    font-size: 0.32rem;
    span {
      color: rgba(0, 0, 0, 0.404);
    }
    .tip {
      font-size: 0.4rem;
      display: flex;
      align-items: center;
      color: black;
      .namex {
        color: black;
      }
      .green {
        display: block;
        margin-left: 0.15rem;
        font-size: 0.26rem;
        width: 0.8rem;
        height: 0.4rem;
        line-height: 0.4rem;
        text-align: center;
        background-color: #39c894;
        color: whitesmoke;
        border-radius: 5px;
      }
    }
  }
}
.good {
  width: 100%;
  .inner {
    width: 90%;
    margin: 0.3rem auto;
    display: flex;
    justify-content: space-around;
    text-align: center;
    .ico {
      width: 70%;
      margin: 0 auto;
      border-radius: 50%;
      border: 2px solid #fe8864;
    }

    p {
      font-size: 0.3rem;
      text-align: center;
    }

    .one {
      width: 30%;
      line-height: 1.3rem;
      margin: 0 auto;
      i {
        font-size: 0.8rem;
        color: #fe8864;
      }
      p {
        color: #fe8864;
      }
    }
    .two {
      width: 30%;
      line-height: 1.3rem;
      margin: 0 auto;
      i {
        font-size: 0.8rem;
        color: #1b9af7;
      }
      p {
        color: #1b9af7;
      }
      .ico {
        border: 2px solid #1b9af7;
      }
    }
    .three {
      width: 30%;
      line-height: 1.3rem;
      margin: 0 auto;
      i {
        font-size: 0.8rem;
        color: #ff4351;
      }
      p {
        color: #ff4351;
      }
      .ico {
        border: 2px solid #ff4351;
      }
    }
  }
}
.personalintroduce {
  width: 95%;
  margin: 0 auto 0.3rem;
  .inner {
    text-indent: 0.4em;
    font-size: 0.28rem;
    span {
      color: rgba(0, 0, 0, 0.363);
    }
  }
}
.designproduction {
  .top {
    width: 95%;
    margin: 0.32rem auto;
    display: flex;
    align-items: baseline;
    .le1 {
      color: #39c894;
      height: 0.42rem;
      font-size: 0.5rem;
    }
    .le2 {
      margin-left: 0.15rem;
      font-size: 0.36rem;
    }
    .le3 {
      margin-left: 0.15rem;
      font-size: 0.24rem;
      color: #999;
    }
  }
  .productions {
    width: 95%;
    margin: 0 auto;
    .inner {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .self {
        width: 48%;
        margin: 0.1rem 0;
        padding: 0 0 0.1rem;
        border: 1px solid rgba(0, 0, 0, 0.089);
        .tip {
          width: 100%;
          img {
            width: 100%;
            height: 2rem;
          }
        }
        .cont {
          width: 80%;
          margin: 0 auto;
          text-align: center;
          font-size: 0.24rem;
        }
        .bot {
          width: 60%;
          margin: 0 auto;
          font-size: 0.2rem;
          color: #999;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
.introduce {
  width: 100%;
  .inner {
    width: 95%;
    margin: 0 auto;
    font-size: 0.28rem;
    color: #333;
    text-indent: 2em;
  }
}
</style>