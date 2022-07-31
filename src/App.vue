<script setup>
import Header from "./components/Header.vue";
import { onMounted,reactive } from "vue";
import { useRouter } from 'vue-router';
const router = useRouter();
const state = reactive({
  userActive: false
});
onMounted(()=>{
  const user = localStorage.getItem("user-info");
  if(user){
    state.userActive= true;
    router.push({name:'Game'});
  }
});
const handleLogout= () =>{
    localStorage.clear(); //remove active User
    router.push({name:'Login'})
}
</script>

<template>
    <Header @onLogout="handleLogout"/>
  <div class="flex flex-col h-screen max-w-md mx-auto ">
    <router-view></router-view>
  </div>
</template>

