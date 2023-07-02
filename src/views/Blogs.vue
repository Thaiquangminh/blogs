<template>
  <div class="blog-card-wrap">
    <div class="blog-cards container">
      <div class="toggle-edit">
        <span>Toggle Editing Post</span>
        <input type="checkbox" hidden="hidden" v-model="editPost">
        <label class="switch" :for="editPost" @click="handleToggleEdit"/>
      </div>
      <BlogCard :open-edit-post="editPost" :post="post" v-for="(post, index) in getBlogCards" :key="index"/>
    </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard";
import {mapGetters} from "vuex";

export default {
  name: "blogs",
  data() {
    return {
      editPost: false
    }
  },

  components: {BlogCard},
  computed: {
    ...mapGetters('card', ['getBlogCards']),
  },

  methods: {
    handleToggleEdit() {
      this.editPost = !this.editPost
    }
  }

};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  position: relative;
  padding: 80px 16px;
  background-color: #f1f1f1;
  @media (min-width: 500px) {
    padding: 100px 16px;
  }

  .blog-cards {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;

    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}


.blog-cards {
  position: relative;

  .toggle-edit {
    display: flex;
    align-items: center;
    position: absolute;
    top: -70px;
    right: 0;

    span {
      margin-right: 16px;
    }
  }

  //  Switch css
  .switch {
    display: inline-block;
    position: relative;
    width: 50px;
    height: 25px;
    border-radius: 20px;
    background: #dfd9ea;
    transition: background 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 2px;
    width: 22px;
    height: 22px;
    background: #fafafa;
    border-radius: 50%;
    transition: left 0.28s cubic-bezier(0.4, 0, 0.2, 1), background 0.28s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .switch:active::before {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28), 0 0 0 20px rgba(128, 128, 128, 0.1);
  }

  input:checked + .switch {
    background: #72da67;
  }

  input:checked + .switch::before {
    left: 27px;
    background: #fff;
  }

  input:checked + .switch:active::before {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28), 0 0 0 20px rgba(0, 150, 136, 0.2);
  }
}
</style>