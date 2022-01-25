from flask import Flask,render_template,request
from flask import session,json

#flask
app=Flask(__name__)
@app.route('/',methods=['POST','GET'])
def index():
    if request.method =='POST':
        if request.values['if_i_can_get_a_tesla']=='no':
            return render_template('notesla.html')
        else :
            return render_template('getnewcar.html')
    return render_template('index.html')

app.run(host="0.0.0.0",port="748",debug=True)
