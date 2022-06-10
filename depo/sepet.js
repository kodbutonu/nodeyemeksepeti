( function () {
  if (localStorage.user) {
    const countElement = document.getElementById("productnumber");
    let count = 0;
    const array = JSON.parse(localStorage.user);
    for (const x of array.sepet) {
      count += x.productCount;
    }
    countElement.innerHTML = count;
    sepetEkle(array.sepet);
    sepetSil();
  }
  else if(localStorage.sepet){
    const countElement = document.getElementById("productnumber");
    let count = 0;
    const array = JSON.parse(localStorage.sepet);
    for (const x of array) {
      count += x.productCount;
    }
    countElement.innerHTML = count;
    sepetEkle(array);
    sepetSil();
  }

  
})();

function sepetEkle(array) {
  const totalSpan = document.getElementById("fiyat");
  let total = 0;
  const ul = document.getElementById("sepet");
  for (const x of array) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.classList.add("imaage");
    const img_2 = document.createElement("img");
    img_2.setAttribute("src", "./images/trash.png");
    img.setAttribute("src", x.productİmage);
    img.classList.add("img");
    img_2.classList.add("trash");

    const h1 = document.createElement("h1");
    const h1_2 = document.createElement("h1");
    const h2 = document.createElement("h2");

    h1.classList.add("ürün-adi");
    h1_2.classList.add("ürün-adeti");
    h2.classList.add("ürün-fiyati");
    h1.innerHTML = x.productName;
    h1_2.innerHTML = x.productCount;
    let price = x.productPrice;
    price = price.slice(0, price.indexOf(" "));
    price = Number(price) * x.productCount;
    total += price;
    h2.innerHTML = price;
    li.classList.add("sepet");
    li.append(img, h1, h1_2, h2, img_2);
    ul.append(li);
  }
  totalSpan.innerHTML = total;
}

 function sepetSil() {
  const container = document.getElementById("sepet");
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("trash")) {
      let count = e.target.parentElement.querySelector(".ürün-adeti");
      count = Number(count.innerHTML);
      count--;
      const object = {};
      const prev = e.target.previousElementSibling;
      const prev2 = prev.previousElementSibling;
      const prev3 = prev2.previousElementSibling;
      const prev4 = prev3.previousElementSibling;
      const prev5 = prev4.previousElementSibling;
      object.productImage = prev4.getAttribute("src");
      object.productName = prev3.innerHTML;
      object.productPrice = prev.innerHTML;
      object.productCount = count;

      
     if(localStorage.user){
      const sepet = JSON.parse(localStorage.user)
      for(const x of sepet.sepet){
        if(x.productName == object.productName){
          if(object.productCount == 0){
            sepet.sepet.splice(sepet.sepet.indexOf(x),1)
            }
            else{
            x.productCount = object.productCount
            } 
          }
        } 
        localStorage.user = JSON.stringify(sepet)
         updateCart(sepet.sepet)
        window.location.reload()
     }
     else if (localStorage.sepet){
      const sepet = JSON.parse(localStorage.sepet)
      for(const x of sepet){
        if(x.productName == object.productName){
          if(object.productCount == 0){
            sepet.splice(sepet.indexOf(x),1)
            }
            else{
            x.productCount = object.productCount
            } 
          }
        } 
        localStorage.sepet = JSON.stringify(sepet)
        window.location.reload()
     }
      
    }
  });
}
async function updateCart(sepet){
  const userHash = JSON.parse(localStorage.user)._id
  sepet.push(userHash)
  await fetch("/update-cart",{
    method:"POST",
    body:JSON.stringify(sepet),
    redirect:"follow"
  }).then(response => {

  }).catch(err => alert("Sepet Güncellenemedi"))
}
