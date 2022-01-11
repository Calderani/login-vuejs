<template>
  <b-container>
    <b-table striped hover dark bordered :items="items"></b-table>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },

  beforeMount() {
    this.getMedications();
  },

  methods: {
    getMedications() {
      this.$store.dispatch("getMedications");
      this.items = this.$store.getters.getDrugList;
    },
  },
};
</script>