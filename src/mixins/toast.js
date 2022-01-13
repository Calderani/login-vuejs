export default {
  methods: {
    alertToast(errorCode) {
      this.$bvToast.toast(this.getBody(errorCode), {
        title: "Alerta!",
        toaster: 'b-toaster-top-center',
        variant: "danger",
        solid: true,
        autoHideDelay: 3000
      });
    },

    getBody(errorCode) {
      switch (errorCode) {
        case "auth/email-already-in-use":
          return "E-mail já cadastrado em nosso site";
        default:
          return "Erro desconhecido por favor contate nosso suporte";
      }
    }
  },
};