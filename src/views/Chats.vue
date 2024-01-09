<template>
    <div class="chat-wrapper gradient-border" @mousemove="handleMouseMove">
        <div class="general">

            <ChatSidebar />
            <div class="separator gradient-border-no-padding"></div>
            <div class="chat">
                <div class="chat-select-text">
                    <h3> Select a contact to chat with</h3>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import ChatSidebar from '../components/ChatSidebar.vue'

export default {
    name: 'Chats',
    components: { ChatSidebar },
    setup() {

    }
}
</script>

<style>
.chat-wrapper {
    margin-left: 100px;
    width: 70%;
    height: 80vh;
    display: flex;
}

.separator {
    height: 80vh;
    margin: auto 10px;
    border-left: none;
    border-top: none;
    border-bottom: none;
}

.general {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
}

.chat {
    display: flex;
    width: 75%;
    height: 100%;
}

.chat-select-text{ 
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0 auto;
}
</style>