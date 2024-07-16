const scriptURL = 'https://script.google.com/macros/s/AKfycbxJIveggWRsvvKaDQQ2tDkBuXM8hlepgaCfBSDLWmOkeruRJn1E38LlXkP7cgTztBYhiA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("message");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML = "Thanks for your subcription";
        setTimeout(()=>{
          msg.innerHTML = "";
        },5000);
        form.reset();
      } )
      .catch(error => console.error('Error!', error.message))
  })

