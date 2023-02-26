

var obj = [
  {
    id:1,
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
    quantity:0
  },
  {
    id: 6,
    image: "pro6.jpg",
    productName: "Vegetables Basket",
    price: 11.39,
    icon: "fa-lock",
    quantity:0
  },
  {
    id: 7,
    image: "pro7.jpg",
    productName: "Orange Navel Large",
    price: 140,
    icon: "fa-lock",
    quantity:0
  },
  {
    id: 8,
    image: "pro8.jpg",
    productName: "Tropicana Orange Juice",
    price:142,
    icon: "fa-lock",
    quantity:0
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
    linkicon.setAttribute("class","iconbtn");
    addKart.setAttribute("class", "fa " + elm.icon);
   
    addKart.style.color

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

function addCartItem(id){
  
  let findData =  cartItem.find(function(item){
    return item.id === id;
  })
  if(findData){
    cartItem.map(function(item){
      if(item.id === id){
        item.quantity += 1;
        return item;

      }else
      return item;
    })
    console.log(cartItem);
  }else{
    let newItemCart = obj.find(function(item){
      return item.id === id;
      
    })
    newItemCart.quantity = 1;
    cartItem.push(newItemCart);
    console.log(cartItem);
    updatekartShow(cartItem);
  }
}


let addKartShowData= document.getElementById("addshowcart");

function updatekartShow(newdata) {
  addKartShowData.innerHTML = "";
  newdata.forEach(function (elm, i, arr){
    
    let showKartcompletedata=document.createElement("div");
    let showKartImagedata=document.createElement("div");
    let showKartdata=document.createElement("div");
    let karproimage=document.createElement("img");
    let  kartProNme=document.createElement("h3");
    let  kartProqty=document.createElement("h5");
    let  kartProPrice=document.createElement("h4");


    let itemqtyadd=document.createElement("button");
    let qtydisplay=document.createElement("input")
    let itemqtsub=document.createElement("button");
  

    showKartcompletedata.setAttribute("class","showKartcompletedata");
    karproimage.setAttribute("class","dataimage");
    showKartdata.setAttribute("class","showContentData");
    itemqtyadd.setAttribute("class","btnitemadd");
    itemqtsub.setAttribute("class","btnitemadd");
    qtydisplay.setAttribute("id","qtyshow")
    qtydisplay.setAttribute("value",0)


        kartProNme.innerText="Product Name:  "+ elm.productName;
        kartProPrice.innerText="Product Price: "+ elm.price;
        kartProqty.innerText="Product Quantity:  "+ elm.quantity;
        itemqtyadd.innerText=" + ";
        itemqtsub.innerText=" - ";
        // qtydisplay.innerText=elm.quantity;


        karproimage.setAttribute("src","assests/products/"+ elm.image)
        

        showKartdata.append(kartProNme,kartProqty,kartProPrice,itemqtyadd,qtydisplay,itemqtsub);
        showKartImagedata.appendChild(karproimage)
        showKartcompletedata.append(showKartImagedata,showKartdata)
        addKartShowData.appendChild(showKartcompletedata);
  

        itemqtyadd.addEventListener("click",()=>{
          qtydisplay.value=parseInt(qtydisplay.value) + 1;
          console.log(qtydisplay);
        })

        itemqtsub.addEventListener("click",()=>{
          if(qtydisplay.value<=0){
            qtydisplay.value=0;
          }
          else{
            qtydisplay.value=parseInt(qtydisplay.value) - 1;

          }
          // console.log(qtydisplay);
        })
  

  })
}







