# Get Started

- Clone repository from github.
- navigate to app: ` cd solvative-fullstack`

### backend app

- move to backend `cd backend`
- install packages: `npm i`
- create .env file in backend dir and add these variables:
  ```
  DATABASE_USER=
  DATABASE_PASSWORD=
  DATABASE_NAME=
  MONGO_CLUSTER_STRING=
  ```
- run backed app at port: 4000
  `npm start`

### frontend app

- move to backend `cd frontend`
- install packages: `npm i`
- run backed app at port: 3000
  `npm start`

# Problem statement:

**Problem Statement:**

Design a Points and Rewards System application with a focus on both backend and frontend development. The backend should utilize any preferred database and framework, excluding authentication and authorization. Users can reward each other with a virtual currency known as "P5," with a limit of 100 P5 per reward.

**Backend:**

- Utilize any database and framework, as specified by the interviewer/recruiter.
- Authentication and authorization are not required for this system.
- Implement two entities/models: User and RewardHistory.
  - **User:**
    - ID: string
    - Name: string
  - **RewardHistory:**
    - Datetime stamp
    - Points: number
    - Given by (User ID): string
    - Given to (User ID): string
- Implement REST APIs for creating and editing users, as well as CRUD operations for P5 and Reward history.

**Frontend:**

- Focus on creating a functional and decent UI without using CSS frameworks.
- Choose from Ruby on Rails, React, Vue, Angular, or vanilla HTML/CSS/JavaScript.
- Inline styles are not allowed.

**User Management:**

- Users List View (Default View, route = /)
  - Display a table with user details: #, Name, P5 balance, Reward balance, Login.
  - Allow creating a new user with a button that redirects to /new/ route.
  - Each user is displayed in a separate row.
- New User (route = /new)
  - Form with 1 input for name.
  - Save button to save the user and redirect to the list view.
  - Cancel button to redirect back to the list view.

**User Details View:**

- View User (route = /:id)
  - Display a form with user details, reusing the same component from New User.
  - Pre-fill the name from the existing user.
  - Save button to update the user.
  - Buttons to show P5 and Reward balance, redirecting to /:id/p5 and /:id/rewards routes.

**P5 History:**

- P5 History (route = /:id/p5)
  - Display P5 balance.
  - Create a new reward button redirecting to /:id/rewards/new.
  - Display a table with P5 history: #, Date-Time, P5 given, User Name, Delete.
  - Each P5 entry is displayed in a separate row.

**Reward History:**

- Reward History (route = /:id/rewards)
  - Display Rewards balance.
  - Display a table with Rewards history: #, Date-Time, Rewards received, User Name.
  - Each Reward entry is displayed in a separate row.

**New Reward:**

- New Reward (route = /:id/rewards/new)
  - Basic form layout to create a new reward.
  - Dropdown with a list of all users, excluding self.
  - Numeric input with a validation limit of 100.
  - Display P5 balance below the input.
  - Submit button to create a new reward (deduct P5 from the current user and transfer to the awardee).
  - Disable the button if the user enters more than 100 or insufficient balance.
  - After submission, redirect the user back.
  - Cancel button to redirect back.

This problem statement aims to assess both backend and frontend development skills, focusing on creating a functional and visually acceptable user interface.

# Completed

- Created Rest Api:

  - user create
  - user edit
  - user list
  - user index
  - user p5 transactions
  - user reward transactions
  - delete transaction
  - create reward

- implemented pages
  - home: list users
  - create user
  - update user
  - p5 transactions list
  - reward transactions list
  - send points
