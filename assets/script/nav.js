(function(){
  const topNavElem = document.querySelector('.top-nav');
  const logoImg = document.querySelector('.logo-img');
  const navNameElem = document.querySelector('.b-name');
  const navlistElem = document.querySelector('.nav-list');
  function navOpen(){
    navNameElem.style.display = 'block';
    navlistElem.style.display = 'flex';
    topNavElem.style.height = '6rem';
  }
  function navClose(){
    navNameElem.style.display = 'none';
    navlistElem.style.display = 'none';
    topNavElem.style.height = '4rem';
  }
  window.addEventListener('scroll', function(){
    if(pageYOffset == 0){
      navOpen();
    }
    else{
      navClose();
    }
  });
  topNavElem.addEventListener('mouseenter', navOpen);
  topNavElem.addEventListener('mouseleave', function(){
    if (pageYOffset != 0){
      navClose();
    }
  });      
})();