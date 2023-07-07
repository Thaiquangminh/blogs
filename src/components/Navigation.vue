<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" to="/">Fire Blogs</router-link>
      </div>
      <div class="nav-links">
        <ul v-if="!mobile" style="display: flex; align-items: center">
          <router-link class="link" to="/">Home</router-link>
          <router-link class="link" to="/blogs">Blogs</router-link>
          <router-link class="link" to="/create-blog">Create Post</router-link>
          <router-link v-if="!isAuth" class="link" to="/login">Login / Register</router-link>
          <!-- ---------------------- Logged In ------------------- -->
          <div v-if="isAuth" :class="{ 'mobile-user-menu': mobile }" @click="toggleProfileMenu" class="profile"
          >
            <span>{{ profileImg }}</span>
            <div v-show="activeProfileMenu" class="profile-menu">
              <div class="info">
                <p class="initials">{{ profileImg }}</p>
                <div class="right">
                  <p>{{ username }}</p>
                  <p>{{ firstname }} {{ lastname }}</p>
                  <p>{{ email }}</p>
                </div>
              </div>
              <div class="options">
                <div class="option">
                  <router-link class="option" :to="{ name: 'Profile' }">
                    <userIcon class="icon"/>
                    <p class="option_item">Profile</p>
                  </router-link>
                </div>
                <div class="option" @click="logout">
                  <signOutIcon class="icon"/>
                  <p class="option_item">Sign Out</p>
                </div>
              </div>
            </div>
          </div>

        </ul>
      </div>
    </nav>
    <menu-icon class="menu-icon" v-if="mobile" @click="toggleNav"/>
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-if="mobileNav">
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/blogs">Blogs</router-link>
        <router-link class="link" to="/create-blog">Create Post</router-link>
        <router-link class="link" to="/login">Login / Register</router-link>
      </ul>
    </transition>
  </header>
</template>

<script>
import menuIcon from "../assets/Icons/menu.svg";
import userIcon from "../assets/Icons/user-alt-light.svg";
import signOutIcon from "../assets/Icons/sign-out-alt-regular.svg";
import {mapActions, mapGetters, mapState} from "vuex";


export default {

  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  data() {
    return {
      windowWidth: null,
      mobile: null,
      mobileNav: null,
      activeProfileMenu: null,
      profileImg: ''
    };
  },
  mounted() {
  },
  components: {
    menuIcon,
    userIcon,
    signOutIcon
  },

  computed: {
    ...mapGetters('auth', ['isAuth']),
    ...mapState('auth', ['info']),
    firstname() {
      return this.info.firstname;
    },
    lastname() {
      return this.info.lastname
    },
    username() {
      return this.info.username
    },
    email() {
      return this.info.email
    }

  },
  methods: {
    ...mapActions('auth', ['logout']),
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 700) {
        this.mobileNav = false
        this.mobile = true;
      } else {
        this.mobile = false;
        this.mobileNav = false;
      }
    },
    toggleNav() {
      this.mobileNav = !this.mobileNav;
    },
    toggleProfileMenu() {
      this.activeProfileMenu = !this.activeProfileMenu;
    },

  },
};
</script>

<style lang="sass" scoped>
header
  background-color: #fff
  padding: 0 25px
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
  z-index: 99

  .link
    font-weight: 500
    padding: 0 8px
    transition: 0.3s color ease

    &:hover
      color: #1eb8b8

  nav
    display: flex
    padding: 25px 0

    .nav-links
      position: relative
      display: flex
      flex: 1
      align-items: center
      justify-content: flex-end

      ul
        margin-right: 32px

        .link
          margin-right: 32px

        .link:last-child
          margin-right: 0


    .branding
      display: flex
      align-items: center

      .header
        font-weight: 600
        font-size: 24px
        color: #000
        text-decoration: none

.mobile-nav
  display: flex
  flex-direction: column
  background-color: #303030
  position: fixed
  top: 0
  left: 0
  height: 100%
  max-width: 250px
  width: 70%
  padding: 20px

  .link
    padding: 15px 0
    color: #fff

.menu-icon
  cursor: pointer
  position: absolute
  top: 32px
  right: 25px
  height: 25px
  width: auto

// profile logged in
.profile
  position: relative
  cursor: pointer
  display: flex
  align-items: center
  justify-content: center
  width: 40px
  height: 40px
  border-radius: 50%
  color: #fff
  background-color: #303030

  span
    pointer-events: none

.profile-menu
  position: absolute
  top: 60px
  right: 0
  width: 250px
  background-color: #303030
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
  border-radius: 5px

  .info
    display: flex
    align-items: center
    padding: 15px
    border-bottom: 1px solid #fff

    .initials
      position: initial
      width: 40px
      height: 40px
      background-color: #fff
      color: #303030
      display: flex
      align-items: center
      justify-content: center
      border-radius: 50%

    .right
      flex: 1
      margin-left: 24px
      gap: 5px
      display: flex
      flex-direction: column

      p:nth-child(1)
        font-size: 14px

      p:nth-child(2)
        font-size: 12px

      p:nth-child(3)
        font-size: 12px


  .options
    padding: 15px

    .option
      text-decoration: none
      color: #fff
      display: flex
      align-items: center
      margin-bottom: 12px

      .option_item
        transition: 0.3s ease-in all
        border-bottom: 1px solid transparent

        &:hover
          border-bottom-color: #ffff

      .icon
        width: 18px
        height: auto

      p
        font-size: 14px
        margin-left: 12px


      &:last-child
        margin-bottom: 0px

// ---------------- transition-nav ------------------
.mobile-nav-enter-active,
.mobile-nav-leave-active
  transition: all 1s ease

.mobile-nav-enter
  transform: translateX(-250px)

.mobile-nav-enter-to
  transform: translateX(0px)

.mobile-nav-leave
  transform: translateX(0px)

.mobile-nav-leave-to
  transform: translateX(-250px)

</style>
