const username = document.getElementById("username");
const password = document.getElementById("password");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const submitBtn = document.querySelector(".login-btn");

username.addEventListener("keyup", () => {
  if (username.value == "") {
    usernameError.style.display = "block";
  } else {
    usernameError.style.display = "none";
  }
});

password.addEventListener("keyup", () => {
  if (password.value == "") {
    passwordError.style.display = "block";
  } else {
    passwordError.style.display = "none";
  }
});

submitBtn.addEventListener("click", () => {
  if (username.value == "") {
    usernameError.style.display = "block";
  }
  if (password.value == "") {
    passwordError.style.display = "block";
  }
  else{
      usernameError.style.display = 'none';
      passwordError.style.display = "none";
      let cred = {
          userName: `${username.value}`,
          password: `${password.value}`
      }

      console.log(cred);

  }
});

function switchForm(className, e) {
  e.preventDefault();
  const allForm = document.querySelectorAll('form');
  const form = document.querySelector(`form.${className}`);

  allForm.forEach(item=> {
    item.classList.remove('active');
  })
  form.classList.add('active');
}


const registerPassword = document.querySelector('form.register #password');
const registerConfirmPassword = document.querySelector('form.register #confirm-pass');

registerPassword.addEventListener('input', function () {
  registerConfirmPassword.pattern = `${this.value}`;
})