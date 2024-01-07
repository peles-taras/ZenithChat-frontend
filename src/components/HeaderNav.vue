<template>
  <header>
    <div class="logo" @click="logoHandle">
      <p>Zenith</p>
      <img src="../assets/logo.png" class="logo-img">
    </div>
    <div>
      <p class="dots"></p>
    </div>
    <button class="button" @click="loginHandle" @mousemove="handleMouseMove"> Log in</button>
  </header>
</template>

<script>
import { getCurrentInstance } from 'vue';

export default {
  name: 'HeaderNav',

  setup() {
    const instance = getCurrentInstance();

    const loginHandle = () => {
      instance.proxy.$router.push({ name: 'Login' });
    };

    const logoHandle = () => {
      instance.proxy.$router.push({ name: 'Home' });
    };


    return { loginHandle, logoHandle };
  }
};
</script>

<style scoped>
header {
  height: 80px;
  position: absolute;
  top: 0;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
}

ul {
  display: flex;
  justify-content: center;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-right: 20px;
}

a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

button {
  margin-left: 100px;
}

.logo {
  cursor: pointer;
  display: flex;
}

.logo>p {
  margin-top: 20px;
  margin-right: 5px;
}

.logo-img {
  object-fit: cover;
  width: 50px;
  height: 45px;
}

.dots {
  margin-top: 15px;
  width: 20px;
}



.dots:after {
  content: ' .';
  animation: dots 1s steps(5, end) infinite;
}

@keyframes dots {

  0%,
  20% {
    color: rgba(0, 0, 0, 0);
    text-shadow:
      .25em 0 0 rgba(0, 0, 0, 0),
      .5em 0 0 rgba(0, 0, 0, 0);
  }

  40% {
    color: white;
    text-shadow:
      .25em 0 0 rgba(0, 0, 0, 0),
      .5em 0 0 rgba(0, 0, 0, 0);
  }

  60% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 rgba(0, 0, 0, 0);
  }

  80%,
  100% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 white;
  }
}
</style>