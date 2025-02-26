"use strict";
const common_vendor = require("../../common/vendor.js");
const common_index = require("../../common/index.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const obj = common_vendor.ref({});
    common_vendor.onMounted(async () => {
      const res = await common_index.getSettingsDetail();
      obj.value = res.data;
      common_vendor.index.__f__("log", "at pages/about/index.vue:17", obj);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(obj.value.about)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/about/index.js.map
