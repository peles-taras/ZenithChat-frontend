<template>
  <div class="profile-wrapper gradient-border" @mousemove="handleMouseMove">

    <ProfileHeader />

    <div class="profile-general">
      <div class="profile-image">
        <img :src="user.image">
      </div>
      <div class="profile-info">
        <div class="profile-info-username">
          <p> {{ user.username }}</p>
        </div>

        <button class="button" @click="redirectToChat(user.id)"> Message </button>

        <div class="profile-info-about">
          <label> About: </label>
          <p> {{ user.about }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileHeader from '../components/ProfileHeader.vue'
import { ref, getCurrentInstance, watchEffect } from 'vue'
import { useRouter } from 'vue-router';

export default {
  components: { ProfileHeader },
  setup() {
    const instance = getCurrentInstance();
    const router = useRouter();
    const chatId = ref(router.currentRoute.value.params.id);

    const redirectToChat = (id) => {
      instance.proxy.$router.push({ name: 'Chat', params: { id } })
    }

    watchEffect(() => {
      chatId.value = router.currentRoute.value.params.id;
    })

    const user = ref({
      id: 1,
      username: 'John Doe',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKFNdYkVUeHuTI3QzEUczJ0VBzZus6lcKGMFkex-9HA&s',
      about: 'Some profile bioSome profile bioSome profile bioSome profile bioSome profile bioSome profile bioSome profile bioSome profile bioSome profile bio'
    })

    return { user, redirectToChat }
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

.profile-general {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  margin: 20px 20px;
}

.profile-image {
  overflow: hidden;
  width: 80px;
  height: 80px;
  display: flex;
  margin: 0 10px;
  border-radius: 50px;
}

.profile-image>img {
  min-width: 80px;
  min-height: 80px;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.profile-info {
  margin-top: 20px;
  text-align: center;
}

.profile-info>button {
  margin-top: 50px;
}

.profile-info-username {
  color: bisque;
}

.profile-info-about {
  margin-top: 50px;
}

.profile-info-about>label {
  font-size: 22px;
  color: grey;
}
</style>