let pets=[];
//creat the contructor
//-----parameters(local)------

function Pet(name,age,gender,petType,breed,service) {
    //property=parameter
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.petType=petType;
    this.breed=breed;
    this.service=service;
}

function Pay(name,email,billAdd,city,state,zip,nameCard,numCard,expMonth,cardVV) {
    //property=parameter
    this.name=name;
    this.email=email;
    this.billAdd=billAdd;
    this.city=city;
    this.state=state;
    this.nameCard=nameCard;
    this.numCard=numCard;
    this.expMonth=expMonth;
    this.cardVV=cardVV;
}


function register() {
    //input pet details
    let inputName=document.getElementById("txtName");
    let inputAge=document.getElementById("txtAge");
    let inputGender=document.querySelector('input[name="gender"]:checked');
    let inputPetType=document.querySelector('input[name="petType"]:checked');
    let inputBreed=document.getElementById("txtBreed");
    let inputService=document.getElementById("selectServices")
    
    petHolder=new Pet(inputName.value,inputAge.value,inputGender,inputPetType,inputBreed.value,inputService.value)
    //console.log(checker); //didnt put the value of gender and petType because returning a null value causes errors for radios
    let checkerCounter=0;
    
    for(let i in petHolder){ //goes through values of checker with index i;
        if(petHolder[i]==null||petHolder[i]==''){ //checks if either null or empty ('') exists within checker;
            alert("Please complete Pet Info Form");
            checkerCounter++; //counter becomes 1
            break; //ends loop if either null or empty ('') exists within checker allowing alert msg to display only ONCE.
        }
    }
    
    if(checkerCounter==0){ //if counter's value didnt change, will go through the loop.
        
        
        petHolder=new Pet(inputName.value,inputAge.value,inputGender.value,inputPetType.value,inputBreed.value,inputService.value) //Since value of radios are no longer null, the value of the radios will be stored this time.
        
        
        
        
        pets.push(petHolder); //pushes pet inputs into array pets[]//
        
        
        clearForm();
        displayRows();
        
    }
}


function payInfo(){
    let customerName=document.getElementById("cn");
    let customerEmail=document.getElementById("ce");
    let customerAddr=document.getElementById("ca");
    let customerCity=document.getElementById("cc");
    let customerState=document.getElementById("cs");
    let customerZip=document.getElementById("cz");

    let cardName=document.getElementById("nc");
    let cardNum=document.getElementById("numC");
    let cardExp=document.getElementById("ec");
    let cardCVV=document.getElementById("cvv");

    let payChecker=new Pay(customerName.value,customerEmail.value,customerAddr.value,customerCity.value,customerState.value,customerZip.value,cardName.value,cardNum.value,cardExp.value,cardCVV.value,)

    let checkerCounter=0;
    
    for(let i in payChecker){ //goes through values of checker with index i;
        if(payChecker[i]==null||payChecker[i]==''){ //checks if either null or empty ('') exists within checker;
            
            checkerCounter++; //counter becomes 1
            break; //ends loop if either null or empty ('') exists within checker allowing alert msg to display only ONCE.
        }
        
    }
    
    
    if(checkerCounter==0){ //if counter's value didnt change, will go through the loop.
        let validationCntr=0
        console.log("test");
        if(customerEmail.value.includes('@')&&customerEmail.value.includes('.com')){  //assuming I have input type="submit" working
            validationCntr++;
        }
        else{
            alert("Invalid email. Please use this template ''example@email.com''.\nTry again");
        }
        if(cardCVV.value<=999&&cardCVV.value>0){
            validationCntr++;
                
        }
        else{
            alert("Invalid CVV. Try again");
        }
        if(customerZip.value<100000&&customerZip.value>500){
            validationCntr++;
            
        }
        else{
            alert("Invalid Zip Code. Try again");
        }
        if(cardNum.value>1000000000000000&&cardNum.value<=9999999999999999){
            validationCntr++;
        }
        else{
            alert("Invalid Card. Try again");
        }
        if(validationCntr==4){
            register();
        }

    }
    else{
        alert("Please Complete Payment Form");
    }
}


function test(){
    let x=document.querySelector('input[name="gender"]:checked');
    console.log(x);
    
}

function deletePet(petID) {
    console.log("Deleting Pet");
    let action=prompt("Enter reason of deletion");
    console.log("Action Successful! \nReason: "+action);
    document.getElementById(petID).remove();//deletes from the HTML
    pets.splice(petID,1);//removes pet from the array;
    displayRows();
    
}





//-----------------------------MISC fuctions--------------------------------

let foundPet=null; //making this a global variable allows it to keep the value of the previous search result

function search(){

    if(foundPet){
        document.getElementById(id).classList.remove("highlight");//highlight removal for previous search result
    }

    let ss=document.getElementById("txtSearch").value;
    
    if(ss==''){
        alert("Your search field is empty. Try again.")
    }
    else{

        console.log(ss);
        for(i=0;i<pets.length;i++){
            if(pets[i].name.toLowerCase()==ss.toLowerCase()){
                foundPet=pets[i];
                id=i;
                console.log(foundPet); 
                
                break;
            }
            else{
                foundPet=null;//highlight removal for previous search result regardless
            }
        }
        if(foundPet){
            document.getElementById(id).classList.add("highlight");
        } 
        
        else{
            alert("Pet Doesnt Exist");
        }
    }
}

function clearForm(){
    document.getElementById("txtName").value="";
    document.getElementById("txtAge").value="";
    document.querySelector('input[name="gender"]:checked').checked=false;
    document.querySelector('input[name="petType"]:checked').checked=false;
    document.getElementById("txtBreed").value="";
    document.getElementById("selectServices").value="";

    document.getElementById("cn").value="";
    document.getElementById("ce").value="";
    document.getElementById("ca").value="";
    document.getElementById("cc").value="";
    document.getElementById("cs").value="";
    document.getElementById("cz").value="";

    document.getElementById("nc").value="";
    document.getElementById("numC").value="";
    document.getElementById("ec").value="";
    document.getElementById("cvv").value="";
    }