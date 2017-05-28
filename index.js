/////////////////////___Variables___////////////////
var whoWon = "";
var scoreX = 0;
var scoreO = 0;

/////////////////////____One Player___////////////////////
function applyColor(x){
  if(x == 'x'){
    $("#won").html("<span id='x'>"+whoWon.toUpperCase()+"</span>" + " has won the game!");
  }
  else{
    $("#won").html("<span id='o'>"+whoWon.toUpperCase()+"</span>" + " has won the game!");
  }
}
function compWin(board){
  if(verticalWon(board)){
    applyColor(whoWon);
  }
  if(horizontalWon(board)){
    applyColor(whoWon);
  }
  if(diagonalWon(board)){
   applyColor(whoWon);
  }
}
function finalOneClick(board,x,y,name){
  var z = $("#won").text();
  if(z == "" && $(name).text() == ""){
    onePlayerClick(board,x,y,name);
           findOwnWin(board);
  }
}
function onePlayerClick(board,x,y,name){
  if(board[x][y]==0){
    board[x][y] = 'x';
    $(name).append("<center><p id='x'>x</p><center>");
  } 
}
function placeRandom(board,name){
  var x = getRandom();
  var y = getRandom();
  var isAZero = false;
  for(var i = 0; i < board.length;i++){
    for(var j = 0; j < board[i].length;j++){
      if(board[i][j]==0){
        isAZero = true;
      }
    }
  }
  if(isAZero){
      while(board[x][y] != 0){
      var x = getRandom();
      var y = getRandom();
    }
     board[x][y] = 'o';
  if(x == 0 && y == 0){
    $("#topLeft").append("<center><p id='o'>o</p></center");
  }
  if(x == 0 && y == 1){
    $("#topMiddle").append("<center><p id='o'>o</p></center");
  }
  if(x == 0 && y == 2){
    $("#topRight").append("<center><p id='o'>o</p></center");
  }
  if(x == 1 && y == 0){
    $("#middleLeft").append("<center><p id='o'>o</p></center");
  }
  if(x == 1 && y == 1){
    $("#middleMiddle").append("<center><p id='o'>o</p></center");
  }
  if(x == 1 && y == 2){
    $("#middleRight").append("<center><p id='o'>o</p></center");
  }
  if(x == 2 && y == 0){
    $("#bottomLeft").append("<center><p id='o'>o</p></center");
  }
  if(x == 2 && y == 1){
    $("#bottomMiddle").append("<center><p id='o'>o</p></center");
  }
  if(x == 2 && y == 2){
    $("#bottomRight").append("<center><p id='o'>o</p></center");
  }
    compWin(board);
  }
  
}
function getRandom(){
  return Math.floor(Math.random() * (2 -0 + 1)) + 0;
}
function findOwnHorizontalWin(board){
  if((board[0][0] == 'o' && board[0][1] == 'o') && board[0][2] == 0){
    board[0][2] = 'o';
    $("#topRight").append("<center><p id='o'>o</p></center");
    return true;
  }
  if((board[0][0] == 'o' && board[0][2] == 'o') && board[0][1] == 0){
    board[0][1] = 'o';
    $("#topMiddle").append("<center><p id='o'>o</p></center");
    return true;
  }
  if((board[0][2] == 'o' && board[0][1] == 'o') && board[0][0] == 0){
    board[0][0] = 'o';
    $("#topLeft").append("<center><p id='o'>o</p></center");
    return true;
  }
  if((board[1][0] == 'o' && board[1][1] == 'o') && board[1][2] == 0){
    board[1][2] = 'o';
    $("#middleRight").append("<center><p id='o'>o</p></center");
    return true;
  }
  if((board[1][0] == 'o' && board[1][2] == 'o') && board[1][1] == 0){
    board[1][1] = 'o';
    $("#middleMiddle").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[1][2] == 'o' && board[1][1] == 'o' && board[1][0] == 0){
    board[1][0] = 'o';
    $("#middleLeft").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[2][0] == 'o' && board[2][1] == 'o' && board[2][2] == 0){
    board[2][2] = 'o';
    $("#bottomRight").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[2][0] == 'o' && board[2][2] == 'o' && board[2][1] == 0){
    board[2][1] = 'o';
    $("#bottomMiddle").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[2][2] == 'o' && board[2][1] == 'o' && board[2][0] == 0){
    board[2][0] = 'o';
    $("#bottomLeft").append("<center><p id='o'>o</p></center");
    return true;
  }
  return false;
}
function blockHorizontalWin(board){
  if(board[0][0] == 'x' && board[0][1] == 'x' && board[0][2] == 0){
    board[0][2] = 'o';
    $("#topRight").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[0][0] == 'x' && board[0][2] == 'x' && board[0][1] == 0){
    board[0][1] = 'o';
    $("#topMiddle").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[0][2] == 'x' && board[0][1] == 'x' && board[0][0] == 0){
    board[0][0] = 'o';
    $("#topLeft").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[1][0] == 'x' && board[1][1] == 'x' && board[1][2] == 0){
    board[1][2] = 'o';
    $("#middleRight").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[1][0] == 'x' && board[1][2] == 'x' && board[1][1] == 0){
    board[1][1] = 'o';
    $("#middleMiddle").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[1][2] == 'x' && board[1][1] == 'x' && board[1][0] == 0){
    board[1][0] = 'o';
    $("#middleLeft").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[2][0] == 'x' && board[2][1] == 'x' && board[2][2] == 0){
    board[2][2] = 'o';
    $("#bottomRight").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[2][0] == 'x' && board[2][2] == 'x' && board[2][1] == 0){
    board[2][1] = 'o';
    $("#bottomMiddle").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[2][2] == 'x' && board[2][1] == 'x' && board[2][0] == 0){
    board[2][0] = 'o';
    $("#bottomLeft").append("<center><p id='o'>o</p></center");
    return true;
  }
  return false;
}
function findOwnVerticalWin(board){
  if(board[0][0] == 'o' && board[1][0] == 'o'&& board[2][0] == 0){
    board[2][0] = 'o';
    $("#bottomLeft").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[0][0] == 'o' && board[2][0] == 'o' && board[1][0] == 0){
    board[1][0] = 'o';
    $("#middleLeft").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[2][0] == 'o' && board[1][0] == 'o' && board[0][0] == 0){
    board[0][0] = 'o';
    $("#topLeft").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[0][1] == 'o' && board[1][1] == 'o' && board[2][1] == 0){
    board[2][1] = 'o';
    $("#bottomMiddle").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[0][1] == 'o' && board[2][1] == 'o' && board[1][1] == 0){
    board[1][1] = 'o';
    $("#middleMiddle").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[2][1] == 'o' && board[1][1] == 'o' && board[0][1] == 0){
    board[0][1] = 'o';
    $("#topMiddle").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[2][2] == 'o' && board[1][2] == 'o' && board[0][2] == 0){
    board[0][2] = 'o';
    $("#topRight").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[1][2] == 'o' && board[0][2] == 'o' && board[2][2] == 0){
    board[2][2] = 'o';
    $("#bottomRight").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[0][2] == 'o' && board[2][2] == 'o' && board[1][2] == 0){
    board[1][2] = 'o';
    $("#middleRight").append("<center><p id='o'>o</p></center");
    return true;
  }
  return false;
}
function blockVerticalWin(board){
  if(board[0][0] == 'x' && board[1][0] == 'x'&& board[2][0] == 0){
    board[2][0] = 'o';
    $("#bottomLeft").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[0][0] == 'x' && board[2][0] == 'x' && board[1][0] == 0){
    board[1][0] = 'o';
    $("#middleLeft").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[2][0] == 'x' && board[1][0] == 'x' && board[0][0] == 0){
    board[0][0] = 'o';
    $("#topLeft").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[0][1] == 'x' && board[1][1] == 'x' && board[2][1] == 0){
    board[2][1] = 'o';
    $("#bottomMiddle").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[0][1] == 'x' && board[2][1] == 'x' && board[1][1] == 0){
    board[1][1] = 'o';
    $("#middleMiddle").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[2][1] == 'x' && board[1][1] == 'x' && board[0][1] == 0){
    board[0][1] = 'o';
    $("#topMiddle").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[2][2] == 'x' && board[1][2] == 'x' && board[0][2] == 0){
    board[0][2] = 'o';
    $("#topRight").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[1][2] == 'x' && board[0][2] == 'x' && board[2][2] == 0){
    board[2][2] = 'o';
    $("#bottomRight").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[0][2] == 'x' && board[2][2] == 'x' && board[1][2] == 0){
    board[1][2] = 'o';
    $("#middleRight").append("<center><p id='o'>o</p></center");
    return true;
  }
  return false;
}
function findOwnDiagonalWin(board){
  if(board[0][0] == 'o' && board[1][1] == 'o' && board[2][2] == 0){
    board[2][2] = 'o';
    $("#bottomRight").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[0][0] == 'o' && board[2][2] == 'o' && board[1][1] == 0){
    board[1][1] = 'o';
    $("#middleMiddle").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[2][2] == 'o' && board[1][1] == 'o' && board[0][0] == 0){
    board[0][0] = 'o';
    $("#topLeft").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[0][2] == 'o' && board[1][1] == 'o' && board[2][0] == 0){
    board[2][0] = 'o';
    $("#bottomLeft").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[1][1] == 'o' && board[2][0] == 'o' && board[0][2] == 0){
    board[0][2] = 'o';
    $("#topRight").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[0][2] == 'o' && board[2][0] == 'o' && board[2][1] == 0){
    board[2][1] = 'o';
    $("#middleMiddle").append("<center><p id='o'>o</p></center");
    return true;
  }
  return false;
}
function blockDiagonalWin(board){
  if(board[0][0] == 'x' && board[1][1] == 'x' && board[2][2] == 0){
    board[2][2] = 'o';
    $("#bottomRight").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[0][0] == 'x' && board[2][2] == 'x' && board[1][1] == 0){
    board[1][1] = 'o';
    $("#middleMiddle").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[2][2] == 'x' && board[1][1] == 'x' && board[0][0] == 0){
    board[0][0] = 'o';
    $("#topLeft").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[0][2] == 'x' && board[1][1] == 'x' && board[2][0] == 0){
    board[2][0] = 'o';
    $("#bottomLeft").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[1][1] == 'x' && board[2][0] == 'x' && board[0][2] == 0){
    board[0][2] = 'o';
    $("#topRight").append("<center><p id='o'>o</p></center");
    return true;
  }
  if(board[0][2] == 'x' && board[2][0] == 'x' && board[2][1] == 0){
    board[2][1] = 'o';
    $("#middleMiddle").append("<center><p id='o'>o</p></center");
    return true;
  }
  return false;
}
function findOwnWin(board){
  var horizontal = findOwnHorizontalWin(board);
  if(!horizontal){
    var vertical = findOwnVerticalWin(board);
    if(!vertical){
      var diagonal = findOwnDiagonalWin(board);{
        if(!diagonal){
          var blockH = blockHorizontalWin(board);
          if(!blockH){
            var blockV = blockVerticalWin(board);
            if(!blockV){
              var blockD = blockDiagonalWin(board);
              if(!blockD){
                placeRandom(board);
              }
            }
          }
          
        }
      }
    }
  }
  compWin(board)
}
/////////////////////___Two Player___/////////////////////
function alternate(x){
  if(x == 'x'){
    return 'o';
  }
  else if(x == 'o') {
    return 'x';
  }
}
function onClick(board,who,name,x,y){
  if(board[x][y] == 0){
     board[x][y] = who;
     addText(name,who);
  }
}
function hasWon(board,turn){
  if(verticalWon(board)){
    applyColor(turn);
    if(turn == 'x') {scoreX = scoreX + 1;}
    else{scoreO = scoreO + 1;}
    $('#score').html("X: "+(Math.floor(scoreX))+"                O: "+Math.floor(scoreO));
  
  }
  else if(horizontalWon(board)){
    applyColor(turn);
    if(turn == 'x') {scoreX = scoreX + 1;}
    else{scoreO = scoreO + 1;}
    $('#score').html("X: "+Math.floor(scoreX)+"                O: "+Math.floor(scoreO));
    
  }
  else if(diagonalWon(board)){
    applyColor(turn);
    if(turn == 'x') {scoreX = scoreX + 1;}
    else{scoreO = scoreO + 1;}
    $('#score').html("X: "+Math.floor(scoreX)+"                O: "+Math.floor(scoreO));
  }
  else{return false;}
}
function finalTwoClick(board,turn,name,x,y){
  var z = $("#won").text();
  if(z == ""){
    onClick(board,turn,name,x,y);
    hasWon(board,turn);
  }
}
/////////////////////___Both One & Two___/////////////////
function verticalWon(board){
  if(board[0][0] == board[1][0] && board[2][0] == board[1][0] && board[0][0] != 0){
    whoWon = board[0][0];
    return true;
    
  }
  if(board[0][1] == board[1][1] && board[1][1] == board[2][1] && board[2][1] != 0){
    whoWon = board[0][1];
    return true;
  }
  if(board[0][2] == board[1][2] && board[1][2] == board[2][2] && board[0][2] != 0){
    whoWon = board[0][2];
    return true;
  }
  return false;
}
function clearBoard(board){
  $(".square p").remove();
}
function horizontalWon(board){
  if(board[0][0] == board[0][1] && board[0][0] == board[0][2] && board[0][0] != 0){
    whoWon = board[0][0];
    return true;
  }
  if(board[1][0] == board[1][1] && board[1][1] == board[1][2] && board[1][1] != 0){
    whoWon = board[1][0];
    return true;
  }
  if(board[2][0] == board[2][1] && board[2][1] == board[2][2] && board[2][2] != 0){
    whoWon = board[2][0];
    return true;
  }
  return false;
}
function diagonalWon(board){
  if(board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] != 0){
    whoWon = board[0][0];
    return true;
  }
  if(board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[1][1] != 0){
    whoWon = board[0][2];
    return true;
  }
  return false;
}
function addText(name,x){
  if(x == 'x'){
    $(name).append("<center><p id='x'>"+x+"</p></center>");
  }
  else if(x=='o'){
    $(name).append("<center><p id='o'>"+x+"</p></center>");
  }
}
////////////////////___Main___///////////////////
  $(document).ready(function(){
  var board = [
    [0,0,0],
    [0,0,0],
    [0,0,0]];
  
  $('#onePlayer').click(function(){
      $('p').fadeOut('slow',function(){
      $("#reset").css("visibility", "visible");
      $("#score").css("display","none");
       $( "#container" ).fadeIn( "slow", function() {
         
                $('#reset').click(function(){
          clearBoard(board);
          board=[[0,0,0],[0,0,0],[0,0,0]];
          $('#won').html("");
                  $("#topLeft p").remove();
        })
         
         $('#topLeft').unbind("click").click(function(){          
           finalOneClick(board,0,0,this);    
         })
         
         $('#topMiddle').unbind('click').click(function(){
           finalOneClick(board,0,1,this);
         })
         
         $('#topRight').unbind('click').click(function(){
           finalOneClick(board,0,2,this);
         })
         
         $('#middleLeft').unbind('click').click(function(){
           finalOneClick(board,1,0,this);
         })
         
         $('#middleMiddle').unbind('click').click(function(){
           finalOneClick(board,1,1,this);
         })
         
         $('#middleRight').unbind('click').click(function(){
           finalOneClick(board,1,2,this);
         })
         
         $('#bottomLeft').unbind('click').click(function(){
           finalOneClick(board,2,0,this);
         })
         
         $('#bottomMiddle').unbind('click').click(function(){
           finalOneClick(board,2,1,this);
         })
         
         $('#bottomRight').unbind('click').click(function(){
           finalOneClick(board,2,2,this);
         })
       });
    })
  })
  
  
  $('#twoPlayer').click(function(){
    $('p').fadeOut( "slow", function(){
      $('#reset, #score').css('visibility','visible');
      $('#container').fadeIn( "slow", function(){
        var turn = 'x';
        
        $('#reset').click(function(){
          $("#container").fadeIn("slow");
          clearBoard(board);
          board=[[0,0,0],[0,0,0],[0,0,0]];
          turn = 'x';
          $('#won').html("");
        })
        
          
            $('#topLeft').click(function(){ 
              if($(this).text() == ""){
                finalTwoClick(board,turn,"#topLeft",0,0);
              turn = alternate(turn);
              }
              
             })       
            $('#topMiddle').click(function(){
              if($(this).text() == ""){
              finalTwoClick(board,turn,this,0,1);
              turn = alternate(turn);}
             })     
            $('#topRight').click(function(){
              if($(this).text() == ""){
              finalTwoClick(board,turn,this,0,2);
              turn = alternate(turn);}
             })       
            $('#middleLeft').click(function(){
              if($(this).text() == ""){
              finalTwoClick(board,turn,this,1,0);
              turn = alternate(turn);}
             })        
            $('#middleMiddle').click(function(){
              if($(this).text() == ""){
              finalTwoClick(board,turn,this,1,1);
              turn = alternate(turn);}
             })      
            $('#middleRight').click(function(){
              if($(this).text() == ""){
             finalTwoClick(board,turn,this,1,2);
              turn = alternate(turn);}
             })        
            $('#bottomLeft').click(function(){
              if($(this).text() == ""){
              finalTwoClick(board,turn,"#bottomLeft",2,0);
              turn = alternate(turn);}
             })       
            $('#bottomMiddle').click(function(){
              if($(this).text() == ""){
              finalTwoClick(board,turn,this,2,1);
              turn = alternate(turn);}
             })       
            $('#bottomRight').click(function(){
              if($(this).text() == ""){
              finalTwoClick(board,turn,this,2,2);
              turn = alternate(turn);}
             })
      });
    })//Ends 
  })
})