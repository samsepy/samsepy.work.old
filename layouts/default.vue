<template>
  <div class="container">
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header
  }
};
</script>

<style>
html {
  font-family: Ubuntu, sans-serif;
  font-size: 18px;
  font-weight: 300;
  background-color: #fff;
  color: #f29d4b;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
