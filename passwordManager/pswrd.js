//logic to fill he table--
function maskPassword(pass){
    let str="";
    for(let i=0;i<pass.length;i++){
        str+="*";
    }
    return str;
}

function copyText(txt) {
    navigator.clipboard.writeText(txt).then(
        () => {
          document.getElementById("alert").style.display = "inline"
          setTimeout(()=>{document.getElementById("alert").style.display="none"}, 2000);},
        () => {alert("Clipboard copying failed")},
    );
}

const deletePassword=(website)=>{
    let data=localStorage.getItem("passwords");
    let arr=JSON.parse(data);
    arrUpdated=arr.filter((e)=>{
        return e.website!=website;
    })
    localStorage.setItem("passwords",JSON.stringify(arrUpdated));
    alert(`Successfully Deleted ${website} Password`);
    showPasswords();
}

const showPasswords=()=>{
    let tb=document.querySelector("table");
    let data=localStorage.getItem("passwords");
    if(data==null || JSON.parse(data).length == 0){
        tb.innerHTML="No Data to Show";
    }else{
        tb.innerHTML=`<tr>
                <th>Website</th>
                <th>Username</th>
                <th>Password</th>
                <th>Delete</th>
            </tr>`;
        let arr=JSON.parse(data);
        let str="";
        for(let i=0;i<arr.length;i++){
            const element=arr[i];
            str+=`<tr>
                <td>${element.website} <img onclick="copyText('${element.website}')" src="pswrd.svg" alt="Copy Button" width="10" height="10"></td>
                <td>${element.username} <img onclick="copyText('${element.username}')" src="pswrd.svg" alt="Copy Button" width="10" height="10"></td>
                <td>${maskPassword(element.password)} <img onclick="copyText('${element.password}')" src="pswrd.svg" alt="Copy Button" width="10" height="10"></td>
                <td><button class="btnsm" onclick="deletePassword('${element.website}')">Delete</button></td>
            </tr>`
        }
        tb.innerHTML=tb.innerHTML+str;
    }
    website.value="";
    username.value="";
    password.value="";

}

console.log("Rishika");
showPasswords();
document.querySelector(".btn").addEventListener("click", (e)=>{
    e.preventDefault(); 
    console.log("Clicked....");
    console.log(username.value, password.value);
    let passwords=localStorage.getItem("passwords");
    console.log(passwords);
    if(passwords==null){
        let json=[];
        json.push({website: website.value,username:username.value, password:password.value})
        alert("passwords saved");
        localStorage.setItem("passwords",JSON.stringify(json));
    }else{
        let json=JSON.parse(localStorage.getItem("passwords"));
        json.push({website: website.value,username:username.value, password:password.value})
        alert("passwords saved");
        localStorage.setItem("passwords",JSON.stringify(json));
    }
    showPasswords();
});