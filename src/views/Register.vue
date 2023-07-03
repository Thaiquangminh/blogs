<template>
  <div class="form-wrap">
    <Modal v-if="activeModal" :modal-message="errorMsg" @close-modal="handleCloseModal"/>
    <form class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" to="/login">Login</router-link>
      </p>
      <h2>Create Your FireBlog Account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstName"/>
          <user class="icon"/>
        </div>
        <div class="input">
          <input type="text" placeholder="Last Name" v-model="lastName"/>
          <user class="icon"/>
        </div>
        <div class="input">
          <input type="text" placeholder="Username" v-model="username"/>
          <user class="icon"/>
        </div>
        <div class="input">
          <input type="text" placeholder="Email" v-model="email"/>
          <email class="icon"/>
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password"/>
          <password class="icon"/>
        </div>
        <div v-show="error" class="error">{{ this.errorMsg }}</div>
      </div>
      <button @click.prevent="register">Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import password from "../assets/Icons/lock-alt-solid.svg";
import user from "../assets/Icons/user-alt-light.svg";
import {mapActions} from "vuex";
import Modal from "@/components/Modal.vue";

export default {
  name: "Register",
  components: {
    Modal,
    email,
    password,
    user,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      error: null,
      errorMsg: "Successfully registered",
      activeModal: false
    };
  },
  methods: {
    ...mapActions('auth', ['signup']),
    async register() {
      try {
        await this.signup({email: this.email, password: this.password})
        this.errorMsg = "Successfully registered"
      } catch (error) {
        this.errorMsg = error
      }
      this.activeModal = true
    },
    handleCloseModal() {
      this.activeModal = false
    }
  },
};
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>