(function () {
  if(localStorage.user) {
    let total = 0
    const sepet = JSON.parse(localStorage.user)
    for(const x of sepet.sepet){
      total += x.productCount
    }
    const productCountSpan = document.getElementById("productnumber")
    productCountSpan.innerHTML = total
  }
  else if(localStorage.sepet){
    let total = 0
    const sepet = JSON.parse(localStorage.sepet)
    for(const x of sepet){
      total += x.productCount
    }
    const productCountSpan = document.getElementById("productnumber")
    productCountSpan.innerHTML = total
  }
})();
