<template>
    <div>
        <div class="border-t-2 border-gray-100 flex w-full h-[50px]">
            <div class="w-[400px]">
                <textarea
                    v-model="messageToSend"
                    class="min-h-[48px] w-full rounded-lg focus:border-0 focus:outline-none ps-5"
                    placeholder="Type your message here..."
                    @keydown.enter.prevent="sendMessage(userName)"
                ></textarea>
            </div>
            <div class="flex-grow h-[50px]">
                <button
                    class="h-full rounded-br-lg w-full hover:text-white hover:bg-black"
                    @click="sendMessage(userName)"
                >
                    Send
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { useMessageStore } from "../stores/Message";
import { storeToRefs } from "pinia";

// Define props
const props = defineProps({
    userName: String, // Define the userName prop
});

// Access the message store
const messageStore = useMessageStore();
const { messages } = storeToRefs(messageStore); // Create a reactive reference to messages

const messageToSend = ref(""); // Correctly defined the variable for the message

// Function to handle sending the message
const sendMessage = (userName) => {
    messages.value.push({
        sender: userName,
        content: messageToSend.value,
    });
    messageToSend.value = "";
    console.log(messages.value);
};
</script>

<style scoped>
/* Add any scoped styles here */
</style>
