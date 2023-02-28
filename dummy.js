var obj=[
             {
		 	     id:1,
                 image:"hummingbird-cushion.jpg",
                 Design:"Graphic Corner",
                 furnituretype:"Bobber Small Pendant Light",
                 amount:129
                 
             },
		 	{
		 	     id:2,
                 image:"mug-today-is-a-good-day.jpg",
                 Design:"Studio Design",
                 furnituretype:"Bobber Table Lamp",
                 amount:110
                 
             },
             {
		 	     id:3,
                 image:"brown-bear-printed-sweater.jpg",
                 Design:"Graphic Corner",
                 furnituretype:"Cast Scone Wall Lamp",
                 amount:311
             },
             {
		 	     id:4,
                 image:"hummingbird-printed-t-shirt.jpg",
                 Design:"Graphic Corner",
                 furnituretype:"Franklin Chandelier",
                 amount:412
             },
             {
		 	     id:5,
                 image:"the-adventure-begins-framed-poster.jpg",
                 Design:"Graphic Corner",
                 furnituretype:"Afternoon Dining Chair",
                 amount:513
             },
             {
		 	    id:6,
                 image:"mountain-fox-cushion.jpg",
                 Design:"Studio Design",
                 furnituretype:"Bollard Lamp",
                 amount:856
             },
         {
		 	     id:7,
                 image:"mountain-fox-notebook.jpg",
                 Design:"Graphic Corner",
                 furnituretype:"Clean Cut Dining Chair",
                 amount:656
             },
             {
		 	     id:8,
                 image:"brown-bear-vector-graphics.jpg",
                 Design:"Graphic Corner",
                 furnituretype:"Circula Coffee Table",
                 amount:756
             }
			
		 ];
	     let furnitures = document.getElementById("furniture");
         let cartlist=[];
		
		 function showdata(data){
            furnitures.innerHTML = "";
		
		   data.forEach(function(elm,i,arr){
		    let colelm = document.createElement("div");
		    let furnitureimg = document.createElement("div");
		    let furimage = document.createElement("img");
		    let furnitureratings = document.createElement("div");
		    let txtelm = document.createElement("h6");
		    let textelm = document.createElement("h5");
		    let paraelm = document.createElement("p");
            // let addbtn = document.createElement("button");
            let linkelm = document.createElement("a");
            
            
            
		   
		    colelm.setAttribute("class","col-lg-3");
		    furnitureimg.setAttribute("class","furniture-img");
		    furimage.setAttribute("src","image/"+elm.image);
		    furnitureratings.setAttribute("class","furniturerating");
            // addbtn.setAttribute("class","furn-btn");
            linkelm.setAttribute("class","furn-btn");
            linkelm.setAttribute("href","#");
            linkelm.setAttribute("id","furnlink")
            textelm.setAttribute("class","fur-type");
            paraelm.setAttribute("class","fur-price");
            // addbtn.setAttribute("id","ad-btn");

 
            
            
            txtelm.style.color="#767676";
            txtelm.style.marginTop="20px";
            colelm.style.marginBottom="20px";
            // linkelm.style.marginBottom="20px";
		   
		    txtelm.innerText=elm.Design;
		    textelm.innerText=elm.furnituretype;
		    paraelm.innerText=elm.amount;
            linkelm.innerText="Add To Cart";
            linkelm.onclick=cartitem.bind(null,elm.id);
		   
		   
		    furnitures.appendChild(colelm);
		    colelm.append(furnitureimg,furnitureratings,linkelm);
		    furnitureratings.append(txtelm,textelm,paraelm);
		    furnitureimg.appendChild(furimage);
        

           
		   
         });
		
         }
		 showdata(obj);
        
        let btn=document.getElementById("furnlink");
        

        function cartitem(id){
              let finddata = cartlist.find(function(items){
                  return items.id === id;
              });
              if (finddata){
                let updatecartlist=cartlist.map(function(items){
                    if (items.id === id){
                    items.qty += 1;
                    return items;
                  }
                  else return items;
                  })
                  cartlist=updatecartlist;
                  updateitems(cartlist);
                }
                else{
                   let newitem = obj.find(function(items){
                        return items.id === id;
                   })
                   newitem.qty = 1;
                   cartlist.push(newitem);
                   updateitems(cartlist);
                   console.log(cartlist)
            }
        }
        function decrementcartitem(id){
            let finddata = cartlist.find(function(items){
                return items.id === id;
            })
            if (finddata){
                if (finddata.qty===1){
                    let updatecartlist=cartlist.filter(function(items){
                        return items.id !== id;
                    });
                    cartlist=updatecartlist;
                    updateitems(cartlist);
                    
                    
                }
                else{
                    let updatecartlist=cartlist.map(function(items){

                        if (items.id === id){
                        items.qty -= 1;
                        return items;
                      }
                      else return items;
                      })
                      console.log(cartlist);
                      cartlist=updatecartlist;
                      updateitems(cartlist);
                }
            }
        }

        function deletecartItems(id){
            let finddata = cartlist.find(function(items){
                return items.id == id;
            })
            if (finddata){
                let updateitem=cartlist.filter(function(items){
                    return items.id !== id;
            });
            cartlist=updateitem;
            updateitems(cartlist);
        }
    }
       
        
                
            //   let updatecartlist=cartlist.map(function(items){

            //       if (items.id === id){
            //       items.qty -= 1;
            //       return items;
            //     }
            //     else return items;
            //     })
            //     console.log(cartlist);
            //     updateitems(updatecartlist);
            //   }
            
        //       else{
        //          let newitem = obj.find(function(items){
        //               return items.id === id;
        //          })
        //          newitem.qty = 1;
        //          cartlist.push(newitem);
        //          updateitems(cartlist);
        //          console.log(cartlist)
        //   }
      
        // btn.addEventListener("click",cartitem);
        //update function
        let cartcon=document.getElementById("cart-content");

        function updateitems(data){
            cartcon.innerHTML=""; 

            data.forEach(function(elm){
                let colcart=document.createElement("div");
                let cartimg=document.createElement("div");
                let cartimage=document.createElement("img");
                let cartcontent=document.createElement("div");
                let cartdesign=document.createElement("h5");
                let carttype=document.createElement("h6");
                let cartprice=document.createElement("p");
                let quantity=document.createElement("p");
                let addplus=document.createElement("button");
                let minus=document.createElement("button");
                let newline=document.createElement("hr");
                let costdivi=document.createElement("div");
                let buy=document.createElement("button");
                let totalcost=document.createElement("h6");
                let deletebtn=document.createElement("button");


                


                colcart.setAttribute("class","cartadd");
                cartimg.setAttribute("class","image-fur");
                cartimage.setAttribute("src","image/"+elm.image);
                cartcontent.setAttribute("class","cart-contents");
                
                colcart.append(cartimg,cartcontent);
                cartimg.appendChild(cartimage);
                cartcontent.append(cartdesign,carttype,cartprice,quantity,addplus,minus,deletebtn);
                cartcon.append(colcart,newline,costdivi);
                costdivi.append(buy,totalcost);
                // addplus.onclick=increase.bind(null,elm.qty);
                // minus.onclick=decrease.bind(null,elm.qty);
                // deletebtn.onclick=deleteItems.bind(null,elm.id);

                buy.style.backgroundColor="red";
                buy.style.color="black";
                buy.style.borderRadius="4px";
                addplus.style.border="none";
                minus.style.border="none";
                addplus.style.margin="2px 1px";
                minus.style.margin="2px 1px";
                totalcost.style.textAlign="right";
                totalcost.style.padding="0 4px";
                deletebtn.style.padding="0 2px";
                deletebtn.style.borderRadius="4px";




                cartdesign.innerText=elm.Design;arttype.innerText=elm.furnituretype;
                cartprice.innerText="Rs."+ elm.amount;
                quantity.innerText="quantity :" + elm.qty;
                buy.innerText="Buy Now";
                totalcost.innerText="Total Cost: " + "Rs.";
                addplus.innerText="+";
                minus.innerText="-";
                deletebtn.innerText="Delete";
             
                let qty=1;
                addplus.onclick=cartitem.bind(null,elm.id);
                minus.onclick=decrementcartitem.bind(null,elm.id);
                deletebtn.onclick=deletecartItems.bind(null,elm.id);
                        //   qty ++;
                        //   quantity.innerText ="quantity :" + qty;
                    
               
                // minus.addEventListener("click",function(){
    
               
                //        if (qty > 1){
                //             qty --;
                //             quantity.innerText ="quantity :" + qty;
                //        }
                // });
                
                
                function total(elm){
                    let totalprice=0;
                    totalprice+= elm.qty * elm.amount;
                     totalcost.innerText=totalprice;
                    console.log(totalprice);
                }
                 total(cartlist);
    });
}
        //   updateitems(cartlist);

            // buy.addEventListener("click",function(){
            
            // });
        


        
        

    // let qty=1;
    //         addplus.addEventListener("click",function(){
    //                   qty ++;
    //                   quantity.innerText ="quantity :" + qty;
    //              });
           
    //         minus.addEventListener("click",function(){

           
    //                if (qty > 1){
    //                     qty --;
    //                     quantity.innerText ="quantity :" + qty;
    //                }
    //         });

            
    //         function total(elm){
    //             let totalprice=0;
    //             totalprice+= elm.qty * elm.amount;
    //              totalcost.innerText=totalprice;
    //             console.log(totalprice);
    //         }
    //          total(cartlist);