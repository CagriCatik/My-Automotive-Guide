from flask import Flask, jsonify, request

app = Flask(__name__)

# User model
class User:
    def __init__(self, id, first_name, last_name):
        self.id = id
        self.first_name = first_name
        self.last_name = last_name

    def to_dict(self):
        return {"id": self.id, "first_name": self.first_name, "last_name": self.last_name}

# User service
class UserService:
    def __init__(self):
        self.users = []
        self.next_id = 1

    def find_all(self):
        return self.users

    def find_by_id(self, id):
        return next((user for user in self.users if user.id == id), None)

    def save(self, user):
        user.id = self.next_id
        self.users.append(user)
        self.next_id += 1
        return user

    def update(self, id, user_data):
        user = self.find_by_id(id)
        if user:
            user.first_name = user_data['first_name']
            user.last_name = user_data['last_name']
        return user

    def delete_by_id(self, id):
        self.users = [user for user in self.users if user.id != id]

user_service = UserService()

# REST endpoints
@app.route('/users', methods=['GET'])
def get_all_users():
    users = user_service.find_all()
    return jsonify([user.to_dict() for user in users])

@app.route('/users/<int:id>', methods=['GET'])
def get_user_by_id(id):
    user = user_service.find_by_id(id)
    if user:
        return jsonify(user.to_dict())
    return jsonify({'error': 'User not found'}), 404

@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    user = User(id=None, first_name=data['first_name'], last_name=data['last_name'])
    created_user = user_service.save(user)
    return jsonify(created_user.to_dict()), 201

@app.route('/users/<int:id>', methods=['PUT'])
def update_user(id):
    data = request.get_json()
    updated_user = user_service.update(id, data)
    if updated_user:
        return jsonify(updated_user.to_dict())
    return jsonify({'error': 'User not found'}), 404

@app.route('/users/<int:id>', methods=['DELETE'])
def delete_user(id):
    user_service.delete_by_id(id)
    return '', 204

@app.route('/headers', methods=['GET'])
def get_headers():
    headers = request.headers
    for key, value in headers.items():
        print(f'{key}: {value}')
    return jsonify({"message": "Headers printed to console"}), 200

@app.route('/users/search', methods=['GET'])
def get_users_by_first_name():
    first_name = request.args.get('first_name')
    if first_name:
        users = [user.to_dict() for user in user_service.find_all() if user.first_name == first_name]
    else:
        users = [user.to_dict() for user in user_service.find_all()]
    return jsonify(users)

if __name__ == '__main__':
    app.run(debug=True)
