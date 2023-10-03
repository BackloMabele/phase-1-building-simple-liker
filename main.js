// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Event Listeners
const icons = document.querySelectorAll('.like-glyph')
icons.forEach((icon) => {
  icon.addEventListener('click', handleLikeAction)
});


// the like action handler
function handleLikeAction(e) {
  const likeButton = e.target;
  mimicServerCall()
    .then(()=> {
      alterHeartAppearance(likeButton);
    })
    .catch((error) => {
      const errorModal = document.getElementById('modal');
      errorModal.classList.remove('hidden');
      document.getElementById('modal-message').innerText = error;
      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
    });
}



// altering the appearance of the FULL_HEART
function alterHeartAppearance(heart) {
  if (heart.textContent === EMPTY_HEART) {
    heart.textContent = FULL_HEART;
    heart.classList.add('clicked-heart')
  } else {
    heart.textContent = EMPTY_HEART;
    heart.classList.remove('clicked-heart')
  }
}


//initial hiding of the error
const hideError = document.getElementById('modal')
hideError.classList.add('hidden')

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
