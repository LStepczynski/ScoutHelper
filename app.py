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

@app.route('/quiz/lilijka')
def lilijka():
    return render_template('quiz_lilijka.html')

@app.route('/quiz/krzyz')
def krzyz():
    return render_template('quiz_krzyz.html')

@app.route('/quiz/znaczek-zucha')
def zuch():
    return render_template('quiz_zuch.html')

@app.route('/quiz/kodeks-dewiza-wedrownicza')
def kodeks_dewiza():
    return render_template('quiz_kodeks_dewiza.html')


if __name__ == "__main__":
    app.run(debug=True)