"use strict";
const common_vendor = require("./vendor.js");
const common_operate = require("./operate.js");
const http = (options) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: common_operate.operate.api() + options.url,
      //接口地址：前缀+方法中传入的地址
      method: options.method || "GET",
      //请求方法：传入的方法或者默认是“GET”
      data: options.data || {},
      //传递参数：传入的参数或者默认传递空集合
      header: {
        "Authorization": "token"
        //自定义请求头信息
      },
      success: (res) => {
        if (res.data.code !== 200) {
          common_vendor.index.showToast({
            title: res.data.msg,
            icon: "none"
          });
        }
        resolve(res.data);
      },
      // 这里的接口请求，如果出现问题就输出接口请求失败
      fail: (err) => {
        common_vendor.index.showToast({
          title: "" + err.msg,
          icon: "none"
        });
        reject(err);
      }
    });
  });
};
exports.http = http;
