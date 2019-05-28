// 科目表
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const SubjectSchema = new Schema({
        name: {   // 科目名
            type: String,
            trim: true
        }
    }, { versionKey: false });
    return mongoose.model('Subject', SubjectSchema, 'subject');
};