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
    const description = `${this.preview}`.replace(/\s+|\r?\n/g, "");
    return {
      title: title,
      meta: [
        { hid: "description", name: "description", content: description },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://samsepy.work/blog/${this.params.date}/${this.params.slug}`
        },
        { hid: "og:type", property: "og:type", content: "article" },
        { hid: "og:title", property: "og:title", content: title },
        {
          hid: "og:description",
          property: "og:description",
          content: description
        }
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