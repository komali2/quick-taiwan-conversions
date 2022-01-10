<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>New in Taiwan?<br />Here are some converters to help you out!<br /></p>
  </div>
  <div>
    <Converter label="USD - NTD" outputLabel="NTD Equivalent" :output="usdConvert" />
    <Converter label="MPH - KPH" outputLabel="KPH Equivalent" :output="mphConvert" />
    <Converter label="F ° - C °" outputLabel="C ° Equivalent" :output="fConvert" />
  </div>
</template>

<script>
const object = {
  simpleConvert: function() {
    return "it's working!";
  },
};
object.simpleConvert();

import Converter from "./Converter.vue";

export default {
  name: "Body",
  props: {
    msg: String,
    ntdOutput: Function,
  },
  data() {
    return {
      usdConvert(convert) {
        return Number(convert * 30);
      },
      mphConvert(convert) {
        return Number(convert * 1.6);
      },
      fConvert(convert) {
        if(convert == 0) return Number(0);
        else return Number(Math.floor((convert - 32) * 5 / 9));
      },
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
