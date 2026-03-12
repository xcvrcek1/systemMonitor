from flask import Flask, jsonify
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)

@app.route("/api/data")
def getData():
    result = subprocess.check_output(['data.exe'], text=True)
    return jsonify({"value": result.strip()})

if __name__ == "__main__":
    app.run(port=5000)    