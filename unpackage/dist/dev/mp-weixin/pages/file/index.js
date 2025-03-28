"use strict";
const common_vendor = require("../../common/vendor.js");
const common_index = require("../../common/index.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const list = common_vendor.ref([]);
    common_vendor.onMounted(async () => {
      const res = await common_index.getFileList();
      list.value = res.list;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(list.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.date),
            b: common_vendor.f(item.articles, (obj, k1, i1) => {
              return {
                a: common_vendor.t(obj.title),
                b: common_vendor.t(obj.releaseTime),
                c: `/pages/article/index?id=${obj.id}`,
                d: obj.id
              };
            }),
            c: item.date
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/file/index.js.map
