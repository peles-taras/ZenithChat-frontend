<template>
    <div class="contacts">
        <div class="searchbar">
            <input type="search" v-model="searchText" @input="searchFilter" placeholder="Search...">
        </div>
        <div class="contacts-list">

            <div v-for="contact in filteredContactList" :key=contact.id class="contact gradient-border-bottom"
                @click="redirectToChat(contact.id)">
                <div class="contact-image">
                    <img :src="contact.image">
                </div>

                <div class="contact-text">
                    <p class="name">{{ truncateMessage(contact.name) }}</p>
                    <p class="lastMessageHint">{{ truncateMessage(contact.lastMessageHint) }}</p>
                </div>

                <div class="contact-additional-info">
                    <p class="lastMessageTimestamp">{{ contact.lastMessageTimestamp }}</p>
                    <div class="unreadMessagesWrapper">
                        <p class="unreadMessages">{{ contact.unreadMessages }}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { ref, getCurrentInstance, computed } from 'vue'


export default {
    name: 'ChatSidebar',
    setup() {

        const instance = getCurrentInstance();

        const redirectToChat = (id) => {
            instance.proxy.$router.push({ name: 'Chat', params: { id } })
        }

        const searchText = ref('');

        const contactList = ref([{
            id: 1,
            name: 'John Doe',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKFNdYkVUeHuTI3QzEUczJ0VBzZus6lcKGMFkex-9HA&s',
            lastMessageHint: 'Hey bro, whats up?',
            lastMessageTimestamp: '10:47',
            unreadMessages: 4

        },
        {
            id: 2,
            name: 'Maria Johnson',
            image: 'https://ih1.redbubble.net/image.1829576658.5408/flat,750x1000,075,f.jpg',
            lastMessageHint: 'lmao pepega',
            lastMessageTimestamp: '10:53',
            unreadMessages: 1
        },
        {
            id: 2,
            name: 'Maria Johnson',
            image: 'https://ih1.redbubble.net/image.1829576658.5408/flat,750x1000,075,f.jpg',
            lastMessageHint: 'lmao pepega',
            lastMessageTimestamp: '10:53',
            unreadMessages: 1
        },
        {
            id: 2,
            name: 'Maria Johnson',
            image: 'https://ih1.redbubble.net/image.1829576658.5408/flat,750x1000,075,f.jpg',
            lastMessageHint: 'lmao pepega',
            lastMessageTimestamp: '10:53',
            unreadMessages: 1
        },
        {
            id: 2,
            name: 'Maria Johnson',
            image: 'https://ih1.redbubble.net/image.1829576658.5408/flat,750x1000,075,f.jpg',
            lastMessageHint: 'lmao pepega',
            lastMessageTimestamp: '10:53',
            unreadMessages: 1
        },
        {
            id: 2,
            name: 'Maria Johnson',
            image: 'https://ih1.redbubble.net/image.1829576658.5408/flat,750x1000,075,f.jpg',
            lastMessageHint: 'lmao pepega',
            lastMessageTimestamp: '10:53',
            unreadMessages: 1
        },
        {
            id: 2,
            name: 'Maria Johnson',
            image: 'https://ih1.redbubble.net/image.1829576658.5408/flat,750x1000,075,f.jpg',
            lastMessageHint: 'lmao pepega',
            lastMessageTimestamp: '10:53',
            unreadMessages: 1
        },
        {
            id: 2,
            name: 'Maria Johnson',
            image: 'https://ih1.redbubble.net/image.1829576658.5408/flat,750x1000,075,f.jpg',
            lastMessageHint: 'lmao pepega',
            lastMessageTimestamp: '10:53',
            unreadMessages: 1
        },
        {
            id: 2,
            name: 'Maria Johnson',
            image: 'https://ih1.redbubble.net/image.1829576658.5408/flat,750x1000,075,f.jpg',
            lastMessageHint: 'lmao pepega',
            lastMessageTimestamp: '10:53',
            unreadMessages: 1
        }
        ])

        const filteredContactList = computed(() => {
            const searchTerm = searchText.value.toLowerCase();
            if (searchTerm.trim() === '') {
                return contactList.value;
            } else {
                return contactList.value.filter(contact =>
                    contact.name.toLowerCase().includes(searchTerm)
                );
            }
        });

        const truncateMessage = (message) => {
            const maxLength = 15;
            return message.length > maxLength
                ? message.slice(0, maxLength) + '...'
                : message;
        };
        return {
            searchText,
            contactList,
            filteredContactList,
            truncateMessage,
            redirectToChat,
        }
    }
}
</script>

<style scoped>
.searchbar {
    overflow: hidden;
    height: 40px;
    width: 90%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}

.searchbar>input {
    width: 80%;
    height: 80%;
    font-size: 14px;
    text-align: center;

}

.contacts {
    width: 26%;
    height: 100%;
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

.contacts:hover {
    overflow-y: auto;
}

.contact {
    overflow: hidden;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    cursor: pointer;
}

.contact-image {
    overflow: hidden;
    width: 50px;
    height: 50px;
    display: flex;
    margin: 0 auto;
    border-radius: 25px;
}

.contact-image>img {
    min-width: 50px;
    min-height: 50px;
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.contact-text {
    width: 60%;
}

.contact-text>.name {
    font-size: 18px;
    text-align: center;
    color: bisque;
}

.contact-text>.lastMessageHint {
    font-size: 14px;
    text-align: center;
}

.contact-additional-info {
    font-size: 14px;
    text-align: center;
}

.unreadMessagesWrapper {
    font-size: 16px;
    background: bisque;
    border-radius: 20px;
    color: #774141;
}
</style>