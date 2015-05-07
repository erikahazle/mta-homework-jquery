var mta = {
  'Line N': ['ts', '34th', '28th-n', '23rd-n', 'us', '8th-n'],
  'Line L': ['8th-l', '6th', 'us', '3rd', '1st'],
  'Line 6': ['gc', '33rd', '28th-s', '23rd-s', 'us', 'ap']
};

// function recordInput() {

  // $('#L').on('change', function() {
  //   startTrain = $(this).val();
  //   alert(startTrain);
  // });

  // startTrain = $('.initial-train').val();

  // if (startTrain === 'Line N') {
  //   alert('you clicked on line n')
  //   for (i = 1; i < mta[startTrain.length]; i++) {
  //     $('.initial-stop').append('<option>' + i + '</option>')
  //   } 
  // }

// }


$(document).ready(function() {
  // recordInput();
  var startTrain = $('select[name=selector]').val();


  $('select[name=selector]').on('change', function() {
    startTrain = $(this).val();
    if (startTrain === 'Line N') {
      for (i = 0; i < mta[startTrain].length; i++) {
        $('.initial-stop').append('<option>' + mta[startTrain][i] + '</option>');
      }
    } else if (startTrain === 'Line L') {
      for (i = 0; i < mta[startTrain].length; i++) {
        $('.initial-stop').append('<option>' + mta[startTrain][i] + '</option>');
      }
    } else if (startTrain === 'Line 6') {
      for (i = 0; i < mta[startTrain].length; i++) {
        $('.initial-stop').append('<option>' + mta[startTrain][i] + '</option>');
      }
    }
  })


})

