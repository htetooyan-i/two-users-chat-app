<template>
    <div class="screen max-w-lg mx-auto">
        <h2 class="text-center text-[20px] mb-5">{{ userName }}'s view</h2>

        <div class="flex justify-between mb-2">
            <router-link
                :to="{ name: 'User1', params: { name: 'I' } }"
                class="text-blue-500 hover:underline"
                >Go to User I</router-link
            >

            <router-link
                :to="{ name: 'User2', params: { name: 'Ashley' } }"
                class="text-blue-500 hover:underline"
                >Go to User Ashley</router-link
            >
        </div>

        <main class="border border-black rounded-lg relative z-50">
            <div class="h-[600px] overflow-auto">
                <router-view
                    @updateUserName="handleUpdateUserName"
                ></router-view>
            </div>
            <sendMessage
                :userName="userName"
                class="absolute bottom-0 w-full"
            ></sendMessage>
        </main>
    </div>
</template>

<script setup>
import { ref } from "vue";
import sendMessage from "./components/sendMessage.vue";
import { useMessageStore } from "./stores/Message";
import { storeToRefs } from "pinia";

// Access the message store
const messageStore = useMessageStore();
const { messages } = storeToRefs(messageStore); // Create a reactive reference to messages
const userName = ref(""); // Reactive property for user name

// Method to handle updating the user name
function handleUpdateUserName(name) {
    userName.value = name; // Update the reactive variable
}
</script>

<style scoped>
/* Add any scoped styles here */
</style>
