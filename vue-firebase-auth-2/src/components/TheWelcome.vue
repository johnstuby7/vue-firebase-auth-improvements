<script setup>
import { auth } from "@/firebase.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { ref } from "vue"

const data = ref({
  email: '',
  password: ''
});

const mode = ref('login');

function toggleMode(val) {
  mode.value = val
}

async function login(email, password) {

}

async function register(email, password) {

}

function submit() {
  let email = data.value.email;
  let password = data.value.password;
  if (mode.value === 'login') {
    login(email, password)
  } else {
    register(email, password)
  }
}
</script>

<template>
  <div>
    <form @submit.preventDefault="submit">
      <input type="email" placeholder="Enter Email" v-model="data.email">
      <input type="password" placeholder="Enter password" v-model="data.password">
      <button type="submit">{{ mode === 'login' ? 'Login' : 'Register' }}</button>

      <div @click="toggleMode(mode === 'login' ? 'register' : 'login')">
        {{ mode === 'login' ? 'Not a user? Register' : 'Already a user? Login' }}
      </div>
    </form>
  </div>
</template>
