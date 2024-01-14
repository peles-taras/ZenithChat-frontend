<template>
    <div class="wrapper gradient-border" @mousemove="handleMouseMove">
        <form>
            <div class="form-input">
                <label>Username</label>
                <input type="text">
            </div>

            <div class="form-input">
                <label>Password</label>
                <input type="password">
            </div>

            <button class="button">Log in</button>
            <div class="signup">
                <p>No account? <router-link class="signup-link" :to="{ name: 'Signup' }"> Signup </router-link></p>
            </div>

        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper {
    width: 35%;
    height: 40vh;
}

.form-input {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px auto;
    height: 75px;
}

button {
    display: block;
    margin: 0 auto;
    margin-top: 20px;

}

input {
    width: 350px;
    height: 30px;
}

label {
    font-size: 22px;
    margin-bottom: 5px;
}

.signup {
    margin-top: 20px;
    text-align: center;
}

.signup-link {
    text-decoration: none;
}
</style>