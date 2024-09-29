<template>
    <div class="">
        <div
            id="messages"
            v-for="message in messages"
            :key="message.id"
            class="m-5 px-5 flex grow"
            :class="[
                message.sender.toLowerCase() === props.name.toLowerCase()
                    ? 'justify-end text-right'
                    : 'text-black',
            ]"
        >
            <div
                class="border border-black px-5 rounded-lg"
                :class="[
                    message.sender.toLowerCase() === props.name.toLowerCase()
                        ? 'bg-blue-500 text-white'
                        : 'bg-indigo-100',
                ]"
            >
                <p class="name mb-2">{{ message.sender }}</p>
                <p class="content leading-5 text-[0.9rem]">
                    {{ message.content }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, defineProps, getCurrentInstance } from "vue";
import { useMessageStore } from "../stores/Message";
import { storeToRefs } from "pinia";

// Access the message store
const messageStore = useMessageStore();
const { messages } = storeToRefs(messageStore); // Create a reactive reference to messages

// Define props
const props = defineProps({ name: String });
const { emit } = getCurrentInstance(); // Get the emit function from the component instance

// Emit event when the component is mounted
onMounted(() => {
    emit("updateUserName", props.name);
});
</script>

<style scoped>
/* Add any scoped styles here */
</style>
