import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function generateAction(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log("Request body:", req.body);

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: req.body.userInput
    });

    console.log("Completion response:", completion);

    const basePromptOutput = completion.data.choices[0].message;

    console.log("Base prompt output:", basePromptOutput);

    res.status(200).json({ output: basePromptOutput });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
}
