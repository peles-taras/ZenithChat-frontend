<template>
    <div class="sidebar-container">
        <div class="sidebar gradient-border" @mousemove="handleMouseMove">
            <div class="sidebar-content">
                <ul>
                    <li class="li-bottom-border">
                        <router-link :to="{ name: 'Profile', params: { id: user.id } }"> Profile </router-link>
                    </li>
                    <li class="li-bottom-border">
                        <router-link :to="{ name: 'Chats' }"> Chats </router-link>
                    </li>
                    <li class="li-bottom-border">
                        <router-link :to="{ name: 'ContactSearch' }"> Find contact </router-link>
                    </li>
                    <li class="li-bottom-border">
                        <router-link :to="{ name: 'Settings' }"> Settings </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue'

export default {
    name: 'Sidebar',
    setup() {

        const user = ref({
            id: 1,
            username: 'John Doe',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKFNdYkVUeHuTI3QzEUczJ0VBzZus6lcKGMFkex-9HA&s',
            about: 'Some profile bioSome profile bioSome profile bioSome profile bioSome profile bioSome profile bioSome profile bioSome profile bioSome profile bio'
        })

        return {user}
    }
}
</script>
  
<style scoped>
.sidebar-container {
    position: fixed;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
}

.sidebar {
    height: 100%;
    width: 250px;
    color: white;
    display: flex;
    flex-direction: column;
    border-left: none;
}

.sidebar-header {
    padding: 20px;
    text-align: center;
}

.logo {
    max-width: 100%;
}

.sidebar-content {
    flex-grow: 1;
    overflow-y: auto;
    margin-top: -20px;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    padding: 10px;
}

.li-bottom-border {
    border-bottom: 2px solid transparent;
    background: linear-gradient(#1b1f23, #1b1f23) padding-box, radial-gradient(farthest-corner at var(--x) var(--y), #b6f492, #338b93) border-box;
}

a {
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
}

i {
    margin-right: 10px;
}
</style>
  