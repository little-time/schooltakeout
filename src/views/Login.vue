<template>
  <div class="login_content">
    <div class="logo">
      <img src="http://thumbs.dreamstime.com/b/%E4%B8%8E-%E4%B8%8B%E8%90%BD%E7%9A%84%E8%8D%89-36493052.jpg" alt="#" />
    </div>
    <div class="input">
      <input type="text">
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style scoped>
.login_content{
  width: 100%;
  height: 100%;
  text-align: center
}
.logo{
  width: 80%;
  height: 140px;
  margin: 0px auto;
  padding-top: 50px;
}
.logo img{
  width: 100%;
  height: 100%;
}
</style>