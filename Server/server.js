// todo add and initialize typescript to backend server
// todo implement the mvc pattern 
// todo set up the application after best practices
// todo seperate server codde and express middleware
// todo hostserver the front end with the server 

const express = require("express");
const uuid = require("uuid");

const app = express();

const PORT = process.env.PORT || 5000;

const productData = [
  {
    id: uuid.v4(),
    name: "Nike-Air Force",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/air-force-1-07-womens-shoes-GCkPzr.png",
    description:
      "The radiance lives on in the Nike Air Force 1 '07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colours and the perfect amount of flash to make you shine",

    price: 300,
  },
  {
    id: uuid.v4(),
    name: "Adidas Yeezy",
    image:
      "https://cdn.shopify.com/s/files/1/0255/9429/8467/products/adidas-yeezy-500-taupe-light-GX3605_1_kxawvg_1800x1800.jpg?v=1623052526",
    description:
      "Adidas Yeezy is a fashion collaboration between German sportswear company Adidas and American designer, rapper, entrepreneur and personality Kanye West. The collaboration has become notable for its high-end limited edition colorways and general releases offered by the Yeezy Boost sneakers lineup. The collaboration has also produced shirts, jackets, track pants, socks, slides, women's shoes and slippers. The first shoe model  was released in February 2015",

    price: 540,
  },
  {
    id: uuid.v4(),
    name: "YEEZY Foam Runner",
    image:
      "https://www.ufs-federation.com/images/h/adidas%20yeezy%20foam%20runner-633kra.jpg",
    description:
      "It was a wild year for the prototype shoe. Seemingly every brand worth its weight in virtual raffle tickets dropped a version of the silhouette, but none stirred up more interest online—and generated more sales IRL—than the Foam Runner, a blob-like perforated slip-on crafted from a blend of specially-harvested algae and cushy EVA. Kanye's strangehold over the music industry might be loosening, but the Foam Runner's, ahem, runwaway success is a testament to his influence in the footwear space, and proof that wherever he goes the sneaker-loving masses—and the brands that cater to them—are likely to follow.",

    price: 1000,
  },
  {
    id: uuid.v4(),
    name: "Nike Air Jordan",
    image:
      "https://myalpins.com/1293-thickbox_default/men-nike-air-jordan-1-mid-light-smoke-grey.jpg",
    description:
      "Air Jordan is an American brand of basketball shoes, athletic, casual, and style clothing produced by Nike. Founded in Chicago, Air Jordan was created for Hall of Fame former basketball player Michael Jordan during his time with the Chicago Bulls.[2][3] The original Air Jordan sneakers were produced exclusively for Michael Jordan in late 1984, and released to the public on April 1, 1985.[4][5] The shoes were designed for Nike by Peter Moore, Tinker Hatfield, and Bruce Kilgore",

    price: 600,
  },
  {
    id: uuid.v4(),
    name: "Jordan Retro 1",
    image:
      "https://cdn.shopify.com/s/files/1/0255/9429/8467/products/air-jordan-3-retro-a-ma-maniere-wmns-raised-by-women-dh3434-110_1_nygxvk_1800x1800.jpg?v=1627999359",
    description:
      "The second James Whitner-produced joint included here was a shoe-in (sorry) to make this list the moment word of its release got out. Collaborating on a Jordan 1 would be a milestone for any brand, but for Whitner—the retail impresario behind A Ma Maniére, A.P.B., and a growing number of Social Status boutiques—it was business as usual. Not content to drop one of the hottest AJ3s in recent memory, the Whitaker Group founder turned his attention to the crown jewel of the Jordan empire, outfitting the 1 with cracked leather uppers, quilted linings, and splashes of rich burgundy. It was already a breakout year for the flourishing retail group, whose influence grows in leaps and bounds with its every forum-breaking drop, but this sneaker clinched it.",

    price: 900,
  },
  {
    id: uuid.v4(),
    name: "Salomon Sneakers",
    image: "https://classic.cdn.media.amplience.net/i/hibbett/4P616_1000_right",
    description:
      "With the debut of the XT-6—a trail-ready shoe with sleek underpinnings and a sturdy silhouette—Salomon struck sneaker gold. Now its next hit is here. Earlier this month the French brand re-released the ACS Pro Advance, a style first introduced in the early aughts that's poised to dominate timelines until Salomon chefs up another smash. It's got loads of the kind of outdoors-y specs you'd expect from a brand with Salomon's pedigree, but even sans the technical details it's a stunner. (The icy silver colorway helps.) Its hulking, angular shape brings to mind Nike's criminally slept-on Vomero 5—but even boxier—while sleek metal eyelets and criss-crossing speed laces don't let you forget its performance bona fides.",

    price: 660,
  },
  {
    id: uuid.v4(),
    name: "NB 990v4",
    image:
      "https://nb.scene7.com/is/image/NB/m990jj4_nb_02_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=1600&hei=1600",
    description:
      "When it comes to collaborations, Justin Saunders, the Montreal-based force behind JJJound, isn't concerned with dramatic overhauls. His most successful team-ups involve tweaking widely-beloved silhouettes ever so slightly—a touch of suede here, a hint of mesh there—and then letting his imprimatur do the rest. The 990s he released with New Balance earlier this year are Saunders at his pared-down best: sleek and understated, they're exactly the kind of sneaker you'd expect to see on the creative director types that flock to his wares",

    price: 1400,
  },
  {
    id: uuid.v4(),
    name: "Nike One sneaker",
    image:
      "https://i5.walmartimages.com/asr/3033677c-584a-4fb7-b549-32e1969d0a7a_1.475695c6981676cc18e5886644b80d49.jpeg",
    description:
      "Whenever Nike drops a limited-edition pair of Foams things are bound to get a little crazy. The polarizing silhouette inspires just as much fervor among its supporters as it does ridicule among its detractors. But the collaborative Foamposites Comme des Garçons first debuted during its fall show are a clear smash, swapping out the silhouette's instantly recognizable ridged uppers in favor of curves inspired by the geometry of Japanese zen gardens. So let this serve as a PSA to all newly-converted Foam zealouts: now's the time to claim lifelong fan status before it's too late",

    price: 700,
  },
];

const cartItems = [];
// const singleProduct = [];

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*'])
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.append('Access-Control-Allow-Headers', 'Content-Type')
  next()
});


app.use(express.json());

// to fetch the list of products

app.get("/productData", (req, res) => {
  res.status(200).send(productData);
});

//to fetch each individual products
app.get("/productData/:id", (req, res) => {
  const singleItem = productData.find((item) => item.id === req.params.id);
  res.status(200).json({
    message: singleItem,
  });
});

// to fetch the items in the cart

app.get("/cartItems", (req, res) => {
  res.status(200).send(cartItems);
});

app.use(express.json());

// to delete cart items from the database

app.delete("/cartItems/:id", (req, res) => {
  const found = cartItems.findIndex((item) => item.id === req.params.id);

  if (found < 0) {
    return res.status(400).json({
      message: "item not found",
    });
  }

  cartItems.splice(found, 1);

  res.status(200).json({
    msg: `you have deleted the item with id: ${req.params.id}`,
    items: cartItems.filter((items) => items.id !== req.params.id),
  });
});

// to add cart items to the database

app.post("/cartItems", (req, res) => {
  cartItems.push(req.body);
  res.status(201).json({
    youAdded: req.body,
  });
});



// to listen at port 5000

app.listen(PORT, () => {
  console.log("server is listening on port 5000...");
});
