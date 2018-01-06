<template>
  <div class="main">
    <div class="top">
      <img class="logo" src="../assets/images/logo1.png" alt="">
      <h2>渠道无忧2018年会盛典</h2>
    </div>
    <div class="content">
        <p>
          <span>排序</span>
          <span>时间</span>
          <span>节目内容</span>
        </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Process',
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    width: 100%;
    height: 100vh;
    background: url("../assets/images/program-bg.png") no-repeat center / 100% #f2e7ed;
    overflow: hidden;
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      overflow: auto;
    }
    .top {
      width: 100%;
      height: 24%;
      text-align: center;
      .logo {
        margin-top: 70px;
        width: 20%;
      }
      h2 {
        font-size: 60px;
        color: #b92823;
        text-align: center;
      }
    }
    .content {
      height: 70%;
      width: 80%;
      margin: 0 auto;
      border: 2px solid #19548c;
      border-radius: 30px;
    }
  }
</style>

