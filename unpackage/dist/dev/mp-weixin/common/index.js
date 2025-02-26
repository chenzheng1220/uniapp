"use strict";
const common_request = require("./request.js");
function getArticleList(data) {
  return common_request.http({
    url: "/getArticleList",
    method: "post",
    data
  });
}
function getFileList() {
  return common_request.http({
    url: "/getFileList"
  });
}
function getSettingsDetail(data) {
  return common_request.http({
    url: "/getSettingsDetail"
  });
}
exports.getArticleList = getArticleList;
exports.getFileList = getFileList;
exports.getSettingsDetail = getSettingsDetail;
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/index.js.map
