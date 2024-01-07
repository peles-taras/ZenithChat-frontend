<template>
    <div class="chat-wrapper gradient-border" @mousemove="handleMouseMove">
        <p> this is chat</p>
    </div>
</template>

<script>
export default {
    name: 'Chat',
    setup() {

    }
}
</script>

<style scoped>
.chat-wrapper {
    margin-left: 100px;
    width: 70%;
    height: 80vh;
}
</style>