// let data=JSON.parse(localStorage.getItem("user"))||[]
getdata()
async function getdata(){
    let url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`

    let res =await fetch(url);

    data = await res.json();

    // console.log(data)
    appendData()
    
}

function appendData(){
    let container=document.getElementById("voucher_list")
    data.forEach(function(el){
       
        for(var i=0;i<10;i++){
            let box=document.createElement("div")
            let name1=document.createElement("h3")
            name1.innerText =el.vouchers[i].name
            let image=document.createElement("img")
            image.src =el.vouchers[i].image
            let price=document.createElement("p")
            price.innerText =el.vouchers[i].price
            let button=document.createElement("button")
            button.innerText="Buy";
            button.setAttribute("class","buy_voucher")
            button.addEventListener("click",buyit)
            box.append(image,name1,price,button)
            container.append(box)

        }

        
    })
}
function buyit(){
    alert("buy")
    
}



