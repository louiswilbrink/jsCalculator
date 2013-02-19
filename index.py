#********************************************************************************************
# program: Javascript Calculator
# by: Louis Wilbrink
# version: 1.0
# last modified: 2-18-2013
# *******************************************************************************************

from flask import Flask
from flask import url_for
from flask import render_template

app = Flask(__name__)

@app.route("/calculator")
def calculator():
  return render_template("calculator.html")

if __name__ == "__main__":
  app.run(debug=True)
