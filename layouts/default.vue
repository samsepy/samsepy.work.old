<template>
  <div :class="currentMode">
    <div class="container">
      <Header />
      <nuxt />
      <Footer />
      <span :class="currentSwitch" @click="setMode">
        <fa :icon="faLightbulb" class="switch-icon" />
      </span>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
export default {
  data: function() {
    return {
      mode: "",
    };
  },
  components: {
    Header,
    Footer,
  },
  created: function() {
    if (localStorage.colorThema !== "light" && this.isDarkMode()) {
      this.mode = "dark";
    }
  },
  computed: {
    currentMode() {
      if (this.mode === "dark") {
        return "dark";
      } else {
        return "light";
      }
    },
    currentSwitch() {
      if (this.currentMode === "dark") {
        return "switch-light";
      } else {
        return "switch-dark";
      }
    },
    faLightbulb() {
      return faLightbulb;
    },
  },
  methods: {
    setMode() {
      if (localStorage.colorThema === "light") {
        this.mode = "dark";
        localStorage.colorThema = "dark";
      } else {
        this.mode = "light";
        localStorage.colorThema = "light";
      }
    },
    isDarkMode() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    },
  },
};
</script>

<style>
html {
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-size: 18px;
  font-weight: 700;
  background-color: #fff;
  color: #616161;
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
