document.getElementById('email').addEventListener('blur',function(){
    const emailInput = this;
    const errorMessage = document.getElementById('message-error')

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(emailInput.value) && emailInput === ""){
        errorMessage.style.display = 'flex';
    }else{
        errorMessage.style.display = 'none';
    }
})

document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const githubUser = document.getElementById('github-user').value;
    const avatarImg = document.getElementById('image-avatar').src;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('message-error').style.display = 'flex';
        return;
    }

    localStorage.setItem('fullName', fullName);
    localStorage.setItem('email', email);
    localStorage.setItem('githubUser', githubUser);
    localStorage.setItem('avatarImg', avatarImg);

    window.location.href = "ticket.html";
})

const fileInput = document.getElementById("input-file");
const avatarImage = document.getElementById("image-avatar");
const errorMessage = document.getElementById("info-picture-error");
const buttonContainer = document.getElementById("button-container");
const removeButton = document.getElementById("remove-image");
const changeButton = document.getElementById("change-image");
const uploadText = document.getElementById("upload-text");

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const maxSize = 500 * 1024;

  if (file) {
    if (file.type.startsWith("image/") && file.size <= maxSize) {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        avatarImage.src = e.target.result;
        errorMessage.style.display = "none";
        buttonContainer.style.display = "flex";
        uploadText.style.display = "none";
      };

      reader.readAsDataURL(file);
    } else {
      errorMessage.style.display = "flex";
      fileInput.value = "";
    }
  }
});

removeButton.addEventListener('click', ()=>{
    avatarImage.src = "./src/images/icon-upload.svg";
    buttonContainer.style.display = "none";
    fileInput.value = "";
    uploadText.style.display = "block";
})

changeButton.addEventListener("click", () => {
    fileInput.click();
  });