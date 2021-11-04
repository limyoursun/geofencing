$(function () {
  /*calendar*/
  $.datepicker.setDefaults({
    buttonImageOnly: true,
    showOn: "both",
    buttonImage: "../images/btn_calendar.png",
    changeMonth: true,
    changeYear: true,
    numberOfMonths: 1,
    regional: ["ko"],
    dateFormat: "yy-mm-dd"
  });
  $("[dataformat='datepic']").datepicker({
    buttonText: "날짜를 선택해주세요."
  });
  var from = $("[dataformat='from']").datepicker({
    buttonText: "시작날짜를 선택해주세요.",
    onClose: function (selectedDate) {
      var getName = $(this).attr('name');
      $("input[name='" + getName + "'].to").datepicker("option", "minDate", selectedDate);
    }
  });
  var to = $("[dataformat='to']").datepicker({
    buttonText: "종료날짜를 선택해주세요.",
    onClose: function (selectedDate) {
      var getName = $(this).attr('name');
      $("input[name='" + getName + "'].from").datepicker("option", "maxDate", selectedDate);
    }
  });

  // pop
  var popBtn = $('[openpop]');
  popBtn.on('click', function () {
    var target = $(this).attr('openpop');
    $('#' + target).show();
  })
  var closePop = $('.btn_pop_close');
  closePop.on('click', function () {
    $(this).parents('.pop_overlay').hide();
  })
  $('.btn_cancel').on('click', function () {
    $(this).parents('.pop_overlay').fadeOut();
  })
  $('.con_list .more').on('click', function () {
    $(this).toggleClass('on');
    $(this).parent('p').nextAll('ul').slideToggle('fast');
  })
})

// main : slide & drag
$('.btn_slide').on('click', function () {
  $('.con_l').toggleClass('close');
})
$("#draggable").draggable();

// main : weather
$('.btn_weather').on('click', function () {
  $(this).toggleClass('on');
  $('.con_weather').fadeToggle();
})
$('.btn_weather_close').on('click', function () {
  $('.btn_weather').toggleClass('on');
  $('.con_weather').fadeToggle();
})

// toast alert
$('.toast_alarm li').find('button').on('click', function () {
  console.log('didi');
  $(this).parents('li').fadeToggle();
})
setTimeout(() => $('.toast_alarm').fadeIn('slow'), 500);
setTimeout(() => $('.toast_alarm').fadeOut('slow'), 4500);