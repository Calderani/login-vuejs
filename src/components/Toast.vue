<template>
  <b-toast
    id="my-toast"
    :toaster="toast.toaster"
    :variant="toast.variant"
    :solid="toast.solid"
    :visible="visible"
  >
    <template #toast-title>
      <div class="d-flex flex-grow-1 align-items-baseline">
        <b-img
          blank
          blank-color="#ff5555"
          class="mr-2"
          width="12"
          height="12"
        ></b-img>
        <strong class="mr-auto">{{ toast.title }}</strong>
        <small class="text-muted mr-2">42 seconds ago</small>
      </div>
    </template>
    {{ toast.body }}
  </b-toast>
</template>

<script>
export default {
  props: {
    toast: {
      type: Object,
      required: true,
    },
    visible: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  watch: {
    visible() {
      return setTimeout(() => {
        this.visible = false;
      }, 3000);
    },
  },
};
</script>