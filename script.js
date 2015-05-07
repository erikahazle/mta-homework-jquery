var mta = {
  'Line N': ['ts', '34th', '28th-n', '23rd-n', 'us', '8th-n'],
  'Line L': ['8th-l', '6th', 'us', '3rd', '1st'],
  'Line 6': ['gc', '33rd', '28th-s', '23rd-s', 'us', 'ap']
};

/**********************
CALCULATION FUNCTION
***********************/

function menu() {
    var userInput = getUserInput();
    var tripLength = calculateStops(userInput);
    $('.search').append('<p>Your trip length is ' + tripLength + ' stops!</p>');
    var pJson = JSON.stringify($('p').html())
    localStorage.setItem('travel-history', pJson);
  }

function calculateStops(userInput) {
  return userInput.startTrain === userInput.stopTrain ? sameLine(userInput) : differentLines(userInput);
}

function getUserInput() {
  var startTrain = $('.initial-train').val();
  var firstStop = $('.initial-stop').val();
  var stopTrain = $('.last-train').val();
  var lastStop = $('.last-stop').val();
  return {startTrain: startTrain, 
          firstStop: firstStop,
          stopTrain: stopTrain,
          lastStop: lastStop};
}

function differentLines(userInput) {
  var intersection = mta[userInput.startTrain].filter(function(stop) {
      return mta[userInput.stopTrain].indexOf(stop) != -1;
    })[0];

  var startTrainIndex = mta[userInput.startTrain].indexOf(userInput.firstStop);
  var startTrainIntersectionIndex = mta[userInput.startTrain].indexOf(intersection);
  var firstTripLength = Math.abs(startTrainIndex - startTrainIntersectionIndex);

  var stopTrainIndex = mta[userInput.stopTrain].indexOf(userInput.lastStop);
  var stopTrainIntersectionIndex = mta[userInput.stopTrain].indexOf(intersection);
  var lastTripLength = Math.abs(stopTrainIndex - stopTrainIntersectionIndex);

  return firstTripLength + lastTripLength;
}

function sameLine(userInput) {
  return Math.abs(mta[userInput.startTrain].indexOf(userInput.firstStop) - mta[userInput.stopTrain].indexOf(userInput.lastStop));
}

/**********************
DROPDOWN MENUE
***********************/

var selectStations = function(train, stop) {
  var stopList = $(stop).children();
  stopList.remove();
    for (i = 0; i < mta[train].length; i++) {
      stop.append('<option>' + mta[train][i] + '</option>');
  }
}

/**********************
EVENT LISTENERS
***********************/

$(document).ready(function() {
  // recordInput();
  var startTrain = $('select[name=start]').val();

  var travelHistory = JSON.parse(localStorage.getItem('travel-history'));
  console.log(travelHistory);

  $('select[name=start]').on('change', function() {
    startTrain = $(this).val();
    var stop = $('.initial-stop');
    selectStations(startTrain, stop);
  })

  $('select[name=finish]').on('change', function() {
    lastTrain = $(this).val();
    var stop = $('.last-stop');
    selectStations(lastTrain, stop);
  })

  $('#calculate').on('click', function() {
    $('#calculate').next().remove();
    menu();
  })


})

