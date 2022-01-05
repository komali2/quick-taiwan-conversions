<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      New in Taiwan?<br />Here are some converters to help you out!<br />
    </p>
  </div>
  <div>
    <Currency />
  </div>
</template>

<script>
import Currency from "./Currency.vue";

export default {
  name: "Body",
  props: {
    msg: String,
    convert: Function,
  },
  components: {
    Currency,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
