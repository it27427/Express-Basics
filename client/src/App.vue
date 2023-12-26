<script setup>
import { onMounted } from 'vue';
import useUsers from './composable/userApi';

const {usersData, error, getAllUsers} = useUsers();
onMounted(getAllUsers);

</script>

<template>
  <main>
    <h1>MEVN Stack</h1>

    <ul>
      <li v-if="error">Oops! Error encountered {{ error.message }}</li>
      <li v-else-if="usersData">
        <ul v-for="(user, i) in usersData" :key="i">
          <li>{{ user.username }}</li>
          <li>{{ user.email }}</li>
          <li>{{ user.phone }}</li>
        </ul>
      </li>
    </ul>
  </main>
</template>