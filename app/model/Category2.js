// 2级分类表
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const Category2Schema = new Schema({
        name: {   // 2级分类名
            type: String,
            trim: true
        },
        category1_id:String, // 1级分类id
    }, { versionKey: false });
    return mongoose.model('Category2', Category2Schema, 'category2');
};