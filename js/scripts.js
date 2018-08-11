setTimeout(()=>{
    
var id = document.getElementById("changeui");
id.innerHTML = `<center><h1>Pwa applications</h1><div><label for='username'></label><input type='text' id='usernames' value="user" class='text' placeholder='enter username' /><button id='btn'>Fetch Followers</button></div><hr/><h3>list of Followers!</h3>
<table>
                     <thead>
                        <th>id</th>
                        <th>user name</th>
                        <th>profile image</th>
                        <th>repo</th>
                    </thead>
                    <tbody id="bodytable">
                
                    </tbody>
                </table>
</center>`


var btn = document.getElementById('btn');


btn.onclick = function() {

    var username = document.getElementById("usernames");
     username = username.value.trim()
     
    fetch('https://api.github.com/users/'+ username +'/followers')
    .then(function(response){
        return response.json();
    }).then(function(users){
        var output = "";
        users.forEach(user => {
            output += `<tr>
                        <td>${user.id}</td>
                        <td>${user.login}</td>
                        <td> <img width="30" height="30" src="${user.avatar_url}" /> </td>
                        <td>${user.url}</td>
                        </tr>
                        `;
        });
         var resultbody = document.getElementById("bodytable");
        resultbody.innerHTML = output;

    }).catch(function(err){
        console.log(err);
    })

}




},1000)
