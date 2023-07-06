<template>
  <div>
    <div class="modal" v-if="type === 'modal'">
      <div class="modal-content">
        <p>{{ this.modalMessage }}</p>
        <button @click="closeModal">Close</button>
      </div>
    </div>
    <div class="modal" v-if="type === 'selectModal'">
      <div class="modal-content">
        <p>{{ this.modalMessage }}</p>
        <div class="modal-group-btn">
          <button @click="closeModal">No</button>
          <button @click="acceptAction">Yes</button>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: ["modalMessage", 'type'],
  methods: {
    closeModal() {
      this.$emit('close-modal')
    },
    acceptAction() {
      this.$emit('accept-action')
    }
  },
};
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);

  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    width: 300px;
    padding: 40px 30px;
    background-color: #fff;

    p {
      text-align: center;
    }

    button {
      align-self: center;
    }
  }

  .modal-group-btn {
    display: flex;
    justify-content: space-around;
  }
}
</style>