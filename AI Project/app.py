from flask import Flask

app = Flask(__name__)

name = "Hari"
age = 39
height = 5.9
is_student = True 

@app.route('/')
def hello_world():
    return f' Name : {name}, Age: {age}, Height: {height}, Is Student: {is_student}'

if __name__ == '__main__':
    app.run(debug=True)


print(name, age, height, is_student)
