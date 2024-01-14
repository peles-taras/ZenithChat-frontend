<template>
    <div class="wrapper gradient-border" @mousemove="handleMouseMove">
        <form>

            <div class="form-input">
                <label>Email</label>
                <input type="email">
            </div>

            <div class="form-input">
                <label>Username</label>
                <input type="text">
            </div>

            <div class="form-input">
                <label>Password</label>
                <input type="password">
            </div>

            <button class="button">Sign up</button>
            <div class="signup">
                <p>Already an have account? <router-link class="signup-link" :to="{ name: 'Login' }"> Login </router-link>
                </p>
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
    height: 50vh;
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
    width: 450px;
    height: 30px;
    text-align: center;
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