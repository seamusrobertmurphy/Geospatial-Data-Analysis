from flask import Flask
import requests
from dotenv import load_dotenv
import os

api_key = os.getenv("NASA_API_KEY")

load_dotenv()

app = Flask(__name__)

@app.route("/")
def home():
    return "home"

@app.route("/data")
def get_data():
    r = requests.get(f"https://eonet.gsfc.nasa.gov/api/v2.1/events?limit=5&days=20&source=InciWeb&status=open&api_key={api_key}")
    print(r.status_code)
    return r.json()

if __name__ == '__main__':
    app.run(host="0.0.0.0",debug=True)