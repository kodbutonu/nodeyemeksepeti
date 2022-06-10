const container = document.getElementById("card");
const countElement = document.getElementById("productnumber");
let sepetArray = [];
let sepetArray2 = []
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("resim")) {
    const parentElement = e.target.parentElement.parentElement;
    const nextdata = parentElement.nextElementSibling;
    const prevdata = parentElement.previousElementSibling;
    const prevdataprev = prevdata.previousElementSibling;
   
    const object = new Object();
    object["productName"] = prevdataprev.innerHTML;
    object["productCount"] = 1;
    object["productPrice"] = nextdata.innerHTML;
    object["productİmage"] = prevdata.getAttribute("src");


    if(localStorage.user){
      Add2(object)
      console.log('eklendi')
      }
      else{
        Add(object)
      }
  }
});

function Add(object) {
  if (localStorage.sepet) {
    const sepetData = JSON.parse(localStorage.sepet);
    for (const x of sepetData) {
      sepetArray.push(x);
    }
    productCount(object);
  } else {
    const array = [object];
    localStorage.sepet = JSON.stringify(array);
    sepetCountControl();
  }
}

function Add2(object){
    const sepetData = JSON.parse(localStorage.user);
   if(sepetData.sepet.length > 0){
    for (const x of sepetData.sepet) {
      sepetArray2.push(x);
    }
    let validate = true
    for(const b of sepetArray2){
      if(b.productName == object.productName){
        b.productCount +=1
        validate = false
      }
    }
    if(validate == true){
      sepetArray2.push(object)
      sepetData.sepet = sepetArray2
      localStorage.user = JSON.stringify(sepetData)
      sepetCountControl2()
      updateCart(sepetData.sepet)
    }
    else{
      sepetData.sepet = sepetArray2
      localStorage.user = JSON.stringify(sepetData)
      sepetCountControl2()
      updateCart(sepetData.sepet)
    }
    sepetArray2 = []
   
  }

   else{
     sepetData.sepet = [object]
     localStorage.user = JSON.stringify(sepetData)
     sepetCountControl2()
     updateCart(sepetData.sepet)
   }
    
}

function productCount(object) {
  let validate = true;
  for (let i = 0; i < sepetArray.length; i++) {
    if (sepetArray[i].productName == object.productName) {
      validate = false;
      sepetArray[i].productCount += 1;
    }
  }

  if (validate == true) {
    sepetArray.push(object);
    localStorage.sepet = JSON.stringify(sepetArray);
    sepetCountControl();
  } else {
    localStorage.sepet = JSON.stringify(sepetArray);
    sepetCountControl();
  }

  sepetArray = [];
}

function sepetCountControl() {
  const array = JSON.parse(localStorage.sepet);
  let count = 0;
  for (const x of array) {
    count += x.productCount;
  }
  countElement.innerHTML = count;
}

function sepetCountControl2() {
  const array = JSON.parse(localStorage.user);
  let count = 0;
  for (const x of array.sepet) {
    count += x.productCount;
  }
  countElement.innerHTML = count;
}
function updateCart(sepet){
  const userHash = JSON.parse(localStorage.user)._id
  sepet.push(userHash)
  fetch("/update-cart",{
    method:"POST",
    body:JSON.stringify(sepet),
    redirect:"follow"
  }).then(response => {

  }).catch(err => alert("Sepet Güncellenemedi"))
}

