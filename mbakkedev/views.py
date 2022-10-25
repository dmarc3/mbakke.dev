from flask import render_template
from mbakkedev import app

@app.route('/')
@app.route('/main')
def home():
    return render_template('main.html')

@app.route('/projects/')
def projects():
    return 'These are all my projects!'

@app.route('/resume/')
def resume():
    return 'This is why you should hire me!'
