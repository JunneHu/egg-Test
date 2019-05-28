// 章表
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const ChapterSchema = new Schema({
        name: {   // 章名
            type: String,
            trim: true
        },
        category2_id: String, // 2级分类id
    }, { versionKey: false });
    return mongoose.model('Chapter', ChapterSchema, 'chapter');
};