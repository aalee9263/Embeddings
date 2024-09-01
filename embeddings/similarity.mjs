import { generateEmbeddings, loadJSONData } from './embedding.mjs';

function dotProduct(a ,b) {
    return a.map((value, index) => value * b[index]).reduce((a, b) => a + b, 0);
}

function cosineSimilarity(a, b) {
    const product = dotProduct(a, b);
    const aMagnitude = Math.sqrt(a.map(value => value * value).reduce((a, b) => a + b, 0));
    const bMagnitude = Math.sqrt(b.map(value => value * value).reduce((a, b) => a + b, 0));
    return product / (aMagnitude * bMagnitude);
}

async function main() {
    const loadedEmbeddings = loadJSONData('dataWithEmbeddings.json')

    const input = 'animal';

    const inputEmbedding = await generateEmbeddings(input);

    const similarities= [];

    for (const entry of loadedEmbeddings) {
        const similarity = cosineSimilarity(
            entry.embedding,
            inputEmbedding.data[0].embedding
        )
        similarities.push({
            input: entry.input,
            similarity
        })
    }

    console.log(`Similarity of ${input} with:`)
    const sortedSimilarities = similarities.sort((a, b) => b.similarity - a.similarity);
    sortedSimilarities.forEach(similarity => {
        console.log(`${similarity.input}: ${similarity.similarity}`);
    })
}
main();