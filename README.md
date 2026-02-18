<h1 align="center">📚 React Books Management System</h1>

<p align="center">
  CRUD Application built with React (Vite) + JSON Server
</p>

<hr/>

<h2>🚀 Project Overview</h2>

<p>
This project is a Full CRUD Books Management System built using <b>React.js (Vite)</b>
and <b>JSON Server</b> as a fake REST API.
</p>

<ul>
  <li>📖 View All Books</li>
  <li>➕ Add New Book</li>
  <li>✏️ Update Book</li>
  <li>❌ Delete Book</li>
  <li>🔍 View Book Details</li>
  <li>📄 About Page</li>
  <li>📩 Contact Page</li>
  <li>🚫 Custom 404 Page</li>
</ul>

<hr/>

<h2>🛠️ Tech Stack</h2>

<ul>
  <li>⚛️ React (Vite)</li>
  <li>🛣️ React Router</li>
  <li>📡 Axios</li>
  <li>🎨 Bootstrap / Tailwind</li>
  <li>🗄️ JSON Server</li>
</ul>

<hr/>

<h2>📂 Project Structure</h2>

<pre>
REACT-DEMO/
│
├── backend/
│   └── db.json
│
├── src/
│   ├── assets/
│   ├── components/
│   │   └── error404/
│   │       └── NotMatch.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Create.jsx
│   │   ├── Update.jsx
│   │   ├── Details.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   │
│   ├── shared/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Table.jsx
│   │
│   ├── services/
│   │   └── service.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── README.md
</pre>

<hr/>

<h2>⚙️ Installation</h2>

<h4>1️⃣ Clone Repository</h4>

<pre>
git clone https://github.com/your-username/react-books-app.git
cd react-books-app
</pre>

<h4>2️⃣ Install Dependencies</h4>

<pre>
npm install
</pre>

<hr/>

<h2>▶️ Running the Project</h2>

<h4>Start JSON Server</h4>

<pre>
json-server --watch backend/db.json --port 3000
</pre>

<p>API URL:</p>

<pre>
http://localhost:3001/books
</pre>

<h4>Start React App</h4>

<pre>
npm run dev
</pre>

<p>App URL:</p>

<pre>
http://localhost:5173
</pre>

<hr/>

<h2>🔌 API Endpoints</h2>

<table>
<tr>
<th>Method</th>
<th>Endpoint</th>
<th>Description</th>
</tr>
<tr>
<td>GET</td>
<td>/books</td>
<td>Get all books</td>
</tr>
<tr>
<td>GET</td>
<td>/books/:id</td>
<td>Get single book</td>
</tr>
<tr>
<td>POST</td>
<td>/books</td>
<td>Create book</td>
</tr>
<tr>
<td>PUT</td>
<td>/books/:id</td>
<td>Update book</td>
</tr>
<tr>
<td>DELETE</td>
<td>/books/:id</td>
<td>Delete book</td>
</tr>
</table>

<hr/>

<h2>🧠 Architecture Highlights</h2>

<ul>
  <li>Clean separation between Pages, Shared Components, and Services</li>
  <li>Reusable UI components (Navbar, Footer, Table)</li>
  <li>Centralized API logic inside services folder</li>
  <li>Scalable structure for future features</li>
</ul>

<hr/>

<h2>🔮 Future Improvements</h2>

<ul>
  <li>🔍 Search & Filtering</li>
  <li>📊 Pagination</li>
  <li>🔐 Authentication</li>
  <li>🌐 Deployment</li>
</ul>

<hr/>

<h2 align="center">👨‍💻 Author</h2>

<p align="center">
  Omar Mahmoud <br/>
  Frontend Developer 🚀
</p>
