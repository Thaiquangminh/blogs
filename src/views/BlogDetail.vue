<template>
  <div class="post-view">
    <div class="container quillWrapper">
      <h2>{{ this.currentBlog[0].title }}</h2>
      <h4>Posted on: {{ new Date(this.currentBlog[0].blogDate).toLocaleString("en-us", {dateStyle: "long"}) }}</h4>
      <img :src="this.currentBlog[0].blogCoverPhoto" alt=""/>
      <div class="post-content ql-editor" v-html="this.currentBlog[0].blogHTML"></div>

      <div class="post-hashtag">
        <a :href="`${this.currentBlog[0].linkUrl}`" target="_blank">{{ this.currentBlog[0].linkUrl }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "BlogDetail",
  data() {
    return {
      currentBlog: null,
    };
  },
  computed: {
    ...mapState('blog', ['blogs']),
  },
  async mounted() {
    this.currentBlog = await this.blogs.filter(blog => {
      return blog.id == this.$route.params.id
    })
  }
};
</script>

<style lang="scss">
.post-view {
  .container {
    max-width: 1000px;
    padding: 60px 25px;
  }

  h2 {
    text-transform: uppercase;
  }

  .ql-editor {
    padding: 0;
  }

  .post-content {
    line-height: 30px
  }

  img {
    width: 100%;
    margin-bottom: 32px;
  }

  h4 {
    margin-top: 10px;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 24px;
  }

  .post-hashtag {
    margin-top: 30px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: underline;
  }
}
</style>