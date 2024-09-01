
//   ############OPENAI Tools Parameter Settings#############

// if we have some database to track orders
//  now we need to inquire from data via openAI chats




// ############FIRST TOOL CALLL ###########

import { OpenAI } from 'openai'

const openAI = new OpenAI({apiKey:"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"})


function getTimeOfDay(){
    return '5:45'
}

function getOrderStatus(orderId){

    console.log(`getting order status for ${orderId}`)
    const orderAsNumber = parseInt(orderId);
    if (orderAsNumber % 2 == 0){
        return 'in progress'
    }else{
        return  'completed'
    }





}



async function callOpenAIWithTools() {
    const context  =[{role:'system', content: "You are a helpful chatbot that tells time of the day and order statuses"},
        {role:'user',   content: "What is the status of the order 12348"}]

        // configure chat tools (first openAI call)
        const response = await openAI.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: context,
            //  a new entry will be added to response.tools
            // array of multiple function to be invioked
            tools:[
                  {type:'function', function:{name:'getTimeOfDay', description:'Returns the time of day'}},
                  {type:'function',
                   function:{name:'getOrderStatus', description:'Returns the order status'},
                   parameters:{type:'object', properties:{orderId:{type:'string', description:'the order id'}},
                   required:['orderId']}
                   }
            ],
            tool_choice:'auto'   //  'manual' or 'auto'
            // the engine will decide which tool to use based on tool_choice
        })

        //  deciding if the tool call is required or not
        const willINvokeFunction = response.choices[0].finish_reason == 'tool_calls'
        const toolCall = response.choices[0].message.tool_calls[0]

        if (willINvokeFunction){
            const toolName = toolCall.function.name
            if (toolName == 'getTimeOfDay'){
                const toolResponse = getTimeOfDay();
                context.push(response.choices[0].message);
                context.push({role:'tool',
                              content:toolResponse,
                              tool_call_id:toolCall.id})
            }
            if (toolName == 'getOrderStatus'){
                const rawArguments = toolCall.function.arguments
                const parsedArguments = JSON.parse(rawArguments)

                const toolResponse = getOrderStatus(parsedArguments.orderId);
                context.push(response.choices[0].message);
                context.push({role:'tool',
                              content:toolResponse,
                              tool_call_id:toolCall.id})
            }
        }

        const secondResponse = await openAI.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: context
        })




    console.log(secondResponse.choices[0].message.content)



}
callOpenAIWithTools();
