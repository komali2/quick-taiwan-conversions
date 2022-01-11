<template>
 <div id="converter">
   <p>{{ label }}</p>
   <input v-model.number="convert" type="number" :placeholder="enterVal" />
   <p>{{ outputLabel }}</p><p id="result">{{ convertedOutput }}</p>
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
   enterVal: String,
   output: Function,
 },
 data() {
   return {
     convert: ""
   };
 },
 computed: {
   convertedOutput() {
     return this.output(this.convert);
   },
 },
};
</script>
 
<style scoped>
#converter {
  padding: 10px;
}
input {
  display: flex;
  width: 80%;
  margin: auto;
  padding: 10px 14px;
  border: 3px solid #383;
  border-radius: 7px;
  font-size: 14pt;
}
p {
  font-size: 14pt;
  font-weight: bold;
}
#result {
  font-size: 18pt;
}
</style>