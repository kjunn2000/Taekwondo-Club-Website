window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function menu(){
    if(document.getElementById("menu-area").style.display=="none"){
        document.getElementById("menu-area").style.display="block";
    }else{
        document.getElementById("menu-area").style.display="none";
    }

}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function light(){
  document.getElementById("main").style.backgroundColor = "#FFF";
  document.getElementById("top").style.color = "black";
  document.getElementById("box").style.opacity = 1;
  document.getElementById("box2").style.opacity = 1;
  document.getElementById("box3").style.opacity = 1;
  document.getElementById("box4").style.opacity = 1;
}
function closelight(){
  document.getElementById("main").style.backgroundColor = "black";
  document.getElementById("top").style.color = "#FFF";
  document.getElementById("box").style.opacity = 0.5;
  document.getElementById("box2").style.opacity = 0.5;
  document.getElementById("box3").style.opacity = 0.5;
  document.getElementById("box4").style.opacity = 0.5;
  
}

function contact()
	{
		if( document.getElementById('first').value==""){
			alert("Please provide your first name");
      document.getElementById('first').focus();
      return false;
		
		}
		if( document.getElementById('last').value==""){
			alert("Please provide your last name");
			document.getElementById('last').focus();
      return false;
		}
		if( document.getElementById('email').value==""){
			alert("Please set provide your email");
      document.getElementById('email').focus();
      return false;
    }
    if( document.getElementById('text').value==""){
			alert("Please set provide your message");
      document.getElementById('message').focus();
      return false;
    }
    if( document.getElementById('first').value!=""&&document.getElementById('last').value!=""&&document.getElementById('email').value!=""){

				alert("Submit Successfully");
      }								
    }		
  
    function register()
    {
      if( document.getElementById('first').value==""){
        alert("Please provide your first name");
        document.getElementById('first').focus();
        return false;
      
      }
      if( document.getElementById('last').value==""){
        alert("Please provide your last name");
        document.getElementById('last').focus();
        return false;
      }
      if( document.getElementById('password').value==""){
        alert("Please set provide your password");
        document.getElementById('password').focus();
        return false;
      }
      if( document.getElementById('email').value==""){
        alert("Please set provide your email");
        document.getElementById('email').focus();
        return false;
      }
      if( document.getElementById('phone').value==""){
        alert("Please set provide your phone");
        document.getElementById('phone').focus();
        return false;
      }
      if( document.getElementById('address').value==""){
        alert("Please set provide your address");
        document.getElementById('address').focus();
        return false;
      }
      if( document.getElementById('first').value!=""&&document.getElementById('last').value!=""&&document.getElementById('password').value!=""&&document.getElementById('email').value!=""&&document.getElementById('phone').value!=""&&document.getElementById('address').value!=""){
  
          alert("Submit Successfully");
        }								
      }			

      function openlight1(){
        document.getElementById("p1").style.background="#E94B3CFF";
        document.getElementById("p1").style.boxShadow="0 0 10px #808080, 0 0 40px #808080, 0 0 80px #808080";
}
    
function closelight1(){
    document.getElementById("p1").style.background="#505050";
    document.getElementById("p1").style.boxShadow="none";
}
function openlight2(){
    document.getElementById("p2").style.background="#E94B3CFF";
    document.getElementById("p2").style.boxShadow="0 0 10px #808080, 0 0 40px #808080, 0 0 80px #808080";
}

function closelight2(){
    document.getElementById("p2").style.background="#505050";
    document.getElementById("p2").style.boxShadow="none";
}
function openlight3(){
    document.getElementById("p3").style.background="#E94B3CFF";
    document.getElementById("p3").style.boxShadow="0 0 10px #808080, 0 0 40px #808080, 0 0 80px #808080";
}

function closelight3(){
    document.getElementById("p3").style.background="#505050";
    document.getElementById("p3").style.boxShadow="none";
}
function openlight4(){
    document.getElementById("p4").style.background="#E94B3CFF";
    document.getElementById("p4").style.boxShadow="0 0 10px #808080, 0 0 40px #808080, 0 0 80px #808080";
}

function closelight4(){
    document.getElementById("p4").style.background="#505050";
    document.getElementById("p4").style.boxShadow="none";
}
