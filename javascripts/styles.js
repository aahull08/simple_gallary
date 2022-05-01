$(function(){
  $('ul').click(function (e) { 
    e.preventDefault();
    if(e.target.src){
      let images = $('li > img');
      $.each(images, function (indexInArray, valueOfElement) { 
        $(valueOfElement).removeClass('active');
      });
      $(e.target).addClass('active');
    }
  });

  $(figure).append(content);
})