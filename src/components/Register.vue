<template>
  <div class="main">
    <div>
      <p class="title-size">Welcome To Join</p>
      <p class="main-size">-- 年 会 个 人 信 息 登 记 --</p>
      <img src="../assets/images/logo.png" alt="">
    </div>
    <form name="info" id="info">
      <p>
        <input class="main-size info-name" type="text" name="name" placeholder="请输入您的名字:">
        <span class="hint-name">{{hintName}}</span>
      </p>
      <p>
        <select name="selected" id="section" class="main-size" @change="sectionChange()">
          <option style="display: none;" disabled selected>--请选择所属部门--</option>
          <option v-for="item in sections" :key="item.departmentId" :value="item.departmentId">{{ item.name }}</option>
          <option value="volvo">Volvo</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
        </select>
        <span class="section-name">{{sectionName}}</span>
        <span class="section-icon"></span>
      </p>
      <p>
        <input type="button" value="确　认　提　交　" @click="getFormInfo();">
      </p>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data() {
      return {
        sections: [],
        hintName: '',
        sectionName: ''
      }
    },
    mounted() {
//      this.login()
    },
    methods: {
      sectionChange () {

      },
      getFormInfo () {
        var form = document.getElementById("info")
        var content = form[0].value.replace(/\s+/g, "")
        var departmentId = form[1].value
        if (/^[\u4e00-\u9fa5]+$/i.test(content) && content.length >= 2) {
          if (departmentId == '--请选择所属部门--') {
            this.hintName = '';
            this.sectionName = '请选择您所在的部门'
          } else {
            this.hintName = '';
            this.sectionName = ''
//            提交信息
            form[0].value = '';
            form[1].value = '--请选择所属部门--';
            console.log(form, content, departmentId);
          }
        } else if (content == '') {
          this.hintName = '名字不能为空';
        } else {
          this.hintName = '名字输入有误';
        }
      },
      login () {
        let _this = this;
        this.$ajax('http://lunzi.mynatapp.cc/wechat/users/oAJ1ds18iHbXzD3JZfq2xEqVA_yo')
          .then(function (response) {
            console.log(response)
            _this.sectionList()
          })
          .catch(function (error) {
            console.log(error)
          });
      },
      sectionList () {
        let _this = this;
        this.$ajax('http://lunzi.mynatapp.cc/departments')
          .then(function (response) {
            console.log(response.data)
//            更新部门列表
            _this.sections = response.data
          })
          .catch(function (error) {
            console.log(error)
          });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/layout.scss';

  .title-size {
    font-size: 112px;
  }

  .main-size {
    font-size: 48px;
  }

  .main {
    background: url("../assets/images/registerbg.jpg") no-repeat left bottom / 100% #1b225f;
    div {
      width: 100%;
      padding-top: 112px;
      color: #fff;
      text-align: center;
      img {
        width: 386px;
        margin: 100px auto 40px;
        opacity: .8;
      }
    }
    form {
      margin-top: 80px;
      width: 100%;
      text-align: center;
      p {
        position: relative;
        margin-bottom: 100px;
        text-align: center;
        span {
          position: absolute;
        }
        .hint-name, .section-name {
          bottom: -62px;
          left: 130px;
          font-size: 40px;
          color: #ad2224;
        }
        .section-icon {
          right: 120px;
          width: 0;
          height: 0;
          bottom: 35px;
          border: 20px solid #545a5d;
          border-color: #545a5d transparent transparent transparent;
        }
        input, select {
          width: 832px;
          border-radius: 80px;
          background-color: transparent;
          border: 3px solid #fff;
          text-indent: 40px;
        }
        input, option {
          color: #fff;
        }
        input[type="text"] {
          height: 133px;
        }
        select {
          height: 139px;
          appearance: none;
          -moz-appearance: none;
          -webkit-appearance: none;
          color: #545a5d;
        }
        option {
          /*color: #fff;*/
          background-color: #000;
        }
        input[type="button"] {
          width: 832px;
          height: 133px;
          margin-bottom: 150px;
          font-size: 56px;
          /*color: #fff;*/
          border: solid 5px #0f015e;
          background: -webkit-gradient(linear, left top, left bottom, from(#00adee), to(#0a4782));
        }
      }
    }
  }
</style>

