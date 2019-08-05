<template>
  <div class="main">
    <router-view/>
    <ul class="main_content">
      <li><router-link :to="{name: 'setpost'}">发布</router-link></li>
      <li><router-link :to="{name: 'getpost'}">接单</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.main_content{
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
}
.main_content{
  display: flex;
}
.main_content  li{ 
  flex:1;
  color: black;
  text-align: center;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  border-right: 1px solid #42b983;
  border-top: 1px solid #42b983;
}
.main_content  li:last-child{
  border-right: none;
}
.main_content  li a{
  display: block;
  color: black;
}
.main_content  li .active{
  color: #fff;
  background: #42b983;
}
</style>
