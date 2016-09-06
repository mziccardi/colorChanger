var colorButton = $('.randomButton');

// var randomColor ='('+ (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';


colorButton.on('click',function(){
  $('body').css("background", randomColor);
});




function randomColor(){
  '('+ (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
}
