from flask import Flask, request, jsonify
from flask_cors import CORS
import uuid
import os

app = Flask(__name__)
CORS(app)

messages = []

@app.route("/messages", methods=["GET"])
def get_messages():
    return jsonify(messages)

@app.route("/messages", methods=["POST"])
def post_message():
    data = request.get_json()
    new_message = {
        "id": str(uuid.uuid4()),
        "name": data.get("name"),
        "message": data.get("message")
    }
    messages.append(new_message)
    return jsonify(new_message), 201

@app.route("/messages/<message_id>", methods=["DELETE"])
def delete_message(message_id):
    global messages
    messages = [msg for msg in messages if msg["id"] != message_id]
    return jsonify({"status": "deleted"})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
