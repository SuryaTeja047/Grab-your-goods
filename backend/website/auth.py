from flask import Blueprint
from . import jwt,db

auth = Blueprint('auth',__name__)

@auth.route('/login')
def login_user():
    return 

@auth.route('/signup')
def register_user():
    return

