const Groq = require("groq-sdk");
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const parseResume = async (req, res, next) => {
    try {
        console.log('Resume upload request received', {
            fieldname: req.file?.fieldname,
            originalname: req.file?.originalname,
            mimetype: req.file?.mimetype,
            size: req.file?.size,
            headers: req.headers['content-type'],
            auth: req.auth
        });

        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        if (!req.file.buffer || req.file.buffer.length === 0) {
            return res.status(400).json({ message: 'Uploaded file is empty' });
        }

        const fallbackText = `Resume uploaded successfully from ${req.file.originalname || 'uploaded file'}. The file was accepted by the system and the interview can continue with the uploaded document context.`;
        return res.status(200).json({ text: fallbackText, extracted: false });

    } catch (error) {
        console.error("❌ Error in parseResume:", error);
        return res.status(500).json({
            message: "Failed to process resume upload",
            error: error?.message || String(error)
        });
    }
};

const generateCoverLetter = async (req, res, next) => {
    const { resumeText, jobRole, companyName } = req.body;

    if (!resumeText) {
        res.status(400);
        return next(new Error("Resume text is required"));
    }

    try {
        const prompt = `
        You are a professional career coach. Write a compelling cover letter based on the following candidate resume.
        
        Target Role: ${jobRole || "Software Engineer"}
        Target Company: ${companyName || "the hiring company"}
        
        Resume Content:
        """${resumeText.substring(0, 5000)}"""
        
        Usage specific achievements from the resume to highlight fit. Keep it professional, concise (under 400 words), and impactful.
        Return ONLY the cover letter text. No markdown, no preamble.
        `;

        const completion = await groq.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: "llama-3.3-70b-versatile",
        });

        const coverLetter = completion.choices[0]?.message?.content || "Could not generate cover letter.";

        res.status(200).json({ coverLetter });

    } catch (error) {
        console.error("Error generating cover letter:", error);
        next(error);
    }
};

module.exports = { parseResume, generateCoverLetter };
