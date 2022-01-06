<template>
  <Body msg="Welcome to Caleb and Morgan's .js App" />
  <Currency />
</template>

<script>
import Body from "./components/Body.vue";
import Currency from "./components/Currency.vue";

export default {
  name: "App",
  components: {
    Body,
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
