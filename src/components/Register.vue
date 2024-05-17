<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
</script>

<template>
    <Card class="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle class="text-xl">
          Sign Up
        </CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="grid gap-2">
              <Label for="first-name">First name</Label>
              <Input id="first-name" placeholder="Max" v-model="firstName" required />
            </div>
            <div class="grid gap-2">
              <Label for="last-name">Last name</Label>
              <Input id="last-name" placeholder="Robinson" v-model="lastName" required />
            </div>
          </div>
          <div class="grid gap-2">
            <Label for="username">Username</Label>
            <Input id="username" placeholder="09010622004" v-model="email" required />
          </div>
          <div class="grid gap-2">
            <Label for="password">Password</Label>
            <Input id="password" type="password" v-model="password" required />
          </div>
          <Button type="register" class="w-full" @click="register">
            Create an account
          </Button>
          <Button variant="outline" class="w-full">
            Sign up with GitHub
          </Button>
        </div>
        <div class="mt-4 text-center text-sm">
          Already have an account?
          <a href="#" class="underline">
            Sign in
          </a>
        </div>
      </CardContent>
    </Card>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';
  
  const firstName = ref('');
  const lastName = ref('');
  const username = ref('');
  const password = ref('');
  
  const register = async () => {
    try {
      const response = await axios.post('http://localhost:3001/register', {
        firstName: firstName.value,
        lastName: lastName.value,
        username: username.value,
        password: password.value
      });
      console.log('User registered successfully:', response.data);
      // Tambahkan logika redirect atau pesan sukses jika diperlukan
    } catch (error) {
      console.error('Failed to register user:', error);
      // Tambahkan logika menampilkan pesan kesalahan jika diperlukan
    }
  };
  </script>