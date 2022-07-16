import axios from "axios"

const isloggedin = () => {
  if (localStorage.getItem("user") == null) {
    return null;
  } else {
    return localStorage.getItem("user");
  }
}

const getuserrole = () => {
  if (localStorage.getItem("user") == null) {
    return null;
  } else {
    var CryptoJS = require("crypto-js");
    var userBytes = CryptoJS.AES.decrypt(localStorage.getItem('user'), '12345678');
    var userDec = JSON.parse(userBytes.toString(CryptoJS.enc.Utf8));
    return userDec.roles
  }
}

const setloggedinuser = (user) => {
  var CryptoJS = require("crypto-js");
  var userEnc = CryptoJS.AES.encrypt(JSON.stringify(user), '12345678').toString();
  localStorage.setItem("user", userEnc)
}

const getloggedinuserdata = () => {
  try {
    var CryptoJS = require("crypto-js");
    var userBytes = CryptoJS.AES.decrypt(localStorage.getItem('user'), '12345678');
    var userDec = JSON.parse(userBytes.toString(CryptoJS.enc.Utf8));
    //console.log(JSON.stringify(userDec));
    //var user = JSON.parse(userDec);
    //console.log(userDec)
    //return user
    return userDec
  } catch (err) {

  }
}

const loggedout = () => {
  localStorage.removeItem('user')
}

export { isloggedin, getuserrole, setloggedinuser, getloggedinuserdata, loggedout };