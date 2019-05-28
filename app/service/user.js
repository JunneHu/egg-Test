'use strict';

const Service = require('egg').Service;
const crypto = require('crypto');

class UserService extends Service {
  async addUser(params) {
    var md5 = crypto.createHash('md5');
    params.password = md5.update(params.password).digest('hex');
    const user = new this.ctx.model.User(params)
    user.save();
  }
  async findUser(params) {
    let { pageIndex, pageSize } = params;
    pageIndex = Number(pageIndex);
    pageSize = Number(pageSize);
    let result, total;
    if (pageIndex && pageSize) {
      result = await this.ctx.model.User.find().skip((pageIndex - 1) * pageSize).limit(pageSize);
    } else {
      result = await this.ctx.model.User.find();
    }
    total = await this.ctx.model.User.find().count()
    return {
      list: result,
      total,
      pageIndex,
      pageSize,
      totalPage: Math.ceil(total / pageSize)
    };
  }
}

module.exports = UserService;
