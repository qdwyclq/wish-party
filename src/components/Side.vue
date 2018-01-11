<template>
    <div class="side">
      <transition name="fade">
        <div class="side-content" v-if="showSide">
          <div class="personal">
            <img src="../assets/images/09.jpg" alt="">
            <p class="personal-name">邓小一</p>
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
          <div class="member">
            <p class="member-title">当前在线人数（68/920）</p>
            <div class="member-list">
              <p v-for="item in onlineList" class="online">
                <span class="member-icon"></span>
                <img :src="item.headPortrait" alt="">
                <span class="personal-name">{{item.personalName}}</span>
              </p>
              <p v-for="item in offlineList" class="offline">
                <span class="member-icon"></span>
                <img :src="item.headPortrait" alt="">
                <span class="personal-name">{{item.personalName}}</span>
              </p>
            </div>
          </div>
        </div>
      </transition>
      <span class="icon" @click="showSide = !showSide"></span>
    </div>
</template>

<script>
  export default {
    name: 'Process',
    data() {
      return {
        showSide: false,
        processList: [
          {
            sort: '01',
            pgmtime: '19:00-19:20',
            details: '签到入场就坐'
          },
          {
            sort: '02',
            pgmtime: '19:00-19:20',
            details: '签到入场就坐'
          },
          {
            sort: '03',
            pgmtime: '19:00-19:20',
            details: '签到入场就坐'
          },
          {
            sort: '04',
            pgmtime: '19:00-19:20',
            details: '签到入场就坐'
          },
          {
            sort: '05',
            pgmtime: '19:00-19:20',
            details: '签到入场就坐'
          },
          {
            sort: '06',
            pgmtime: '19:00-19:20',
            details: '签到入场就坐'
          },
          {
            sort: '07',
            pgmtime: '19:00-19:20',
            details: '签到入场就坐'
          },
          {
            sort: '08',
            pgmtime: '19:00-19:20',
            details: '签到入场就坐'
          },
          {
            sort: '09',
            pgmtime: '19:00-19:20',
            details: '签到入场就坐'
          },
          {
            sort: '10',
            pgmtime: '19:00-19:20',
            details: '签到入场就坐'
          },
          {
            sort: '11',
            pgmtime: '19:00-19:20',
            details: '签到入场就坐'
          },
          {
            sort: '12',
            pgmtime: '19:00-19:20',
            details: '签到入场就坐'
          },
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {}
        ],
        onlineList: [
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          }
        ],
        offlineList: [
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .side {
      position: absolute;
      top: 0;
      left: 0;
      width: auto;
      height: 100%;
      overflow: hidden;
      z-index: 2;
      .side-content, .icon {
        float: left;
      }
      .side-content {
        width: 350px;
        height: 100%;
        background-color: rgba(0, 0, 0, .7);
        .personal {
          width: 100%;
          height: 270px;
          text-align: center;
          img {
            width: 50%;
            margin-top: 40px;
            border-radius: 50%;
          }
          .personal-name {
            font-size: 35px;
            color: #fff;
          }
        }
        .interactive,
        .process {
          height: 70px;
          text-align: center;
          button {
            width: 85%;
            height: 60px;
            font-size: 25px;
            border: none;
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
          margin-bottom: 35px;
          button {
            background: url("../assets/images/process-icon.png") no-repeat 13% 50% / 10% #12589b;
          }
        }
        .member {
          height: 73%;
          text-align: center;
          .member-title {
            height: 70px;
            font-size: 25px;
            color: #fff;
            margin-bottom: 1%;
          }
          .member-list {
            height: 86.5%;
            overflow: auto;
            text-align: left;
            padding-left: 30px;
            .online,
            .offline {
              height: 50px;
              line-height: 50px;
              img {
                width: 45px;
                height: 45px;
                border-radius: 50%;
              }
              .member-icon {
                display: inline-block;
                width: 45px;
                height: 45px;
              }
              .personal-name {
                color: #fff;
                font-size: 35px;
                vertical-align: middle;
              }
            }
            .online {
              .member-icon {
                background: url("../assets/images/sprite.png") no-repeat center / 75%;
              }
            }
            .offline {
              .member-icon {
                background: url("../assets/images/not-active.png") no-repeat center / 75%;
              }
            }
          }
        }
      }
      .icon {
        margin-top: 850px;
        width: 100px;
        height: 8%;
        background: url("../assets/images/side-icon.png") no-repeat;
      }
      .fade-enter-active,
      .fade-leave-active {
        transition: opacity .2s
      }
      .fade-enter,
      .fade-leave-to
      {
        opacity: 0;
        transform: translateX(-100%);
      }
    }
</style>

