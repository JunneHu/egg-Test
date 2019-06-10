// 用户表
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const UserSchema = new Schema({
        username: {   // 姓名
            type: String,
            trim: true // 定义修饰符 去掉首尾空格
        },
        password: {
            type: String,   // 密码
            trim: true
        },
        sex: Number,  // 性别  1 男  2 女
        nick_name: String,   // 昵称
        phone: String,  // 手机号
        id_card: String,   // 身份证
        province: [String],  // 省市区
        birthday: String,  // 生日
        head_img: String,  // 头像
        reg_time: { type: Date, default: Date.now },   // 注册时间
        isVip: { type: Boolean, default: false },  // 是否是vip
    }, { versionKey: false });
    return mongoose.model('User', UserSchema, 'user');
};