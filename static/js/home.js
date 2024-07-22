function fetchProfile(){
    let Accountno = sessionStorage.getItem('Accountno');
    let User = JSON.parse(localStorage.getItem(Accountno));

    document.getElementById('username').textContent = User.firstName ? User.firstName : "User";
    document.getElementById('accno').textContent = User.accountNumber ? User.accountNumber : "00000";
    document.getElementById('ifscc').textContent = User.ifsc ? User.ifsc : "BNB001";
    document.getElementById('mob').textContent = User.mobileNumber ? User.mobileNumber : "000 000 0000";
    document.getElementById('balance').textContent = User.balance ? User.balance : "nill";
}


function updateBalance(){


    let Uptamount = depositValue.value;
    let Accountno = sessionStorage.getItem('Accountno');
    let User = JSON.parse(localStorage.getItem(Accountno));

    if(Uptamount == ''){

        balanceShow.innerHTML = "Enter Amount to continue"

    }else{

        let pastBal = parseFloat(User.balance);


        let addAmount = parseFloat(Uptamount);
    
        User.balance = pastBal + addAmount;
    
        balanceShow.innerHTML =   ` your Previous Balance was $ ${pastBal} and Current Balance is :${User.balance}`;
    
        localStorage.setItem(Accountno, JSON.stringify(User));
    }




}

function withdrawBalance(){


    let Accountno = sessionStorage.getItem('Accountno');
    let User = JSON.parse(localStorage.getItem(Accountno));


    let Uptamount = WithdrawValue.value;

    if(Uptamount == ''){

        balanceShow2.innerHTML = "Enter amount to continue"

    }else{

        let pastBal = parseFloat(User.balance);


        let addAmount = parseFloat(Uptamount);
    
        User.balance = pastBal - addAmount;
    
        balanceShow2.innerHTML =   ` your Previous Balance was $ ${pastBal} and Current Balance is :${User.balance}`;
    
        localStorage.setItem(Accountno, JSON.stringify(User));
    }



}

function deleteAccount(){

    let Accountno = sessionStorage.getItem('Accountno');
    let User = JSON.parse(localStorage.getItem(Accountno));

    accnoDel = accdelno.value;

    if(accnoDel == '' || !localStorage.getItem(accnoDel)){
        alert("Alternative Account not Found");
    }else{
        let TransferUser = JSON.parse(localStorage.getItem(accnoDel));

        let currentUserBalance = parseFloat(User.balance);


        let transferUserBalance = parseFloat(TransferUser.balance);

        TransferUser.balance = currentUserBalance + transferUserBalance;

        alert(`Your Amount ${currentUserBalance} has been transfered to ${TransferUser.firstName}`);
        

        localStorage.setItem(accnoDel, JSON.stringify(TransferUser));

        localStorage.removeItem(Accountno);

        window.location = "./index.html"


    }
}

function Logout(){
    window.location = "./index.html"
}