$(document).ready(function () {


  // trying to figure out how to use .prop//
  
  //  $("input:checkbox").change(function() {
//    var 
//  })
//$("input:checkbox").prop("checked")
//});
  
  
  $('#favcolor').change(function () {
      var colorValue = $(this).val();
     $('#colorVal').html(colorValue);
  })
  
  $('#randomDate').change(function () {
      var dateValue = $(this).val();
     $('#dateVal').html(dateValue);
  })
  
  $('#dateTime').change(function () {
      var dateTimeValue = $(this).val();
     $('#dateTimeVal').html(dateTimeValue);
  })
  
  $('#email').change(function () {
      var emailValue = $(this).val();
     $('#emailVal').html(emailValue);
  })
  
    $('#monthYear').change(function () {
      var monthValue = $(this).val();
     $('#monthVal').html(monthValue);
  })
  
    $('#quantity').change(function () {
      var numberValue = $(this).val();
     $('#numberVal').html(numberValue);
  })

    $('#psw').change(function () {
      var passwordValue = $(this).val();
     $('#passwordVal').html(passwordValue);
  })
  
  // radio selection not updating//
//    $('#pet').change(function () {
//      var radioValue = $(this).val();
//     $('#radioVal').html(radioValue);
//  })
  
  function onRadio(evt) {
  var radioValue = this.value;
  document.radioForm1.radio1.value = radioVal;

  document.radioForm2.radio2.value = radioVal;

  $('#radioValue').text(radioVal.toString());

}


  
  
  $('#pointrange').change(function () {
      var rangeValue = $(this).val();
     $('#rangeVal').html(rangeValue);
  })
  
  
  $('#pagesearch').change(function () {
      var searchValue = $(this).val();
     $('#searchVal').html(searchValue);
  })
  
  
  $('#usertel').change(function () {
      var telValue = $(this).val();
     $('#telVal').html(telValue);
  })
  
  
  $('#fullname').change(function () {
      var textValue = $(this).val();
     $('#textVal').html(textValue);
  })
  
  
  $('#comments').change(function () {
      var textareaValue = $(this).val();
     $('#textareaVal').html(textareaValue);
  })
  
  $('#usr_time').change(function () {
      var timeValue = $(this).val();
      $('#timeVal').html(timeValue);
  })

  
  $('#homepage').change(function () {
      var urlValue = $(this).val();
      $('#urlVal').html(urlValue);
  })

  
  
  $('#weekyear').change(function () {
      var weekValue = $(this).val();
      $('#weekVal').html(weekValue);
  })


  $('#icecream').change(function () {
      var selectedValue = $(this).val();
      $('#selectVal').html(selectedValue);
  })
})