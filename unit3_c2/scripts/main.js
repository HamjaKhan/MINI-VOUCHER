document.querySelector("form").addEventListener("submit",signIn)
function users(n,e,ad,am){
    this.name=n;
    this.email=e;
    this.address=ad;
    this.amount=am;

}


function signIn(){
    
    event.preventDefault()
    let form=document.getElementById("signupform")
    let names=form.name.value;
    let email=form.email.value;
    let address=form.address.value;
    let amount=form.amount.value;
    form.name.value="";
    form.email.value="";
    form.address.value="";
    form.amount.value="";

    let p1=new users(names,email,address,amount)
    let data=JSON.parse(localStorage.getItem("user"))||[]
    data.push(p1)
    localStorage.setItem("user",JSON.stringify(data))
    console.log(data)
}