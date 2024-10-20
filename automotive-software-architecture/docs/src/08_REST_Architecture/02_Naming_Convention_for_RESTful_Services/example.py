from flask import Flask, request, jsonify

app = Flask(__name__)

# Example resource
employees = [
    {"id": 1, "name": "John Doe", "location": "USA"},
    {"id": 2, "name": "Jane Smith", "location": "Canada"}
]

# Endpoint to get a list of all employees or filter by location
@app.route('/v1/employees', methods=['GET'])
def get_employees():
    location = request.args.get('location')
    if location:
        filtered_employees = [emp for emp in employees if emp['location'] == location]
        return jsonify(filtered_employees)
    return jsonify(employees)

# Endpoint to get a single employee by ID
@app.route('/v1/employees/<int:employee_id>', methods=['GET'])
def get_employee(employee_id):
    employee = next((emp for emp in employees if emp['id'] == employee_id), None)
    if employee:
        return jsonify(employee)
    return jsonify({"error": "Employee not found"}), 404

# Endpoint to create a new employee
@app.route('/v1/employees', methods=['POST'])
def create_employee():
    new_employee = request.get_json()
    employees.append(new_employee)
    return jsonify(new_employee), 201

# Endpoint to update an existing employee by ID
@app.route('/v1/employees/<int:employee_id>', methods=['PUT'])
def update_employee(employee_id):
    employee = next((emp for emp in employees if emp['id'] == employee_id), None)
    if employee:
        updated_data = request.get_json()
        employee.update(updated_data)
        return jsonify(employee)
    return jsonify({"error": "Employee not found"}), 404

# Endpoint to delete an employee by ID
@app.route('/v1/employees/<int:employee_id>', methods=['DELETE'])
def delete_employee(employee_id):
    global employees
    employees = [emp for emp in employees if emp['id'] != employee_id]
    return '', 204

# Custom error handler for 404 errors
@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Not Found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
