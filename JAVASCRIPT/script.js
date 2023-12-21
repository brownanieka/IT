

// const toTop= document.querySelector (".to-top");

// window.addEventListener ("scrool", () =>{
//    if (window.pageYOffset >100) {
//         toTop.classList.add("active");
//     } else {
//         totop.classList.remove("active");
//     }

// })



//  let tablinks = document.getElementsByClassName("tab-links");

//  let tabcontents = document.getElementsByClassName("tab-contents");

//  function opentab(tabname){
//     for(tablink of tablinks){
//           tablink.classList.remove("active-link")  ;
//     }
//     for(tabcontent of tabcontents){
//           tabcontent.classList.remove("active-tab")  ;
//     }
//     event.currentTarget.classList.add("active-link");
//     document.getElementById(tabname).classList.add("active-tab"); 
//  }



// const scriptURL = 'https://script.google.com/macros/s/AKfycbxOc10mJtXeKijWjyIcHI5nV6EMDBjZHMa8rO83vpmHYCTY78YI6XLLe8-UJOa1CeXMkg/exec'
// const form = document.forms['submit-to-google-sheet']
// const msg = document.getElementById("msg")

// form.addEventListener('submit', e => {
// e.preventDefault()
// fetch(scriptURL, { method: 'POST', body: new FormData(form)})
// .then(response => {
//     msg.innerHTML = "Message sent successfully"
//     setTimeout(function(){
//         msg.innerHTML = "  "
//     },5000)
//     form.reset()
// }) 
// .catch(error => console.error('Error!', error.message))
// })



// let sidemenu = document.getElementById("sidemenu");



// //    menu render fixed
// sidemenu.classList.add('display-non')

// function openmenu(){
// sidemenu.style.left = "0";
// sidemenu.classList.remove('display-non')
// }

// function closemenu(){
// sidemenu.style.left = "-500px";
// sidemenu.classList.remove('display-non')

// }



// // scroll to fixed topnav bar

// let fixedBar = document.querySelector(".fix")
// let fixtStart = false
// window.addEventListener('scroll', function(){
// if(window.scrollY >= 20){
//     fixedBar.classList.add('fixed');
//     sidemenu.classList.add('display-non')

//     fixtStart = true
// }else{
//     fixedBar.classList.remove('fixed');
//     sidemenu.classList.remove('display-non')

//     fixtStart = false;
// }
// })
