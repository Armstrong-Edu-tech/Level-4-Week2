const { createApp } = Vue;

createApp({
  data() {
    return {
      posts: [] // This will store the posts get from the API
    };
  },
  methods: {
    fetchPosts() {
      // Step 1: Send GET request to the API
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json()) // Step 2: Convert the response to JSON
        .then(data => {
          console.log('All posts:', data); // Log all posts
          this.posts = data.slice(0, 8);    // Step 3: Take only the first 8 posts
          console.log('Displayed posts:', this.posts); // Log the displayed posts
        })
        .catch(error => {
          // Step 4: Handle any errors during the fetch
          console.error('Error fetching posts:', error);
        });
    }
  }
}).mount('#app');


