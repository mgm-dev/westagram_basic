const loginPageInit = () => {
  const idInput = document.querySelector('.id-input');
  const pwInput = document.querySelector('.pw-input');
  const loginBtn = document.querySelector('.login-btn');

  const checkIfInputEmpty = () => {
    idInput.value != '' && pwInput.value != ''
      ? loginBtn.classList.replace('inactive', 'active')
      : loginBtn.classList.replace('active', 'inactive');

    idInput.value != '' && pwInput.value != ''
      ? (loginBtn.disabled = false)
      : (loginBtn.disabled = true);
  };

  idInput.addEventListener('keyup', checkIfInputEmpty);
  pwInput.addEventListener('keyup', checkIfInputEmpty);
};

loginPageInit();
