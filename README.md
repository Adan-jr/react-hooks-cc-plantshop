Plantsy - React Plant Store Admin
Plantsy is a plant store admin dashboard where you can view, add, update, and manage plants. The app communicates with a backend server to persist data and allows for dynamic changes, such as marking plants as "sold out", updating their price, or deleting them.

Demo


Core Features
View all plants in the store.
Add a new plant to the store.
Mark a plant as "sold out".
Search for plants by their name and see a filtered list of plants.
Advanced Features (Optional)
Update the price of a plant and see the changes reflected after page refresh.
Delete a plant, and it will be removed permanently, even after a refresh.
Setup
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/plantsy.git
cd plantsy
Install dependencies:

bash
Copy code
npm install
Run the backend server:

bash
Copy code
npm run server
The backend server will run on port 6001.

In a new terminal, start the React development server:

bash
Copy code
npm start
Your app will be available at http://localhost:3000.

Verify that the backend is running correctly by visiting http://localhost:6001/plants in your browser.

Features
Core Deliverables
1. Display all Plants
When the app starts, all plants are fetched from the backend API and displayed on the page.

API Endpoint: GET /plants
Response:
json
Copy code
[
  {
    "id": 1,
    "name": "Aloe",
    "image": "./images/aloe.jpg",
    "price": 15.99
  },
  {
    "id": 2,
    "name": "ZZ Plant",
    "image": "./images/zz-plant.jpg",
    "price": 25.98
  }
]
2. Add a New Plant
Users can add a new plant by filling out a form with the plant's name, image URL, and price. The plant is then added to the store and persisted in the backend.

API Endpoint: POST /plants
Request Body:
json
Copy code
{
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 15.99
}
Response:
json
Copy code
{
  "id": 1,
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 15.99
}
3. Mark a Plant as Sold Out
Users can toggle the availability of plants, marking them as "sold out". When toggled, the UI updates to show the status change.

4. Search for Plants
Users can filter the displayed plants by typing in the search bar. The plant list will update dynamically as the user types, showing only the plants that match the entered name.

Advanced Deliverables
1. Update Plant Price
Users can update the price of a plant. The change will persist after a page refresh.

API Endpoint: PATCH /plants/:id
Request Body:
json
Copy code
{
  "price": 16.99
}
Response:
json
Copy code
{
  "id": 1,
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 16.99
}
2. Delete a Plant
Users can delete a plant, and it will be removed from the UI and the backend database. The plant will no longer appear after the page is refreshed.

API Endpoint: DELETE /plants/:id
Response:
json
Copy code
{}
API Endpoints
The following endpoints are used to manage plant data in the app:

GET /plants: Fetch all plants
POST /plants: Add a new plant
PATCH /plants/:id: Update a plant's price
DELETE /plants/:id: Delete a plant
Installation
Follow these steps to set up the project locally:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/plantsy.git
cd plantsy
Install dependencies:

bash
Copy code
npm install
Run the backend server:

bash
Copy code
npm run server
The server will run on http://localhost:6001.

Start the React app:

bash
Copy code
npm start
Open http://localhost:3000 to view the app.

Project Structure
The project structure is as follows:

markdown
Copy code
/src
  /components
    - App.js
    - PlantCard.js
    - PlantList.js
    - NewPlantForm.js
    - Header.js
    - Search.js
  /styles
    - index.css
  /assets
    - images/
  - index.js
Technologies Used
React
React Hooks (useState, useEffect)
CSS for styling
JSON for API responses
Contributing
Feel free to fork the repository, make improvements, or submit pull requests!

License
This project is licensed under the MIT License - see the LICENSE file for details.