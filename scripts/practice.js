let idHolder=null;

function clickMe(){
  $("#results").text("The button was clicked");
  $("p:first").hide();
  $("p:last").css('background-color','red');
}

function register() {
  //javaScript
  //let testEntry=document.getElementById("testInput").value;
  //let results=document.getElementById("results");
  //results.innerHTML+=`<li>${testEntry}</li>`;

  //jQuery
  let testEntry=$("#testInput").val();
  $("#results").append(`<li>${testEntry}`);
}


function option1(){

  $("#op1").show();
  $("#op2").hide();

}

function option2(){
  
  $("#op2").show();

  $("#op1").hide();


}


function init() {
  $("#btn1").on("click",clickMe);

  $("#btn1").on("mouseover", function(){
    $(this).addClass("btn");
  })
  
  $("#btn1").on("mouseleave",function(){
    $(this).removeClass("btn");
  })

  $("#btnRegister").on("click",register);

  $("p#op1").hide();
  $("p#op2").hide();

  $("#op1Link").on("click",option1)
  
  $("#op2Link").on("click",option2)

/*  $("#op1Link").on("click",function(){
    $("#op2").hide();
    $("#op1").show();
  })
  
  $("#op2Link").on("click",function(){
    $("#op1").hide();
    $("#op2").show();
  })*/
}

window.onload=init;

