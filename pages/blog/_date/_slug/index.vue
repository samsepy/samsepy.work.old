<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="post-meta"><time>{{ params.date }}</time></div>
    <div v-html="bodyHtml"></div>
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
        const title = `${this.title} - samsepy.work`;
        const url = `https://samsepy.work/blog/${this.params.date}/${this.params.slug}/`;
        return {
            title: title,
            meta: [
                { hid: 'og:url', property: 'og:url', content: url },
                { hid: 'og:title', property: 'og:title', content: title }
            ],
            link: [{ rel: 'canonical', href: url }],
        };
    },
};
</script>