searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let login = document.querySelector('.login-form')
document.querySelector('#login-btn').onclick = () =>{
    login.classList.add('active');
}
document.querySelector('#close-login-form').onclick = () =>{
    login.classList.remove('active');
}

window.onscroll = () =>{
    login.classList.remove('active');
    searchForm.classList.remove('active');
  
  }

  window.onload = () =>{
  
    fadeOut();
  
  }

  function loader(){
    document.querySelector('.loader-container').classList.add('active');
  }
  
  function fadeOut(){
    setTimeout(loader, 1500);
  }


  