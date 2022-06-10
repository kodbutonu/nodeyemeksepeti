const path = require("path");
const express = require("express");
const { engine } = require("express-handlebars");
const mongoose = require("mongoose");
const app = express();
const crud = require("./controller");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", express.static("depo"));

const user = require("./routes/user");
const Contact = require("./routes/Contact");
const { Router } = require("express");

mongoose
  .connect("mongodb://127.0.0.1:27017/my_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongo baglandi"));

app.engine(
  "handlebars",
  engine({ extname: "handlebars", defaultLayout: "main.handlebars" })
);
app.set("view engine", "handlebars");

app.get("/index", (req, res) => {
  res.render("site/index");
});
app.get("/beslenme", (req, res) => {
  res.render("site/beslenme");
});
app.get("/atis", (req, res) => {
  res.render("site/atis");
});
app.get("/bilgi", (req, res) => {
  res.render("site/bilgi");
});

app.get("/hazir", (req, res) => {
  res.render("site/hazir");
});

app.get("/ödeme", (req, res) => {
  res.render("site/ödeme");
});
app.get("/sepet", (req, res) => {
  res.render("site/sepet");
});
app.get("/kayit", (req, res) => {
  res.render("site/kayit");
});

app.get("/giris", user.girisSayfasi);
app.get("/kayit", user.kayitSayfasi);

app.post("/giris", (req, res) => {
  console.log(req.body);
  crud.findUser(req.body)
    .then((response) => {
      if (response.length == 0) {
        res.send({message:"Kullanıcı Bulunamadı"});
      } else {
        response[0].soyad = "Giriş Yapıldı"
        res.send(response);
        
      }
    })
    .catch((err) => res.send("Giriş Yapılamadı"));
});
app.post("/kayit", user.kayitPostSayfasi);
app.post("/update-cart",(req,res)=>{
  req.on("data",(chunk) =>{
    chunk = JSON.parse(chunk)
    id = chunk[chunk.length - 1]
    chunk.pop()
    crud.updateCart(id,chunk)
    res.send("Başarılı")
    console.log("Sepet Güncellendi")
  })
})
app.listen(4500, () => {
  console.log("started");
});

app.get("/iletisim", Contact.iletisimSayfasi);
app.post("/iletisim", Contact.iletisimPostSayfasi);
