<script setup>
import { onMounted,reactive } from "vue";
const state = reactive({
  userActive: false
});
onMounted(() => {
  const user = localStorage.getItem("user-info");
  if (user) {
    state.userActive = true;
     }
});
</script>
<template>
  <div class="text-white">
    <ol>
      <div class="text-3xl my-8">Game Rules</div>
      <li>You need to guess the word in 6 tries no time limit</li>
      <li>Each guess must be valid 5 letter meaning full word</li>
      <li>A new word will be available each day</li>
      <li>
        After each guess the color of the tiles will change to show how close
        your guess was to the word
        <ul class="ml-5">
          Color of tiles will change as follows
          <li>
            - Letter exist in correct spot of the word -
            <span class="text-xl text">Green</span>
          </li>
          <li>
            - Letter exist in wrong spot of the word -
            <span class="text-xl">Yellow</span>
          </li>
          <li>
            - Letter not exist in the word in any spot -
            <span class="text-xl">Gray</span>
          </li>
        </ul>
      </li>
    </ol>
    <div>
      <button
        type="button"
        class="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <router-link :to="state.userActive ?'/game':'/login'">Enter Game</router-link>
      </button>
    </div>
  </div>
</template>
