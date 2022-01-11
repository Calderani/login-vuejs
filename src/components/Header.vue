<template>
  <h1 class="header">
    {{ title }}
  </h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.header {
  font-family: 'Orbitron';
  margin-bottom: 1.875rem;;
  color: #9327db;
  font-weight: 600;
  letter-spacing: 5px;
}
</style>