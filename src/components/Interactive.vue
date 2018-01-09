<template>
  <div class="main">
    <ms-side></ms-side>
    <div class="chat">
      <ul class="chat-box">
          <li v-for="item in chatList" class="bubblebox clearfix">
            <img :class="item.position" :src="item.headPortraits" alt="">
            <p :class="item.position">
              <span :class="['nickname', 'nickname-' + item.position]">{{item.nickname}}</span>
              <span :class="['new-time', 'new-time-' + item.position]">{{item.newTime}}</span>
              <span :class="['bkbubble', item.position]">{{item.bkbubble}}</span>
            </p>
          </li>
      </ul>
    </div>
    <div class="interaction">
      <span v-for="(item, index) in interactionList" :class=interactionList[index] @click="interaction(item, index)"></span>
    </div>
    <div class="chat-edit">
      <span></span>
      <input class="input-chat" type="text" v-model="chatmsg" placeholder="请输入您想说的话">
      <button @click="chatSend()" class="send-btn">发送</button>
    </div>
    <!--投票-->
    <transition name="fade">
      <div v-if="voteShow" class="vote-box">
        <div class="active">
          <span class="close" @click="close()">x</span>
          <div class="vote-title">&nbsp;&nbsp;&nbsp;给你喜欢的节目投票啦</div>
          <div class="vote-list">
            <p v-for="(item, index) in voteList">
              <span class="sort">{{index + 1}}</span>
              <span class="program-name">{{item.ProgramName}}</span>
              <!--<span class="like">投票</span>-->
              <span class="like">
                <span class="custom-form-checkbox datacheck"></span>
                <input type="checkbox" name="data[check]" value="female" id="optiona" class="cform datacheck" style="opacity: 0; position: absolute; left: -99999px;">
                <label for="optiona" class="lblr">投票</label>
              </span>
              <span class="details" @click="presentation">详情</span>
              <span class="presentation" v-if="index == 0">
                <span>{{item.details.programName}}</span>
                <span>{{item.details.programType}}</span>
                <span>{{item.details.department}}</span>
                <span>{{item.details.Performers}}</span>
              </span>
            </p>
          </div>
          <div class="submit-vote">
            <button>提&nbsp;&nbsp;&nbsp;交</button>
          </div>
        </div>
      </div>
    </transition>
    <!--霸屏购买使用-->
    <transition name="fade">
      <div v-if="screenShow" class="reminder">
        <div class="active">
          <span class="close" @click="close()">x</span>
          <p class="title">
            <span :class="[pitch == 'buy' ? 'title-active': '', 'buy']" @click="pitch = 'buy'">购买</span>
            <span :class="[pitch == 'use' ? 'title-active': '']" @click="pitch = 'use'">使用</span>
          </p>
          <p class="buy-duration">
            <span v-for="(item, index) in pitch == 'buy' ? buyList: useList" :class="item[0]" @click="elect(pitch == 'buy' ? buyList: useList, item, index)">
              <i class="character">{{item[1]}}</i>
              <i class="hint">{{item[2]}}</i>
              <i class="buy-time">{{item[3]}}</i>
              <i class="buy-money">{{item[4]}}</i>
            </span>
          </p>
          <p v-if="pitch == 'buy'" class="quantity">
            <span class="magnitude">数量</span>
            <span class="count">
              <i class="decrease" @click="amount > 1 ? amount -= 1 : amount = amount">-</i>
              <input type="text" readonly="value" :value="amount">
              <i class="augment" @click="amount += 1">+</i>
            </span>
            <button @click="buy()">购 买3</button>
          </p>
          <p v-else-if="pitch == 'use'" class="quantity">
            <input v-model="paScreenMsg" class="appoint-text" type="text" placeholder="请输入霸屏内容">
            <button @click="use()">使 用</button>
          </p>
        </div>
      </div>
    </transition>
    <!--当前节目-->
    <transition name="fade">
      <div v-if="programShow" class="program-box">
        <div class="active">
          <span class="close" @click="close()">x</span>
          <div class="program-title">
            <p>正在进行的精彩节目</p>
            <p>时间：（20:00-21:10）</p>
          </div>
          <div class="program-name">
            <p class="title">节目名称</p>
            <p class="content">《黄河大合唱》</p>
          </div>
          <div class="program-type">
            <p class="title">节目类型</p>
            <p class="content">《黄河大合唱》</p>
          </div>
          <div class="program-gather">
            <p class="title">表演人员</p>
            <p class="content">《黄河大合唱》《黄河大合唱》《黄河大合唱》《黄河大合唱》《黄河大合唱》《黄河大合唱》《黄河大合唱》《黄河大合唱》</p>
          </div>
        </div>
      </div>
    </transition>
    <!--霸屏-->
    <transition name="bounce">
      <div v-if="paScreen" class="pa-screen">
        <div class="active">
            <img :src="'/src/assets/images/pa-screen' + screenImg + '.gif'" alt="">
          <p>{{paScreenMsg}}</p>

          <!--按照列表显示弹屏-->
          <!--<p>{{paScreenList[0]}}</p>-->
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import MsSide from '@/components/Side'
  export default {
    name: 'Interactive',
    data() {
      return {
        paScreenMsg: '',
        chatmsg: '',
        screenImg: 0,
        paScreenList: [],
        chatList: [
          {
            position: 'left',
            headPortraits: '/src/assets/images/09.jpg',
            nickname: '某一位',
            newTime: '19:20:41',
            bkbubble: '88888888888咖啡泡进喧嚣的庭院333444444444444444444444444444444'
          },
          {
            position: 'right',
            headPortraits: '/src/assets/images/09.jpg',
            nickname: '某一位',
            newTime: '19:20:41',
            bkbubble: '88888888888咖啡泡进喧嚣的庭院333444444444444444444444444444444'
          }
        ],
        interactionList: ['vote', 'screen', 'program'],
        buyList: [
          [['long', 'buy-duration-active'], '长', '霸屏', '1分钟', '￥0.5'],
          [['common'], '中', '霸屏', '30秒', '￥0.2'],
          [['short'], '短', '霸屏', '10秒', '￥0.1']
        ],
        useList: [
          [['long', 'buy-duration-active'], '长', '霸屏', '已用9', '剩余10'],
          [['common'], '中', '霸屏', '已用9', '剩余10'],
          [['short'], '短', '霸屏', '已用9', '剩余10']
        ],
        voteList: [
          {
            ProgramName: '《黄河大合唱》大合唱',
            details: {
              programName: '《黄河大合唱》大合唱',
              programType: '大合唱',
              department: '运营一部',
              Performers: '18'
            }
          },
          {
            ProgramName: '《黄河大合唱》大合唱',
            details: '《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱'
          },
          {
            ProgramName: '《黄河大合唱》大合唱',
            details: '《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱'
          },{
            ProgramName: '《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱',
            details: '《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱'
          },
          {
            ProgramName: '《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱',
            details: '《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱'
          },
          {
            ProgramName: '《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱',
            details: '《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱'
          },
          {
            ProgramName: '《黄河大合唱》大合唱',
            details: '《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱'
          },
          {
            ProgramName: '《黄河大合唱》大合唱',
            details: '《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱'
          },
          {
            ProgramName: '《黄河大合唱》大合唱',
            details: '《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱'
          },
          {
            ProgramName: '《黄河大合唱》大合唱',
            details: '《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱'
          },
          {
            ProgramName: '《黄河大合唱》大合唱',
            details: '《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱'
          },
          {
            ProgramName: '《黄河大合唱》大合唱',
            details: '《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱'
          },
          {
            ProgramName: '《黄河大合唱》大合唱',
            details: '《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱'
          },
          {
            ProgramName: '《黄河大合唱》大合唱',
            details: '《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱'
          },
          {
            ProgramName: '《黄河大合唱》大合唱',
            details: '《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱'
          },
          {
            ProgramName: '《黄河大合唱》大合唱',
            details: '《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱'
          },
          {
            ProgramName: '《黄河大合唱》大合唱',
            details: '《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱'
          },
          {
            ProgramName: '《黄河大合唱》大合唱',
            details: '《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱《黄河大合唱》大合唱'
          }
        ],
        voteShow: false,
        screenShow: false,
        programShow: false,
        paScreen: false,
        pitch: 'buy',
        amount: 1
      }
    },
    computed: {},
    methods: {
      interaction(item, index) {
        if (item.indexOf('act') > -1) {
          this.interactionList.splice(index, 1, this.interactionList[index] = item.replace('act', ''))
        } else {
          for (let i = 0; i < this.interactionList.length; i++) {
            if (this.interactionList[i].indexOf('act') > -1) {
              this.interactionList.splice(i, 1, this.interactionList[i] = this.interactionList[i].replace('act', ''))
            }
          }
          this.interactionList.splice(index, 1, this.interactionList[index] += 'act')
        }
        if (index == 0) {
          console.log('点击了投票哦！');
          this.voteShow = true;
          this.paScreen = false;
        }
        else if (index == 1) {
          console.log('点击了霸屏哦！');
          this.screenShow = true
        }
        else if (index == 2) {
          console.log('点击了节目屏哦！');
          this.programShow = true
        }
      },
      close() {
        this.voteShow = false
        this.screenShow = false
        this.programShow = false
        this.amount = 1
        for (let i in this.buyList) {
          this.buyList[i][0].splice(1, 1)
        }
        for (let i in this.useList) {
          this.buyList[i][0].splice(1, 1)
        }
        this.buyList[0][0].push('buy-duration-active')
      },
      buy() {
        //          购买的数量
        let quantity = this.amount
        this.amount = 1
        console.log('点击了购买' + quantity)
      },
      use() {
        let _this = this;
        this.screenShow = false;
//        成功了开启霸屏
        this.paScreen = true;
        this.paScreenList.push(this.paScreenMsg)
//        重新设置一张弹屏背景
        this.screenImg = Math.round( Math.random() * 3 )
//        霸屏完成
        setTimeout (function(){
          _this.paScreen = false;
        },3000);
      },
      elect(arr, item, index) {
        for (let i in arr) {
          arr[i][0].splice(1, 1)
        }
        item[0].push('buy-duration-active')
      },
      chatSend() {
        let newChat = {
          position: 'right',
          headPortraits: '/src/assets/images/08.jpg',
          nickname: '某一位',
          newTime: '19:20:41',
          bkbubble: this.chatmsg
        }
        this.chatList.push(newChat)
        this.chatmsg = ''
      },
      presentation() {

      }
    },
    components: {
      MsSide
    }
  }
</script>
<style lang="scss" scoped>
  @import '../assets/scss/layout.scss';
  @import '../assets/scss/transition.scss';

  .main {
    background: url("../assets/images/chat-bg.jpg") no-repeat top / 100% auto #add5f8;
    .chat {
      position: relative;
      height: 80%;
      padding-top: 80px;
      overflow: auto;
      .chat-box {
        height: 90%;
        .bubblebox {
          img {
            width: 100px;
            height: auto;
            margin: 0 20px;
          }
          p {
            position: relative;
            width: 80%;
            margin: 0 0 60px 10px;
            .nickname {
              position: absolute;
              top: -50px;
              font-size: 16px;
              color: #969698;
            }
            .nickname-left {
            }
            .new-time-left {
              left: 100px;
            }
            .nickname-right {
              right: 135px;
            }
            .new-time-right {
              right: 0;
            }
            .new-time {
              position: absolute;
              top: -50px;
              font-size: 16px;
              color: #969698;
            }
            .bkbubble {
              background-color: #daebfb;
              max-width: 90%;
              min-height: 50px;
              padding: 25px 15px;
              font-size: 36px;
              line-height: 50px;
              color: #000004;
              border-radius: 8px;
              background-color: #daebfb;
            }
          }
        }
      }
    }
    .interaction {
      width: 100%;
      height: 9%;
      span {
        display: inline-block;
        width: 22%;
        height: 70%;
        margin-right: -9%;
      }
      .vote {
        background: url("../assets/images/vote.png") no-repeat center / 50% auto;
      }
      .screen {
        background: url("../assets/images/screen.png") no-repeat center / 50% auto;
      }
      .program {
        background: url("../assets/images/program.png") no-repeat center / 50% auto;
      }
      .voteact {
        background: url("../assets/images/voteact.png") no-repeat center / 50% auto;
      }
      .screenact {
        background: url("../assets/images/screenact.png") no-repeat center / 50% auto;
      }
      .programact {
        background: url("../assets/images/programact.png") no-repeat center / 50% auto;
      }
    }
    .chat-edit {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 9%;
      text-align: center;
      background-color: #242b33;
      input,
      button,
      span {
        position: absolute;
        display: inline-block;
        top: 25%;
      }
      input,
      button {
        height: 73px;
        border: 1px solid #85817e;
        border-radius: 50px;
        outline: none;
      }
      input {
        left: 19.5%;
        width: 50%;
        text-indent: 40px;
        color: #313131;
        background-color: #e6e6e6;
      }
      button {
        right: 10%;
        width: 18%;
        color: #fff;
        background-color: #308ddb;
      }
      span {
        display: inline-block;
        top: 25%;
        left: 10%;
        width: 7%;
        height: 50%;
        background: url("../assets/images/expression.png") no-repeat center / 100% auto;
      }
    }
    .reminder,
    .vote-box,
    .program-box {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      background-color: rgba(0, 0, 0, .3);
      .active {
        position: relative;
        width: 78%;
        border-radius: 20px;
        background-color: #FFF;
        .close {
          position: absolute;
          top: -35px;
          right: -35px;
          display: inline-block;
          width: 60px;
          height: 60px;
          font-size: 45px;
          line-height: 50px;
          text-align: center;
          color: #fff;
          border: 3px solid #fff;
          border-radius: 50%;
          background-color: #2e8ddb;
        }
      }
    }
    .reminder {
      .active {
        height: 30%;
        margin: 70% auto 0;
        color: black;
        .title {
          width: 100%;
          height: 20%;
          border-bottom: 1px solid #e2e2e3;
          .title-active {
            color: #308ddb;
          }
          span {
            display: inline-block;
            width: 47%;
            font-size: 45px;
            line-height: 100%;
            text-align: center;
          }
          .buy {
            border-right: 1px solid #e2e2e3;
          }
        }
        .buy-duration {
          width: 100%;
          height: 60%;
          border-bottom: 1px solid #e2e2e3;
          .long {
            margin-left: 10%;
          }
          .buy-duration-active {
            background-color: #2e8ddb;
          }
          span {
            position: relative;
            display: inline-block;
            width: 140px;
            height: 140px;
            margin-right: 10.5%;
            margin-top: 5%;
            border-radius: 50%;
            background-color: #94b3cc;
            i {
              position: absolute;
              width: 100%;
              text-align: center;
            }
            .character {
              top: 9px;
              color: #fff;
              font-size: 58px;
            }
            .hint {
              top: 58%;
              color: rgba(255, 255, 255, .85);
              font-size: 30px;
            }
            .buy-time {
              bottom: -53px;
              color: #000;
              font-size: 33px;
            }
            .buy-money {
              bottom: -90px;
              color: #000;
              font-size: 27px;
            }
          }
        }
        .quantity {
          position: relative;
          height: 20%;
          .magnitude {
            margin-left: 10%;
            font-size: 40px;
          }
          .count {
            position: absolute;
            left: 23%;
            width: 20%;
            height: 100%;
            i {
              position: absolute;
              top: 30%;
              display: inline-block;
              width: 40px;
              height: 40px;
              font-size: 36px;
              line-height: 40px;
              text-align: center;
              color: #fff;
              border-radius: 50%;
              background-color: #2e8ddb;
            }
            .decrease {
              left: 0;
            }
            .augment {
              right: 0;
            }
            input[type="text"] {
              position: absolute;
              top: 27%;
              left: 30%;
              width: 50px;
              height: 36px;
              text-align: center;
              margin-bottom: 10px;
            }
          }
          .appoint-text,
            button {
              position: absolute;
              top: 19%;
          }
          .appoint-text {
            width: 55%;
            height: 55px;
            left: 9%;
          }
          button {
            width: 20%;
            height: 60px;
            right: 9%;
            color: #fff;
            border-radius: 80px;
            border: solid 5px #2e8ddb;
            background-color: #2e8ddb;
          }
        }
      }
    }
    .vote-box {
      .active {
        height: 70%;
        margin: 18% auto 0;
        .vote-title {
          height: 13%;
          line-height: 310%;
          font-size: 50px;
          text-align: center;
          background: url("../assets/images/vote-title.png") no-repeat 12% 43% / 7%;
        }
        .vote-list {
          width: 100%;
          height: 77%;
          overflow: auto;
          p:nth-of-type(odd){
            background: #f5f5f5;
          }
          p:nth-of-type(even){
            background: #fff;
          }
          p {
            height: 70px;
            padding: 2px 25px;
            line-height: 45px;
            span {
              display: inline-block;
              font-size: 30px;
            }
            .sort {
              width: 40px;
              height: 40px;
              line-height: 40px;
              font-size: 20px;
              text-align: center;
              color: #fff;
              border-radius: 50%;
              background-color: #1a578b;
            }
            .program-name {
              display: inline-block;
              width: 56%;
              line-height: 100%;
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
            }
            .like {
              width: 20%;
              .custom-form-checkbox {
                float: left;
                display: block;
                width: 45px;
                height: 45px;
                margin-right: 10px;
                background: url('../assets/images/sprite.png') no-repeat -140px -112px transparent;
              }
            }
            .presentation {

            }
          }
        }
        .submit-vote {
          height: 8%;
          width: 100%;
          text-align: center;
          button {
            width: 45%;
            height: 80px;
            margin-top: 2.5%;
            font-size: 45px;
            border: none;
            color: #ffffff;
            background-color: #12589b;
            border-radius: 640px;
          }
        }
      }
    }
    .program-box {
      .active {
        height: 60%;
        margin: 30% auto 0;
        color: #308ddb;
        .program-title {
          height: 15%;
          padding-top: 30px;
          border-bottom: 5px solid #e2e2e3;
          p {
            font-size: 58px;
            text-align: center;
          }
        }
        .program-name, .program-type {
          height: 15%;
          border-bottom: 5px solid #e2e2e3;
        }
        .program-name, .program-type, .program-gather {
          p {
            text-align: center;
            font-size: 48px;
          }
          .title {
            color: #000;
          }
          .center {

          }
        }
      }
    }
    .pa-screen {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 35%;
      .active {
        width: 80%;
        height: 100%;
        margin: 0 auto;
        font-size: 50px;
        color: #fff;
        img {
          width: 100%;
        }
        p {
          position: absolute;
          width: 100%;
          top: 50%;
          left: 0%;
          text-align: center;
        }
      }
    }
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
    opacity: .8;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
    opacity: 1;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }

  /*三角图标*/


  /*.left:before {*/


  /*width: 0;*/


  /*position: absolute;*/


  /*top: 12px;*/


  /*border-style: solid;*/


  /*content: "";*/


  /*left: -1px;*/


  /*border-color: transparent #fff;*/


  /*border-width: 0 12px 12px 0;*/


  /*}*/
</style>
