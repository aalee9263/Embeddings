<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Embeddings - OpenAI Embedding Generator</title>
</head>
<body>
    <h1><strong>Embeddings</strong></h1>
    <p><strong>OpenAI Embedding Generator with Permanent Data Storage &amp; Similarity Matching</strong></p>
    
    <p>
        This Node.js project provides a comprehensive solution for generating text embeddings using the OpenAI API, 
        storing the data permanently, and performing similarity comparisons between the embeddings. 
        The project is ideal for use cases such as semantic search, recommendation systems, and machine learning tasks 
        that require persistent data storage and vector similarity computations.
    </p>

    <h2><strong>Features:</strong></h2>
    <ul>
        <li><strong>Embedding Generation:</strong> Utilizes OpenAI’s text-embedding-3-small model to create vector embeddings for text data, which are useful for semantic understanding and machine learning tasks.</li>
        <li><strong>Permanent Data Storage:</strong> Saves both input data and the generated embeddings to a specified directory on your local system for long-term storage.</li>
        <li><strong>Similarity Matching:</strong> Performs similarity comparisons between embeddings (vectors) to identify related data points, making it useful for applications like recommendation engines and search systems.</li>
        <li><strong>File Management:</strong> Automatically handles file reading and writing using JSON format, ensuring smooth I/O operations.</li>
        <li><strong>Automatic Directory Creation:</strong> If the specified directory for saving the data does not exist, the project automatically creates it.</li>
    </ul>

    <h2><strong>How It Works:</strong></h2>
    
    <h3><strong>Embedding Generation (embedding.mjs):</strong></h3>
    <ul>
        <li>Reads input data from a JSON file.</li>
        <li>Sends the data to OpenAI to generate embeddings.</li>
        <li>Saves the embeddings along with the input data into a new JSON file, storing the results permanently.</li>
    </ul>

    <h3><strong>Similarity Matching (similarity.mjs):</strong></h3>
    <ul>
        <li>Loads the generated embeddings from the saved JSON file.</li>
        <li>Compares the embeddings using vector similarity (e.g., cosine similarity) to find related or similar items.</li>
        <li>Returns similarity scores, which can be used for semantic search or recommendations.</li>
    </ul>

    <h3><strong>Utility Functions:</strong></h3>
    <ul>
        <li><strong>loadJSONData:</strong> Reads and parses JSON data from a file.</li>
        <li><strong>saveDataToJsonFile:</strong> Writes data to a JSON file and stores it in a permanent directory.</li>
        <li><strong>Directory Handling:</strong> Ensures the directory exists or creates it when saving files.</li>
    </ul>

    <h2><strong>Setup Instructions:</strong></h2>
    <ol>
        <li>Clone the repository to your local machine.</li>
        <li>Install the required dependencies: <code>npm install openai</code>.</li>
        <li>Set your OpenAI API key in the <code>embedding.mjs</code> file.</li>
        <li>Adjust the file paths to your desired permanent storage directory.</li>
        <li>Run the embedding generation script: <code>node embedding.mjs</code>.</li>
        <li>Run the similarity comparison script: <code>node similarity.mjs</code> to find similarities between generated embeddings.</li>
    </ol>

    <h2><strong>Use Cases:</strong></h2>
    <ul>
        <li><strong>Semantic Search:</strong> Leverage the similarity between text embeddings to build advanced search systems.</li>
        <li><strong>Recommendation Systems:</strong> Use vector similarity to recommend similar items or content based on input data.</li>
        <li><strong>Machine Learning:</strong> Store embeddings for further analysis, model training, or similarity-based operations in AI-driven applications.</li>
    </ul>
</body>
</html>
