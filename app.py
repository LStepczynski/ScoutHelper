from flask import Flask, render_template, url_for

app = Flask(__name__, static_folder='src')

@app.route('/')
def home():
    """The home page of the website"""
    return render_template("index.html")

@app.route('/about')
def about():
    """Essential information about the website"""
    return render_template('about.html')

@app.route('/quiz')
def quiz():
    """Quizzes about the scout knowledge"""
    return render_template('quiz.html')

if __name__ == "__main__":
    app.run(debug=True)