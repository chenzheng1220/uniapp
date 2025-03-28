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
    const title = common_vendor.ref("");
    const text = common_vendor.ref("");
    common_vendor.onLoad(async (options) => {
      const id = options.id || "";
      const res = await common_index.getArticle(id);
      title.value = res.data.title;
      text.value = common_vendor.marked(res.data.content);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title.value),
        b: common_vendor.p({
          content: text.value
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/article/index.js.map
