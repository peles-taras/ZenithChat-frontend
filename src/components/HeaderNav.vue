<template>
  <header>
    <ul>
      <li> <a href="#">Home</a> </li>
      <li> <a href="#">Chats</a> </li>
      <li> <a href="#">About</a> </li>
    </ul>
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

    return { loginHandle };
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
</style>