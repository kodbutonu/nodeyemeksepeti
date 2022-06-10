const User = require("../models/User");

exports.girisSayfasi = (req, res, next) => {
  /** Giriş ekranı burada gösteriliyor */
  res.render("site/giris");
};



exports.kayitSayfasi = (req, res, next) => {
  /** kayıt ekranı burada gösteriliyor */
  res.render("site/kayıt");
};

exports.kayitPostSayfasi = (req, res, next) => {
  /** kayıt ol butonuna bastığında veriler buraya gelecek bu kısım çalışacak */
  const { ad, soyad, email, parola, parolaTekrar } = req.body;

  if (parola == parolaTekrar) {
    yeniKullanici = new User();
    yeniKullanici.ad = ad;
    yeniKullanici.soyad = soyad;
    yeniKullanici.email = email;
    yeniKullanici.parola = parola;

    yeniKullanici.save(function(err,result){
        if (err){
            console.log(err);
            res.json(err);
        }
        else{
            console.log(result);
            res.send(`Kayıt başarılı =>Kullanıcı ad soyad: ${ad} ${soyad}`);
        }
    });
  } else {
    res.send("Parolalar eşleşmiyor");
  }
};
