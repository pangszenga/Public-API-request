$(document).ready(function()
{
  const $search = $(".search-container");
  const $gallery = $("#gallery");
  let form = document.createElement("form");
  let modal = document.createElement("div");

  //function
  function display(data)
  {
    data.forEach((user, index) =>
    {
      let card = $(`<div class="card" id="${index}" href="#">`);
      $gallery.append(card);
	    card.append(`<div class="card-img-container"><img src="${user.picture.large}"/></div>`);
	    card.append(`<div class="card-info-container"><h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>`);
	    card.append(`<p class="card-text"><a href="mailto:${user.email}">${user.email}</a></p>`);
	    card.append(`<p class="card-text cap">${user.location.city}</p></div>`);
    });//end of forEach loop
  }//end of display() function

  //results from JSON
  //{"results":[{"name":{"title":"miss","first":"deborah","last":"mckinney"},"location":{"street":"1890 church lane","city":"ely","state":"south yorkshire","postcode":"U8T 6JL","coordinates":{"latitude":"79.9487","longitude":"24.0485"},"timezone":{"offset":"-7:00","description":"Mountain Time (US & Canada)"}},"email":"deborah.mckinney@example.com","phone":"016977 81675"}],"info":{"seed":"b9624f899042301c","results":1,"page":1,"version":"1.2"}}

  function modalDisplay()
  {

  }//end of modalDisplay() function

  //fetch
  fetch('https://randomuser.me/api/?results=12&nat=gb&inc=name,email,location,phone,picture')
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
