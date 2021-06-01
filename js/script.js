let bg = document.getElementById("bg");
let bg3 = document.getElementById("bg3");
let bg2 = document.getElementById("bg2");
let texthome = document.getElementById("text-home");
//let footer = document.getElementByTagName("footer");

window.addEventListener('scroll', function(){
  var value = window.scrollY;
  var offset =  window.pageYOffset;
  
  scroll = offset;
  bg3.style.top = value * 0.1 + 'px';
  //text-home.style.width = (100 + scroll/5) + '%';
//  texthome.style.top = - scroll/50 + '%';
  //bg2.style.width = -(100 + scroll/5) + '%';
  bg.style.bottom = scroll/80 + '%';
  bg2.style.bottom = scroll/80 + '%';
  
  //footer.style.top = scroll/50 + '%'; 
})

function toggle() {
  var header = document.getElementById("header");
  header.classList.toggle('active')
}
