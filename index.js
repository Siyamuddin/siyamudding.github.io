//To exicute tabs in about section.
var tablinks= document.getElementsByClassName("tab-links");
  var tabcontents=document.getElementsByClassName("tab-contents");

  function opentab(tabname){
    for(tablink of tablinks){
      tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");}

    



    //To exicute side menue.
    var sidemenu=document.getElementById("sidemenu");

    function openmenu(){
      sidemenu.style.right="0";
    }
    function closemenu(){
      sidemenu.style.right="-200px";
    }





    //To save the infomation from form section.
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwsEnrXKq3W9dYXq8c19sXPJOTzH4j8lPpFScFBwQOqFVcCW81EqQ7J5mAwq9GyGeKd/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Massage has sent!";
        setTimeout(function(){
          msg.innerHTML=""
        },1000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })