<script>
import Navbar from './Navbar.vue';
import Banner from './Banner.vue';
import Features from './Features.vue';


export default {
  name: 'HomePage',
  components: {
    Navbar,
    Banner,
    Features,
  }
};
</script>

<template>
  
    <Navbar />
    <Banner />
    <Features />
   
</template>



