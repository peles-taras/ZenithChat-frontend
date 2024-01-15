<template>
    <div class="profile-wrapper gradient-border" @mousemove="handleMouseMove">

        <div class="settings">

            <div class="settings-image">
                <img :src="user.image">
            </div>
            <button class="button">Change photo</button>

            <form>
                <div class="settings-field">
                    <label>About: </label>
                    <input type="text" :value="user.username">
                </div>

                <div class="settings-field">
                    <label>Email: </label>
                    <input type="text" :value="user.email">
                </div>

                <div class="settings-about">
                    <label>About: </label>
                    <textarea :value="user.about"></textarea>
                </div>

                <button class="button">Save</button>
            </form>
        </div>

    </div>
</template>

<script>
import { ref } from 'vue'

export default {

    setup() {

        const user = ref({
            id: 1,
            username: 'John Doe',
            email: 'mail@gmail.com',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKFNdYkVUeHuTI3QzEUczJ0VBzZus6lcKGMFkex-9HA&s',
            about: 'Bio'
        })

        return { user }
    }

}
</script>

<style scoped>
.profile-wrapper {
    width: 40%;
    min-height: 60vh;
    height: auto;
    flex-direction: column;
    flex-wrap: nowrap;
}

.settings>form {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
}

label {
    margin: 10px 0px;
}

.settings-image {
    overflow: hidden;
    width: 80px;
    height: 80px;
    display: flex;
    margin: 0 auto;
    border-radius: 50px;
}

.settings>button {
    display: flex;
    margin: 15px auto;
}

.settings-image>img {
    min-width: 80px;
    min-height: 80px;
    -o-object-fit: cover;
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.settings-field {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
}

.settings-field>input {
    height: 30px;
    text-align: center;
}

.settings-about {
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: column;
}

.settings-about>label {
    text-align: center;
}

.settings-about>textarea {
    width: 90%;
    height: 60px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-self: center;

}

form>button {
    margin-top: 20px;
}

input,
textarea {
    font-size: 16px;
}</style>