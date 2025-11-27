const { createApp } = Vue;

createApp({
    data() {
        return {
            posts: []
        };
    },
    methods: {
        fetchPosts() {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => {
                    this.posts = data.slice(0, 8);
                    console.log('Displayed posts:', this.posts);
                })
                .catch(error => {
                    console.error('Error fetching posts:', error);
                });
        }
    }
}).mount('#app');