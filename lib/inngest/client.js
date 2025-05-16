import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "Mentrix",
  name: "Mentrix",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
