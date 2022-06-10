const { default: mongoose } = require("mongoose");
const Product = require("../models/product");

exports.ürünSepeteEkle = (req, res, next) => {
  Product.find(function (err, docs) {
    var productChunks = [];
    var chunkSize = 50;
    for (var i = 0; i < docs.length; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('site/sepet',{title:'Shopping Cart',product:product});
  });
};

var product = [
  new Product({
    imagePath: "./images/indir.jpg",
    title: "Sporcu Paketi",
    fiyat: "200 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/sya-soguk-home.jpg",
    title: "Kişisel Paketi",
    fiyat: "150 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/diyet_yemek_servisi_vegan_yemek_paketi.jpg",
    title: "Vegan Paketi",
    fiyat: "130 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/indir (1).jpg",
    title: "Kilo Verme",
    fiyat: "180 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/indir (2).jpg",
    title: "Kilo Alma Paketi",
    fiyat: "210 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath:
      "./images/kan-sekeri-kontrolu-icin-3-ana-3-ara-ogun-sart-10226781_2954_o.jpg",
    title: "3 Öğün Paketi",
    fiyat: "150 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/indir (3).jpg",
    title: "Hamile Paketi",
    fiyat: "120 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/indir (4).jpg",
    title: "Şeker Hastası Paketi",
    fiyat: "120 Tl",
    imageSepet: "/images/shopping.png",
  }),

  new Product({
    imagePath: "./images/o (1).jpg",
    title: "Yalın Mutfağı Kökenleri Hindistan Cevizi Nohut Köriliv",
    fiyat: "30 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/indir (2).jpg",
    title: "Lezzetli Isırık Hint Bombay Patates",
    fiyat: "20 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/indir (3).jpg",
    title: "Barilla Domates ve Fesleğenli Penne",
    fiyat: "30 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/indir (5).jpg",
    title: "CAULIPOWER Margherita Karnabahar-Kabuklu Pizza",
    fiyat: "50 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/indir (4).jpg",
    title: "Uptons Naturals Vegan Pad",
    fiyat: "40 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/indir (6).jpg",
    title: "Adobo Tavuk Güç Kase",
    fiyat: "35 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/indir (7).jpg",
    title: "Amynin Organik Kahverengi Pirinç ve Sebze Kasesi",
    fiyat: "50 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/indir (8).jpg",
    title: "Café Spice Chicken Tikka Masala Safranlı Pilav",
    fiyat: "40 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/indir (10).jpg",
    title: "Yavaş Pişmiş İtalyan Sosunda Mama Mancininin Hindi Köfte",
    fiyat: "30 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/indir (9).jpg",
    title: "Uptons Naturals Cheesy Bacon Mac",
    fiyat: "40 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/indir (11).jpg",
    title: "Mannin Monterey Risotto Beslenme Kasesi",
    fiyat: "50 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/indir (12).jpg",
    title: "Yalın Mutfak Pazarı Kavrulmuş Sarımsak Beyaz Fasulye Alfredo",
    fiyat: "50 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/indir (13).jpg",
    title: "Etli Vejeteryan Hintli Körili Piliç Dondurulmuş Antre",
    fiyat: "50 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/indir (14).jpg",
    title: "Yalın Mutfak Pazarı Kavrulmuş Sarımsak Beyaz Fasulye Alfredo",
    fiyat: "60 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/indir (15).jpg",
    title: "Etli Vejeteryan Hintli Körili Piliç Dondurulmuş Antre",
    fiyat: "35 Tl",
    imageSepet: "/images/shopping.png",
  }),

  new Product({
    imagePath: "./images/a.jpg",
    title: "Glutensiz Ekmek",
    fiyat: "5 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/b.jpg",
    title: "Glutensiz Cips",
    fiyat: "5 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/n (3).jpg",
    title: "Meyve Barı",
    fiyat: "4 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/c.jpg",
    title: "Glutensiz Kurabiye",
    fiyat: "5 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/d.jpg",
    title: "Glutensiz Kraker",
    fiyat: "4 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/e.jpg",
    title: "Glutensiz Crisspini",
    fiyat: "5 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/f.jpg",
    title: "Glutensiz Bisküvi",
    fiyat: "5 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/h.jpg",
    title: "Bar",
    fiyat: "5 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/g.jpg",
    title: "Antep Fıstıklı Bar",
    fiyat: "5 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/i.jpg",
    title: "Karışık Cerez",
    fiyat: "6 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/l.jpg",
    title: "Lokma",
    fiyat: "5 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/m.jpg",
    title: "Meyvee Barı",
    fiyat: "150 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/n (1).jpg",
    title: "Ceviz Yağı",
    fiyat: "20 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/ö.jpg",
    title: "Kakao Parcacıkları",
    fiyat: "25 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/ş.jpg",
    title: "Nesfit Barı",
    fiyat: "5 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/ş.jpg",
    title: "Çıtır Elma",
    fiyat: "10 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/x.jpg",
    title: "Glutensiz Bisküvi",
    fiyat: "8 Tl",
    imageSepet: "/images/shopping.png",
  }),
  new Product({
    imagePath: "./images/z.jpg",
    title: "Çıtır meyve",
    fiyat: "5 Tl",
    imageSepet: "/images/shopping.png",
  }),
];

var done = 0;
for (var i = 0; i < product.length; i++) {
  product[i].save(function (err, result) {
    done++;
    if (done == product.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
