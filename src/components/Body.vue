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
      <div>
        <Converter
          label="Sq-ft - Ping"
          outputLabel="Ping Equivalent"
          :output="sqftConvert"
          enterVal="Enter Sq-ft"
        />
      </div>
      <div>
        <Converter
          label="Ping - Sq-ft"
          outputLabel="Sq-ft Equivalent"
          :output="pingConvert"
          enterVal="Enter Ping"
        />
      </div>
      <div>
        <Converter
          label="$Gas USD/G - NTD/L"
          outputLabel="NTD/L Equivalent"
          :output="usdgalConvert"
          enterVal="Enter USD of 1 G"
        />
      </div>
      <div>
        <Converter
          label="$Gas NTD/L - USD/G"
          outputLabel="USD/G Equivalent"
          :output="ntdlConvert"
          enterVal="Enter NTD of 1 L"
        />
      </div>
    </div>
  </div>
  <div id="footer">
    <p id="info">
      This site was designed by two Americans living in Taiwan who wanted a
      Taiwan-specific converter with all the common units in one place. The
      content choice reflects American's needs - appologies to folks from 
      other countries, but your measuring system is probably better anyway. :)
    </p>
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
      sqftConvert(convert) {
        return Number(Math.round(convert * 0.028109845688351 * 10) / 10);
      },
      pingConvert(convert) {
        return Number(Math.round(convert * 35.57472392722561 * 10) / 10);
      },
      usdgalConvert(convert) {
        return Number(Math.round((convert / 3.785411784) * 27.67 * 10) / 10);
      },
      ntdlConvert(convert) {
        return Number(((convert * 3.785411784) / 27.67).toFixed(2));
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
#heading {
  background-color: rgba(255, 255, 255, 0.65);
  width: 80vw;
  margin: auto;
  color: #000;
  border-left: 3px solid #fff;
  border-right: 3px solid #fff;
}
h1 {
  margin: auto;
  padding-top: 25px;
}
h2 {
  color: #000;
  margin: auto;
  padding-bottom: 30px;
}
#content {
  padding-bottom: 0;
}
#converters {
  width: 80vw;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1em 1em;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 0;
  background-color: rgba(0, 0, 0, 0.65);
  border: 3px solid #fff;
  color: #fff;
}
@media (min-width: 550px) {
  #converters {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1100px) {
  #converters {
    grid-template-columns: repeat(4, 1fr);
  }
}
#footer {
  background-color: rgba(255, 255, 255, 0.85);
  width: 80vw;
  min-height: 150px;
  margin: auto;
  color: #000;
  border-left: 3px solid #fff;
  border-right: 3px solid #fff;
}
#info {
  padding: 20px;
}
</style>
