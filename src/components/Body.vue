<template>
  <div id="heading">
    <h1>{{ msg }}</h1>
    <h2>New in Taiwan?<br />Here are some converters to help you out!<br /></h2>
  </div>
  <div id="content">
    <div id="converters">
      <div>
        <Converter
          label="USD - NTD"
          outputLabel="NTD Equivalent"
          :output="usdConvert"
          enterVal="Enter USD"
          id="usd"
        />
      </div>
      <div>
        <Converter
          label="NTD - USD"
          outputLabel="USD Equivalent"
          :output="ntdConvert"
          enterVal="Enter NTD"
        />
      </div>
      <div>
        <Converter
          label="MPH - KPH"
          outputLabel="KPH Equivalent"
          :output="mphConvert"
          enterVal="Enter MPH"
        />
      </div>
      <div>
        <Converter
          label="KPH - MPH"
          outputLabel="MPH Equivalent"
          :output="kphConvert"
          enterVal="Enter KPH"
        />
      </div>
      <div>
        <Converter
          label="F  ° - C  °"
          outputLabel="C  ° Equivalent"
          :output="fConvert"
          enterVal="Enter Degrees F"
        />
      </div>
      <div>
        <Converter
          label="C  ° - F  °"
          outputLabel="F  ° Equivalent"
          :output="cConvert"
          enterVal="Enter Degrees C"
        />
      </div>
      <div>
        <Converter
          label="Inch - Millimeter"
          outputLabel="Millimeter Equivalent"
          :output="inConvert"
          enterVal="Enter Inches"
        />
      </div>
      <div>
        <Converter
          label="Millimeter - Inch"
          outputLabel="Inch Equivalent"
          :output="mmConvert"
          enterVal="Enter Millimeters"
        />
      </div>
    </div>
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
        if (Number(convert) === 0) return Number(0);
        else return Number(Math.round((((convert - 32) * 5) / 9) * 10) / 10);
      },
      cConvert(convert) {
        if (Number(convert) === 0) return Number(0);
        else return Number(Math.round(((convert * 9) / 5 + 32) * 10) / 10);
      },
      inConvert(convert) {
        return Number(Math.round(convert * 25.4 * 10) / 10);
      },
      mmConvert(convert) {
        return Number(Math.round(convert * 0.03937007874015748 * 1000) / 1000);
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
h1 {
  padding-top: 50px;
}
h2 {
  padding-bottom: 30px;
}
#content {
  padding-bottom: 100px;
}
#converters {
  width: 500px;
  margin: auto;
  display: grid;
  grid-template-columns: 200px 200px;
  grid-gap: 1em 1em;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: rgba(84, 147, 240, 0.75);
  border: 3px solid #383;
  border-radius: 20px;
}
</style>
