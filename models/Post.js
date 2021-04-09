import mongoose from "mongoose";

const { Schema } = mongoose;

const PostSchema = new Schema({
  content: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now },
  views: { type: Number, default: 0 },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
//모델로 생성한게 다큐먼트?
// The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, lowercased version of your model name. Thus, for the example above, the model Tank is for the tanks collection in the database.
// Note that no tanks will be created/removed until the connection your model uses is open. Every model has an associated connection. When you use mongoose.model(), your model will use the default mongoose connection.
//If you create a custom connection, use that connection's model() function instead.
