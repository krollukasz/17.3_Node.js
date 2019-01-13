var os = require("os"); // zaimportowanie modułu "os"
var time = require("../modules/conversionTime"); // zaimportowanie modułu conversionTime z folderu "modules"

function getOSinfo () {
  var type =  os.type();
  if (type === "Darwin") {
    type = "OSX";
  } else if (type === "Windows_NT") {
    type = "Windows";
  }
  var release = os.release();
  var cpu = os.cpus()[0].model;
  var uptime = os.uptime();
  var userInfo = os.userInfo();
  console.log("System: ", type);
  console.log("Release: ", release);
  console.log("CPU Model: ", cpu);
  console.log("Uptime: ", time.print(uptime));
  console.log("User info: ", userInfo.username);
  console.log("Home dir: ", userInfo.homedir);
}

exports.print = getOSinfo;