(function(){
  const modeBtnElem = document.querySelector('#mode-btn');
  const circleElem = document.querySelector('.btn-circle');
  const modeTextElem = document.querySelector('.mode-text');
  const navBarElem = document.querySelector('.top-nav');
  let mode_togle = false;

  modeBtnElem.addEventListener('click', function(){
    circleElem.classList.toggle('light');
    modeBtnElem.classList.toggle('light');
    navBarElem.classList.toggle('light');
    document.body.classList.toggle('light');
    if (modeTextElem.innerHTML == 'dark mode'){
      modeTextElem.innerHTML = 'light mode';
    }
    else{
      modeTextElem.innerHTML = 'dark mode';
    }
  });
})();