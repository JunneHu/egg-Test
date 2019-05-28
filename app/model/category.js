// 分类表
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const CategorySchema = new Schema({
        name: {   // 分类名
            type: String,
            trim: true
        },
        subject_id: String, // 科目id
        price:Number, // 价格
    }, { versionKey: false });
    return mongoose.model('Category', CategorySchema, 'category');
};