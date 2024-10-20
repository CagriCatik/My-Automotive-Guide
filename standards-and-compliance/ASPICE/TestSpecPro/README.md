# TestSpec Pro

## 1. **Project Overview**

Develop a Test Case Management System that allows users to create, save, search, edit, and display test cases. Each test case should be editable in a separate window. The system should display a success or error message after saving a test case and allow test cases to be searched and viewed in a list. The system should be secure, responsive, and support collaboration among multiple users.

## 2. **Technology Stack**

### **Frontend**

- **Framework**: React.js
- **Language**: JavaScript (or optionally TypeScript)
- **State Management**: React's built-in state management (using hooks) or Redux if needed.
- **Routing**: React Router for managing navigation.
- **API Requests**: Axios or Fetch API for handling API requests.

### **Backend**

- **Runtime**: Node.js
- **Framework**: Express.js for building RESTful APIs.
- **Language**: JavaScript (or optionally TypeScript)
- **Database**: SQLite3 for development and small-scale production. Consider PostgreSQL or MySQL for future scalability.
- **Authentication**: JSON Web Tokens (JWT) for user authentication, with potential integration of OAuth providers if needed.

## 3. **Frontend Requirements**

### 3.1 **Main Page (index.html) - Implemented with React.js**

- **Title**: "Test Case Specification".
- **Form**: A React form component to create a new test case with the following fields:
  - Test Case ID (text field, required)
  - Test Name (text field, required)
  - Associated Requirement (dropdown or autocomplete, required)
  - Test Description (textarea, required)
  - Preconditions (textarea)
  - Postconditions (textarea)
  - Test Steps (textarea with dynamic add/remove functionality)
  - Input Data (textarea with dynamic add/remove functionality)
  - Output Data (textarea with dynamic add/remove functionality)
  - Expected Results (textarea, required)
  - Error Handling (textarea)
  - Test Environment (dropdown or autocomplete, required)
  - Traceability (textarea)
  - Created By (text field, auto-populated with the current user)
  - Creation Date (date field, auto-populated with the current date)
  - Reviewed By (text field, optional)
  - Review Date (date field, optional)
  - Approved By (text field, optional)
  - Approval Date (date field, optional)
- **Buttons**:
  - **Save**: To save the test case. The form should validate required fields and display a success or error message upon submission.
  - **Search**: To search for existing test cases by `Test Case ID` or `Test Name`.
- **Sections**:
  - **Saved Test Cases**: A section that dynamically displays all saved test cases with an "Edit" button for each. Test cases should be sortable by different attributes (e.g., creation date, name).
  - **Search Results**: A section that displays test cases matching the search criteria. Search results should update dynamically as the user types.
- **Success/Error Message**: A message that confirms the successful saving of a test case or displays errors if saving fails. Messages should appear as toast notifications or modals and may require user dismissal.

### 3.2 **Edit Page (editTestCase.html) - Implemented with React.js**

- **Title**: "Edit Test Case".
- **Form**: A pre-filled form component with all the fields from the main page for editing an existing test case. Fields should be editable, and validation should occur before saving.
- **Buttons**:
  - **Save Changes**: To save the updated test case. A comparison between the original and updated data should be available before confirming the save.
- **Version Control**: Track and display the version history of the test case, allowing users to view previous versions.

### 3.3 **CSS Styling (styles.css) - Scoped to React Components**

- **Responsive Design**: Ensure the application is fully responsive, with layouts that adjust seamlessly across various screen sizes (mobile, tablet, desktop).
- **Accessibility**: Implement accessibility best practices, including ARIA roles, keyboard navigation, and high contrast modes.
- **Styling**: Define consistent styling for form fields, buttons, success/error messages, and display sections. The layout should be clean, with appropriate spacing, and visually distinct sections.

## 4. **Backend Requirements**

### 4.1 **Server Setup (server.js) - Implemented with Node.js and Express.js**

- **Express.js**: Set up an Express server to handle HTTP requests and serve the frontend.
- **Body Parser**: Middleware to parse incoming request bodies.
- **Static File Serving**: Serve static files like the compiled React.js application.
- **Authentication/Authorization**: Implement JWT-based user authentication and role-based access control. Only authorized users should be able to create, edit, or delete test cases.

### 4.2 **Database - SQLite3**

- **Database Schema**:
  - A table named `testcases` with columns:
    - `id` (Auto-incremented primary key)
    - `testCaseID` (Text, unique, indexed)
    - `testName` (Text, indexed)
    - `requirement` (Text, indexed)
    - `description` (Text)
    - `preconditions` (Text)
    - `postconditions` (Text)
    - `steps` (Text)
    - `inputData` (Text)
    - `outputData` (Text)
    - `expectedResults` (Text)
    - `errorHandling` (Text)
    - `environment` (Text, indexed)
    - `traceability` (Text)
    - `createdBy` (Text)
    - `creationDate` (Text)
    - `reviewedBy` (Text)
    - `reviewDate` (Text)
    - `approvedBy` (Text)
    - `approvalDate` (Text)
- **Normalization**: Normalize related data (e.g., users, environments, requirements) into separate tables to avoid redundancy.
- **Indexes**: Index commonly searched fields such as `testCaseID`, `testName`, and `requirement` for optimized query performance.
- **Backup and Restore**: Implement a strategy for regular database backups and a mechanism to restore from backups.

### 4.3 **API Endpoints - Implemented with Express.js**

- **POST `/saveTestCase`**:
  - Save a new test case to the database.
  - Validate the request data and return a success or error message.
- **GET `/testCases`**:
  - Retrieve all saved test cases.
  - Return a JSON object containing the test cases.
- **GET `/searchTestCases`**:
  - Search test cases by `testCaseID`, `testName`, or other indexed fields.
  - Return matching test cases as a JSON object.
- **GET `/getTestCase`**:
  - Retrieve a specific test case by `testCaseID` for editing.
  - Return the test case data as a JSON object.
- **POST `/updateTestCase`**:
  - Update an existing test case in the database.
  - Validate the updated data and return a success or error message.
- **Error Handling**: Implement standardized error messages with specific codes for all API endpoints.

## 5. **Integration Requirements**

### 5.1 **Form Handling**

- **Save**: When the user submits the form, validate the data on the client side before sending it to the server. Upon successful saving, the form should reset, and a success message should be displayed. In case of an error, an appropriate error message should be shown.
- **Edit**: The "Edit" button should open the `editTestCase.html` page in a new window, pre-populated with the test case data. Ensure unsaved changes prompt the user before closing the window.
- **Search**: The search functionality should query the server and display matching results dynamically in the search results section.

### 5.2 **Window Management**

- **Open New Window**: The edit page should open in a new browser window or tab when the user clicks "Edit". Ensure the main window reflects any updates after editing.
- **State Persistence**: Handle unsaved changes gracefully when the edit window is closed. Implement session management to maintain consistent data across multiple windows or tabs.
- **Auto-Update**: After saving an edited test case, the main page should auto-update to reflect the changes, even if it requires reloading the page.

## 6. **Deployment and Testing**

### 6.1 **Local Development**

- **Setup**: Configure the project for local development using Node.js, npm, and a React.js build process. Include instructions for setting up the environment and running the application locally.

### 6.2 **Testing**

- **Unit Testing**: Implement unit tests for all CRUD operations (Create, Read, Update, Delete) on test cases, ensuring comprehensive coverage of functionality.
- **Integration Testing**: Test the interaction between the frontend and backend components, including form handling, API requests, and database operations.
- **Security Testing**: Perform security tests to protect against common vulnerabilities such as SQL injection, XSS, and CSRF.
- **Load Testing**: Conduct load testing to ensure the system can handle a large number of simultaneous users and test cases without degradation in performance.
- **UX Testing**: Validate the user interface and user experience, ensuring that the application is intuitive, responsive, and accessible.

### 6.3 **Deployment**

- **Environment**: Deploy the application to a local or remote server with Node.js support. Ensure the deployment process is documented and

 includes steps for setting environment variables, managing dependencies, and handling database migrations.

- **CI/CD**: Set up Continuous Integration/Continuous Deployment (CI/CD) pipelines to automate testing and deployment, ensuring that updates can be rolled out smoothly.

## 7. **Additional Considerations**

- **Audit Logs**: Implement an audit log feature to track changes made to test cases, including who made the changes and when.
- **Collaboration Features**: Add collaboration features such as comments or change suggestions to allow multiple users to interact with and review test cases.
- **Documentation**: Provide comprehensive user documentation, including a help section within the application and tooltips for complex fields.
