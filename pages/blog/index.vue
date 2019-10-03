<template>
  <div class="container">
    <div class="wrapper">
      <section>
        <h1>Blog</h1>
        <article v-for="content in fileMap" v-bind:key="content.id">
          <nuxt-link :to="{ path: '/blog/' + content.created_at + '/' + content.title }">
            <h2>{{ content.title}}</h2>
            <p>{{ content.preview }}</p>
            <time>{{ content.created_at }}</time>
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

<style>
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

h1, h2 {
  color: #96514d;
  font-weight: normal;
}

p {
  margin: 16px 0;
  text-align: left;
}

a {
  color: #696969;
  text-decoration: none;
}

article:hover {
  text-decoration: underline;
}

.wrapper {
  padding: 30px 10px;
}

time {
  font-weight: bold;
}
</style>
