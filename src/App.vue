<template>
  <div class="app-wrapper">
    <div class="app">
      <navigation v-if="showNavigation"/>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component"/>
        </transition>
      </router-view>
      <footer-vue/>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import FooterVue from '@/components/Footer.vue';
import {mapActions} from "vuex";

export default {
  name: 'app',
  components: {FooterVue, Navigation},
  data() {
    return {
      showNavigation: null,
    };
  },
  created() {
    this.keepLogin()
    this.checkRoute();
  },
  mounted() {
  },
  methods: {
    ...mapActions('auth', ['keepLogin']),
    checkRoute() {
      if (this.$route.path === '/login' || this.$route.path === '/register' || this.$route.path === '/forgotPassword') {
        this.showNavigation = false;
      } else {
        this.showNavigation = true;
      }
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    }
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}

.arrow {
  margin-left: 8px;
  width: 12px;

  path {
    fill: #000;
  }
}

.arrow-light {
  path {
    fill: #fff;
  }
}

button,
.router-button {
  transition: 500ms ease all;
  cursor: pointer;
  margin-top: 24px;
  padding: 12px 24px;
  background-color: #303030;
  color: #fff;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgba(48, 48, 48, 0.7);
  }
}
</style>
