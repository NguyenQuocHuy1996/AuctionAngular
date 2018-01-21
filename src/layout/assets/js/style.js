$(document).ready(function () {
  //Menu
  let a = true;
  $('#btn-click').click(function () {
    if (a == true) {
      $('.menudt1').slideDown();
      a = false;
    }
    else {
      $('.menudt1').slideUp();
      a = true;
    }
  });

  //js cua da dang san pham
  
  // $('.trai .dadang').hover(function(){
  //   $('.sndg').slideDown(300);
  // },function(){
  //   $('.sndg').slideUp(300);
  // })


  //js cua loadthem 
  $(function () {
    $(".sp1").slice(0, 1).addClass('display');
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".sp1:hidden").slice(0, 1).addClass('display');
        if ($(".sp1:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

$('a[href=#top]').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.totop a').fadeIn();
    } else {
        $('.totop a').fadeOut();
    }
});




  //
})

//Login
$(':input[type=number]').on('mousewheel', function (e) {
  $(this).blur();
}); $(':input[type=number]').on('mousewheel', function (e) {
  $(this).blur();
}); $(':input[type=number]').on('mousewheel', function (e) {
  $(this).blur();
}); $(':input[type=number]').on('mousewheel', function (e) {
  $(this).blur();
});
$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  var $this = $(this),
    label = $this.prev('label');

  if (e.type === 'keyup') {
    if ($this.val() === '') {
      label.removeClass('active highlight');
    } else {
      label.addClass('active highlight');
    }
  } else if (e.type === 'blur') {
    if ($this.val() === '') {
      label.removeClass('active highlight');
    } else {
      label.removeClass('highlight');
    }
  } else if (e.type === 'focus') {

    if ($this.val() === '') {
      label.removeClass('highlight');
    }
    else if ($this.val() !== '') {
      label.addClass('highlight');
    }
  }
});

$('.tab a').on('click', function (e) {

  e.preventDefault();

  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');

  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();

  $(target).fadeIn(600);

});




















$('section.awSlider .carousel').carousel({
	pause: "hover",
  interval: 20000
});

var startImage = $('section.awSlider .item.active > img').attr('src');
$('section.awSlider').append('<img src="' + startImage + '">');

$('section.awSlider .carousel').on('slid.bs.carousel', function () {
 var bscn = $(this).find('.item.active > img').attr('src');
	$('section.awSlider > img').attr('src',bscn);
});


/* 
Philips ambilight tv
Üzerine gleince duruyor slide
*/