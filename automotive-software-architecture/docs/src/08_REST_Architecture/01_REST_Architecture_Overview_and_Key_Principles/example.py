from flask import Flask, request, jsonify

app = Flask(__name__)

# In-memory database
database = {}

@app.route('/resource/<resource_id>', methods=['GET'])
def get_resource(resource_id):
    resource = database.get(resource_id)
    if resource:
        return jsonify(resource)
    else:
        return jsonify({'error': 'Resource not found'}), 404

@app.route('/resource', methods=['POST'])
def create_resource():
    data = request.get_json()
    resource_id = str(len(database) + 1)
    database[resource_id] = data
    return jsonify({'id': resource_id}), 201

@app.route('/resource/<resource_id>', methods=['PUT'])
def update_resource(resource_id):
    data = request.get_json()
    if resource_id in database:
        database[resource_id] = data
        return jsonify({'message': 'Resource updated'})
    else:
        return jsonify({'error': 'Resource not found'}), 404

@app.route('/resource/<resource_id>', methods=['DELETE'])
def delete_resource(resource_id):
    if resource_id in database:
        del database[resource_id]
        return jsonify({'message': 'Resource deleted'})
    else:
        return jsonify({'error': 'Resource not found'}), 404

# Custom error handler for 404 errors
@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Not Found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
