const card=document.getElementsByClassName("card");
const btnAdd=document.getElementsByClassName("buton")
const btnCart=document.querySelector(".btn-cart")
const cartlist=document.querySelector(".sepetlist")

let cartButton = document.getElementById("Ali");
cartButton.onclick = function(){
  window.location.assign('./sepet');
};
class Shopping {
    constructor(image,title,price){

        this.image=image;
        this.title=title;
        this.price=price;
    }
}




for(let i=0;i<card.lenght;i++){

    btnAdd[i].addEventListener("click",function(e)
    {

        console

    })
}