"use strict";
const common_vendor = require("../../common/vendor.js");
const common_index = require("../../common/index.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const state = common_vendor.reactive({
      pageNumber: 1,
      pageSize: 50,
      selectType: ""
    });
    const list = common_vendor.ref([]);
    common_vendor.onMounted(async () => {
      const res = await common_index.getResourceList(state);
      list.value = res.list;
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/resource/index.js.map
