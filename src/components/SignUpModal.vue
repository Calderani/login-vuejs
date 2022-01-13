<template>
  <b-row align-v="end" align-h="center" class="pt-3">
    <b-button v-b-modal.signup_modal variant="link" class="signup_button">
      <span class="signup_text"> Nova conta?</span>
    </b-button>

    <b-modal id="signup_modal" centered>
      <b-form novalidate>
        <b-form-group class="pt-2">
          <label for="text-username">E-MAIL</label>
          <b-form-input
            class="input"
            name="email"
            id="email"
            v-model="form.email"
            placeholder="Insira seu e-mail"
            v-validate="'required|email'"
            :state="validateState('email')"
          />
          <b-form-invalid-feedback>
            <i>
              <span class="error_text">{{ veeErrors.first("email") }}</span>
            </i>
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group class="pt-2">
          <label for="text-password">PASSWORD</label>
          <b-form-input
            class="input"
            name="password"
            id="password"
            ref="password"
            v-model="form.password"
            placeholder="Insira seu password"
            type="password"
            v-validate="'required|min:6'"
            :state="validateState('password')"
          />
          <b-form-invalid-feedback>
            <i>
              <span class="error_text">{{ veeErrors.first("password") }}</span>
            </i>
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group class="py-2">
          <b-form-input
            class="input"
            name="password_confirmation"
            id="password_confirmation"
            v-model="password_confirmation"
            placeholder="Confirme o seu password"
            type="password"
            v-validate="'required|confirmed:password'"
            :state="validateState('password_confirmation')"
          />
          <b-form-invalid-feedback>
            <i>
              <span class="error_text">{{
                veeErrors.first("password_confirmation")
              }}</span>
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
            block
            variant="primary"
          >
            <label for="button-text">CADASTRAR</label>
          </b-button>
        </b-row>
      </template>
    </b-modal>
  </b-row>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import toastMixin from "../mixins/toast.js";

export default {
  mixins: [toastMixin],
  data() {
    return {
      form: {
        email: "calderani@live.com",
        password: "123456",
      },
      password_confirmation: "123456",
    };
  },

  methods: {
    onSubmit(event) {
      this.$validator.validateAll().then((result) => {
        if (!result) {
          return;
        }
        event.preventDefault();
        this.registerUser();
      });
    },

    registerUser() {
      let auth = getAuth();
      createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
        .then(() => {
          this.resetInput();
        })
        .catch((err) => {
          console.log(err.code);
          this.alertToast(err.code);
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

    resetInput() {
      this.form.email = this.form.password = this.password_confirmation = "";
      this.$bvModal.hide("signup_modal");
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