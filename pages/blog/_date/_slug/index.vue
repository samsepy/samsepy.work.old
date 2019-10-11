<template>
  <div class="container">
    <div class="wrapper">
      <article>
        <h1 class="title">{{ title }}</h1>
        <div class="post-meta">
          <time>{{ params.date }}</time>
        </div>
        <div v-html="bodyHtml" />
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
    // console.log(params);
    return {
      title: title,
      meta: [
        { hid: "description", name: "description", content: `${this.preview}` },
        { hid: "og:site_name", name: "og:site_name", content: "samsepy" },
        { hid: "og:type", name: "og:type", content: "article" }
        // { hid: "og:url", name: "og:url", content: `https://samsepy.work/blog/${params.date}/` }
      ]
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