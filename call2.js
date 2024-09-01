
//Tools for OPENAI

// first openAI call
// decide if tool call is required
// invoke tool
// make a second  api call with tool response



// ############FIRST TOOL CALLL ###########

import { OpenAI } from 'openai'

const openAI = new OpenAI({apiKey:"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"})


function getTimeOfDay(){
    return '5:45'
}

async function callOpenAIWithTools() 
{
    const context  =[{role:'system', content: "You are a helpful chatbot"},
                    {role:'user',   content: "What is the time of day?"}]

        // configure chat tools (first openAI call)
    const response = await openAI.chat.completions.create
    ({
        model: "gpt-3.5-turbo",
        messages: context,
        //  a new entry will be added to response.tools
        // array of multiple function to be invioked
        tools:[
            {type:'function', function:{name:'getTimeOfDay', description:'Returns the time of day'}}
                ],
        tool_choice:'auto'   //  'manual' or 'auto'
            // the engine will decide which tool to use based on tool_choice
    })

        // deciding if the tool call is required or not
        const willINvokeFunction = response.choices[0].finish_reason == 'tool_calls'
        const toolCall = response.choices[0].message.tool_calls[0]

        if (willINvokeFunction)
            {
                const toolName = toolCall.function.name
                if (toolName == 'getTimeOfDay')
                    {
                    const toolResponse = getTimeOfDay();
                    context.push(response.choices[0].message);
                    context.push
                             ({role:'tool',
                              content:toolResponse,
                              tool_call_id: toolCall.id
                            })
                    }
            }
        const secondResponse = await openAI.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: context
    })

    console.log(secondResponse.choices[0].message.content)
}
callOpenAIWithTools();
