<template>
  <div class="h-screen flex flex-col space-y-5 box-content pr-5">
    <div class="flex-1 flex-shrink-0 overflow-auto p-5">
      <div v-show="!loading && !data">Hello, I am MCEL, your mycological assistant. I can answer any questions you may have about using the Mushroom Cultivation and Extraction Laboratory (MCEL).</div>
      <div v-show="!loading">{{  data  }}</div>
    </div>
    <div v-show="loading" class="text-black"><img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjRiZWQ3ODFhMzJjM2YyYjFhY2FlNjliMjNkMDQ4NTk3ZTBiOGYzMCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/xTkcEQACH24SMPxIQg/giphy.gif" alt="loading" class="w-[500px] h-[500px] m-auto"></div>
    <form @submit.prevent="sendMessage" class="flex-grow-0 flex flex-col p-5 space-y-5">
      <div class="flex"> <span class="m-auto pr-2">> </span>
        <input autofocus type="text" v-model="message" class=" flex-1 border-b border-pink-200 text-pink-200 py-2 bg-transparent" placeholder="how can I help you?" /></div>
        <div class="flex space-x-5">
          <button type="submit" class="flex-1">send</button>
          <button @click="reset()">reset</button>
        </div>
    </form>
  </div>
</template>
<script setup>
import { startPrompt } from './prompts'

const { chatCompletion } = useChatgpt()

const data = ref('')
const message = ref('')
const loading = ref(false)

chatCompletion("")

async function sendMessage() {
  loading.value = true
  const prompt = startPrompt + message.value
  
  const response = await chatCompletion(prompt)  
  data.value = response
  loading.value = false
  message.value = ''
}

function reset() {
  window.location.reload()
}


</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

html, body {
  @apply font-mono text-xl text-pink-200;
  background-color: #161519;
}

input::placeholder {
  @apply text-pink-200
}

input:focus, textarea:focus, select:focus {
  outline: none !important;
}

button , a {
  @apply border border-pink-200 text-pink-200 px-5 p-1;
}

::-webkit-scrollbar {
    height: 12px;
    width: 12px;
    background: #161519;
}

::-webkit-scrollbar-thumb {
    @apply bg-green-400;
    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
}


</style>
