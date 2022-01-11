<template>
  <b-row align-v="end" align-h="center" class="pt-3">
    <b-button v-b-modal.signup_modal variant="link" class="signup_button">
      <span class="signup_text"> Nova conta?</span>
    </b-button>

    <b-modal id="signup_modal" centered hide-header-close>
      <b-form novalidate>
        <b-form-group class="py-2">
          <label for="text-username">USERNAME</label>
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
        <b-form-group class="py-2">
          <label for="text-password">PASSWORD</label>
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
      </b-form>
      <template #modal-footer>
        <b-row>
          <b-button
            class="login_button"
            @click="onSubmit"
            squared
            variant="primary"
          >
            <label for="button-text">LOGIN</label>
          </b-button>
        </b-row>
      </template>
    </b-modal>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
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
.signup_text {
  letter-spacing: 3px;
  font-size: 14px;
  color: #9327db;
}

.signup_button {
  text-decoration: none;
}

.btn-check:focus + .btn,
.btn:focus {
  outline: 0;
  box-shadow: none;
}

.login_button {
  background-color: #9327db;
  border-color: #9327db;
}
</style>