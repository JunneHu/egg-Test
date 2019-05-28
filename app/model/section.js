// 小节表
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const SectionSchema = new Schema({
        name: {   // 小节名
            type: String,
            trim: true
        },
        chapter_id: String, // 章id
        topic_ids: [String] // 题目ids
    }, { versionKey: false });
    return mongoose.model('Section', SectionSchema, 'section');
};