// Write your code here!
// index.js

const postList = document.getElementById('post-list'); // select the ul element

// Function to display posts
function displayPosts(posts) {
  posts.forEach(post => {
    const li = document.createElement('li'); // create li element
    const h1 = document.createElement('h1'); // create h1 element
    const p = document.createElement('p'); // create p element

    h1.textContent = post.title; // set title
    p.textContent = post.body;  // set body

    li.append(h1, p); // append h1 and p to li
    postList.appendChild(li); // append li to ul
  });
}

// Function to fetch posts using async/await
async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const posts = await response.json();
    displayPosts(posts); // call displayPosts after fetching
  } catch (error) {
    console.error('Error fetching posts:', error);
    const errorLi = document.createElement('li');
    errorLi.textContent = `Failed to load posts: ${error.message}`;
    postList.appendChild(errorLi);
  }
}

// Call fetchPosts to load posts when page loads
fetchPosts();
