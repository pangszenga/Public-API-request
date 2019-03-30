$(document).ready(function()
{
  const $search = $(".search-container");

  let form = document.createElement("form");
  let card = [];
  let modal = [];

  //construct
  form.innerHTML =
  `<input type="search" id="search-input" class="search-input" placeholder="Search...">
   <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">`;


  //append things
  $search.append(form);

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

    });//end of forEach loop

    $("div .card").on("click", (e) =>
    {
      let cardClickedOn = $(e.target).closest(".card");

      if (e.type === "click")
      {
        $(`[href = '${cardClickedOn[0].id}']`).show();
        modalInteractions();
      }
    });//end of Event listener

  }//end of display() function

  function modalInteractions ()
  {
    const close = $("#modal-close-btn");
    const prev = $("#modal-prev");
    const next = $("#modal-next");

    $("[type = 'button']").on("click", function(e)
    {
      let buttonClickedOn = $(e.target).closest("[type='button']");
      let currentCard = $(e.target).closest(".modal-container");
      let getCard = $(".modal-container")[0].getAttribute("href");
      let raw = currentCard[0].getAttribute("href");
      let num = parseInt(raw);
      // console.log(buttonClickedOn[0].id);

      if (buttonClickedOn[0].id === "modal-close-btn")
      {
        console.log("close");
        $(".modal-container").hide();
        num = 0;
      }
      else if (buttonClickedOn[0].id === "modal-prev")
      {
        console.log("prev");
        currentCard.hide();

        if (num === 0)
        {
          $("[href = '11']").show();
        }
        else
        {
          num -= 1;
          $(`[href = '${num}']`).show();
        };



      }
      else if (buttonClickedOn[0].id === "modal-next")
      {
        console.log("prev");
        currentCard.hide();

        if (num ===11)
        {
          $("[href = '0']").show();
        }
        else
        {
          num += 1;
          $(`[href = '${num}']`).show();
        };

      };// end of conditional statement

    });//end of button handler

  }//end of modalInteractions() function


  //fetch
  fetch('https://randomuser.me/api/?results=12&nat=gb&inc=name,email,location,phone,picture,dob')
    .then(response => response.json())
    .then(data => display(data.results))
    .catch(error => console.error(error))
  ;//end of fetch


});//documment load ends


//regex DOB
