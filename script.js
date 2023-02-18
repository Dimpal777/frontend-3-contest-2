async function getMenu() {
    let list = "";

    await fetch("https://free-food-menus-api-production.up.railway.app/burgers")
    .then(res => res.json())
    .then(res => list = res);

    await (() => {for(let i = 0; i < list.length; i++) {    
        let img = document.createElement('img');
        img.src = list[i].img
        let button = document.createElement('button');
        button.innerHTML = "button"
        button.addEventListener("click", function() {
            buttonClick(list[i])
          });
        let div = document.createElement('div');
        div.appendChild(img);
        div.appendChild(button);
        let div1 = document.createElement('div');
        div1.appendChild(div);
        const element = document.getElementById("div1");
        element.appendChild(div1);
    }})()
}
getMenu()

let order = []
function buttonClick(data) {
    order.push(data)
    if(order.length >= 3) {
        takeOrder()
    }
}

function takeOrder() {
    new Promise(res => setTimeout(() => res({order: order}), 2500))
    .then(res => {
        console.log(res)
        orderPrep()
    })
}


function orderPrep() {
    new Promise(res => setTimeout(() => res({order_status:true, paid:false}), 1500))
    .then(res => {
        console.log(res)
        payOrder()
    })
}

function orderPrep() {
    new Promise(res => setTimeout(() => res({order_status:true, paid:true}), 1000))
    .then(res => {
        console.log(res)
        thankyouFnc()
    })
}

function thankyouFnc() {
    alert(" thank you 🙏🙏🙏🙏")
}