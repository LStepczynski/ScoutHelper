from flask import Flask, render_template, url_for

app = Flask(__name__, static_folder='src')

@app.route('/')
def home():
    """The home page of the website"""
    return render_template("index.html")

@app.route('/quiz')
def quiz():
    """Quizzes about the scout knowledge"""
    return render_template('quiz.html')

@app.route('/quiz/lilijka', methods=['GET', 'POST'])
def lilijka():
    return render_template('quiz_lilijka.html')


if __name__ == "__main__":
    app.run(debug=True)