const url="https://fakestoreapi.com/products";
const container=document.getElementById("menuitem");
const colorsArray=["red","blue","green","black","white"];
const sizesArray=["S","M","L","XL"];
let mensclothing=[],womensclothing=[],jewellery=[],electronics=[];
async function getProducts(){
    const response = await fetch(url);
      const data = await response.json();
     
       const productsArray = data;
       console.log(productsArray);
       let updatedProductsArray= productsArray.map(product=>{
        // console.log(product.category);
        if(product.category.includes("men")||product.category.includes("women")){
            product["color"]=randomColor();
            product.size=randomSize();
        }
        else if(product.category.includes("jewelery")){
            product["color"]=["gold","silver"];
        }
        else {
            product["color"]=["black","grey"];
        }
        
        return product;
            
        });
        //console.log(updatedProductsArray);
       updatedProductsArray.forEach(element => {
        //console.log(element.category);
        if(element.category.includes("women")){
            womensclothing.push(element);
        }
        else  if(element.category.includes("men")){
            mensclothing.push(element);
        }
        else  if(element.category.includes("jewelery")){
            jewellery.push(element);
        
    
        }
        else if(element.category.includes("electronics")){
            electronics.push(element);
        }
        });
        //console.log(mensclothing);
        // console.log(womensclothing);
        console.log(jewellery);
         console.log(electronics);
    defaultView();
       
}

function randomColor(){
	return colorsArray[Math.floor(Math.random() * colorsArray.length)];
}

function randomSize(){
	return sizesArray[Math.floor(Math.random() * sizesArray.length)];
}

let mentitle=document.getElementById("desc-men");
let m=document.getElementById("men's");
let womentitle=document.getElementById("desc-women");
let w=document.getElementById("women's");
let jewtitle=document.getElementById("desc-jewe");
let j=document.getElementById("jewellery");
let eletitle=document.getElementById("desc-ele");
let el=document.getElementById("electronics");


document.getElementById("categories-all").addEventListener("click",categoryWise);
document.getElementById("categories-men").addEventListener("click",categoryWise);
document.getElementById("categories-women").addEventListener("click",categoryWise);
document.getElementById("categories-elect").addEventListener("click",categoryWise);
document.getElementById("categories-jewe").addEventListener("click",categoryWise);

function categoryWise(e){
    let ids=this.id;
    styles();
    document.getElementById(ids).style.backgroundColor="black";
    document.getElementById(ids).style.color="white";
    let arr;
    let section;
    if(ids=="categories-men"){
        arr=mensclothing;
        section=m;
        mentitle.style.display="flex";
        m.style.display="flex";
        womentitle.style.display="none";
        w.style.display="none";
        jewtitle.style.display="none";
        j.style.display="none";
        eletitle.style.display="none";
        el.style.display="none";

    }
    else if(ids=="categories-women"){
        arr=womensclothing;
        section=w;
        mentitle.style.display="none";
        m.style.display="none";
        womentitle.style.display="flex"
        w.style.display="flex";
        jewtitle.style.display="none";
        j.style.display="none";
        eletitle.style.display="none";
        el.style.display="none";
    }
    else if(ids=="categories-jewe"){
        arr=jewellery;
        section=j
        mentitle.style.display="none";
        m.style.display="none";
        womentitle.style.display="none"
        w.style.display="none";
        jewtitle.style.display="flex";
        j.style.display="flex";
        eletitle.style.display="none";
        el.style.display="none";
    }
    else if(ids=="categories-elect"){
        arr=electronics;
        section=el;
        mentitle.style.display="none";
        m.style.display="none";
        womentitle.style.display="none"
        w.style.display="none";
        jewtitle.style.display="none";
        j.style.display="none";
        eletitle.style.display="flex";
        el.style.display="flex";
    }
    else{
        mentitle.style.display="flex";
        m.style.display="flex";
        womentitle.style.display="flex"
        w.style.display="flex";
        jewtitle.style.display="flex";
        j.style.display="flex";
        eletitle.style.display="flex";
        el.style.display="flex";
    }
    let categoryProducts="";
    for(let i=0;i<arr.length;i++){
        categoryProducts+=createCards(arr[i]);
    }

    section.innerHTML=categoryProducts;

}

function defaultView(){
    document.getElementById("categories-all").style.backgroundColor="black";
    document.getElementById("categories-all").style.color="white";
    let men=document.getElementById("men's");
    let categorymen="";
    for(let i=0;i<mensclothing.length;i++){
        
        categorymen+=createCards(mensclothing[i]);
    }
    men.innerHTML=categorymen;

    let women=document.getElementById("women's");
    let categorywomen="";
    for(let i=0;i<womensclothing.length;i++){
        
        categorywomen+=createCards(womensclothing[i]);
    }
    women.innerHTML=categorywomen;

    let jewel=document.getElementById("jewellery");
    let categoryjewellery="";
    for(let i=0;i<jewellery.length;i++){
        
        categoryjewellery+=createCards(jewellery[i]);
    }
    jewel.innerHTML=categoryjewellery;

    let elect=document.getElementById("electronics");
    let categoryelectronics="";
    for(let i=0;i<electronics.length;i++){
        
        categoryelectronics+=createCards(electronics[i]);
    }
    elect.innerHTML=categoryelectronics;
}


function createCards(p){
    let img=p.image;
    let pr=p.price;
    let sz=p.size;
    if(sz==undefined)sz="";
    let clr=p.color;
    let rt=Math.floor(p.rating.rate);
    let stars=``;
    for(i=0;i<rt;i++){stars+=`<div class="eachstar"><img src="./Star 3.png"></div>`;}
    let card=`
    <div class="card">
        <div class="details">
            <div class="img">
                <img src="${img}">
            </div>
            <div class="price-size">
                <div class="price">$${pr}</div>
                <div class="size">${sz}</div>
            </div>
            <div class="colors-section">
                <div class="color">Colors:</div>
                <div class="colors-num">
                ${clr}
                </div>
            </div>
            <div class="rating">
                    <div class="rating-line">Rating:</div>
                    <div class="stars">`+
                    stars
                    +`
                        
                    </div>

            </div>
        </div>
        <div class="add-to">
            <button>Add To Cart</button>
        </div>
    
    </div>
    `;
    return card;
    
}

function styles(){
    document.getElementById("categories-all").style.color="black";
    document.getElementById("categories-men").style.color="black";
    document.getElementById("categories-women").style.color="black";
    document.getElementById("categories-elect").style.color="black";
    document.getElementById("categories-jewe").style.color="black";
    document.getElementById("categories-all").style.backgroundColor="white";
    document.getElementById("categories-men").style.backgroundColor="white";
    document.getElementById("categories-women").style.backgroundColor="white";
    document.getElementById("categories-elect").style.backgroundColor="white";
    document.getElementById("categories-jewe").style.backgroundColor="white";
}






getProducts();

//  console.log(mensclothing);
// console.log(womensclothing);
// console.log(jewellery);
// console.log(electronics);