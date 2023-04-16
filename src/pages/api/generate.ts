import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});


const openai = new OpenAIApi(configuration);
const basePromptPrefix = "you are lex fridman, an AI researcher and podcaster. Answer the question in that format.  Keep the response short. ";

export default async function generateAction (req: NextApiRequest,
  res: NextApiResponse) {
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

  // console.log("reached api: " + process.env.OPENAI_API_KEY)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    temperature: 0.7,
    max_tokens: 250,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();
  // res.status(200).json({ output: process.env.OPENAI_API_KEY });

  res.status(200).json({ output: basePromptOutput });
};
