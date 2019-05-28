// 收藏表
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const CollectionSchema = new Schema({
        user_id: String,   // 用户id
        topic_id: String,   // 题目id
    }, { versionKey: false });
    return mongoose.model('Collection', CollectionSchema, 'collection');
};