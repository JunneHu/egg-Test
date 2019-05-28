// 题目表
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const TopicSchema = new Schema({
        name: {   // 题目名
            type: String,
            trim: true
        },
        type: Number,  // 题目类别   1、判断  2、单选  3、多选   4、简答   5、材料
        material: {   // 材料描述
            type: String,
            trim: true
        },
        options: [String],   // 选项
        answers: [String],   // 正确答案
        analysis: {   // 解析
            type: String,
            trim: true
        },
    }, { versionKey: false });
    return mongoose.model('Topic', TopicSchema, 'topic');
};