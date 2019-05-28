// 试卷表
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const TestSchema = new Schema({
        name: {   // 试卷名
            type: String,
            trim: true
        },
        fraction:Number,  // 总分
        pass_score:Number, // 及格分
        topic_ids: [String], // 题目id
    }, { versionKey: false });
    return mongoose.model('Test', TestSchema, 'test');
};