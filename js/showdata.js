var obj = [
  {
    id: 1,
    image: "pro1.jpg",
    productName: "Organic Virgin Cocunet",
    price: 50,
    icon: "fa-lock",
    // quantity:0
  },
  {
    id: 2,
    image: "pro2.jpg",
    productName: "Carrots Edible Sugar",
    price: 80,
    icon: "fa-lock",
    // quantity:0
  },
  {
    id: 3,
    image: "pro3.jpg",
    productName: "Dried Kiwis Slices",
    price: 150,
    icon: "fa-lock",
    // quantity:0
  },
  {
    id: 4,
    image: "pro4.jpg",
    productName: "Cranberry Pomogranate",
    price: 50,
    icon: "fa-lock",
    // quantity:0
  },
  {
    id: 5,
    image: "pro5.jpg",
    productName: "Ambrosia Apples",
    price: 25.39,
    icon: "fa-lock",
    quantity: 0,
  },
  {
    id: 6,
    image: "pro6.jpg",
    productName: "Vegetables Basket",
    price: 11.39,
    icon: "fa-lock",
    quantity: 0,
  },
  {
    id: 7,
    image: "pro7.jpg",
    productName: "Orange Navel Large",
    price: 140,
    icon: "fa-lock",
    quantity: 0,
  },
  {
    id: 8,
    image: "pro8.jpg",
    productName: "Tropicana Orange Juice",
    price: 142,
    icon: "fa-lock",
    quantity: 0,
  },
];

let cartItem = [];

let itemBox = document.getElementById("item-box");
//
function showdata(data) {
  itemBox.innerHTML = "";
  data.forEach(function (elm, i, arr) {
    // <----------create Element------------>

    let colElm = document.createElement("div");
    let subcolElm = document.createElement("div");
    let imageElm = document.createElement("img");
    let productCOntentDiv = document.createElement("div");
    let linkedname = document.createElement("a");
    let productName = document.createElement("h3");

    let productPrice = document.createElement("h5");
    let linkicon = document.createElement("button");
    let addKart = document.createElement("i");

    //<------------------- Set attributes ------------------->

    colElm.setAttribute("class", "col-3");
    subcolElm.setAttribute("class", "products_list");
    productCOntentDiv.setAttribute("class", "product_listcontent");
    imageElm.setAttribute("src", "assests/products/" + elm.image);
    linkicon.setAttribute("class", "iconbtn");
    addKart.setAttribute("class", "fa " + elm.icon);

    addKart.style.color;

    // <------------get value-------->

    productName.innerText = elm.productName;
    productPrice.innerText = elm.price;

    linkicon.onclick = addCartItem.bind(null, elm.id);
    linkedname.appendChild(productName);
    linkicon.appendChild(addKart);

    productCOntentDiv.append(linkedname, productPrice, linkicon);
    subcolElm.append(imageElm, productCOntentDiv);
    colElm.appendChild(subcolElm);
    itemBox.appendChild(colElm);
  });
}
showdata(obj);

let linkidicon = document.getElementById("iconidbtn");

function addCartItem(id) {
  let findData = cartItem.find(function (item) {
    return item.id === id;
  });
  if (findData) {
    let updatecartlist=cartItem.map(function (item) {
      if (item.id === id) {
        item.quantity += 1;
        return item;
      } else return item;
    })
    cartItem=updatecartlist;
    updatekartShow(cartItem);
    showTotalPrice(cartItem);
    // console.log(cartItem);
  } else {
    let newItemCart = obj.find(function (item) {
      return item.id === id;
    });
    newItemCart.quantity = 1;
    cartItem.push(newItemCart);
    console.log(cartItem);
    updatekartShow(cartItem);
    showTotalPrice(cartItem);
  }
}


function decrementcartitem(id){
  let finddata = cartItem.find(function(item){
      return item.id === id;
  });
  if (finddata){
      if (finddata.quantity===1){
          let updatecartlist=cartItem.filter(function(item){
              return item.id !== id;
          });
          cartItem=updatecartlist;
          updatekartShow(cartItem);
          showTotalPrice(cartItem);
          
          
      }
      else{
          let updatecartlist=cartItem.map(function(item){

              if (item.id === id){
                 item.quantity -= 1;
                 return item;
            }
            else return item;
            })
            console.log(cartItem);
            cartItem=updatecartlist;
            updatekartShow(cartItem);
            showTotalPrice(cartItem);
      }
  }
}

function deletecartItems(id){
    let finddata = cartItem.find(function(item){
        return item.id == id;
    })
    if (finddata){
        let updateitem=cartItem.filter(function(item){
            return item.id !== id;
    });
    cartItem=updateitem;
    updatekartShow(cartItem);
    showTotalPrice(cartItem);
  }
}

// function showTotalPrice(cartItem){
//   let showTotat=document.getElementById("showTotalPrice");
//   total=0;
//   for(i=0;i<cartItem.length;i++){
//     total=(cartItem[i].price * cartItem[i].quantity);
//     console.log(total);
//     showTotat.innerText= "Total Price :" + total;
//   }


// }
// showTotalPrice(cartItem)

function showTotalPrice(cartItem){
  let showTotat=document.getElementById("showTotalPrice");
  showTotat.innerText="";
  total=0;
  
  for(let i=0;i<cartItem.length;i++){
      if(cartItem.quantity!=0){
        total +=(cartItem[i].price * cartItem[i].quantity);
        console.log(total);
        showTotat.innerText="Total Price :" + total;
    
      }
      else
      {
        return showTotat=total;
      }
   
  }


}
showTotalPrice(cartItem)


let addKartShowData = document.getElementById("addshowcart");

function updatekartShow(newdata) {
  addKartShowData.innerHTML = "";
  newdata.forEach(function (elm, i, arr) {
    let overalldiv = document.createElement("div");
    let showKartcompletedata = document.createElement("div");

    let showKartImagedata = document.createElement("div");
    let showKartdata = document.createElement("div");
    let karproimage = document.createElement("img");
    let kartProNme = document.createElement("h3");
    let kartProqty = document.createElement("h5");
    let kartProPrice = document.createElement("h4");
    let buybtn = document.createElement("button");
    let deletebtn = document.createElement("button");
    
    let totalPrice = document.createElement("h4");

    // kart add and sub
    let itemqtyadd  = document.createElement("button");
    // let qtydisplay=document.createElement("input")
    let itemqtsub = document.createElement("button");

    overalldiv.setAttribute("class", "overalldiv");
    showKartcompletedata.setAttribute("class", "showKartcompletedata");
    showKartImagedata.setAttribute("class", "showKartImagedata");
    karproimage.setAttribute("class", "dataimage");
    showKartdata.setAttribute("class", "showContentData");
    itemqtyadd.setAttribute("class", "btnitemadd");
    itemqtsub.setAttribute("class", "btnitemadd");
    buybtn.setAttribute("class", "btn btn-danger");
    deletebtn.setAttribute("class", "btn btn-danger");
    // qtydisplay.setAttribute("id","qtyshow")
    // qtydisplay.setAttribute("value",0)

    // buybtn.style.textAlign("center");

    totalvalue = elm.quantity * elm.price;
    totalPrice.innerText = totalvalue;
    // console.log(totalPrice);
    // console.log(totalvalue);

    kartProNme.innerText = "Product Name:  " + elm.productName;
    kartProPrice.innerText = "Product Price: " + elm.price;
    kartProqty.innerText = "Product Quantity:  " + elm.quantity;
    totalPrice.innerText = "Total Price :" + totalvalue;
    itemqtyadd.innerText = " + ";
    itemqtsub.innerText = " - ";
    buybtn.innerText = "Buy Items";
    deletebtn.innerText = "Delete";
    // qtydisplay.innerText=elm.quantity;

    karproimage.setAttribute("src", "assests/products/" + elm.image);

    showKartdata.append(kartProNme,kartProqty,kartProPrice,totalPrice,itemqtyadd,itemqtsub,deletebtn);
    showKartImagedata.appendChild(karproimage);
    showKartcompletedata.append(showKartImagedata,showKartdata);
    addKartShowData.append(showKartcompletedata);

    let qty=1;
    itemqtyadd.onclick=addCartItem.bind(null,elm.id);
    itemqtsub.onclick=decrementcartitem.bind(null,elm.id);
    deletebtn.onclick=deletecartItems.bind(null,elm.id);


   });
}


// window.onload = updatekartShow(cartItem);

// function deletedata(id) {
//   let finddata = cartItem.find(function (item) {
//     return item.id === id;
//   });
//   if (finddata) {
//     let updateobject = cartItem.filter(function (item) {
//       return item.id !== id;
//     });
//     cartItem = updateobject;
//     update(cartItem);
//   }
// }


    
// let quantity = 1;

    
//     itemqtyadd.addEventListener("click",addition);

//     // itemqtyadd.addEventListener("click", () => 
      
//       function addition (id){
//       quantity++;
//       kartProqty.innerText = "Product Quantity:  " + quantity;
//       // console.log(kartProqty);
//       kartProPrice.innerText = "Product Price: " + elm.price;
//       // console.log(kartProPrice);
//       totalPrice.innerText = "Total price :" + quantity * elm.price;
//       // console.log(totalPrice  )
//     };



//     itemqtsub.addEventListener("click", () => {
//       if (quantity > 0) {
//         quantity--;
//       } else {
//         return;
//       }

//       kartProqty.innerText = "Product Quantity:  " + quantity;
//       kartProPrice.innerText = "Product Price: " + elm.price;
//       // console.log(kartProPrice);
//       totalPrice.innerText = "Total price :" + quantity * elm.price;
//       // console.log(totalPrice  )
//     });