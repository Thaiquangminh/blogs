<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" v-if="!isAuth"/>
    <BlogPost :post="blog" v-for="(blog, index) in getBlogs" :key="index"/>
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in getBlogCards" :key="index"/>
        </div>
      </div>
    </div>
    <div class="updates" v-if="!isAuth">
      <div class="container">
        <h2>never miss a post. Register for your free account today!</h2>
        <router-link class="router-button" to="/register"> Register for FireBlogs
          <Arrow class="arrow arrow-light"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "@/components/BlogPost.vue";
import BlogCard from "@/components/BlogCard.vue";
import Arrow from "../assets/Icons/arrow-right-light.svg";
import {mapGetters} from "vuex";

export default {
  name: "Home",
  components: {BlogCard, BlogPost, Arrow},
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost: "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding"
      },
    }
  },
  computed: {
    ...mapGetters('card', ['getBlogCards']),
    ...mapGetters('auth', ["isAuth"]),
    ...mapGetters('blog', ['getBlogs'])
  }

};
</script>

<style lang="sass" scoped>
.blog-card-wrap
  position: relative
  padding: 80px 16px
  background-color: #f1f1f1
  @media (min-width: 500px)
    padding: 100px 16px

  h3
    font-weight: 300
    font-size: 28px
    margin-bottom: 32px

  .blog-cards
    display: grid
    gap: 32px

    @media (max-width: 499px)
      grid-template-columns: 1fr
    @media (min-width: 500px)
      grid-template-columns: repeat(2, 1fr)

    @media (min-width: 900px)
      grid-template-columns: repeat(3, 1fr)

    @media (min-width: 1200px)
      grid-template-columns: repeat(4, 1fr)

.updates
  .container
    padding: 100px 25px
    display: flex
    flex-direction: column
    align-items: center
    @media (min-width: 800px)
      padding: 125px 25px
      flex-direction: row

    .router-button
      display: flex
      font-size: 14px
      text-decoration: none
      @media (min-width: 800px)
        margin-left: auto

    h2
      font-weight: 300
      font-size: 32px
      max-width: 425px
      width: 100%
      text-align: center
      text-transform: uppercase
      @media (min-width: 800px)
        text-align: initial
        font-size: 40px
</style>
