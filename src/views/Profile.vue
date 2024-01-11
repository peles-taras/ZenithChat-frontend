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
import { ref } from 'vue'
import { useRouter } from 'vue-router';

export default {
  components: { ProfileHeader },
  setup() {

    const user = ref({
      id: 1,
      username: 'John Doe',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKFNdYkVUeHuTI3QzEUczJ0VBzZus6lcKGMFkex-9HA&s',
      about: 'Some profile bioSome profile bioSome profile bioSome profile bioSome profile bioSome profile bioSome profile bioSome profile bioSome profile bio'
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

.profile-info{
  margin-top: 20px;
  text-align: center;
}

.profile-info-username{ 
  color: bisque;
}

.profile-info-about{
  margin-top: 100px;
}

.profile-info-about > label{
  font-size: 22px;
  color: grey;
}

</style>