//jQueryだけ無名関数で囲む
$(function(){


  $('#js-click-btn').on('click', function(){
    $(this).toggleClass("large-btn");
  });
  $('#js-hover-btn').on('mouseover', function(){
    $(this).addClass('opacity');
  }).on('mouseleave', function(){
    $(this).removeClass('opacity');
  });

  $('#js-show-btn').on('click', function(){
    $('#js-target-element').fadeIn(1000);
  });
  $('#js-hide-btn').on('click', function(){
    $('#js-target-element').fadeOut(2000);
  });

  $('#js-add-btn').on('click', function(){
    let beforeBtn = $("<li>")
      .addClass("btn")
      .text("ボタンの前に追加");
    let afterBtn = $("<li>")
      .addClass("btn")
      .text("ボタンの後ろに追加");

    $(this).before(beforeBtn);
    $(this).after(afterBtn);

      // $(this).before('<li class="btn">ボタンの前に追加</li>');
      // $(this).after('<li class="btn">ボタンの後ろに追加</li>');
      //に書き換えても同じ
  });
  //要素の前後(中)に追加
  $("#js-add-btn2").on("click", function() {
    $(this).prepend("<span>後</span>");
    $(this).append("<span>後</span>");
  });

  $(".js-toggle").on("click", function() {
    $(this).toggleClass("on");
    $(this)
      .siblings()
      .slideToggle();
  });

  //ハンバーガーメニュー
  $(".js-hamburger").on("click", function() {
    $(this).toggleClass("on");
  });

  //スムーススクロール
  $(".js-scroll").on("click", function() {
    $("body, html").animate({ scrollTop: 0 }, 500);
  });

  //モーダル
  $(".js-modal").on("click", function() {
    $("body").addClass("modal-open");
    $(".modal-content").fadeIn("slow");
    $("#modal-bg").fadeIn("slow");
  });

  $(".js-modal-close").on("click", function() {
    $("body").removeClass("modal-open");
    $(".modal-content").fadeOut(1000);
    $("#modal-bg").fadeOut(1000);
  });

  // タブメニュー
  $(".tab-nav a").on("click", function() {
    if ($(this).hasClass("active")) {
      //同じ場所をクリックした場合は処理終了
      return false;
    }

    console.log(this.hash);
    // 初期化
    $(".tab-nav a").removeClass("active");
    // 押されたボタンにacutive追加
    $(this).addClass("active");

    $(".tab-content > div").removeClass("active");
    $(".tab-content > div").filter(this.hash).addClass("active");

    return false;
  });

  //宿題
  $('#js-picshow-btn').on('click', function(){
    $('#pic').fadeIn(1000);
  });
  $('#js-pichide-btn').on('click', function(){
    $('#pic').fadeOut(2000);
  });


});