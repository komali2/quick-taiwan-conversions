<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Caleb and Morgan's .js App" />
  <Currency input />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Currency from "./components/Currency.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Currency,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
