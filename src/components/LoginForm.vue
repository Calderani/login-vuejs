<template>
  <div>
    <b-form novalidate>
      <Header class="text-center" :title="title" />
      <b-form-group class="pt-2">
        <label class="mb-0" for="text-username">USERNAME</label>
        <b-form-input
          class="input"
          name="username"
          id="username"
          v-model="form.username"
          placeholder="Insira seu username"
          v-validate="'required|min:5'"
          :state="validateState('username')"
        />
        <b-form-invalid-feedback>
          <i>
            <span class="error_text">{{ veeErrors.first("username") }}</span>
          </i>
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group class="pt-2 mb-0">
        <label class="mb-0" for="text-password">PASSWORD</label>
        <b-form-input
          class="input"
          name="password"
          id="password"
          v-model="form.password"
          placeholder="Insira seu password"
          type="password"
          v-validate="'required|min:5'"
          :state="validateState('password')"
        />
        <b-form-invalid-feedback>
          <i>
            <span class="error_text">{{ veeErrors.first("password") }}</span>
          </i>
        </b-form-invalid-feedback>
      </b-form-group>
      <div class="d-flex justify-content-between">
        <b-form-group>
          <b-form-checkbox
            name="checkbox-1"
            id="checkbox-1"
            v-model="remember"
            plain
          >
            <span class="checkbox_link_text">Lembrar-me</span>
          </b-form-checkbox>
        </b-form-group>
        <b-link class="py-0 forgot_link"
          ><span class="checkbox_link_text">Esqueceu a senha?</span></b-link
        >
      </div>
      <b-row class="pt-3">
        <b-button
          class="login_button"
          @click="onSubmit"
          block
          squared
          variant="primary"
        >
          <label for="button-text">LOGIN</label>
        </b-button>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  components: {
    Header,
  },

  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      remember: false,
      title: "FarmaCorp",
    };
  },

  methods: {
    onSubmit(event) {
      this.$validator.validateAll().then((result) => {
        if (!result) {
          return;
        }
        this.$store.dispatch("login", this.form);
        event.preventDefault();
        this.formApproved = true;
      });
    },

    validateState(ref) {
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
        return !this.veeErrors.has(ref);
      }
      return null;
    },
  },
};
</script>

<style scoped>
label {
  letter-spacing: 8px;
  font-size: 14px !important;
  margin-bottom: 0;
}

.checkbox_link_text {
  letter-spacing: 3px;
  font-size: 14px;
}

.forgot_link {
  text-decoration: none;
  color: #9327db;
}

.login_button {
  background-color: #9327db;
  border-color: #9327db;
}

.btn-primary:focus {
  box-shadow: 0 0 0 0.25rem rgb(147 39 219 / 25%) !important;
}

.error_text {
  letter-spacing: 2px;
  font-size: 13px;
}
</style>