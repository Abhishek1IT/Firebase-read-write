# Firebase CRUD App using React & Firebase Firestore

## 📌 Project Overview

This project is a simple CRUD (Create, Read, Update, Delete) application built using React and Firebase Firestore.

Users can:

* Add new users
* View all users
* Update existing users
* Delete users

The application demonstrates how React can interact directly with Firebase Firestore without requiring a separate backend server.

---

## 🚀 Features

* Create new users
* Read user data from Firestore
* Update existing users
* Delete users
* Responsive UI
* Firebase Firestore integration
* Real-time database support (optional)

---

## 🛠️ Technologies Used

### Frontend

* React.js
* JavaScript (ES6+)
* CSS3

### Backend Services

* Firebase Firestore Database

### Tools

* Firebase
* npm
* Git & GitHub

---

## 📂 Project Structure

```text
src/
│
├── App.js
├── App.css
├── firebase.js
├── index.js
│
public/
│
package.json
README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
cd firebase-crud-app
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm start
```

Application will run on:

```text
http://localhost:3000
```

---

## 🔥 Firebase Setup

### 1. Create Firebase Project

* Open Firebase Console
* Create a new project
* Register a Web App

### 2. Enable Firestore Database

* Go to Firestore Database
* Create Database
* Start in Test Mode

### 3. Copy Firebase Config

Create:

```javascript
src/firebase.js
```

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
```

---

## 📖 CRUD Operations

### Create

```javascript
await addDoc(collection(db, "users"), {
  name: name,
});
```

### Read

```javascript
const data = await getDocs(collection(db, "users"));
```

### Update

```javascript
await updateDoc(userDoc, {
  name: newName,
});
```

### Delete

```javascript
await deleteDoc(userDoc);
```

---

## 🗄️ Firestore Collection Structure

Collection:

```text
users
```

Document Example:

```json
{
  "name": "Abhishek"
}
```

---

## 🎯 Learning Outcomes

Through this project, you will learn:

* React Hooks (useState, useEffect)
* Firebase Firestore Integration
* CRUD Operations
* State Management
* Async/Await
* API-like Database Interaction
* Responsive UI Development

---
