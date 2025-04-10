import mongoose,{model, Schema} from "mongoose";

mongoose.connect("mongodb://localhost:27017/brainly")

const UserSchema = new Schema({
    username:{type:String, unique:true, required:true},
    password:{type:String, required:true}
})

export const UserModel = model("users", UserSchema);


const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    type: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true },
})

const LinkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true },
})

export const LinkModel = model("Links", LinkSchema);
export const ContentModel = model("Content", ContentSchema);