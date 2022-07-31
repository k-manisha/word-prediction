<template>
  <nav
    class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500 mb-3"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
      >
        <span
          class="text-sm font-bold inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
        >
          GUESS THE WORD
        </span>
      </div>
      <div class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <div
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 cursor-pointer"
              @click="handleClick"
            >
              <span class="ml-2"><router-link to="/">Rules </router-link></span>
            </div>
          </li>
          <li class="nav-item" v-if="isUserActive">
            <div
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              @click="onLogout"
            >
              <span class="ml-2">Logout</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
import { computed } from "vue";
const router = useRouter();
const isUserActive = computed(() => {
  return !!localStorage.getItem("user-info");
});
const emit = defineEmits(["onLogout"]);
const onLogout = () => {
  emit("onLogout");
};
const handleClick = () => {
  console.log("click");
};
</script>
