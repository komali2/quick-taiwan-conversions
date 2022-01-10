<template>
  <div id="converter">
    <p>{{ label }}</p>
    <input v-model.number="convert" type="number" placeholder="Enter USD" />
    <p>{{ outputLabel }} {{ convertedOutput }}</p>
  </div>
  <div>
  </div>
</template>

<script>
export default {
  name: "Converter",
  props: {
    label: String,
    outputLabel: String,
    output: Function,
  },
  data() {
    return {
      convert: ""
    };
  },
 
  computed: {
    convertedOutput() {
      //return this.convert * 30;
      return this.output(this.convert);
    },
  },
};
</script>
