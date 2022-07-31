<script setup>
import { reactive, onMounted, computed } from "vue";
import Keyboard from "./Keyboard.vue";
import WordRow from "./WordRow.vue";
import { getSolution, validWord } from "../utils";
const state = reactive({
  solution: getSolution(),
  guesses: ["", "", "", "", "", ""],
  currentGuessIndex: 0,
  guessedLetters: {
    miss: [], //wrong letter
    found: [], //correct place
    hint: [], //wrong place
  },
  visible: false,
});
const wonGame = computed(
  () => state.guesses[state.currentGuessIndex - 1] === state.solution
);
const lostGame = computed(() => !wonGame.value && state.currentGuessIndex >= 6);

const handleInput = (key) => {
  if (state.currentGuessIndex >= 6 || wonGame.value) {
    return;
  }
  const currentGuess = state.guesses[state.currentGuessIndex];
  if (key == "{enter}") {
    //send guess
    if (currentGuess.length == 5) {
      if (!validWord(currentGuess)) {
        state.visible = true;
        setTimeout(() => (state.visible = false), 2000);
      } else {
        state.currentGuessIndex++;
        for (let i = 0; i < currentGuess.length; i++) {
          let c = currentGuess.charAt(i);
          if (c == state.solution.charAt(i)) {
            state.guessedLetters.found.push(c);
          } else if (state.solution.indexOf(c) != -1) {
            state.guessedLetters.hint.push(c);
          } else {
            state.guessedLetters.miss.push(c);
          }
        }
      }
    }
  } else if (key == "{bksp}") {
    state.guesses[state.currentGuessIndex] = currentGuess.slice(0, -1);
  } else if (currentGuess.length < 5) {
    const regex = /[a-zA-Z]/;
    if (regex.test(key)) {
      state.guesses[state.currentGuessIndex] += key;
    }
  }
};
onMounted(() => {
  const user = localStorage.getItem("user-info");
  if(!user){
    router.push({name:'Login'});
  }

  window.addEventListener("keyup", (e) => {
    e.preventDefault();
    let key =
      e.keyCode == 13
        ? "{enter}"
        : e.keyCode == 8
        ? "{bksp}"
        : String.fromCharCode(e.keyCode).toLowerCase();
    handleInput(key);
  });
});
</script>

<template>
  <div class="flex flex-col h-screen max-w-md mx-auto justify-evenly">
    <div v-show="state.visible" class="text-white text-center py-2 border-2 border-white rounded-sm max-w-sm">
      <div >Invalid Word</div>
      </div>
    <div>
      <word-row
        v-for="(guess, i) in state.guesses"
        :key="i"
        :value="guess"
        :solution="state.solution"
        :submitted="i < state.currentGuessIndex"
      />
    </div>
    <p v-if="wonGame" class="text-center text-white">
      Congrats you have Predicted the word
    </p>
    <p v-else-if="lostGame" class="text-center text-white">All tries used up</p>

    <Keyboard
      @onKeyPress="handleInput"
      :guessedLetters="state.guessedLetters"
    />
  </div>
</template>
