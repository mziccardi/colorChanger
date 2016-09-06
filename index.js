var colorButton = $('.randomButton');

// var randomColor ='('+ (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';


colorButton.on('click',function(){
  $('body').css('background',"rgb" + randomColor())
});




function randomColor(){

return '('+ (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';
}
