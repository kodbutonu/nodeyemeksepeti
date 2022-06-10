(function(){
    if(localStorage.user){
    const user = JSON.parse(localStorage.user)
    document.getElementById("ad").innerHTML = user.ad
    }
    })()