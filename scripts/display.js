function displayRows(){
    const CARDS=document.getElementById("show");
    CARDS.innerHTML=""; //erases the current table
    for(let i=0;i<pets.length;i++){ //inserts new table but has to loop through everything
        let pet=pets[i];
        CARDS.innerHTML+=`<tr class="registered-info" id="${i}">
        <td>${pet.name}</td> 
        <td>${pet.age}</td>
        <td>${pet.gender}</td>
        <td>${pet.petType}</td>
        <td>${pet.breed}</td>
        <td>${pet.service}</td>
        <td><button class="delete-btn" onclick="deletePet(${i})">Delete</button></td>
        </tr>`
    }
}




