function signup(){
      var getemail = document.querySelector('#email')
      var getpassword = document.querySelector('#password')
      localStorage.setItem('email',getemail.value)
      localStorage.setItem('password',getpassword.value)
      if(localStorage.getItem('email') == '' && localStorage.getItem('password') == ''){
            alert('sign up incomplete')
      }
      else{

            alert('sign up success')
      }
      location.href = './index2.html'
}
function signin(){
      var getemail = document.querySelector('#semail').value
      var getpassword = document.querySelector('#spassword').value
      //var getconfirm = document.querySelector('#sconfirmpass')
      if(localStorage.getItem('email') == getemail && localStorage.getItem('password')== getpassword){
            alert('login success')
            location.href = './index3.html'
      }
      else{
            alert('wapis se sign in kr')
            location.href = './index2.html'
            
      }
}

var wel = localStorage.getItem('email').replace('@gmail.com','')
var well = document.querySelector('#welcome')
well.innerHTML = wel + ' welcome'