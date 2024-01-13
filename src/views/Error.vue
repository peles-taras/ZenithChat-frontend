<template>
  <div class="error">
    <h3>Error</h3>
    <h3>{{ errorMessage }}</h3>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
setup(){

 const errorMessage = ref('The page doesn`t exist');
 return {errorMessage}
}

} 
</script>

<style scoped>
.error {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
</style>