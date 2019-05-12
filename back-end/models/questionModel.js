const mongoose = require("mongoose");
const mongoosastic = require("mongoosastic");
const Schema = mongoose.Schema;

var QuestionModelSchema = new Schema(
  {
    id: { type: String },
    username: String,
    title: { type: String },
    body: { type: String },
    score: { type: Number, default: 0 },
    tags: { type: [String], default: [] },
    media: { type: [String], default: [] },
    accepted_answer_id: { type: String, default: null },
    timestamp: Number
  },
  { autoIndex: false }
);
QuestionModelSchema.set("collection", "questions");
// QuestionModelSchema.index({title:'text',body:'text'});
QuestionModelSchema.plugin(mongoosastic, {
  host: "192.168.122.49",
  port: 9200
});

var questionModel = mongoose.model("QuestionModel", QuestionModelSchema);
//module.exports = mongoose.model("QuestionModel", QuestionModelSchema);
module.exports = questionModel;

