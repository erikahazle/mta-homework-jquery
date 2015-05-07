var mta = {
  'Line N': ['ts', '34th', '28th-n', '23rd-n', 'us', '8th-n'],
  'Line L': ['8th-l', '6th', 'us', '3rd', '1st'],
  'Line 6': ['gc', '33rd', '28th-s', '23rd-s', 'us', 'ap']
};

var selectStations = function(train, stop) {
  var stopList = $(stop).children();
  stopList.remove();
    for (i = 0; i < mta[train].length; i++) {
      stop.append('<option>' + mta[train][i] + '</option>');
  }
}

$(document).ready(function() {
  // recordInput();
  var startTrain = $('select[name=start]').val();

  

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


})

