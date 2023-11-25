<script setup>
import { auth } from "@/firebase.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { ref } from "vue"

const data = ref({
  email: '',
  password: ''
});

const mode = ref('login');

const user = ref('');

function toggleMode(val) {
  mode.value = val
}

async function login(email, password) {
  await signInWithEmailAndPassword(auth, email, password).then((res) => {

  }).catch((err) => {
    console.log(err)
  })
}

async function register(email, password) {
  await createUserWithEmailAndPassword(auth, email, password).then((res) => {

  }).catch((err) => {
    console.log(err)
  })
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

async function signout() {
  await signOut(auth).then((res) => { }).catch((err) => {
    console.log(err);
  })
}

onAuthStateChanged(auth, currentUser => {
  user.value = currentUser;
  console.log(user.value); console.log("users");
})
</script>

<template>
  <div>
    <div v-if="user">{{ user.email }}<button @click="signout">Sign Out</button></div>
    <p>

      {{ user }} user
    </p>
    <form @submit.preventDefault="submit">
      <input type="email" placeholder="Enter Email" v-model="data.email"> <br />
      <input type="password" placeholder="Enter password" v-model="data.password"> <br />
      <button type="submit">{{ mode === 'login' ? 'Login' : 'Register' }}</button>

      <div @click="toggleMode(mode === 'login' ? 'register' : 'login')">
        {{ mode === 'login' ? 'Not a user? Register' : 'Already a user? Login' }}
      </div>
    </form>
  </div>
</template>
