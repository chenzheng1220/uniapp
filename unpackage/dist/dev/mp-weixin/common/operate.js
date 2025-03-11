"use strict";
const common_vendor = require("./vendor.js");
const operate = {
  //接口
  api: function() {
    let version = common_vendor.wx$1.getAccountInfoSync().miniProgram.envVersion;
    switch (version) {
      case "develop":
        return "http://lejibiji.cn:8081";
      case "trial":
        return "http://xxx.xxx.xxx.xxx:xxx";
      case "release":
        return "http://xxx.xxx.xxx.xxx:xxx";
      default:
        return "http://lejibiji.cn:8081";
    }
  }
};
exports.operate = operate;
