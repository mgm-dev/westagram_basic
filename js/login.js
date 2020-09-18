const loginPageInit = () => {
  const idInput = document.querySelector('.login-page-id-input');
  const pwInput = document.querySelector('.login-page-pw-input');
  const loginBtn = document.querySelector('.login-page-login-btn');

  const checkIfInputEmpty = () => {
    idInput.value != '' && pwInput.value != ''
      ? loginBtn.classList.replace('in-active', 'active')
      : loginBtn.classList.replace('active', 'in-active');

    idInput.value != '' && pwInput.value != ''
      ? (loginBtn.disabled = false)
      : (loginBtn.disabled = true);
  };

  idInput.addEventListener('keyup', checkIfInputEmpty);
  pwInput.addEventListener('keyup', checkIfInputEmpty);
};

loginPageInit();
