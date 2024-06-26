const User = require("../../models/User")

const user = async () => {
  const body = {
    firstName: "Anderson",
    lastName: "Javier",
    email: "javieracibe@gmail.com",
    password: "1234",
    phone: "5620860800"
  }

  await User.create(body)
}

module.exports = user