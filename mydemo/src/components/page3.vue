<template>
  <div>这是个需要token有值才能访问的页面</div>
</template>

<script>
export default {
  name: "page3",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    console.log(this.$store.state.token)
  }
};
</script>

<style>
</style>
