<template>
  <div>
    <div>测试</div>
    <div>{{details}}</div>
  </div>
</template>

<script>
export default {
  name: "perinf",
  data() {
    return {
      details: ""
    };
  },
  methods: {
    getNews: function() {
      return (
        this.$fetch.post("/perinf").
        then(res => {
          //console.log(res)
          this.details = res.data.data.mes;
        }).catch(err => {
          console.log(err);
        })
      );
    }
  },
  mounted() {
    //console.log(this.$store.state.token);
    this.getNews();
  }
};
</script>

<style>
</style>
