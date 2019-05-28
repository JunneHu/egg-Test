// 订单表
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const OrderSchema = new Schema({
        category_id: String, // 分类id
        user_id: String,  // 用户id
        total_price: Number, // 总价格
        order_no: String, // 订单编号
        num: Number, //订单数量
        create_time: { type: Date, default: Date.now },  // 下单时间
    }, { versionKey: false });
    return mongoose.model('Order', OrderSchema, 'order');
};