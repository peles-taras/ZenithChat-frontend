<template>
  <HeaderNav />

  <Sidebar />

  <router-view class="content" />

  <FooterNav />
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
import FooterNav from './components/FooterNav.vue'
import Sidebar from './components/Sidebar.vue'
import ChatSidebar from './components/ChatSidebar.vue'
import ProfileHeader from './components/ProfileHeader.vue'

export default {
  name: 'App',
  components: { HeaderNav, FooterNav, Sidebar, ChatSidebar, ProfileHeader},

  data() {

  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap");


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Source Code Pro", monospace;
  overflow-x: hidden;
}

body {
  background-color: #1b1f23;
  color: white;
  font-size: 20px;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

input, textarea{
  border: 0px solid;
  border-radius: 15px;
  transition: border-color 0.3s ease;
  padding: 15px;
  font-size: 20px;
}

input:focus, textarea:focus {
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(182, 244, 146) 0px 0px 0px 3px;
}

.button {
  --x: 50%;
  --y: 50%;
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 1em 2em;
  color: white;
  cursor: pointer;
  outline: none;
  border: 2px solid transparent;
  background: linear-gradient(#1b1f23, #1b1f23) padding-box, radial-gradient(farthest-corner at var(--x) var(--y), #b6f492, #338b93) border-box;
}

.gradient-text {
  background: linear-gradient(to right, #b6f492, #338b93);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

.gradient-border {
  --x: 50%;
  --y: 50%;
  position: relative;
  padding: 1em 2em;
  outline: none;
  border: 2px solid transparent;
  background: linear-gradient(#1b1f23, #1b1f23) padding-box, radial-gradient(farthest-corner at var(--x) var(--y), #b6f492, #338b93) border-box;
}

.gradient-border-no-padding {
  --x: 50%;
  --y: 50%;
  position: relative;
  outline: none;
  border: 2px solid transparent;
  background: linear-gradient(#1b1f23, #1b1f23) padding-box, radial-gradient(farthest-corner at var(--x) var(--y), #b6f492, #338b93) border-box;
}

.gradient-border-bottom {
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(to right, #b6f492, #338b93);
  border-image-slice: 1;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

a:hover {
  background: linear-gradient(to right, #b6f492, #338b93);
  -webkit-background-clip: text;
  background-clip: none;
  color: transparent;
  text-decoration: none;
}
</style>

