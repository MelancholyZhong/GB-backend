const Deposit = require("../models/deposit")
const Order = require("../models/order")
const Account = require("../models/account")
const account = require("../models/account")

const DUMMY_DEPOSITS = [
  {
    id: "uuid001",
    title: "Recycle",
    points: 1,
    actionDate: "Sep 9, 2022",
    description: ".Recycling help us reuse the resources and is a good habit",
  },
  {
    id: "uuid002",
    title: "Plant a tree",
    points: 5,
    actionDate: "Apr 12, 2022",
    description: "Plant a tree to help fight desertation",
  },
]

const DUMMY_ORDERS = [
  {
    id: "uuid300",
    title: "Flight to Boston",
    description: "A good flight for free! Destination : Boston",
    purchaseDate: "Aug 12, 2022",
    price: 60,
  },
  {
    id: "uuid301",
    title: "Flignt to San Francisco",
    description: "A good flight for free! Destination : San Francisco",
    purchaseDate: "Jul 28, 2022",
    price: 30,
  },
]

const DUMMY_PROFILE = {
  accountNumber: 800999,
  userName: "MelancholyZhong",
  balance: 380.5,
}

const updateBalance = async (changeAmount) => {
  const accountNumber = 888999
  let account
  try {
    account = await Account.findOne({ accountNumber: accountNumber })
  } catch (err) {
    return console.log(err)
  }

  if (account) {
    account.balance += changeAmount
    try {
      account.save()
    } catch (err) {
      return console.log(err)
    }
  }
}

const viewDeposits = async (req, res, next) => {
  let deposits
  try {
    deposits = await Deposit.find()
  } catch (err) {
    return console.log(err)
  }
  if (!deposits || deposits.length === 0) {
    res.json({ deposits: DUMMY_DEPOSITS })
  } else {
    res.json({
      deposits: deposits
        .reverse()
        .map((deposit) => deposit.toObject({ getters: true })),
    })
  }
}

const viewOrders = async (req, res, next) => {
  let orders
  try {
    orders = await Order.find()
  } catch (err) {
    return console.log(err)
  }
  if (!orders || orders.length === 0) {
    res.json({ orders: DUMMY_ORDERS })
  } else {
    res.json({
      orders: orders
        .reverse()
        .map((order) => order.toObject({ getters: true })),
    })
  }
}

const viewBalance = async (req, res, next) => {
  const accountNumber = 888999
  let account
  try {
    account = await Account.findOne({ accountNumber: accountNumber })
  } catch (err) {
    return console.log(err)
  }

  if (account) {
    res.json({ balance: account.balance })
  } else {
    res.json({ balance: DUMMY_PROFILE.balance })
  }
}

const makeDeposit = async (req, res, next) => {
  const { id, title, points, actionDate, description } = req.body

  const createdDeposit = new Deposit({
    id,
    title,
    points,
    actionDate,
    description,
  })

  try {
    await createdDeposit.save()
  } catch (err) {
    return console.log(err)
  }
  await updateBalance(createdDeposit.points)

  res.status(201).json({ deposit: createdDeposit })
}

const createOrder = async (req, res, next) => {
  const { id, title, description, purchaseDate, price } = req.body
  const createdOrder = new Order({
    id,
    title,
    description,
    purchaseDate,
    price,
  })

  try {
    createdOrder.save()
  } catch (err) {
    return console.log(err)
  }

  await updateBalance(createdOrder.price * -1)

  res.status(201).json({ order: createdOrder })
}

const createAccount = async (req, res, next) => {
  const { accountNumber, userName, balance } = req.body
  const createdAccount = new Account({
    accountNumber,
    userName,
    balance,
  })

  try {
    createdAccount.save()
  } catch (err) {
    return console.log(err)
  }

  res.status(201).json({ account: createdAccount })
}

exports.viewDeposits = viewDeposits
exports.viewOrders = viewOrders
exports.viewBalance = viewBalance
exports.makeDeposit = makeDeposit
exports.createOrder = createOrder
exports.createAccount = createAccount
