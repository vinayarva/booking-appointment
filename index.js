function handleFormSubmit(event) {
    event.preventDefault();
    const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
    axios
      .post(
        "https://crudcrud.com/api/fc579cff95fd49d080d145ee1993026b/appointment",
        userDetails
      )
      .then((response) => displayUserOnScreen(response.data))
      .catch((error) => console.log(error));


    // Clearing the input fields
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}



window.addEventListener("DOMContentLoaded",()=>{
     axios.get("https://crudcrud.com/api/fc579cff95fd49d080d145ee1993026b/appointment").then((res)=>{
                console.log(res.data)
                let userData =  res.data
                for(let i = 0 ; i < userData.length ; i++){
                    displayUserOnScreen(userData[i])
                }

     }).catch((err)=>console.log(err))

})
  
function displayUserOnScreen(userDetails) {
    const userItem = document.createElement("li");
    userItem.appendChild(
      document.createTextNode(
        `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
      )
    );
  
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);
  
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);
  
    const userList = document.querySelector("ul");
    userList.appendChild(userItem);
  
    deleteBtn.addEventListener("click", function (event) {
      userList.removeChild(event.target.parentElement);
      console.log(userDetails._id)
       const idName = userDetails._id
      axios.delete("https://crudcrud.com/api/fc579cff95fd49d080d145ee1993026b/appointment"+"/"+idName).then((res)=>console.log(res)).catch((err)=>console.log(err))
    });
  
    editBtn.addEventListener("click", function (event) {
      userList.removeChild(event.target.parentElement);
      
      const idName = userDetails._id
      axios.delete("https://crudcrud.com/api/fc579cff95fd49d080d145ee1993026b/appointment"+"/"+idName).then((res)=>console.log(res)).catch((err)=>console.log(err))

      document.getElementById("username").value = userDetails.username;
      document.getElementById("email").value = userDetails.email;
      document.getElementById("phone").value = userDetails.phone;
    });
}
  

