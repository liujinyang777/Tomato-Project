<template>
  <div class="l-home2">
    <div class="head">
      <div class="le"></div>
      <div class="mo">
        <div class="top">
          <img src="/切图/关注.png" alt="" />
        </div>
        <div class="und">
          <div class="inner">关注微信公众号sirfang_com</div>
        </div>
      </div>
      <div class="ri">
        <div class="one">
          <i class="iconfont icon-close"></i>
        </div>
      </div>
    </div>
    <div class="top">
      <div class="le">
        <input class="inp" type="text" placeholder="请输入关键字" />
      </div>
      <div class="ri">
        <div class="ser">搜索</div>
      </div>
    </div>
    <div class="gray" style="margin: 0.2rem 0"></div>
    <div class="cont1">
      <div class="one">装修前</div>
      <div class="one">装修中</div>
      <div class="one">装修后</div>
    </div>
    <div class="cont2">
      <div class="inner">
        <div class="fs">
          <i class="iconfont icon-house"></i>
          <p>收房验房</p>
        </div>
        <div class="fs">
          <i class="iconfont icon-budget"></i>
          <p>装修预算</p>
        </div>
        <div class="fs">
          <i class="iconfont icon-taiji"></i>
          <p>装修风水</p>
        </div>
        <div class="fs">
          <i class="iconfont icon-designer"></i>
          <p>装修设计</p>
        </div>
      </div>
      <div class="bot">
        <div class="iner">了解装修流程</div>
      </div>
    </div>
    <div class="gray" style="margin: 0.3rem 0"></div>
    <div class="cont3">
      <div class="top">
        <div class="le1"><b>|</b></div>
        <div class="le2">为您推荐</div>
      </div>
      <div class="listcont">
        <div class="inner" v-for="(a, b) in newlist" :key="b">
          <div class="le">
            <img :src="a.pic" alt="" />
          </div>
          <div class="ri">
            <p class="tops">{{ a.title }}</p>
            <div class="bot">
              <span>
                <i class="iconfont icon-time"></i>
                {{ a.time }}</span
              >
              <span>
                <i class="iconfont icon-view"></i>
                {{ a.num }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="und">
        <div class="inner">
          <div class="le">
            换换
            <i class="iconfont icon-change"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="gray" style="margin: 0.3rem 0"></div>
    <div class="introduce">
      <div class="inner">
        房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐 + 个性化定制服务。
      </div>
    </div>
    <div class="gray" style="margin: 0.3rem 0"></div>
    <l-bot @show="show" :show="shows"></l-bot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newlist: [],
      shows:true,
    };
  },
  mounted() {
    this.$http("/lhome2.json").then((res) => {
      console.log(res);
      this.newlist = res.data.data;
    });
  },
  methods: {
      show(){
          this.shows=false
      }
  },
};
</script>

<style lang="scss">
.l-home2 {
  width: 100%;
  .head {
    width: 100%;
    display: flex;
    background-color: #39c893;
    .le {
      width: 20%;
    }
    .mo {
      width: 55%;
      margin-left: 0.29rem;
      font-size: 0.3rem;
      .top {
        img {
          margin-top: 0.2rem;
          width: 80%;
        }
      }
      .und {
        margin: 0.2rem 0;
        background-color: #2bb280;
        border-radius: 10px;
        color: white;
        .inner {
          text-align: center;
          line-height: 0.4rem;
        }
      }
    }
    .ri {
      width: 20%;
      position: relative;
      .one {
        //   position: absolute;
        top: 0;
        right: 0;
        i {
          position: absolute;
          top: 0.1rem;
          right: 0.1rem;
          font-size: 0.4rem;
        }
      }
    }
  }
  .top {
    width: 90%;
    margin: 0.2rem auto 0;
    font-size: 0.28rem;
    display: flex;
    justify-content: space-around;
    .le {
      width: 80%;
      border: 1px solid #39c893;
      .inp {
        width: 100%;
        height: 0.7rem;
        padding-left: 0.2rem;
        outline: none;
        border: none;
      }
    }
    .ri {
      width: 20%;
      text-align: center;
      background-color: #39c893;
      color: white;
      line-height: 0.7rem;
    }
  }
  .gray {
    width: 100%;
    height: 0.18rem;
    background-color: rgba(204, 204, 204, 0.404);
  }
  .cont1 {
    width: 100%;
    display: flex;
    border-bottom: 1px solid #efefef;
    .one {
      flex: 1;
      font-size: 0.32rem;
      line-height: 0.7rem;
      text-align: center;
      &:hover {
        border-bottom: 1px solid #39c893;
      }
    }
  }
  .cont2 {
    width: 100%;
    .inner {
      width: 95%;
      margin: 0.36rem auto;
      display: flex;
      text-align: center;
      .fs {
        flex: 1;
        i {
          font-size: 1.05rem;
          color: #39c893;
          text-align: center;
        }
        p {
          font-size: 0.32rem;
        }
      }
    }
    .bot {
      width: 95%;
      margin: 0 auto;
      color: #39c893;
      border: 1px solid #39c893;
      border-radius: 5px;
      text-align: center;
      font-size: 0.32rem;
      line-height: 0.7rem;
    }
  }
  .cont3 {
    width: 100%;
    .top {
      width: 95%;
      margin: 0.32rem auto;
      display: flex;
      justify-content: end;
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
    }
    .listcont {
      width: 100%;
      .inner {
        width: 95%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        margin: 0.4rem auto;
        border-bottom: 1px solid rgba(0, 0, 0, 0.089);
        .le {
          width: 32%;
          img {
            width: 100%;
          }
        }
        
        .ri {
          width: 66%;
          font-size: 0.36rem;
          .tops {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .bot {
            width: 93%;
            margin: 0.66rem auto 0;
            color: #999;
            span:nth-child(1) {
            }
            span:nth-child(2) {
              margin-left: 0.75rem;
            }
          }
        }
      }
      .inner:nth-child(7) {
          height: 2.35rem;
          img {
            width: 100%;
            height: 80%;
          }
        }
    }
    .und {
      width: 95%;
      margin: 0 auto;
      .inner {
        width: 100%;
        .le {
          width: 100%;
          text-align: center;
          font-size: 0.32rem;
          line-height: 0.7rem;
          color: #39c894;
          border: 1px solid rgba(204, 204, 204, 0.404);
        }
      }
    }
  }
  .introduce{
  width: 100%;
  .inner{
    width: 95%;
    margin: 0 auto;
    font-size: .28rem;
    color: #333;
    text-indent: 2em;
  }
}
}
</style>