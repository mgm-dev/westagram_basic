const idInput = document.querySelector('.login-id');
const pwInput = document.querySelector('.login-pw');
const loginBtn = document.querySelector('.login-btn');

idInput.addEventListener('keyup', () => {
  if (idInput.value != '' && pwInput.value != '') {
    loginBtn.classList.replace('in-active', 'active');
    loginBtn.disabled = false;
  } else {
    loginBtn.classList.replace('active', 'in-active');
    loginBtn.disabled = true;
  }
});

pwInput.addEventListener('keyup', () => {
  if (idInput.value != '' && pwInput.value != '') {
    loginBtn.classList.replace('in-active', 'active');
    loginBtn.disabled = false;
  } else {
    loginBtn.classList.replace('active', 'in-active');
    loginBtn.disabled = true;
  }
});
