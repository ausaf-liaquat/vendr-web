<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HomePage from './components/HomePage.vue'; // Changed from HelloWorld to HomePage
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />


    <div class="wrapper">
      <HomePage msg="You did it!" /> <!-- Changed from HelloWorld to HomePage -->

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>
