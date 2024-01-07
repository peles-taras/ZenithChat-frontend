<template>

<footer> 
    <ul>
      <li> <a href="#">Terms of use</a></li>
      <li> <a href="#">About</a> </li>
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
  width: 2px; /* Adjust the width of your separator */
  height: 1em; /* Adjust the height of your separator */
  margin: -0.1em 0.6em;
  background: linear-gradient(to right, #b6f492, #338b93);
  }

a {
  text-decoration: none;
  color: white;
}
</style>