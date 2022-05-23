from flask import Flask
import requests
from dotenv import load_dotenv
import os

api_key = os.getenv("NASA_API_KEY")

load_dotenv()

app = Flask(__name__)

@app.route("/geospatial-backend")
def home():
    return 'Backend Service'

@app.route("/geospatial-backend/data")
def get_data():
    r = requests.get(f"https://eonet.gsfc.nasa.gov/api/v2.1/events")
    print(r.status_code)
    return r.json()

if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=False)