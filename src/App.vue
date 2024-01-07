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

export default {
  name: 'App',
  components: { HeaderNav,  FooterNav, Sidebar},

  data(){

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

.box {
  border: 8px solid #0038FF;
  border-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 0H8v4H4v4H0v8h4v4h4v4h8v-4h4v-4h4V8h-4V4h-4V0zm0 4v4h4v8h-4v4H8v-4H4V8h4V4h8z' fill='%230038FF'/%3E%3C/svg%3E") 8 stretch;
}

.box:before {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 0H0v8h12v4h4v4h-4v4H0v8h4v-4h8v-4h4v-4h8v-4h-8V8h-4V4H4V0z' fill='%230038FF'/%3E%3Cpath fill='%23161616' d='M0 8h4v12H0z'/%3E%3C/svg%3E");
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

.gradient-border {
  --x: 50%;
  --y: 50%;
  position: relative;
  padding: 1em 2em;
  cursor: pointer;
  outline: none;
  border: 2px solid transparent;
  border-left: none;
  background: linear-gradient(#1b1f23, #1b1f23) padding-box, radial-gradient(farthest-corner at var(--x) var(--y), #b6f492, #338b93) border-box;
}

.content{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>

