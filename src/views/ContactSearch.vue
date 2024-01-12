<template>
    <div class="chat-wrapper gradient-border" @mousemove="handleMouseMove">

        <div class="searchbar">
            <input type="text" v-model="searchText" placeholder="Search">
        </div>


        <div class="search-results">
            <h4 v-if="filteredContactList.length > 0">Search results:</h4>
            <h4 v-if="filteredContactList.length === 0 && searchText.length >= 3">No user found.</h4>
            <div v-for="contact in filteredContactList" :key="contact.id" @click="redirectToProfile(contact.id)"
                class="contact">

                <div class="contact-img">
                    <img :src="contact.image">
                </div>

                <div class="contact-username">
                    <p>{{ contact.name }}</p>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
import { ref, getCurrentInstance, computed } from 'vue'

export default {
    setup() {

        const instance = getCurrentInstance();

        const redirectToProfile = (id) => {
            instance.proxy.$router.push({ name: 'Profile', params: { id } })
        }

        const searchText = ref('');

        const filteredContactList = computed(() => {
            const searchTerm = searchText.value.toLowerCase();

            if (searchTerm.trim() === '' || searchTerm.length < 3) {
                return [];
            } else {
                return contactList.value.filter(contact =>
                    contact.name.toLowerCase().includes(searchTerm)
                );
            }
        });

        const contactList = ref([
            {
                id: 1,
                name: 'John Doe',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKFNdYkVUeHuTI3QzEUczJ0VBzZus6lcKGMFkex-9HA&s',
            },
            {
                id: 2,
                name: 'Maria Johnson',
                image: 'https://ih1.redbubble.net/image.1829576658.5408/flat,750x1000,075,f.jpg',
            },
            {
                id: 2,
                name: 'Maria Johnson',
                image: 'https://ih1.redbubble.net/image.1829576658.5408/flat,750x1000,075,f.jpg',
            },
            {
                id: 2,
                name: 'Maria Johnson',
                image: 'https://ih1.redbubble.net/image.1829576658.5408/flat,750x1000,075,f.jpg',
            },
            {
                id: 2,
                name: 'Maria Johnson',
                image: 'https://ih1.redbubble.net/image.1829576658.5408/flat,750x1000,075,f.jpg',
            },
            {
                id: 2,
                name: 'Maria Johnson',
                image: 'https://ih1.redbubble.net/image.1829576658.5408/flat,750x1000,075,f.jpg',
            },
            {
                id: 2,
                name: 'Maria Johnson',
                image: 'https://ih1.redbubble.net/image.1829576658.5408/flat,750x1000,075,f.jpg',
            },
            {
                id: 2,
                name: 'Maria Johnson',
                image: 'https://ih1.redbubble.net/image.1829576658.5408/flat,750x1000,075,f.jpg',
            },
        ])

        return { searchText, contactList, filteredContactList, redirectToProfile }
    }
}
</script>

<style scoped>
.chat-wrapper {
    width: 40%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
}

.search-results {
    width: 100%;
}

.searchbar {
    width: 100%;
    height: 100px;
    margin-top: -10px;
    display: flex;
    text-align: center;
    overflow: hidden;
    justify-content: center;
    align-items: center;


}

.searchbar>input {
    width: 80%;
    height: 32px;
    font-size: 16px;
    text-align: center;
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

.contact-img {
    overflow: hidden;
    width: 50px;
    height: 50px;
    display: flex;
    margin: 0 auto;
    border-radius: 25px;
}

.contact-img>img {
    min-width: 50px;
    min-height: 50px;
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.contact-username {
    width: 100%;
    padding: 20px;
}
</style>