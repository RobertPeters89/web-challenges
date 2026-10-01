console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const newPost = document.createElement("article");
newPost.classList.add("post");

const postContent = document.createElement("p");
postContent.classList.add("post__content");
postContent.textContent = "New Social Media Post with Javascript";

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");

const postUsername = document.createElement("span");
postUsername.classList.add("post__username");
postUsername.textContent = "@new username";

const postButton = document.createElement("button");
postButton.type = "button";
postButton.classList.add("post__button");
postButton.textContent = "♥ Like";

postButton.addEventListener("click", handleLikeButtonClick);

postFooter.append(postUsername, postButton);

newPost.append(postContent, postFooter);

document.body.append(newPost);
