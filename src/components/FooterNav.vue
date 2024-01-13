<template>

<footer> 
    <ul>
      <li> <router-link :to="{ name: 'Terms' }"> Terms of use </router-link> </li>
      <li> <router-link :to="{ name: 'About' }"> About </router-link> </li>
    </ul>
  </footer>

</template>

<script>
export default {
  name: 'FooterNav'

}
</script>

<style scoped>
footer {
  height: 50px;
  color: white;
  padding: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center; 
}

footer li:not(:last-child):after {
  content: '';
  display: inline-block;
  width: 2px; 
  height: 1em; 
  margin: -0.1em 0.6em;
  background: linear-gradient(to right, #b6f492, #338b93);
  }

a {
  text-decoration: none;
  color: white;
}
</style>