# Dynamic Incentive Calculator

A full-stack web application designed to dynamically calculate sales commissions based on performance thresholds. 

This project demonstrates a decoupled architecture, featuring a robust API calculation engine built with Python/Django and a responsive, real-time user interface built with React/Next.js.


* **Frontend: Next.js (React) & Tailwind CSS**
  * **Why:** React's state management handles immediate, dynamic UI updates without page reloads. Next.js provides a robust framework, while Tailwind CSS allows for clean, responsive styling. 
* **Backend: Django (Python)**
  * **Why:** Django offers a highly secure, fast way to build a RESTful API. Python is exceptionally well-suited for building the backend "Rules Engine" that processes the math, thresholds, and tier logic. 
* **Communication: REST API & CORS**
  * **Why:** Keeping the frontend and backend in separate environments enforces a strict separation of concerns. The Next.js client communicates with the Django backend via an HTTP POST request, ensuring the frontend never directly manipulates the calculation logic.

## Calculation Logic
The current active rule engine applies the following logic via the API:
* If `Actual Sales` are **< 80%** of the `Target Amount`, the commission is **$0**.
* If `Actual Sales` are **>= 80%** of the `Target Amount`, the commission is **5%** of the `Actual Sales`.

## Project Structure
```text
incentive_project/
│
├── backend/          # Django API and calculation logic
└── frontend/         # Next.js UI and client-side routing
