<template>
  <div class="d-flex">
    <b-col cols="7" class="rain_image"></b-col>
    <b-col cols="5" class="form_container">
      <LoginForm />
      <SignUpModal />
    </b-col>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import SignUpModal from "../components/SignUpModal.vue";
export default {
  components: {
    LoginForm,
    SignUpModal
  },
};
</script>

<style scoped>
.rain_image {
  background-image: url("~@/assets/drugstore.gif");
  height: 100vh;
  background-size: cover;
  background-position: center;
}

.form_container {
  flex: 1;
  min-height: 100vh;
  padding: 173px 55px 20px 55px;
}

@media screen and (max-width: 450px) {
  .form_container {
    padding: 173px 20px 55px;
  }
}

@media screen and (max-width: 850px) {
  .rain_image {
    width: 0;
    background: none;
  }
}
</style>
