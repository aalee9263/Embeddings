# Embeddings
OpenAI Embedding Generator with Permanent Data Storage & Similarity Matching
This Node.js project provides a comprehensive solution for generating text embeddings using the OpenAI API, storing the data permanently, and performing similarity comparisons between the embeddings. The project is ideal for use cases such as semantic search, recommendation systems, and machine learning tasks that require persistent data storage and vector similarity computations.

Features:
Embedding Generation: Utilizes OpenAI’s text-embedding-3-small model to create vector embeddings for text data, which are useful for semantic understanding and machine learning tasks.
Permanent Data Storage: Saves both input data and the generated embeddings to a specified directory on your local system for long-term storage.
Similarity Matching: Performs similarity comparisons between embeddings (vectors) to identify related data points, making it useful for applications like recommendation engines and search systems.
File Management: Automatically handles file reading and writing using JSON format, ensuring smooth I/O operations.
Automatic Directory Creation: If the specified directory for saving the data does not exist, the project automatically creates it.
How It Works:
Embedding Generation (embedding.mjs):

Reads input data from a JSON file.
Sends the data to OpenAI to generate embeddings.
Saves the embeddings along with the input data into a new JSON file, storing the results permanently.
Similarity Matching (similarity.mjs):

Loads the generated embeddings from the saved JSON file.
Compares the embeddings using vector similarity (e.g., cosine similarity) to find related or similar items.
Returns similarity scores, which can be used for semantic search or recommendations.
Utility Functions:

loadJSONData: Reads and parses JSON data from a file.
saveDataToJsonFile: Writes data to a JSON file and stores it in a permanent directory.
Directory Handling: Ensures the directory exists or creates it when saving files.
Setup Instructions:
Clone the repository to your local machine.
Install the required dependencies: npm install openai.
Set your OpenAI API key in the embedding.mjs file.
Adjust the file paths to your desired permanent storage directory.
Run the embedding generation script: node embedding.mjs.
Run the similarity comparison script: node similarity.mjs to find similarities between generated embeddings.
Use Cases:
Semantic Search: Leverage the similarity between text embeddings to build advanced search systems.
Recommendation Systems: Use vector similarity to recommend similar items or content based on input data.
Machine Learning: Store embeddings for further analysis, model training, or similarity-based operations in AI-driven applications.
