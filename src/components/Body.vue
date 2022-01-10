<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>New in Taiwan?<br />Here are some converters to help you out!<br /></p>
  </div>
  <div>
    <Converter label="USD - NTD" outputLabel="NTD Equivalent" :output="usdConvert" />
    <Converter label="NTD - USD" outputLabel="NTD Equivalent" :output="ntdConvert" />
    <Converter label="MPH - KPH" outputLabel="KPH Equivalent" :output="mphConvert" />
    <Converter label="KPH - MPH" outputLabel="KPH Equivalent" :output="kphConvert" />
    <Converter label="F ° - C °" outputLabel="C ° Equivalent" :output="fConvert" />
    <Converter label="C ° - F °" outputLabel="C ° Equivalent" :output="cConvert" />
  </div>
</template>

<script>
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
        return Number(Math.round(convert * 27.65));
      },
      ntdConvert(convert) {
        return Number((convert * 0.036).toFixed(2));
      },
      mphConvert(convert) {
        return Number(Math.round(convert * 1.6 * 10) / 10);
      },
      kphConvert(convert) {
        return Number(Math.round(convert * 0.62 * 10) / 10);
      },
      fConvert(convert) {
        if(convert == 0) return Number(0);
        else return Number(Math.round((convert - 32) * 5 / 9));
      },
      cConvert(convert) {
        if(convert == 0) return Number(0);
        else return Number(Math.round((convert *9 / 5) + 32));
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
