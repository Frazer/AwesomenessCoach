from flask import Flask, request, jsonify
import openai
import os
from dotenv import load_dotenv
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

# model_lst = openai.Model.list()
# for i in model_lst['data']:
#     print(i['id'])

openai_audio_models = [
    "whisper-1"
]

openai_code_models = [
    "babbage-code-search-code",
    "code-davinci-edit-001",
    "babbage-code-search-text",
    "code-search-babbage-text-001",
    "code-search-babbage-code-001",
    "ada-code-search-code",
    "code-search-ada-text-001",
    "ada-code-search-text",
]

openai_code_models = [
    "text-davinci-edit-001",
    "text-similarity-babbage-001",
    "babbage-similarity",
    "text-similarity-ada-001",
    "curie-instruct-beta",
    "ada-similarity",
]

openai_text_search_models = [
    "text-search-ada-query-001",
    "davinci-search-document",
    "davinci-instruct-beta",
    "text-search-ada-doc-001",
    "code-search-ada-code-001",
    "ada-search-query",
    "text-search-davinci-query-001",
    "curie-search-query",
    "davinci-search-query",
    "babbage-search-document",
    "ada-search-document",
    "text-search-curie-query-001",
    "text-search-babbage-doc-001",
    "curie-search-document",
    "text-search-curie-doc-001",
    "babbage-search-query",
    "text-search-davinci-doc-001",
    "text-search-babbage-query-001",
]

openai_embedding_models = [
    "text-embedding-ada-002",
]

openai_similarity_models = [
    "text-similarity-curie-001",
    "curie-similarity",
    "text-similarity-davinci-001",
    "davinci-similarity",
]

openai_chat_models = [
    "ada",
    "babbage",
    "curie",
    "davinci",
    "text-ada-001",
    "text-babbage-001",
    "text-curie-001",
    "text-davinci-001",
    "text-davinci-002",
    "text-davinci-003",
    "gpt-3.5-turbo",
    "gpt-3.5-turbo-16k",
    "gpt-4"
]



    
@app.route('/generate-text', methods=['POST'])
def generate_text():
    data = request.json
    prompt = data['message']    

    # user_prompt = data['message']
    # my_prompt = "Once upon a time, " + user_prompt

    POWER_LEVEL = 10

    # # Make the API call
    # response = openai.ChatCompletion.create(
    #     model=openai_chat_models[POWER_LEVEL],
    #     max_tokens=100,
    #     messages=[
    #     {"role": "system", "content": "You are a helpful life coach who values mindfulness and mental rehearsal."},
    #     {"role": "user", "content": prompt}
    # ]

    # )

    # print (response)
    return jsonify({'text': "Coach responds with YAY!"})
    # return jsonify({'text': response.choices[0].text.strip()})

if __name__ == '__main__':
    app.run()
