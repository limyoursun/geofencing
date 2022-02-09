$(function () {

  $.datetimepicker.setLocale('kr');
  $('#datetimepicker').datetimepicker();

  $('#date_timepicker_start0').datetimepicker({
    format: 'Y/m/d',
    onShow: function (ct) {
      this.setOptions({
        maxDate: $('#date_timepicker_end0').val() ? $('#date_timepicker_end0').val() : false
      })
    },
    timepicker: false
  });
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

  $('#date_timepicker_end0').datetimepicker({
    format: 'Y/m/d',
    onShow: function (ct) {
      this.setOptions({
        minDate: $('#date_timepicker_start0').val() ? $('#date_timepicker_start0').val() : false
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
  function main2(){
    $('.con_sub').show();
  }

// main : slide & drag
$('.btn_slide').on('click', function () {
  $('.con_l').toggleClass('close');
})
$('.btn_subclose').on('click', function () {
  $('.con_sub').hide();
})
$('.con_sub > .btn_slide').on('click', function () {
  $('.btn_subclose').toggleClass('on');
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

// alert
$('.alert').on('click', function () {
  $('.p_alert').parents('.pop_overlay').show();
})
// toast alert
$('.toast_alarm li').find('button').on('click', function () {
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
  $(this).parent('li').remove();
})

$('.btn_reset').on('click', function () {
  $('.selectlocate_wrap').remove();
})

// 선택지역
$('.selectlocate_wrap').on('click', function () {
  var parentUl = $(this).find('.selectlocate_box').children().length;
  if (parentUl < 1) {
    $(this).find('.selectlocate_box').remove();
  }
})
$('.selectlocate_wrap').on('click', function () {
  var parentUlAll = $(this).find('.selectlocate_box_wrap').children().length;
  console.log(parentUlAll);
  if (parentUlAll == 1) {
    $(this).remove();
  }
})

//case eqtabs
$('ul.eqtabs li, .eq_map_list li').on('click', function () {
  var tab_id = $(this).attr('data_tab');
  $('ul.eqtabs li, .eqtab_content, .eq_map_list li').removeClass('current');
  $(this).addClass('current');
  $()
  $("." + tab_id).addClass('current');
  return false;
});
