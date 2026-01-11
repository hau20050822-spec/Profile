import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    skills: [{
        name: {
            type: String,
            required: true,
            trim: true
        },
        level: {
            type: Number,
            min: 0,
            max: 100,
            default: 50
        }
    }]
}, {timestamps: true});

const Skill = mongoose.models.Skill || mongoose.model("Skill", SkillSchema);
export default Skill;