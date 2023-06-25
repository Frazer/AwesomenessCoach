from flask import Flask, request, jsonify
import openai
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route('/generate-text', methods=['POST'])
def generate_text():
    data = request.json
    prompt = data['message']

    # user_prompt = data['message']
    # my_prompt = "Once upon a time, " + user_prompt

    # Make the API call
    # response = openai.Completion.create(
    #     engine='davinci-codex',
    #     prompt=prompt,
    #     max_tokens=100
    # )

    return jsonify({'text': "Coach responds with YAY!"})
    # return jsonify({'text': response.choices[0].text.strip()})

if __name__ == '__main__':
    app.run()
