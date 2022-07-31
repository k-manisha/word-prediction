<script setup>

const props = defineProps({
    letter:{
        type:String,
        default: ""
    },
    color: {
        type:String,
        default:""
    }
})
</script>
<template>
    <div class="col-span-1 flex items-center justify-center h-16 uppercase border-2 border-gray-200
    transition-all duration-300 text-white"
    :class="`color-${color}`">
        {{letter}}
    </div>
</template>

<style>
    div.color-gray{
        @apply border-gray-500;
        @apply bg-gray-500;
        @apply text-white;
    }
     div.color-green{
         @apply border-green-500;
        @apply bg-green-500;
        @apply text-white;
    
    }
     div.color-yellow{
        @apply border-yellow-500;
        @apply bg-yellow-500;
        @apply text-white;
    }
</style>