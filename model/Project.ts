import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        trim: true,
        default: ""
    },
    role: {
        type: String,
        required: true,
        trim: true
    },
    team_size: {
        type: Number,
        default: 1
    },
    github_url: {
        type: String,
        trim: true
    },
    demo_url: {
        type: String,
        trim: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    technologies: [{
        category: {
            type: String,
            required: true
        },
        items: [String]
    }],
    main_features: [String],
    responsibilities: [String],
    achievements: [String],
    project_type: {
        type: String,
        enum: ['academic', 'personal', 'professional', 'freelance'],
        default: 'personal'
    },
    status: {
        type: String,
        enum: ['completed', 'in_progress', 'paused', 'cancelled'],
        default: 'completed'
    },
    grade: {
        type: String,
        trim: true
    }
}, {timestamps: true});

const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);
export default Project;