function addService(){
  let serviceNew=$("#txtService").val();
  let priceNew=$("#numPrice").val();
  $("#serviceAdded").append(`<div>${serviceNew}</div><div>${priceNew}</div>`);
}




function init() {
  $("#serviceAdder").on("click",addService);
}

window.onload=init;


// btn id=serviceAdder