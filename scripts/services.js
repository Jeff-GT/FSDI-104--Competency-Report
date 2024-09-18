//contructor
function Service(description,price){
  this.description=description;
  this.price=price;
}


function addService(){
  let counter=0;
  let serviceNew=$("#txtService").val();
  let priceNew=$("#numPrice").val();

  if(serviceNew==''){
    
    $("#txtService").addClass(`empty-form`);

    
    
    counter++;
  }
  
  if(priceNew==''){
    
    $("#numPrice").addClass(`empty-form`);
    
    
    
    counter++;
  }

  

  if(counter!=0){
    alert("Please complete the Form");
    if(priceNew!=''){
      $("#numPrice").removeClass(`empty-form`);
    }
    if(serviceNew!=''){
      $("#txtService").removeClass(`empty-form`);
    }
  }
  else{
    let newService= new Service(serviceNew,priceNew);
    $("#serviceAdded").append(`
      <div>${serviceNew}</div>
      <div>${priceNew}</div>`);
      save(newService);
      $("input").val("");
      $("input").removeClass(`empty-form`);
  }

}


function init() {
  $("#serviceAdder").on("click",addService);
}

window.onload=init;


// btn id=serviceAdder