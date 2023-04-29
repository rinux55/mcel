<template>
    <div class="h-screen flex flex-col space-y-5 p-5">
        <div class="flex-1 flex-shrink-0 overflow-auto">
            <div v-show="!loading && !mcelResponse">
                {{ greeterText }}
            </div>
            <div v-show="!loading">
                {{ mcelResponse }}
            </div>
        </div>
        <img
            v-show="loading"
            src="/loader.webp"
            alt="loading"
            class="w-[500px] h-[500px] m-auto"
        >
        <form
            class="flex-grow-0 flex flex-col space-y-5"
            @submit.prevent="sendMessage"
        >
            <div class="flex">
                <span class="m-auto pr-2">> </span>
                <input
                    v-model="userPrompt"
                    autofocus
                    type="text"
                    class="flex-1 border-b border-pink-200 text-pink-200 py-2 bg-transparent placeholder:text-pink-200 focus:outline-none"
                    placeholder="how can I help you?"
                    @blur="$event.target.focus()"
                >
            </div>
            <div class="flex space-x-5">
                <button
                    type="submit"
                    class="flex-1"
                >
                    send
                </button>
                <button @click="reset()">
                    reset
                </button>
            </div>
        </form>
    </div>
</template>
<script setup lang="ts">

const props = defineProps<{
    gptPrompt: string,
    greeterText: string,
    errorText: string
}>()
  
const { chatCompletion } = useChatgpt()
  
const mcelResponse = ref('')
const userPrompt = ref('')
const loading = ref(false)
  
async function sendMessage() {
    loading.value = true 
    
    try {
        mcelResponse.value = await chatCompletion(props.gptPrompt + userPrompt.value)  
        userPrompt.value = ''
    } catch (e) {
        mcelResponse.value = props.errorText
    } finally {
        loading.value = false
    }
}
  
function reset() {
    window.location.reload()
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
  
  html, body {
    @apply font-mono text-xl text-pink-200 bg-black;
  }
  
  button {
    @apply border border-pink-200 text-pink-200 px-5 p-1;
  }
  
  ::-webkit-scrollbar {
      @apply h-[12px] w-[12px] bg-black;
  }
  
  ::-webkit-scrollbar-thumb {
      @apply bg-green-400;
  }
</style>
  