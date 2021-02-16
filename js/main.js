$(`.slider-wrapper`).slick({
  dots:true
}); 

$(".offcanvas-left").hiraku({
  btn:"#offcanvas-btn-left",
  direction:"left"
});

// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function() {
  // 移動速度を指定（ミリ秒）
  let speed = 300;
  // hrefで指定されたidを取得
  let id = jQuery(this).attr("href");
  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  let target = jQuery("#" == id ? "html" : id);
  // ページのトップを基準にターゲットの位置を取得
  let position = jQuery(target).offset().top - 70;
  // ターゲットの位置までspeedの速度で移動
  jQuery("html, body").animate(
    {
      scrollTop: position
   },
    speed
  );
  return false;
});


//トップへ戻るフローティングボタンのプラグイン
jQuery(window).on("scroll", function($) {
  if (jQuery(this).scrollTop() > 100) {
    jQuery('.floating').show();
  } else {
    jQuery('.floating').hide();
  }
});

jQuery('.floating').click(function () {
  jQuery('body,html').animate({
    scrollTop: 0
  }, 500);
  return false;
});


//クリック時にクラスをつけ外しする
jQuery('.header_nav ul li a').click(function() {
  jQuery('.header_nav ul li a').removeClass( 'is-active' );
  jQuery(this).addClass( 'is-active' );
  return false;
});

//アコーディオンの開閉
//jQuery('.accordion-head').click(function() {
//  jQuery(this).next().slideToggle();
//  jQuery(this).children('.plus-btn').toggleClass( 'is-open' );
//});

$('.ac-inner').hide();
$('#accordion p').click(function(){
  $(this).next().slideToggle();
});



// モーダルを開く
jQuery('.js-modal-open').click(function(e) {
  e.preventDefault();
  //.for-modalクラスがついてる要素に.is-showクラスを追加する
  jQuery('.for-modal').addClass( 'is-show' );

  return false;
});

//モーダルを閉じる
jQuery('.js-modal-close').click(function(e){
  e.preventDefault();
 //.for-modalクラスがついてる要素の.is-showクラスを取り除く
  jQuery('.for-modal').removeClass('is-show');

  return false;
});


$('.scroll-box').scroll(function(){
  $('#position').text($(this).scrollTop() + 'px');
});