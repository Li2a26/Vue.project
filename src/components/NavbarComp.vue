<template>
  <nav class="topnav">
    <router-link class="active" to="/">Home</router-link>
    <router-link to="/products">Products</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped >
.topnav {
  background-color:lightpink;
  overflow: hidden;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

router-link {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.active {
  background-color:antiquewhite;
}
</style>












