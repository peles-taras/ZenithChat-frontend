<template>
    <div class="profile-header">
        <a href="#">User settings</a>
        <a href="#">Privacy settings</a>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.profile-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 80px;
    margin-top: -20px;
    border-bottom: 2px solid transparent;
    -o-border-image: linear-gradient(to right, #b6f492, #338b93);
    border-image: linear-gradient(to right, #b6f492, #338b93);
    border-image-slice: 1;
}

.profile-header>a {
    width: 100%;
    text-decoration: none;
}
</style>