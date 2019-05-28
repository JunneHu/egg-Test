'use strict';

const Controller = require('egg').Controller;

class OrderController extends Controller {
   // get 获取所有数据
   async index() {
    const ctx = this.ctx;
    const { pageIndex, pageSize } = ctx.query;
    const res = await this.service.order.find({ pageIndex, pageSize });
    this.ctx.body = {
        code: 0,
        data: res,
        message: '成功',
    };
}

// post 新增
async create() {
    const ctx = this.ctx;
    const res = await this.service.order.add(ctx.request.body);
    ctx.body = {
        code: 0,
        message: res,
        data: '新增成功',
    };
    ctx.status = 200;
}
}

module.exports = OrderController;
