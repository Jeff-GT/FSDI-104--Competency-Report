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
            alert("Please complete the form");
            checkerCounter++; //counter becomes 1
            break; //ends loop if either null or empty ('') exists within checker allowing alert msg to display only ONCE.
        }
    }
    
    if(checkerCounter==0){ //if counter's value didnt change, will go through the loop.
        
        
        petHolder=new Pet(inputName.value,inputAge.value,inputGender.value,inputPetType.value,inputBreed.value,inputService.value) //Since value of radios are no longer null, the value of the radios will be stored this time.
        
        
        
        
        pets.push(petHolder); //pushes pet inputs into array pets[]//
        
        
        clearForm();
        
        if(pets.includes(null)){
            alert("Please Complete the folder")
        }
        else{
            displayRows();
        }
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


function init(){
    //injecting hard coded values for testing
let petHolder=new Pet("Damianne",7,"Female","Cat","Short Hair Siamese","Premium Care");
pets.push(petHolder);
petHolder=new Pet("Artemis",5,"Female","Cat","Short Hair Calico","Premium Care");
pets.push(petHolder);
petHolder=new Pet("Chimera",3,"Female","Cat","Long Hair Tortoishell","Premium Care"); 
pets.push(petHolder);



//displaying hard coded values for testing
displayRows();
}
window.onload=init;


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
    }