import postMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        const postMessages = await postMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.messages })
    }
}
export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = postMessage(post);

    try {
        await newPost.save();
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}