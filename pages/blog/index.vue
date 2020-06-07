<template>
  <section>
    <h1>Archives</h1>
    <article v-for="content in fileMap" v-bind:key="content.id">
      <nuxt-link
        :to="{ path: `/blog/${content.created_at}/${content.title}` }"
        class="link"
      >
        <h2>{{ content.title }}</h2>
        <div class="post-meta">
          <time>{{ content.created_at }}</time>
        </div>
        <p>{{ content.preview }}</p>
      </nuxt-link>
    </article>
  </section>
</template>

<script>
import summaryObject from "~/contents/blog/json/summary.json";

const updateSummaryObject = () => {
  for (const currentFile of Object.keys(summaryObject.fileMap)) {
    const fileCreatedAt = summaryObject.fileMap[currentFile].created_at;
    summaryObject.fileMap[currentFile].created_at = formatDate(fileCreatedAt);
  }
};

const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = ("0" + (d.getMonth() + 1)).slice(-2);
  const day = ("0" + d.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};

export default {
  data() {
    updateSummaryObject();
    return Object.assign({}, summaryObject);
  },
  head() {
    const title = "blog - samsepy";
    const description = "samsepy blog index";
    return {
      title: title,
      meta: [
        { hid: "description", name: "description", content: description },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://samsepy.work/blog/`,
        },
        { hid: "og:type", property: "og:type", content: "article" },
        { hid: "og:title", property: "og:title", content: title },
        {
          hid: "og:description",
          property: "og:description",
          content: description,
        },
      ],
    };
  },
};
</script>

<style scoped>
.link {
  display: block;
  text-decoration: none;
}

.dark .post-meta {
  font-size: 0.8em;
  margin: 16px 0;
  text-align: left;
  background-color: #616161;
  color: #fff;
}

.light .post-meta {
  font-size: 0.8em;
  margin: 16px 0;
  text-align: left;
  background-color: #fff;
  color: #616161;
}
</style>
