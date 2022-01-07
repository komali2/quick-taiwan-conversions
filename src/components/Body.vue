<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>New in Taiwan?<br />Here are some converters to help you out!<br /></p>
  </div>
  <div>
    <Converter label="USD - NTD" outputLabel="NTD Equivalent" />
    <Converter label="MPH - KPH" outputLabel="KPH Equivalent" />
    <Converter label="F ° - C °" outputLabel="C ° Equivalent" :conFunc="simpleConvert" />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
function simpleConvert() {
  return "it's working!";
};

import Converter from "./Converter.vue";

export default {
  name: "Body",
  props: {
    msg: String,
    conFunc: Function,
    simpleConvert: Function,
  },
  data() {
    return {
      simpleConvert() {
        return "it's working"
      }
    };
  },
  components: {
    Converter,
  },
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
