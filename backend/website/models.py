from . import db
from werkzeug.security import check_password_hash,generate_password_hash

class Users(db.Model):
    id = db.Column(db.Integer,primary_key = True)
    email = db.Column(db.String(100),nullable = False,unique = True)
    name = db.Column(db.String(30),nullable = False,unique = False)
    password = db.Column(db.String(200),nullable = False, unique = False)

    def to_json(self):
        return{
            "id":self.id,
            "email": self.email,
            "password": self.password,
            "name": self.name,
        }

    def set_password(self,password):
        self.password = generate_password_hash(password)

    def check_password(self,password):
        return check_password_hash(self.password,password)