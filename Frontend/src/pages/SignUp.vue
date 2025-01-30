<template>
    <GuestLayout>
        <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Create new account</h2>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form @submit.prevent="submit" class="space-y-6">
            <div>
                <label for="name" class="block text-sm/6 font-medium text-gray-900">Name</label>
                <div class="mt-2">
                    <input name="name" v-model="data.name" id="name" autocomplete="name" required="" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
            </div>
            <div>
                <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
                <div class="mt-2">
                    <input type="email" v-model="data.email" name="email" id="email" autocomplete="email" required="" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
            </div>
    
            <div>
                <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>                
                <div class="mt-2">
                    <input type="password" v-model="data.password" name="password" id="password" required="" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
            </div>
            <div>
                <label for="passwordrepeat" class="block text-sm/6 font-medium text-gray-900">Repeat password</label>                
                <div class="mt-2">
                    <input type="password" v-model="data.password_confirmation" name="passworderpeat" id="passwordrepeat" required="" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
            </div>
    
            <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
            </div>
            </form>
    
            <p class="mt-10 text-center text-sm/6 text-gray-500">
            Already have an account?
            {{ ' ' }}
            <RouterLink :to="{name:'Login'}" class="font-semibold text-indigo-600 hover:text-indigo-500">Login from here</RouterLink>
            </p>
        </div>
    </GuestLayout>
</template>
<script setup>
    import { RouterLink } from 'vue-router';
    import GuestLayout from '../components/GuestLayout.vue';
    import { ref } from 'vue';
    import axiosClient from '../axios';
import axios from 'axios';

    const data = ref({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

    const submit = () =>{
        axiosClient.get('/sanctum/csrf-cookie').then(response => {
            axiosClient.post("/register", data.value)
    });
    }
</script>
<style>
    
</style>