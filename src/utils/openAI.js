import { openAI_key } from "../services/GPTAPI";
import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: [openAI_key], // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});
