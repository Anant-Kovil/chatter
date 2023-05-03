import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


export default async function generateAction(req: NextApiRequest,
  res: NextApiResponse) {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: req.body.userInput});

  const basePromptOutput = completion.data.choices[0].message;

  console.log(basePromptOutput);

  console.log(req.body.userInput);

  res.status(200).json({ output: basePromptOutput});
}