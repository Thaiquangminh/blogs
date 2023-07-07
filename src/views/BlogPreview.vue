<template>
  <div class="post-view">
    <div class="container quillWrapper">
      <h2>{{ this.blogData.blogTitle }}</h2>
      <img :src="this.blogData.fileUrl" alt=""/>
      <div class="post-content ql-editor" v-html="this.blogData.blogHTML"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPreview",
  created() {
    this.blogData = this.$route.params.data
    console.log(this.blogData)
  },
  data() {
    return {
      blogData: ''
    }
  },
};
</script>

<style lang="scss">
.post-view {
  min-height: 100%;

  .container {
    max-width: 1000px;
    padding: 60px 25px;
  }

  .ql-editor {
    padding: 0;
  }

  h2 {
    margin-bottom: 16px;
    font-weight: 300;
    font-size: 32px;
  }

  img {
    width: 100%;
    margin-bottom: 32px;
  }
}
</style>