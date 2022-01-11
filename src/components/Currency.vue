<template>
  <div id="converter">
    <p>{{ label }}</p>
    <input v-model.number="convert" type="number" placeholder="" />
    <p>{{ outputLabel }} {{ ntdOutput }}</p>
  </div>
</template>

<script>
export default {
  name: "Currency",
  props: {
    label: String,
    outputLabel: String,
  },
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
