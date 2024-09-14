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

window.onload=init();