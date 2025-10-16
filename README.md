# Task Management System (TMS)

A full-stack **Task Management System** built with **Django REST Framework** and **React.js** with **PostgreSQL** database.  

Admins can assign tasks, users can update task status and upload files. JWT authentication ensures secure login.

---

## Features

### Backend
- Django REST Framework APIs
- JWT Authentication
- Role-based access: Admin & User
- PostgreSQL database
- Task CRUD operations
- File upload support

### Frontend
- React.js with Axios
- User Registration & Login
- Role-based Dashboard
- Task creation, status update
- File upload/download
- Responsive design

---

## Project Structure

task-management/
├─ backend/ # Django backend
│ ├─ backend/
│ ├─ users/
│ ├─ tasks/
│ └─ manage.py
├─ frontend/ # React frontend
│ ├─ src/
│ │ ├─ components/
│ │ └─ services/
│ └─ package.json
└─ README.md


---

## Setup

### Backend
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
# Configure PostgreSQL in settings.py
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver


cd frontend
npm install
npm start


