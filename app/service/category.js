'use strict';

const Service = require('egg').Service;

class CategoryService extends Service {
    async add(params) {
        const data = new this.ctx.model.Category(params)
        data.save();
    }
    async find(params) {
        let { pageIndex, pageSize } = params;
        pageIndex = Number(pageIndex);
        pageSize = Number(pageSize);
        let result, total;
        if (pageIndex && pageSize) {
            result = await this.ctx.model.Category.find().skip((pageIndex - 1) * pageSize).limit(pageSize);
        } else {
            result = await this.ctx.model.Category.find();
        }
        total = await this.ctx.model.Category.find().count()
        return {
            list: result,
            total,
            pageIndex,
            pageSize,
            totalPage: Math.ceil(total / pageSize)
        };
    }
}

module.exports = CategoryService;
