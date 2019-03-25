$(document).ready(function()
{
  const $search = $(".search-container");

  let form = document.createElement("form");
  let card = [];
  let modal = [];

  //function
  function display(data)
  {
    data.forEach((user, index) =>
    {
      let gallery = $("#gallery");
      card = Array.from($(`
        <div class="card" id="${index}">
        <div class="card-img-container">
        <img class="card-img" src="${user.picture.large}" alt="profile picture">
        </div>
        <div class="card-info-container">
        <h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>
        <p class="card-text">${user.email}</p>
        <p class="card-text cap">${user.location.city}, ${user.location.state}</p>
        </div>
        </div>
      `));//card contents

      modal = Array.from($(`
        <div class="modal-container" href="${index}">
        <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
        <img class="modal-img" src="${user.picture.large}" alt="profile picture">
        <h3 id="name" class="modal-name cap">${user.name.first} ${user.name.last}</h3>
        <p class="modal-text">${user.email}</p>
        <p class="modal-text cap">${user.location.city}</p>
        <hr>
        <p class="modal-text">${user.phone}</p>
        <p class="modal-text">${user.location.street}, ${user.location.city}, ${user.location.postcode}</p>
        <p class="modal-text">Birthday:${user.dob.date} </p>
        </div>
        </div>

        <div class="modal-btn-container">
        <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
        <button type="button" id="modal-next" class="modal-next btn">Next</button>
        </div>
        </div>
      `));//modal content

      gallery.append(card);
      gallery.append(modal);


      $(".modal-container").hide();

      modalDisplay();

    });//end of forEach loop



  }//end of display() function

  function modalDisplay()
  {
    //modal is currently hidden
    //need to: 1. see what is selected 2. select and show modal 3. click functions

    console.log(card);
    console.log(modal);


  }//end of modalDisplay() function

  //fetch
  fetch('https://randomuser.me/api/?results=12&nat=gb&inc=name,email,location,phone,picture,dob')
    .then(response => response.json())
    .then(data => display(data.results))
    .catch(error => console.error(error))
  ;//end of fetch

  //construct
  form.innerHTML =
  `<input type="search" id="search-input" class="search-input" placeholder="Search...">
   <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">`;

   // card.innerHTML =
   // `<div class="card-img-container">
   //  <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
   //  </div>
   //  <div class="card-info-container">
   //  <h3 id="name" class="card-name cap">first last</h3>
   //  <p class="card-text">email</p>
   //  <p class="card-text cap">city, state</p>
   //  </div>`;


  modal.innerHTML =
  `<div class="modal">
   <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
   <div class="modal-info-container">
   <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
   <h3 id="name" class="modal-name cap">name</h3>
   <p class="modal-text">email</p>
   <p class="modal-text cap">city</p>
   <hr>
   <p class="modal-text">(555) 555-5555</p>
   <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
   <p class="modal-text">Birthday: 10/21/2015</p>
   </div>
   </div>
   <div class="modal-btn-container">
   <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
   <button type="button" id="modal-next" class="modal-next btn">Next</button>
   </div>`;
   //remember to add class modal-container




  //append things
  $search.append(form);








});//documment load ends
