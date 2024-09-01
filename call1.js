
//Tools for OPENAI

// first openAI call
// decide if tool call is required
// invoke tool
// make a second  api call with tool response

import { OpenAI } from 'openai'

const openAI = new OpenAI({apiKey:"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"})

async function callOpenAIWithTools() {
    const context  =[{role:'system', content: "You are a helpful chatbot"},
                    {role:'user',   content: "What is the time of day?"}]

        // configure chat tools (first openAI call)
    const response = await openAI.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: context
        })
    console.log(response.choices[0].message.content)
}
callOpenAIWithTools();
