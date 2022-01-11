<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>New in Taiwan?<br />Here are some converters to help you out!<br /></p>
  </div>
  <div>
    <Converter label="USD - NTD" outputLabel="NTD Equivalent" :output="usdConvert" enterVal="Enter USD" />
    <Converter label="NTD - USD" outputLabel="USD Equivalent" :output="ntdConvert" enterVal="Enter NTD" />
    <Converter label="MPH - KPH" outputLabel="KPH Equivalent" :output="mphConvert" enterVal="Enter MPH" />
    <Converter label="KPH - MPH" outputLabel="MPH Equivalent" :output="kphConvert" enterVal="Enter KPH" />
    <Converter label="F ° - C °" outputLabel="C ° Equivalent" :output="fConvert" enterVal="Enter Degrees F" />
    <Converter label="C ° - F °" outputLabel="F ° Equivalent" :output="cConvert" enterVal="Enter Degrees C" />
  </div>
</template>

<script>
import Converter from "./Converter.vue";

export default {
  name: "Body",
  props: {
    msg: String,
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
        if(Number(convert) === 0) return Number(0);
        else return Number(Math.round((convert - 32) * 5 / 9));
      },
      cConvert(convert) {
        if(Number(convert) === 0) return Number(0);
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
