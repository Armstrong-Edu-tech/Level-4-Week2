// app.js
const { createApp } = Vue;

createApp({
  data() {
    return {
      users: [],      // Array to store user profiles
      loading: true   // Boolean to track loading state
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();  // Parse JSON response
        this.users = data;                  // Store user data
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        this.loading = false;               // Hide loading message
      }
    }
  },
  mounted() {
    this.fetchUsers();  // Fetch data when the app is mounted
  }
}).mount('#app');

