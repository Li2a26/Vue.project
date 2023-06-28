<template>
   <div class="home">
    <HomeComp />
  <!-- <router-view />
  <FooterComp />  -->
 
   </div>
 
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HomeComp.vue'
import HomeComp from '@/components/HomeComp.vue';

export default {
  components: { HomeComp
  }
}
</script>

