

document.addEventListener("click", function(e){
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'))
        myModal.show();
    }
})

var div = document.getElementById('gallery-button');
var button = document.getElementById('button-gallery');
var display = 0;

function hideShow(){
    if(display == 1){
        div.style.display = 'block';
        display = 0;
        if (button.innerText === 'Show Gallery') {
            button.innerText = 'Hide Gallery'; 
        }
        div.style.opacity = 1;
 
    }
    else
    {
        div.style.opacity = 0;
        div.style.transition = 1;
       
        display = 1;
        button.innerText = 'Show Gallery';
    
        
 

    }
}


document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts');

    // Function to fetch and display posts
    function fetchPosts() {
        fetch('data/posts.json')
            .then(response => response.json())
            .then(posts => {
                posts.forEach(post => {
                    const postElement = document.createElement('div');
                    postElement.classList.add('post');
                    postElement.innerHTML = `
                        <h2>${post.title}</h2>
                        <p>${post.content}</p>
                        <div class="comments" id="comments-${post.id}"></div>
                    `;
                    postsContainer.appendChild(postElement);
                    fetchComments(post.id);
                });
            })
            .catch(error => console.error('Error fetching posts:', error));
    }

    // Function to fetch and display comments for a post
    function fetchComments(postId) {
        fetch('data/comments.json')
            .then(response => response.json())
            .then(comments => {
                const commentsContainer = document.getElementById(`comments-${postId}`);
                comments.filter(comment => comment.postId === postId).forEach(comment => {
                    const commentElement = document.createElement('p');
                    commentElement.textContent = `${comment.author}: ${comment.comment}`;
                    commentsContainer.appendChild(commentElement);
                });
            })
            .catch(error => console.error('Error fetching comments:', error));
    }

    // Fetch and display posts on page load
    fetchPosts();
});


