<template>
  <div class="container">
    <div class="wrapper">
      <article>
        <h1 class="title">{{ title }}</h1>
        <div class="post-meta">
          <time>{{ params.date }}</time>
        </div>
        <div v-html="bodyHtml"></div>
      </article>
    </div>
  </div>
</template>

<script>
import { sourceFileArray } from "~/contents/blog/json/summary.json";
export default {
  validate({ params }) {
    return sourceFileArray
      .map(sourceFile => {
        return sourceFile.normalize();
      })
      .includes(
        `contents/blog/markdown/${params.date}-${params.slug}.md`.normalize()
      );
  },
  asyncData({ params }) {
    return Object.assign(
      {},
      require(`~/contents/blog/json/${params.date}-${params.slug}.json`),
      { params }
    );
  },
  head() {
    const title = `${this.title} - samsepy`;
    return {
      title: title
    };
  }
};
</script>

<style scoped>
@import "assets/css/monokai.css";

.title {
  text-align: center;
}

.post-meta {
  font-size: 0.8em;
  margin-bottom: 20px;
  text-align: right;
}
</style>