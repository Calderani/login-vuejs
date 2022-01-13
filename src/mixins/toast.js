export default {
  methods: {
    alertToast() {
      this.$bvToast.toast("E-mail já cadastrado em nosso site", {
        title: "Alerta!",
        toaster: 'b-toaster-top-center',
        variant: "danger",
        solid: true,
        autoHideDelay: 3000
      });
    }
  },
};