function register(){
    let firstName = document.getElementById('name').value;
    let mobileNumber = document.getElementById('mob').value;
    let accountNumber = document.getElementById('accountno').value;
    let balance = document.getElementById('balance').value;
    let password = document.getElementById('pswd').value;

    User={
        firstName:firstName,
        mobileNumber:mobileNumber,
        accountNumber:accountNumber,
        balance:balance,
        password:password
    }


    if(firstName == "" || mobileNumber == "" || accountNumber == "" || balance == "" || password == ""){
        alert("please fill the missing fields")
    }else{
        if(accountNumber in localStorage){
            alert("Account Already Exist");
        }else{
            localStorage.setItem(accountNumber,JSON.stringify(User))
            alert("Account added successfully");
        }
    }
}

function Login(){

    let pswd = password.value;
    let accountno = accno.value;


    if(accountno in localStorage){
        let User = JSON.parse(localStorage.getItem(accountno));
        if(User.accountNumber == accountno && User.password == pswd){
            alert("Login successfull");
            sessionStorage.setItem('Accountno', User.accountNumber);
            window.location="./home.html"
        }else{
            alert("invalid credentials");
        }
    }else{
        alert("no user found");
    }

}