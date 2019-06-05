var listItems = JSON.parse(localStorage.getItem('items')) || [];
var cardContainer = $('.card-container');
var submit = $('.submit-btn');

function appendAllListItems() {
  listItems.forEach(function(items){
    cardContainer.append(`<p class="the-list"> Action: ${items.newAction} <br> Day: ${items.newDay} <br> Time: ${items.newTime} </p> <button> Done</button>`);
  })
}

appendAllListItems();
submit.on("click", addItem);

function addItem (e) {
  e.preventDefault();
  var newAction = $('.action').val();
  var newDay = $('.day').val();
  var newTime = $('.time').val();


  cardContainer.append(`<p class="the-list"> Action: ${newAction} <br> Day: ${newDay} <br> Time: ${newTime} </p>
  <button>Done</button>
  `);

  $('.action').val("");
  $('.day').val("");
  $('.time').val("");

  listItems.push({ newAction: newAction, newDay: newDay, newTime: newTime});
  var listItemsString= JSON.stringify(listItems);
  localStorage.setItem('items', listItemsString);
  console.log(localStorage);
}
