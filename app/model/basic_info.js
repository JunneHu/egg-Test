// 基础信息表
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const BasicInfoSchema = new Schema({
        administrator: String,   // 管理员用户名
        password: String,   // 题目id
        phone: String,  // 手机
        qq: String,  // qq
        countdown:Number,  // 倒计时
    }, { versionKey: false });
    return mongoose.model('BasicInfo', BasicInfoSchema, 'basicInfo');
};