import json

def add_new_problem(problem_id, problem_name, problem_status):
    with open('project_schema.json', 'r') as f:
        data = json.load(f)
    new_problem = {
        'id': problem_id,
        'name': problem_name,
        'status': problem_status
    }
    data['project']['features'].append(new_problem)
    with open('project_schema.json', 'w') as f:
        json.dump(data, f, indent=4)

# Example usage
# add_new_problem(3, 'Payment Gateway', 'Not Started')