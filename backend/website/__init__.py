from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from .config import Config
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager

db = SQLAlchemy()
migrate = Migrate()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app,db)
    jwt.init_app(app)

    with app.app_context():
        from . import auth,routes
        from . import models
        
        app.register_blueprint(auth.auth)
        app.register_blueprint(routes.routes)
        db.create_all()

    CORS(app)

    return app