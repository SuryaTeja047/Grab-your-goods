from flask import Blueprint
from .models import Users
from flask import jsonify

routes = Blueprint('routes',__name__)

@routes.route('/users',methods=['GET'])
def get_users():
    users = Users.query.all()
    json_users = [user.to_json() for user in users]
    return jsonify(json_users)