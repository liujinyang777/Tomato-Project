<template>
  <div>
    <div class="s-dv"></div>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item><img src="/house_info.jpg" alt="" /></van-swipe-item>
      <van-swipe-item><img src="/house_info.jpg" alt="" /></van-swipe-item>
    </van-swipe>

    <div class="s-dd">
      <span>房先森</span>/ <span>装修攻略</span>/ <span>装修预算</span>/
      <span>正文</span>
    </div>
    <div class="s-c">装修预算注意事项</div>

    <div class="s-sj">
      <ul class="ddd">
        <li><i class="y iconfont icon-time"></i></li>
        <li class="">2016-07-09</li>
        <li><i class="e iconfont icon-view"></i></li>
        <li>115</li>
      </ul>
    </div>

    <div class="s-ii"></div>

    <div class="s-wz">
      <ul>
        <li>客厅装修隔断</li>
        <li>客厅装修图</li>
        <li>客厅装修效果</li>
        <li>客厅装修隔断</li>
        <li>客厅装修图</li>
        <li>客房装修效果</li>
      </ul>
    </div>

    <div class="s-uu">
      <!-- &emsp;&emsp;&emsp;&emsp;&emsp; -->
      <p>
        导语：在装修时如果没有提前最好装修预算，很容易造成最后开支过大，添置很多没必要的增项。那么在做预算的时候又有什么需要注意的地方？
      </p>
    </div>

    <div class="s-pp">
      <div>
        <img src="/case.jpg" alt="" />
      </div>
    </div>

    <div class="s-ll">
      <div class="s-mm">点击展示全文</div>
    </div>

    <div class="s-nn">
      <div class="left">
        <i class="l iconfont icon-pencle"></i>
        <span> 评价(10) </span>
      </div>
      <div class="right">
        <i class="r iconfont icon-share"></i>
        <span>分享</span>
      </div>
    </div>

    <div class="s-lls">
      <div class="s-mm">进入装修预算</div>
    </div>

    <div class="s-mk"></div>

    <div class="s-cc">

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

<style lang='scss'>
.s-cc{
    width: 5px;
}
.s-mk {
  margin-top: 10px;
  width: 100%;
  height: 15px;
  background-color: #f4f4f4;
}
.left {
  width: 60px;
  height: 60px;
  color: #56b5f7;
  border-radius: 50%;
  span {
    font-size: 15px;
  }
}
.right {
  width: 60px;
  height: 60px;
  color: #feb605;
  border-radius: 50%;
  span {
    font-size: 15px;
    margin-left: 20px;
  }
}

.s-nn {
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  .l {
    font-size: 40px;
    border: 3px solid #56b5f7;
    padding: 15px;
    border-radius: 50%;
  }
  .r {
    font-size: 40px;
    border: 3px solid;
    padding: 15px;
    border-radius: 50%;
  }
}
.s-lls {
  width: 100%;
  margin-top: 1.2rem;
  .s-mm {
    width: 93%;
    height: 35px;
    margin: 0 auto;
    line-height: 35px;
    color: green;
    border: 1px solid green;
    font-size: 15px;
    text-align: center;
    padding: 5px 0;
  }
}
.s-ll {
  width: 100%;
  margin-top: 0.1rem;
  .s-mm {
    width: 93%;
    height: 35px;
    margin: 0 auto;
    line-height: 35px;
    color: green;
    border: 1px solid green;
    font-size: 15px;
    text-align: center;
    padding: 5px 0;
  }
}
.s-pp {
  width: 100%;
  margin: 0 auto;
  img {
    width: 100%;
    height: 300px;
  }
}
.s-uu {
  margin-top: 15px;
  width: 100%;
  margin-bottom: 0.6rem;
  p {
    text-indent: 2em;
    font-size: 0.48rem;
    color: #666;
  }
}
.s-wz {
  margin-top: 13px;
  width: 100%;
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  ul li {
    width: 23%;
    margin-right: 5px;
    color: #eaeaea;
    line-height: 20px;
    text-align: center;
    padding: 5px 0;
    border: 1px solid #eaeaea;
    border-radius: 30px;
    font-size: 12px;
  }
  li:nth-child(5) {
    margin-top: 0.36rem;
  }
  li:nth-child(6) {
    margin-top: 0.36rem;
  }
}
.s-ii {
  margin-top: 20px;
  border: 1px solid #eaeaea;
}
.ddd {
  display: flex;
  justify-content: space-around;
}
.s-sj {
  width: 100%;
  text-align: center;
  margin-left: -15px;
  color: #999;
  .y {
    font-size: 0.56rem;
  }
  .e {
    font-size: 0.76rem;
  }
  li:nth-child(1) {
    margin-left: 30px;
  }

  li:nth-child(2) {
    margin-top: 22px;
    font-size: 0.48rem;
    margin-left: -30px;
  }
  li:nth-child(4) {
    margin-top: 22px;
    margin-left: -45px;
    font-size: 0.48rem;
  }
}
.s-c {
  width: 100%;
  text-align: center;
  font-size: 0.72rem;
  margin-top: 25px;
}
.s-dd {
  margin-top: 0.2rem;
  width: 90%;
  background-color: #f4f4f4;
  padding: 10px 10px;
  margin: 0 10px;
  color: #000;
  font-size: 18px;
}
.s-dv {
  width: 100%;
  height: 45px;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 45px;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
