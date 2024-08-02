<template>
  <div class="sigin fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
    <div class=" bg-blue-200 rounded-lg w-4/5 md:w-1/2 p-6 relative">
    <a href="/sigin = false" class=" absolute top-2 right-2 text-gray-600 text-2xl cursor-pointer">&times;</a>
    <form @submit.prevent='submitForm' class=" modal-content">
        <div class=" container">
            <h1 class=" text-2xl font-bold mb-4">Sign up</h1>
            <p class=" mb-4">Please fill in this form to create an account.</p>
            <hr class=" mb-4">
            <label for="email" class="block mb-2 flex"><b>Email</b></label>
            <input type="text" id="email" v-model="email" placeholder="Enter Email" required class=" w-full p-3 mb-4 bg-gray-100 border border-gray-300 rounded">
            
            <label for="psw" class=" block mb-2 flex"><b>Password</b></label>
            <input type="password" id="psw" v-model="password" placeholder="Enter Password" required class=" w-full p-2 mb-4 bg-gray-100 border border-gray-300 rounded">
            
            <label for="psw-repeat" class=" block mb-2 flex"><b>Repeat Password</b></label>
            <input type="password" id="psw-repeat" v-model="passwordRepeat" placeholder="Repeat Password" required class=" w-full p-3 mb-4 bg-gray-100 border border-gray-300 rounded">

            <label class="block mb-4 flex">
                <input type="checkbox" v-model="rememberMe" class=" mr-2">Remember me
            </label>

            <p class=" mb-4 flex">By creating an account you agree to our <a href="" class=" text-blue-500 underline">Terms & Privacy</a>.</p>
            <div class=" flex justify-between">
                <button type="submit" class=" bg-green-600 text-white px-4 py-2 rounded" >Singnup</button>
                <button type="button" @click="showModal = false" class=" bg-red-600 text-white px-4 py-2 rounded">Cancel</button>
                
            </div>
           </div>
           </form>    
    </div>    
  </div>
</template>


<script>
import { ref } from 'vue';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'; // Adjust the import path as needed

export default {
  name: 'SignupModal',
  setup() {
    const email = ref('');
    const password = ref('');
    const passwordRepeat = ref('');
    const rememberMe = ref(false);
    const showModal = ref(false);

    const submitForm = async () => {
      if (password.value !== passwordRepeat.value) {
        alert("Passwords do not match");
        return;
      }

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        console.log('User created:', userCredential.user);
        showModal.value = false;
      } catch (error) {
        console.error('Error creating user:', error);
        alert(error.message);
      }
    };

    return {
      email,
      password,
      passwordRepeat,
      rememberMe,
      showModal,
      submitForm,
    };
  },
};
</script>