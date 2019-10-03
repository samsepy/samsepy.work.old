<template>
  <div class="container">
    <div class="wrapper">
      <h1>{{ title }}</h1>
      <div class="post-meta"><time>{{ params.date }}</time></div>
      <div v-html="bodyHtml"></div>
    </div>
  </div>   
</template>

<script>
import { sourceFileArray } from '../../../../contents/blog/json/summary.json';
export default {
    validate({ params }) {
        return sourceFileArray.includes(`contents/blog/markdown/${params.date}-${params.slug}.md`);
    },
    asyncData({ params }) {
        return Object.assign({}, require(`~/contents/blog/json/${params.date}-${params.slug}.json`), { params });
    },
    head() {
        const title = `${this.title} - samsepy`;
        return {
            title: title
        };
    },
};
</script>

<style>
@import 'assets/css/monokai.css';

.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 750px;
}

h1 {
  margin: 25px 0;
}

h2 {
  margin: 20px 0;
  text-align: left;
}

h3 {
  margin: 18px 0;
  text-align: left;
}

h1, h2 {
  color: #96514d;
  font-weight: normal;
}

p {
  margin: 16px 0;
  text-align: left;
}

ul {
  padding: 0;
  text-align: left
}

li {
  margin: 5px 0;
}

a {
  color: #96514d;
}

.wrapper {
  padding: 60px 10px 30px;
}
</style>