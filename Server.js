/* Project: REVENGEE-AUDIO-COMMUNITY (RAC)
   Owner: revengee2919@gmail.com | IG: @Wacut_e
   Version: 1.0.0 (Production Ready)
*/

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// اتصال بقاعدة البيانات - نظام فائق السرعة
mongoose.connect('mongodb://localhost:27017/revengee_platform', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to REVENGEE-DB-CORE"))
  .catch(err => console.error("Connection Failed", err));

// تعريف هيكلية "المنشور الصوتي" (Spotify-Style Post)
const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, default: 'Anonymous' },
    audioUrl: String,
    coverArt: String,
    upvotes: { type: Number, default: 0 },
    category: String,
    developer_credit: { type: String, default: 'revengee2919@gmail.com' },
    timestamp: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', PostSchema);

// --- المسارات (Routes) ---

// 1. جلب المنشورات (مثل قوائم سبوتيفاي)
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await Post.find().sort({ upvotes: -1 });
        res.json({
            status: "Success",
            developer: "@Wacut_e",
            data: posts
        });
    } catch (err) {
        res.status(500).json({ error: "Server Error" });
    }
});

// 2. إنشاء منشور صوتي جديد
app.post('/api/posts', async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(400).json({ error: "Invalid Data" });
    }
});

// 3. نظام التصويت (Upvote) - لرفع ترتيب المحتوى
app.patch('/api/posts/:id/upvote', async (req, res) => {
    const post = await Post.findByIdAndUpdate(req.params.id, 
        { $inc: { upvotes: 1 } }, { new: true });
    res.json(post);
});

// تشغيل الخادم
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`
    =========================================
    SERVER RUNNING ON PORT ${PORT}
    DEVELOPER: revengee2919@gmail.com
    INSTAGRAM: @Wacut_e
    =========================================
    `);
});
