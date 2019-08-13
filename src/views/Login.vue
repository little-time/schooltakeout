<template>
  <div class="login_content">
    <div class="login-wrap" v-show="isTrue">
      <div class="logo">
        <img src alt="#" />
      </div>
      <div class="input">
        <input type="text" placeholder="请输入用户名" v-model="username" />
        <input type="password" placeholder="请输入密码" v-model="password" />
        <button @click="login">登录</button>
        <h5>忘记密码?</h5>
      </div>
      <div class="inset">
        <p>
          没有账号?
          <span @click="toRegiste">立即注册</span>
        </p>
      </div>
    </div>
    <div class="registe" v-show="!isTrue">
      <div class="input">
        <input type="text" placeholder="请输入用户名" v-model="username" />
        <input type="password" placeholder="请输入密码" v-model="password" />
        <input type="password" placeholder="请确认密码" v-model="rePassword" />
        <button @click="Registe">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
import {loginIn} from '../httpApi/loginApi';
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      rePassword:'',
      isTrue: true
    };
  },
  methods: {
    toRegiste () {
      this.isTrue = false;
    },
    login () {
      let data ={
        username: this.username,
        password: this.password
      };
      this.$http.post("/api/user/login",data).then(res => {
        console.log(res.data.errno)
        if(res.data.errno == 0){
          sessionStorage.setItem("user", data.username); // 保存用户到本地会话
          this.$router.push('/')
        }
      }).catch(err => {
          console.log(err)
          })
    },
    Registe(){
       let data ={
        username: this.username,
        password: this.password
      };
      this.$http.post("/api/user/register",data).then(res => {
        console.log(res.data.errno)
        if(res.data.errno == 0){
          this.isTrue = true;
        }
      }).catch(err => {
          console.log(err)
          }) 
    }
  }
};
</script>

<style scoped>
.login_content {
  width: 100%;
  height: 100%;
  text-align: center;
}
.login-wrap {
  height: 100%;
}
.registe {
  margin: 60px 0;
}
.logo {
  width: 140px;
  height: 140px;
  margin: 50px auto;
  border-radius: 50%;
  border: 1px solid #07c160;
}
.logo img {
  width: 100%;
  height: 100%;
}
.input input {
  width: 180px;
  height: 30px;
  display: block;
  margin: 10px auto;
  padding: 5px 10px;
  border-bottom: 1px solid #ecece9;
}
.input input::-webkit-input-placeholder {
  font-size: 12px;
  color: #dadad8c0;
}
.input button {
  display: block;
  margin: 20px auto;
  padding: 10px 85px;
  border-bottom: 1px solid #ecece9;
  background: #07c160;
  font-size: 16px;
  color: #fff;
  border-radius: 15px;
  letter-spacing: 5px;
  font-weight: bold;
}
.input h5 {
  font-size: 10px;
  color: #07c160;
}
.inset {
  padding: 15px 0;
  font-size: 12px;
  color: #000;
  width: 100%;
  position: absolute;
  bottom: 30px;
}
.inset p span {
  color: #07c160;
  font-size: 12px;
  padding-left: 4px;
}
</style>