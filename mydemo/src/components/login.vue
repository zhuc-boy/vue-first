<template>
  <div>
    <div>
      <form>
        <input placeholder="账号" v-model="accout">
        <input placeholder="密码" v-model="pwd">
        <input type="button" v-on:click="loginaccout">
      </form>
    </div>
  </div>
</template>

<script>
//import router from 'src\router\index.js'
export default {
  name: "login",
  data() {
    return {
      accout: "",
      pwd: ""
    };
  },
  methods: {
    loginaccout() {
      //console.log(this.accout, this.pwd);
      if (this.accout.length != 0 && this.accout.pwd != 0) {
        this.$fetch
          .post("/login", {
            accout: this.accout,
            pwd: this.pwd
          })
          .then(res => {
            if (res.status == 200) {
              if (res.data.status == 0) {
                /*                 if (window.sessionStorage) {
                  sessionStorage.setItem("name", this.accout);
                } else {
                  document.cookie.setItem("name", this.accout);
                } */
                this.$store.commit("set_token", this.accout);
                if (this.$store.state.token) {
                  this.$router.push({
                    name: "HelloWorld"
                    //params: { name: this.accout }
                    //path:`/`,//:${this.accout}
                    //query:{ name: this.accout,sex:'female' }
                  });
                }else{
                  this.$router.replace('/login');
                }
              } else {
                alert("账号或密码错误");
              }
            }
            //console.log(res)
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  },
  mounted() {}
};
</script>

<style>
</style>
