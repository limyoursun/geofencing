$(function () {

  $.datetimepicker.setLocale('kr');
  $('#datetimepicker').datetimepicker();

  $('#date_timepicker_start').datetimepicker({
    format: 'Y/m/d',
    onShow: function (ct) {
      this.setOptions({
        maxDate: $('#date_timepicker_end').val() ? $('#date_timepicker_end').val() : false
      })
    },
    timepicker: false
  });
  $('#date_timepicker_start2').datetimepicker({
    format: 'Y/m/d',
    onShow: function (ct) {
      this.setOptions({
        maxDate: $('#date_timepicker_end2').val() ? $('#date_timepicker_end2').val() : false
      })
    },
    timepicker: false
  });
  $('#date_timepicker_start3').datetimepicker({
    format: 'Y/m/d',
    onShow: function (ct) {
      this.setOptions({
        maxDate: $('#date_timepicker_end3').val() ? $('#date_timepicker_end3').val() : false
      })
    },
    timepicker: false
  });

  $('#date_timepicker_end').datetimepicker({
    format: 'Y/m/d',
    onShow: function (ct) {
      this.setOptions({
        minDate: $('#date_timepicker_start').val() ? $('#date_timepicker_start').val() : false
      })
    },
    timepicker: false
  });
  $('#date_timepicker_end2').datetimepicker({
    format: 'Y/m/d',
    onShow: function (ct) {
      this.setOptions({
        minDate: $('#date_timepicker_start2').val() ? $('#date_timepicker_start2').val() : false
      })
    },
    timepicker: false
  });
  $('#date_timepicker_end3').datetimepicker({
    format: 'Y/m/d',
    onShow: function (ct) {
      this.setOptions({
        minDate: $('#date_timepicker_start3').val() ? $('#date_timepicker_start3').val() : false
      })
    },
    timepicker: false
  });

  // tab
  var tab_conts = $('.tab_conts'),
    tab_list = $('.tab_list'),
    tab_btn = $('.tab_list li');

  tab_conts.find('.tab_cont').hide();
  tab_conts.find('.tab_cont:first').show();
  tab_list.find('li:first').find('a').addClass('on');
  tab_btn.on('click', 'a', function (e) {
    e.preventDefault();
    var getId = $(this).prop('href').split('#')[1];
    $(this).parents('.tab').next('.tab_conts').find('.tab_cont').hide();
    $(this).parents('.tab_list').find('a').removeClass('on');
    $(this).addClass('on');
    $('#' + getId).show();
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

// toggle button
$('.btn_toggle').on('click', function (e) {
  e.preventDefault();
  var cur = $(this).attr('datavalue');
  if ($(this).attr('disabled') == 'disabled') return false;
  if (cur == 'on') {
    $(this).attr('datavalue', 'off');
  } else {
    $(this).attr('datavalue', 'on');
  }
})
$('.slide_tit i').on('click', function () {
  $(this).children('.how_to_use').toggleClass('on');
})
$('.axi-close').on('click', function () {
  $(this).parent('li').css({ 'display': 'none' });
})