<template>
    <div class="chat-wrapper gradient-border" @mousemove="handleMouseMove">
        <div class="general">

            <ChatSidebar />

            <div class="separator gradient-border-no-padding"></div>

            <div class="chat">
                <div class="chatter-header" @click="redirectToProfile(chatter.id)">
                    <div class="chatter-img">
                        <img :src="chatter.image">
                    </div>
                    <h3 class="chatter-name">{{ chatter.name }}</h3>
                </div>

                <!-- TODO: replace with DB messages, sort them -->
                <div class="message-wrapper">
                    <div v-for="message in incomingMessages" :key=message.text>
                        <div class="message">
                            <div class="message-texts-wrapper">
                                <p class="message-text">{{ message.text }}</p>
                                <p class="message-timestamp"> {{ message.timestamp }}</p>
                            </div>
                        </div>
                    </div>

                    <div v-for="message in outcomingMessages" :key=message.text>
                        <div class="message message-outcoming">
                            <div class="message-texts-wrapper">
                                <p class="message-text">{{ message.text }}</p>
                                <p class="message-timestamp"> {{ message.timestamp }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="send-message">
                    <form>
                        <textarea placeholder="Message..."></textarea>
                    </form>
                    <button type="submit" class="button" @mousemove="handleMouseMove">Send</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import ChatSidebar from '../components/ChatSidebar.vue'
import { ref, getCurrentInstance, watchEffect } from 'vue'
import { useRouter } from 'vue-router';

export default {
    name: 'Chat',
    components: { ChatSidebar },
    setup() {
        const instance = getCurrentInstance();
        const router = useRouter();
        const chatId = ref(router.currentRoute.value.params.id);

        const redirectToProfile = (id) => {
            instance.proxy.$router.push({ name: 'Profile', params: { id } })
        }

        watchEffect(() => {
            chatId.value = router.currentRoute.value.params.id;
        })

        const chatter = ref({
            id: 2,
            name: 'Maria Johnson',
            image: 'https://ih1.redbubble.net/image.1829576658.5408/flat,750x1000,075,f.jpg',
            lastMessageHint: 'lmao pepega',
            lastMessageTimestamp: '10:53',
            unreadMessages: 1
        })

        const incomingMessages = ref([
            { text: 'Hello!', timestamp: '17:54' },
            { text: 'how are you doing?', timestamp: '17:55' },
            { text: 'im fine too', timestamp: '17:56' },
            { text: 'Hello!', timestamp: '17:54' },
            { text: 'how are you doing?', timestamp: '17:55' }
        ])

        const outcomingMessages = ref([
            { text: 'Hello yo youself', timestamp: '17:57' },
            { text: 'im fine, what about you?', timestamp: '17:58' },
            { text: 'nice!', timestamp: '17:59' },
            { text: 'xyz', timestamp: '17:59' }
        ])

        return { chatId, chatter, incomingMessages, outcomingMessages, redirectToProfile };
    },
}
</script>

<style scoped>
.chat {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}

.chatter-header {
    height: 80px;
    width: 100%;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    flex-direction: row;
    cursor: pointer;
}

.chatter-img {
    overflow: hidden;
    width: 50px;
    height: 50px;
    display: flex;
    margin: 0 10px;
    border-radius: 25px;
}

.chatter-img>img {
    min-width: 50px;
    min-height: 50px;
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.message-wrapper {
    overflow-y: hidden;
    scrollbar-width: thin;
    scrollbar-color: grey;
    scrollbar-gutter: stable both-edges;
    padding-right: 10px;
}

::-webkit-scrollbar {
    width: 4px;
}

::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 3px;
}

::-webkit-scrollbar-track {
    background-color: rgb(66, 66, 66);
}

.message-wrapper:hover {
    overflow-y: auto;
}

.message-wrapper>div {
    width: 100%;
}

.message {
    margin: 5px 5px;
}

.message-texts-wrapper {
    max-width: 100%;
    background-color: blueviolet;
    border-radius: 50px;
    display: inline-block;
}

.message-text {
    max-width: 100%;
    width: 100%;
    font-size: 14px;
    overflow-wrap: break-word;
    padding: 5px 20px;
}


.message-timestamp {
    font-size: 9px;
    color: rgb(176, 176, 176);
    margin: 0 0 0 0;
    padding: 5px 20px;
}

.message-outcoming {
    float: right;
}

.message-outcoming>div {
    background-color: rgb(17, 209, 154);
}

.message-outcoming>div>.message-timestamp {
    color: rgb(7, 6, 6);
}

.send-message {
    width: 100%;
    height: 80px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.send-message>form {
    width: 80%;
    display: flex;
}

.send-message>form>textarea {
    width: 95%;
    height: 45px;
    font-size: 16px;
    padding: 5px 5px;
    border-radius: 0px;
    overflow-wrap: break-word;
    resize: none;
}

:focus {
    box-shadow: none;
}
</style>