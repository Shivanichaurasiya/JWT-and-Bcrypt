fetch("http://localhost:5000/api/getdata")

.then(response => response.json())
.then(data => {
    console.log(data);
    const users = data.dataReceived;
    let rows = "";

    users.forEach(user => {
        rows += `<tr>
                    <td>${user.fullname}</td>
                    <td>${user.email}</td>
                    <td>${user.password}</td>
                    <td><button onclick="editUser('${user._id}')">Edit</button></td>
                    <td><button onClick="deleteUser('${user._id}')">Delete</button></td>
                 </tr>`;
    });

    document.getElementById("userdetails").innerHTML = rows;
}

).catch(error => console.error('Error fetching data:', error));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



function editUser(id) {
  const fullname = prompt("Enter new name:");
  const email = prompt("Enter new email:");
  const password = prompt("Enter new password:");

  fetch(`http://localhost:5000/edit/${id}`, {   // ✅ full URL safer
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ fullname, email, password })
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    alert("User updated successfully");
    location.reload();
  })
  .catch(err => console.log(err));
}

function deleteUser(id) {
    fetch(`http://localhost:5000/delete/${id}`, {   // ✅ full URL safer
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())    
    .then(data => {
        console.log(data);
        alert("User deleted successfully");
        location.reload();
    }
    )
    .catch(err => console.log(err));
}


    
