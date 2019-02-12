//define functions here

function getIt(){
  $("p").on("click", function(){
    return alert("Hey!");
    });
  }
  
function frameIt(){
    $('img').on('load', function(){
     $('img').addClass('tasty');
    }); 
}

function pressIt(){
  $('input').on('keydown', function(){
    if (press.which === 71){
      window.alert('G was pressed');
    }
  });
}

