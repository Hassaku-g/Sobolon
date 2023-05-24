
$(function() {
  $(".drawer").drawer()
  });

  // #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function() {
  // 移動速度を指定（ミリ秒）
  let speed = 500;
  // hrefで指定されたidを取得
  let id = jQuery(this).attr("href");
  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  let target = jQuery("#" == id ? "html" : id);
  // ページのトップを基準にターゲットの位置を取得
  let position = jQuery(target).offset().top;
  // ターゲットの位置までspeedの速度で移動
  jQuery("html, body").animate(
    {
      scrollTop: position - $('#js_header').outerHeight()
   },
    speed
  );
  return false;
});

new WOW().init()

let $form = $("#js_form")
$form.submit(function(e) { 
  $.ajax({ 
   url: $form.attr('action'), 
   data: $form.serialize(), 
   type: "POST", 
   dataType: "xml", 
   statusCode: { 
      0: function () { 
        //送信に成功したときの処理 
        $form.slideUp()
        $("#js_success").slideDown()
      }, 
      200: function() { 
        //送信に失敗したときの処理 
        $form.slideUp()
        $("#js_error").slideDown()
      }
    } 
  });
  return false; 
}); 