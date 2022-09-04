const DUMMY_REDEEM_ITEMS = [
  {
    id: 301,
    name: "Flight to San Francisco",
    imgSrc:
      "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmxpZ2h0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    description: "A good flight for free! Destination : San Francisco",
    price: 3000,
  },
  {
    id: 302,
    name: "A tree in Sahara",
    imgSrc:
      "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyZWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
    description:
      "You can donate a tree with your points and we will plant it for you (with your name tag on).",
    price: 60,
  },
  {
    id: 303,
    name: "Water Bottle",
    imgSrc:
      "https://cdn.pixabay.com/photo/2016/11/19/11/34/bottle-1838772__480.jpg",
    description: "A good water bottle which is made of recycled material",
    price: 15,
  },
  {
    id: 304,
    name: "Bonsai Tree",
    imgSrc:
      "https://images.unsplash.com/photo-1536727510301-a2e7a31bb6cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJvbnNhaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
    description: " Beautiful bonsai tree for free!",
    price: 80,
  },
]

const getRedeemItems = (req, res, next) => {
  console.log("Getting redeem items")
  res.json({ redeemItems: DUMMY_REDEEM_ITEMS })
}

exports.getRedeemItems = getRedeemItems
