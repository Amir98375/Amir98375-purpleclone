// function handleSort(element,selected) {
//     console.log(selected)
//     if (selected == "high") {
//         element.sort((a,b)=>b.price - a.price);
//         appenddata(parent,element)
//         // console.log(element)
//     }
//     if (selected == "low") {
//       element.sort((a,b)=>a.price - b.price);
//       appenddata(parent,element)
//     //   console.log(element)
//     }

// }




function appenddata(parent,data){
 console.log("data",data)
   
    
    let cartArr=JSON.parse(localStorage.getItem('cartitems'))||[]
    data.forEach(function(element) { 

        
        
        console.log("lol")
        let div = document.createElement('div')
       
        parent.append(div)
        let img =  document.createElement('img')
        img.setAttribute('id','imgid')
        img.src=element.image_url
        div.append(img)

        
        let para2 = document.createElement('p')
        para2.innerText="title:"+element.title
        div.append(para2)

        let para = document.createElement('p')
        para.innerText="price:"+element.price
        div.append(para)

        let para1 = document.createElement('p')
        para1.innerText="discount price:"+element.off_price
        div.append(para1)
        
        let but =document.createElement('button')
        but.setAttribute('id','imging')
        but.textContent='add to cart'

        but.addEventListener('click',function(){
            addtocart(element)
        })
        div.append(but)

        function addtocart(element){
           // console.log(element)
            cartArr.push(element)
            localStorage.setItem('cartitems',JSON.stringify(cartArr))
        }


 

    
    });
}

 export default appenddata;


