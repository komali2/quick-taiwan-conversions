<template>
  <div id="converter">
    <input v-model.number="convert" type="number" placeholder="Enter USD" />
    <p>NTD equivalent: {{ ntdOutput }}</p>
  </div>
</template>

<script>
export default {
  name: "Currency",
  data() {
    return {
      convert: "",
    };
  },
  computed: {
    ntdOutput() {
      return this.convert * 30;
    },
  },
};
</script>
