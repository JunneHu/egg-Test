'use strict';

const Service = require('egg').Service;
const crypto = require('crypto');

class BasicInfoService extends Service {
    async add(params) {
        var md5 = crypto.createHash('md5');
        params.password = md5.update(params.password).digest('hex');
        const data = new this.ctx.model.BasicInfo(params)
        data.save();
    }
    async find(params) {
        let { pageIndex, pageSize } = params;
        pageIndex = Number(pageIndex);
        pageSize = Number(pageSize);
        let result, total;
        if (pageIndex && pageSize) {
            result = await this.ctx.model.BasicInfo.find().skip((pageIndex - 1) * pageSize).limit(pageSize);
        } else {
            result = await this.ctx.model.BasicInfo.find();
        }
        total = await this.ctx.model.BasicInfo.find().count()
        return {
            list: result,
            total,
            pageIndex,
            pageSize,
            totalPage: Math.ceil(total / pageSize)
        };
    }
}

module.exports = BasicInfoService;
