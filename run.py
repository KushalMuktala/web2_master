# -*- encoding: utf-8 -*-
"""
License: Commercial
Copyright (c) 2019 - present AppSeed.us
"""
from django.shortcuts import render
import requests
import sys
from subprocess import run,PIPE
from flask_migrate import Migrate
from os import environ
from sys import exit
import test
from flask import Flask, render_template, request

from config import config_dict
from app import create_app, db
get_config_mode = environ.get('APPSEED_CONFIG_MODE', 'Debug')

try:
    config_mode = config_dict[get_config_mode.capitalize()]
except KeyError:
    exit('Error: Invalid APPSEED_CONFIG_MODE environment variable entry.')

app = create_app(config_mode) 
Migrate(app, db)

if __name__ == "__main__":
    app.run(debug=True)


@app.route("/",methods=['POST'] )
def external(request):
    out= run([sys.executable,'//home//gaurav//Desktop//Genpact//MEA//test.py'],shell=False,stdout=PIPE)
    print(out)
    return render(request,'home.html',{'data1':out.stdout})

# @app.route("/run", methods=['POST','GET'])
# def run():
#     if request.method == 'GET':
#         a = test.run1()
#         b = test.run2()
#         c = test.run3()
#         return render_template('result.html',result = a)

