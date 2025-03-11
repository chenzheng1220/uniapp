"use strict";
const common_vendor = require("../../common/vendor.js");
const common_index = require("../../common/index.js");
if (!Math) {
  common_vendor.unref(mpHtml)();
}
const mpHtml = () => "../../node-modules/mp-html/dist/uni-app/components/mp-html/mp-html.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const text = common_vendor.ref("");
    common_vendor.onMounted(async () => {
      const res = await common_index.getSettingsDetail();
      text.value = common_vendor.marked(res.data.about);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          content: text.value
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
