'use strict';

const Controller = require('egg').Controller;

class CollectionController extends Controller {
    // get 获取所有数据
    async index() {
        const ctx = this.ctx;
        const { pageIndex, pageSize } = ctx.query;
        const res = await this.service.collection.find({ pageIndex, pageSize });
        this.ctx.body = {
            code: 0,
            data: res,
            message: '成功',
        };
    }

    // post 新增
    async create() {
        const ctx = this.ctx;
        const res = await this.service.collection.add(ctx.request.body);
        ctx.body = {
            code: 0,
            message: res,
            data: '新增成功',
        };
        ctx.status = 200;
    }
}

module.exports = CollectionController;
