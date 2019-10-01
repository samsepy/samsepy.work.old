<template>
  <div class="container">
    <div class="wrapper">
      <section>
        <h1>Blog</h1>
        <article v-for="content in fileMap" v-bind:key="content.id">
          <h2>{{ content.title}}</h2>
          <p>{{ content.preview }}</p>
          <time>{{ content.created_at }}</time>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
// import { sourceFileArray } from '../../contents/blog/json/summary.json';
export default {
  asyncData() {
    return Object.assign({}, require(`~/contents/blog/json/summary.json`));
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
  list-style-type: none;
  padding: 0;
  text-align: left
}

li {
  margin: 5px 0;
}

a {
  color: #96514d;
}

.bio {
  text-align: center;
}

.wrapper {
  padding: 30px 10px;
}

.logo {
  border-radius: 50%;
}

li span {
  display: inline-block;
}

.term {
  color: #96514d;
}

time {
  font-weight: bold;
}
</style>
