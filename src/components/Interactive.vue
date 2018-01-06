<template>
  <div class="main">
    <div class="chat">
      <ul class="chat-box">
        <li class="bubblebox clearfix">
          <img src="../assets/images/05.jpg" alt="">
          <p>
            <span class="nickname">某一位</span>
            <span class="new-time">19:20:41</span>
            <span class="bkbubble left">咖啡泡进喧嚣的庭院</span>
          </p>
        </li>
        <li class="bubblebox clearfix">
          <img src="../assets/images/06.jpg" alt="">
          <p>
            <span class="nickname">某一位</span>
            <span class="new-time">19:20:41</span>
            <span class="bkbubble left">咖啡泡进喧嚣的庭院</span>
          </p>
        </li>
        <li class="bubblebox clearfix">
          <img src="../assets/images/07.jpg" alt="">
          <p>
            <span class="nickname">某一位</span>
            <span class="new-time">19:20:41</span>
            <span class="bkbubble left">咖啡泡进喧嚣的庭院</span>
          </p>
        </li>
        <li class="bubblebox clearfix">
          <img src="../assets/images/08.jpg" alt="">
          <p>
            <span class="nickname">某一位</span>
            <span class="new-time">19:20:41</span>
            <span class="bkbubble left">333被咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院</span>
          </p>
        </li>
        <li class="bubblebox clearfix">
          <img src="../assets/images/09.jpg" alt="">
          <p>
            <span class="new-time">19:20:41</span>
            <span class="bkbubble left">333被咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院</span>
          </p>
        </li>
        <li class="bubblebox clearfix">
          <img src="../assets/images/09.jpg" alt="">
          <p>
            <span class="nickname">某一位</span>
            <span class="new-time">19:20:41</span>
            <span class="bkbubble left">333被咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院</span>
          </p>
        </li>
        <li class="bubblebox clearfix">
          <img src="../assets/images/09.jpg" alt="">
          <p>
            <span class="nickname">某一位</span>
            <span class="new-time">19:20:41</span>
            <span class="bkbubble left">333被咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院</span>
          </p>
        </li>
        <li class="bubblebox clearfix">
          <img src="../assets/images/01.jpg" alt="">
          <p>
            <span class="nickname">某一位</span>
            <span class="new-time">19:20:41</span>
            <span class="bkbubble left">333被咖啡泡进喧嚣的庭院咖啡泡进喧嚣的32584庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院咖啡泡进喧嚣的庭院</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="interaction">
      <span v-for="(item, index) in interactionList" :class=interactionList[index] @click="interaction(item, index)"></span>
    </div>
    <div class="chat-edit">
      <span></span>
      <input class="input-chat" type="text" placeholder="请输入您想说的话">
      <button class="send-btn">发送</button>
    </div>
    <transition name="fade">
      <div v-if="msg" class="reminder">
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
            <button @click="buy()">购 买</button>
          </p>
          <p v-else-if="pitch == 'use'" class="quantity">
            <input class="appoint-text" type="text" placeholder="请输入霸屏内容3">
            <button @click="use()">使 用</button>
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Interactive',
    data() {
      return {
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
        msg: false,
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
        }
        else if (index == 1) {
          console.log('点击了霸屏哦！');
          this.msg = true
        }
        else if (index == 2) {
          console.log('点击了节目屏哦！');
        }
      },
      close () {
        this.msg = false
        this.amount = 1
        for (let i in this.buyList) {
          this.buyList[i][0].splice(1, 1)
        }
        for (let i in this.useList) {
          this.buyList[i][0].splice(1, 1)
        }
        this.buyList[0][0].push('buy-duration-active')
      },
      buy () {
//          购买的数量
        let quantity = this.amount
        this.amount = 1
        console.log('点击了购买' + quantity)
      },
      use () {
        console.log('点击了使用')
      },
      elect (arr, item, index) {
        for (let i in arr) {
          arr[i][0].splice(1, 1)
        }
        item[0].push('buy-duration-active')
      }
    }
  }
</script>
<style lang="scss" scoped>
  input, button, select, textarea {
    outline: none;
  }

  i {
    font-style: normal;
  }

  .main {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    background: url("../assets/images/chat-bg.jpg") no-repeat top / 100% auto #add5f8;
    overflow: hidden;
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      overflow: auto;
    }
    .chat {
      position: relative;
      height: 80%;
      overflow: auto;
      padding-top: 80px;
      .chat-box {
        height: 90%;
        .bubblebox {
          list-style: none;
          img {
            float: left;
            width: 100px;
            height: auto;
            margin-left: 20px;
          }
          p {
            float: left;
            position: relative;
            margin: 0 0 60px 10px;
            width: 80%;
            .nickname {
              position: absolute;
              top: -44px;
              font-size: 16px;
              color: #969698;
            }
            .new-time {
              position: absolute;
              left: 100px;
              top: -44px;
              font-size: 16px;
              color: #969698;
            }
            .bkbubble {
              max-width: 90%;
              min-height: 50px;
              font-size: 36px;
              line-height: 50px;
              background-color: #daebfb;
              color: #000004;
              display: inline-block;
              padding: 25px 15px;
              border-radius: 8px
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
        height: 48%;
        border-radius: 50px;
        border: 1px solid #85817e;
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
    .reminder {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .3);
      z-index: 2;
      /*display:none;*/
      div {
        position: relative;
        width: 78%;
        height: 30%;
        color: black;
        border-radius: 20px;
        background-color: #FFF;
        margin: 70% auto 0;
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
            font-size: 40px;
            margin-left: 10%;
          }
          .count {
            position: absolute;
            width: 20%;
            height: 100%;
            left: 23%;
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
          .appoint-text, button {
            position: absolute;
            top: 19%;
          }
          .appoint-text {
            width: 55%;
            height: 50%;
            left: 9%;
            /*border: solid 5px #2e8ddb;*/
          }
          button {
            width: 20%;
            height: 55%;
            right: 9%;
            color: #fff;
            border-radius: 80px;
            border: solid 5px #2e8ddb;
            background-color: #2e8ddb;
          }
        }
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
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter,
  .fade-leave-to
    /* .fade-leave-active in below version 2.1.8 */

  {
    opacity: 0
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
