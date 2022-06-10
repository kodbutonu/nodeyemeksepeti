const form = document.getElementById("giris");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loginFetch(e);
});

function loginFetch(e) {
  const children = e.target;
  const div = children.querySelectorAll("div");
  const array = Array.from(div);
  const array2 = [];

  for (const x of array) {
    for (const b of x.children) {
      array2.push(b);
    }
  }
  const info = ["email", "parola"];
  array2.splice(0, 1);
  array2.splice(1, 1);

  const object = new Object();
  for (let i = 0; i < info.length; i++) {
    object[info[i]] = array2[i].value;
  }
  fetch("/giris", {
    method: "POST",
    body: JSON.stringify(object),
    mode: "cors",
    headers: {
      "content-type": "application/json",
    },
  }).then(async (response) => {
    response = await response.json();
   if(!response.message){
    if(response[0].soyad === "Giriş Yapıldı"){
      localStorage.user = JSON.stringify(response[0])
      window.location.href='/index'     
      }
   }
   else{
     alert(response.message)
   }
  }).catch((err) => console.log(err));
}


