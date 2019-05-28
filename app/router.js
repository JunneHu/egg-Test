'use strict';
const HCommonUtils = require('han-egg-utils');
const ModuleUtils = HCommonUtils.loadDir('/app/route');
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    Object.keys(ModuleUtils).map(function(item, indx) { //动态注册路由route
        if (ModuleUtils[item].route) {
            ModuleUtils[item].route(app)
        }
    })
};
