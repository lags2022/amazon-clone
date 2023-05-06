const bcrypt = require("bcrypt");

function base64decode(data) {
    while (data.length % 4 !== 0) {
      data += "=";
    }
    data = data.replace(/-/g, "+").replace(/_/g, "/");
    return Buffer.from(data, "base64").toString("utf-8");
  }

export default async function deletaCallback(req, res) {
  if (res.method === "DELETE") {

  }
}
