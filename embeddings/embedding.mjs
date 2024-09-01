import OpenAI from 'openai'
import { readFileSync, writeFileSync } from 'fs';
export { generateEmbeddings, loadJSONData, saveDataToJsonFile }
import { join} from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const openai = new OpenAI({apiKey:"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"})


async function generateEmbeddings(input){
    const response = await openai.embeddings.create({
        input: input,
        model: "text-embedding-3-small"
    })

    return response;
}


function loadJSONData(fileName){
    const path = join(__dirname, fileName);
    const rawData = readFileSync(path);
    return JSON.parse(rawData.toString());
}

 function saveDataToJsonFile(data, fileName){
    const dataString = JSON.stringify(data);
    const dataBuffer = Buffer.from(dataString);
    const path = join(__dirname, fileName);
    writeFileSync(path, dataBuffer);
    console.log(`saved data to ${fileName}`);
}

async function main(){
    const data = loadJSONData('data.json');
    const embeddings = await generateEmbeddings(data);
    const dataWithEmbeddings = [];
    for(let i = 0; i < data.length; i++){
        dataWithEmbeddings.push({
            input: data[i],
            embedding: embeddings.data[i].embedding
        })
    }
    saveDataToJsonFile(dataWithEmbeddings, 'dataWithEmbeddings.json')
}




main();