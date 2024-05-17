<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import bcrypt from 'bcryptjs';

import axios from 'axios';
export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('http://localhost:3001/users');
        this.users = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  }
}

// const email = ref('');
// const password = ref('');

// const handleLogin = async () => {
//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(password.value, salt);
//   console.log(Email: ${email.value});
//   console.log(Hashed Password: ${hashedPassword});
// }
</script>

<template>
  <Card class="w-full max-w-sm">
    <CardHeader>
      <CardTitle class="text-2xl">
        Login
      </CardTitle>
      <CardDescription>
        Enter your email below to login to your account.
      </CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <div class="grid gap-2">
        <Label for="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" required />
      </div>
      <div class="grid gap-2">
        <Label for="password">Password</Label>
        <Input id="password" type="password" required />
      </div>
    </CardContent>
    <CardFooter>
      <Button class="w-full">
        Sign in
      </Button>
    </CardFooter>
  </Card>
</template>

