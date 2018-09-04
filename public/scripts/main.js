/* Variables and function definitions */

var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

/* Let's store our strings */
var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
var insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
var insertY = ['the soup kitchen','Disneyland','the White House'];
var insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

/* Event Listener and Partial Function definitions */
randomize.addEventListener('click',result);


function result() {

  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  if(customName.value !== '') {
    var name = customName.value;
    newStory.replace('Bob',name);

  }
  if(document.getElementById("uk").checked) {
    var weight = Math.round(poundsToStones(300)) + ' stones';
    var temperature =  Math.round(fahrenheitToCelcius(94)) + ' centigrade';
    newStory = newStory.replace('300 pounds' , weight);
    newStory = newStory.replace('94 fahrenheit',temperature);

  }
  story.textContent = newStory;
  story.style.visibility = 'visible';

  while(newStory.indexOf(':insertx:') > -1){
    newStory = newStory.replace(':insertx:' , xItem);
  }
  while(newStory.indexOf(':inserty:') > -1){
    newStory = newStory.replace(':inserty:' , yItem);
  }
  while(newStory.indexOf(':insertz:') > -1){
    newStory = newStory.replace(':insertz:' , zItem);
  }

  story.textContent = newStory;

}

function poundsToStones(x){
  return  ( x/14 );
}

function fahrenheitToCelcius(y){
  return  ( (y-32) / 1.8 );
}
