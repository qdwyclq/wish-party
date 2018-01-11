  <template>
    <div class="main">
      <div class="top">
        <img class="logo" src="../assets/images/logo1.png" alt="">
        <img class="banner" src="../assets/images/2018.png" alt="">
        <h2>渠道无忧2018年会盛典</h2>
      </div>
      <div class="content">
        <div class="personal">
          <img src="../assets/images/09.jpg" alt="">
          <p class="personal-name">邓小一</p>
          <p class="personal-seat">
            <span>年会桌数为</span>
            <span class="mark">12号</span>
          </p>
        </div>
        <router-link to='/Interactive'>
          <div class="interactive">
            <span></span>
            <button>&nbsp;&nbsp;&nbsp;&nbsp;进入聊天互动</button>
          </div>
        </router-link>
        <router-link to='/Process'>
          <div class="process">
            <span></span>
            <button>&nbsp;&nbsp;&nbsp;&nbsp;查看节目流程</button>
          </div>
        </router-link>
      </div>
    </div>
  </template>

  <script>
    export default {
      name: 'Sign',
      data() {
        return {}
      }
    }
  </script>

  <style lang="scss" scoped>
    @import '../assets/scss/layout.scss';
    .main {

      background: url("../assets/images/sign-bg.jpg") no-repeat center / 100% #f2e7ed;
      .top {
        width: 100%;
        height: 45%;
        text-align: center;
        .logo {
          margin-top: 80px;
          width: 26%;
        }
        .banner {
          width: 80%;
          margin-top: 14px;
        }
        h2 {
          font-size: 63px;
          color: #b92823;
          text-align: center;
        }
      }
      .content {
        height: 55%;
        text-align: center;
        .personal {
          img {
            width: 20%;
            margin-top: 70px;
            border-radius: 50%;
          }
          p {
            margin-bottom: 70px;
            text-align: center;
          }
          .personal-name {
            font-size: 50px;
          }
          .personal-seat {
            font-size: 63px;
            font-weight: 500;
            .mark {
              color: #1c558c;
            }
          }
        }
        div {
          button {
            width: 50%;
            height: 120px;
            margin-bottom: 20px;
            font-size: 50px;
            color: #ffffff;
            background-color: #12589b;
            border-radius: 640px;
          }
        }
        .interactive {
          button {
            background: url("../assets/images/interactive-icon.png") no-repeat 13% 50% / 12% #12589b;
          }
        }
        .process {
          margin-bottom: 200px;
          button {
            background: url("../assets/images/process-icon.png") no-repeat 13% 50% / 10% #12589b;
          }
        }
      }
    }
  </style>

