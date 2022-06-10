const Contact = require("../models/contact");

exports.iletisimSayfasi = (req, res, next) => {
  res.render("site/iletisim");
};

exports.iletisimPostSayfasi = (req, res, next) => {
  /** iletisim sayfası butonuna basıldığında bunlar gelecek */
  const { ad, email, telefon, zaman, yorum } = req.body;
  // içinde yazanları kullanamazsın yani değiştirilemezdir
  let yorumModel = new Contact();
  yorumModel.ad = ad;
  yorumModel.email = email;
  yorumModel.telefon = telefon;
  yorumModel.zaman = zaman;
  yorumModel.yorum = yorum;

  yorumModel.save(function (err, result) {
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      console.log(result);
      res.redirect("/index")
    }
  });
};
