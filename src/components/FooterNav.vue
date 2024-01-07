<template>

<footer> 
    <ul>
      <li> <a href="#">Privacy Policy</a> </li>
      <li> <a href="#">Terms of use</a> </li>
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

li {
  margin-right: 20px;
}

a {
  text-decoration: none;
  color: white;
}
</style>