<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <div v-if="loginout">
        <li>
          <a href="/login">登陆</a>
        </li>
      </div>
      <div v-else>
        <li>
          <a href="/exit">退出</a>
        </li>
        <li>
          <a href="/perinf">{{name}}</a>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      name: "",
      loginout: true,
      msg: "Welcome to Your Vue.js App"
    };
  },
  created() {
    //console.log(this.$store.state.token)
    if (this.$store.state.token) {
      this.name = this.$store.state.token;
      this.loginout = false;
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
