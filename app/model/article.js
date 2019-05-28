// 文章表
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const ArticleSchema = new Schema({
        name: {  // 文章名
            type: String,
            trim: true
        },
        content: {  // 文章内容
            type: String,
            trim: true
        },
        picture: String,   // 封面图片
        views: { type: Number, default: 0 },   // 阅读数
        approval: { type: Number, default: 0 },   // 点赞数
    }, { versionKey: false });
    return mongoose.model('Article', ArticleSchema, 'article');
};