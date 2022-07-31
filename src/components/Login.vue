<template>
  <div class="flex align-center justify-center">
    <img class="logo" src="../assets/word1.png" />
  </div>
  <h1 class="text-center font-bold mb-5 text-white">
    Input Details to enter the Game
  </h1>
  <div class="register flex align-center justify-center flex-col">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <button type="button" @click="login">Enter Game</button>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { ref } from 'vue'

const name = ref('');
const email = ref('');
const router = useRouter();

const login = () => {
  localStorage.setItem(
    "user-info",
    JSON.stringify({
      name: name,
      email: email,
    })
  );
  router.push({ name: "Game" });
};
onMounted(() => {
  const user = localStorage.getItem("user-info");
  if (user) {
    state.userActive = true;
    router.push({ name: "Game" });
  }
});
</script>
<style>
.logo {
  width: 300px;
}
.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin: auto;
  margin-bottom: 30px;
  border: 1px solid green;
}
.register button {
  width: 320px;
  height: 40px;
  padding-left: 20px;
  cursor: pointer;
  color: white;
  margin: auto;
  background: green;
  border: 1px solid green;
}
</style>
