<script>
import Navbar from './Navbar.vue';
import Banner from './Banner.vue';
import Features from './Features.vue';
import Facilities from './Facilities.vue';

export default {
  name: 'HomePage',
  components: {
    Navbar,
    Banner,
    Features,
    Facilities,
  }
};
</script>

<template>
  
    <Navbar />
    <Banner />
    <Features />
    <Facilities />
   
</template>



