let usersList = ["admin"]

if(localStorage.getItem("usersList") === null){
    localStorage.setItem("usersList", JSON.stringify(usersList))
} else{
    usersList = JSON.parse(localStorage.getItem("usersList"))
}

let btnSignUp = document.getElementById("signUp");
btnSignUp.addEventListener('click', signUp);
function signUp() {
    let user = document.getElementById("email").value;

    if (user === ""){
        alert("Không được để trống")
    } else {
        for(let i =0;i < usersList.length; i++){
            if (user === usersList[i]){
                alert("Tài khoản đã tồn tại");
                document.getElementById("user").value="";
                return;
            }
        }
        usersList.push(user);
        
        localStorage.setItem("usersList", JSON.stringify(usersList));

        alert("Tài khoản đã được tạo");    

        document.getElementById("user").value="" 

        window.location.href = "./login.html"
    }
}