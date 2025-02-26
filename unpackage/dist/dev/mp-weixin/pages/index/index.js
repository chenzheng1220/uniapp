"use strict";
const common_vendor = require("../../common/vendor.js");
const common_index = require("../../common/index.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const state = common_vendor.reactive({
      pageNumber: 1,
      pageSize: 10,
      keyword: ""
    });
    const list = common_vendor.ref([]);
    common_vendor.onMounted(async () => {
      const res = await common_index.getArticleList(state);
      list.value = res.list;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(list.value, (item, k0, i0) => {
          return {
            a: item.articleCover,
            b: common_vendor.t(item.introduction),
            c: common_vendor.t(item.releaseTime),
            d: item.id
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
