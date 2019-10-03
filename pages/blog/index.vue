<template>
  <div class="container">
    <div class="wrapper">
      <section>
        <h1>Blog</h1>
        <article v-for="content in fileMap" v-bind:key="content.id">
          <nuxt-link :to="{ path: '/blog/' + content.created_at + '/' + content.title }" class="link">
            <h2>{{ content.title}}</h2>
            <p>{{ content.preview }}</p>
            <time class="created-at">{{ content.created_at }}</time>
          </nuxt-link>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
import summaryObject from '../../contents/blog/json/summary.json';

const updateSummaryObject = () => {
  for (const currentFile of Object.keys(summaryObject.fileMap)) {
    const fileCreatedAt = summaryObject.fileMap[currentFile].created_at;
    summaryObject.fileMap[currentFile].created_at = formatDate(fileCreatedAt);
  }
}

const formatDate = date => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = ('0' + (d.getMonth() + 1)).slice(-2);
  const day = ('0' + d.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
}

export default {
  asyncData() {
    updateSummaryObject();
    return Object.assign({}, summaryObject);
  }
}
</script>

<style scoped>
.link {
  display: block;
  color: #696969;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.created-at {
  font-weight: bold;
}
</style>
