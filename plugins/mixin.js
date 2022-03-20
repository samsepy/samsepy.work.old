import Vue from "vue";

Vue.mixin({
  methods: {
    trackEventClick(category) {
      this.$ga.event({
        eventCategory: category,
        eventAction: "click",
      });
    },
  },
});
