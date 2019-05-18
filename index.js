var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", addItem);

function addItem () {
  var newAction = $('.action').val();
  var newDay = $('.day').val();
  var newTime = $('.time').val();


  cardContainer.append(`<p class="the-list"> Action: ${newAction} <br> Day: ${newDay} <br> Time: ${newTime} </p>
  <button>Done</button> 
  `);

}
