function save(service){
  console.log(service);//object
  let val=JSON.stringify(service);
  console.log(val);
  localStorage.setItem("services",val);
}