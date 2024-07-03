const User = require("../../models/User")

const user = async () => {
  const body = {
    firstName: "Anderson",
    lastName: "soto",
    email: "javier@email.com",
    password: "7124",
    phone: "0000"
  }

  await User.create(body)
}

module.exports = user