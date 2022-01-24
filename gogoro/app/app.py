from flask import Flask,render_template,request
from flask import session,json

#flask
app=Flask(__name__)
@app.route('/',methods=['POST','GET'])
def index():
    if request.method =='POST':
        if request.values['passwd']=='i_like_smoke_weed' and request.values['ac']=="toyz":
            return render_template('getnewcar.html')
        else :
            return render_template('nogogoro.html')
    return render_template('index.html')

app.run(host="0.0.0.0",port="420",debug=True)
