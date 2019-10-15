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

  //宿題
  $('#js-picshow-btn').on('click', function(){
    $('#pic').fadeIn(1000);
  });
  $('#js-pichide-btn').on('click', function(){
    $('#pic').fadeOut(2000);
  });


});