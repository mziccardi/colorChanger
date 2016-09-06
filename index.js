var colorButton = $('.randomButton');
var resetButton = $('.reset');

colorButton.on('click',function(){
  $('body').css('background',"rgb" + randomColor())
});

  resetButton.on('click',function(){
    $('body').css('background','white');
  });

function randomColor(){

return '('+ (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';
}

// function resetColor() {
//
// }
