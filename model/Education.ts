import mongoose, { Schema, Document } from 'mongoose';

export interface IEducation extends Document {
    user_id: mongoose.Types.ObjectId;
    school_name: string;
    gpa: string;
    achievements: {
        date: string;
        title: string;
        description: string;
    }[];
    certificates: {
        date: string;
        title: string;
        issuer: string;
    }[];
    activities: {
        date: string;
        title: string;
        description: string;
    }[];
    createdAt: Date;
    updatedAt: Date;
}

const EducationSchema: Schema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    school_name: {
        type: String,
        required: true
    },
    gpa: {
        type: String,
        required: true
    },
    achievements: [{
        date: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }],
    certificates: [{
        date: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        issuer: {
            type: String,
            required: true
        }
    }],
    activities: [{
        date: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }]
}, {
    timestamps: true
});

export default mongoose.models.Education || mongoose.model<IEducation>('Education', EducationSchema);