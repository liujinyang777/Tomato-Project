<template>
  <div class="">
    
    <div class="map">
       <baidu-map :center="{lng:104.116729,lat:30.629222} " zoom="17" style="height:300px"></baidu-map>
    </div>
    <div class="box">
      <ul class="Sudoku">
        <li>
          <div class="icon"><i class="iconfont icon-location"></i></div>
        </li>

        <li>
          <div class="icon">
            <i class="iconfont icon-tel"></i>
          </div>
        </li>
      </ul>
      <div class="word-box">
        <span>
          <p>杭州市滨江区长河街道越</p>
          <p>达巷79号连连大厦A幢301</p>
          <p></p>
        </span>
        <span>
          <p>400-9977-658</p>
        </span>
      </div>
      <div class="Qrcode-box">
        <div class="Qrcode-img">
          <img src="/er.png" alt="" />
        </div>
        <div class="Qrcode-word">
          <p>长按识别二维码关注微信咨询</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    
    };
  },
  mounted() {
    
  },
  methods: {
 
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.top {
  width: 100%;
  height: 1rem;
}
.baidumap {
  width: 100%;
  height: 5rem;
}
.box {
  width: 100%;
  height: 3rem;
}
.Sudoku {
  display: flex;
  text-align: center;
}
.icon {
  width: 1.5rem;
  height: 1.5rem;
  background: #39c894;
  border-radius: 50%;
  line-height: 1.5rem;
  text-align: center;
  color: rgb(255, 255, 255);
  margin-left: 1.5rem;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
.icon i {
  font-size: 0.75rem;
}
.word-box {
  display: flex;
}
.word-box span {
  margin-left: 0.5rem;
}
.word-box span p{
  font-size: 18px;
}

.Qrcode-box {
  width: 100%;
  height: 4rem;
  margin-top: 0.2rem;
  background: #eaeaea;
  text-align: center;
  padding-top: 0.5rem;
}
.Qrcode-img {
  width: 2rem;
  height: 2rem;
  margin-left: 2.8rem;
}
.Qrcode-img img {
  width: 2rem;
  height: 2rem;
}
.Qrcode-word {
  margin-top: 0.5rem;
}
</style>
