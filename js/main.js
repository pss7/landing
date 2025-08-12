
$(function () {

  //aos 초기화
  $(window).load(function () {
    AOS.init({
      duration: 2000
    });
  });

  //모달
  $('main .parentsBtn').click(function () {
    $('.modalWrap').addClass('active');
  });
  $('.modalCloseBtn').click(function () {
    $('.modalWrap').removeClass('active');
  });

});
