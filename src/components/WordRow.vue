<script setup>
import Letter from "./Letter.vue";
import { watch ,ref} from "vue";
const props = defineProps({
  value: String,
  solution: String,
  submitted: String,
});

const colors = ref(["","","","",""]);
watch(
  () => props.submitted,
  async (submitted, prevSubmitted) => {
    if (props.submitted) {
      let s = props.solution;
      let v = props.value;

      let temp = ["gray", "gray", "gray", "gray", "gray"];
      let letterPool = [];
      for (let i = 0; i < 5; i++) {
        if (s.charAt(i) == v.charAt(i)) {
          temp[i] = "green";
        } else {
          letterPool.push(s.charAt(i));
        }
      }
      for (let i = 0; i < 5; i++) {
        if (temp[i] == "gray") {
           const charIndex = letterPool.indexOf(v.charAt(i));
          if (charIndex != -1) {
            letterPool.splice(charIndex, 1);
            temp[i] = "yellow"; 
          }
        }
        colors.value[i] = temp[i];
        await new Promise((resolve) => setTimeout(resolve, 200));
      }
    }
  }
);
</script>
<template>
  <div class="grid max-w-xs grid-cols-5 gap-1 mx-auto mb-1">
    <Letter
      v-for="i in 5"
      :key="i"
      :letter="value[i - 1]"
      :color="colors[i - 1]"
    />
  </div>
</template>
