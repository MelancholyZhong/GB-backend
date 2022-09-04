const DUMMY_EXPLORE_ITEMS = [
  {
    id: 001,
    title: "Ride a bike",
    points: 3,
    actionDate: "",
    description: "Ride a bike instead of driving.",
  },
  {
    id: 002,
    title: "Conserve water",
    points: 2.5,
    actionDate: "",
    description: "Use less water.",
  },
  {
    id: 003,
    title: "Turn off the light",
    points: 0.5,
    actionDate: "",
    description: "Turn off the light when it is not needed",
  },
  {
    id: 004,
    title: "Plant a tree",
    points: 5,
    actionDate: "",
    description: "Plant a tree to help fight desertation",
  },
  {
    id: 005,
    title: "Recycle",
    points: 1,
    actionDate: "",
    description: "Recycling help us reuse the resources and is a good habit",
  },
]

const getExploreItems = (req, res, next) => {
  console.log("Getting explore items")
  res.json({ exploreItems: DUMMY_EXPLORE_ITEMS })
}

exports.getExploreItems = getExploreItems
