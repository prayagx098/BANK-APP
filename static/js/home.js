function fetchProfile(){
    let Accountno = sessionStorage.getItem('Accountno');
    let User = JSON.parse(localStorage.getItem(Accountno));

    document.getElementById('username').textContent = User.firstName ? User.firstName : "User";
    document.getElementById('accno').textContent = User.accountNumber ? User.accountNumber : "00000";
    document.getElementById('mob').textContent = User.mobileNumber ? User.mobileNumber : "000 000 0000";
    document.getElementById('balance').textContent = User.balance ? User.balance : "nill";
}

function updateBalance(){
    let Uptamount = depositValue.value;
    let Accountno = sessionStorage.getItem('Accountno');
    let User = JSON.parse(localStorage.getItem(Accountno));

    let pastBal = parseFloat(User.balance);


    let addAmount = parseFloat(Uptamount);

    User.balance = pastBal + addAmount;

    balanceShow.innerHTML =   ` your Previous Balance was $ ${pastBal} and Current Balance is :${User.balance}`;

    localStorage.setItem(Accountno, JSON.stringify(User));


}

function withdrawBalance(){
    let Uptamount = WithdrawValue.value;
    let Accountno = sessionStorage.getItem('Accountno');
    let User = JSON.parse(localStorage.getItem(Accountno));

    let pastBal = parseFloat(User.balance);


    let addAmount = parseFloat(Uptamount);

    User.balance = pastBal - addAmount;

    balanceShow2.innerHTML =   ` your Previous Balance was $ ${pastBal} and Current Balance is :${User.balance}`;

    localStorage.setItem(Accountno, JSON.stringify(User));
}
function Logout(){
    window.location = "./index.html"
}