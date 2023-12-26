import { ref } from 'vue';
import axios from 'axios';

export default function getUsers() {
  const url = 'http://localhost:3001/api/user/all';
  const usersData = ref([]);
  const error = ref(null);

  const getAllUsers = async () => {
    usersData.value = [];
    error.value = null;

    try {
      const res = await axios.get(url);
      usersData.value = res.data;
    } catch (err) {
      error.value = err;
    }
  };

  return {
    usersData,
    error,
    getAllUsers,
  };
}
