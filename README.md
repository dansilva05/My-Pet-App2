# 🐾 My-Pet-App

![My Pet App Logo](https://t3.ftcdn.net/jpg/05/58/45/02/240_F_558450244_JVL848woVRCZmFXWQqD0imauEyfSgKnU.jpg)

**A small Node/Express web app to help you browse local shelters/kennels and discover your next furry friend.**

-------------

## 👾About The App
My-Pet-App is a simple web application that displays a list of **shelters/kennels** from a JSON collection, and lets you open each shelter to view the **dogs available**.

![Cute Pug](https://t4.ftcdn.net/jpg/03/28/88/41/240_F_328884184_zcbmGh4NlFLhrRWj83fTDQsQLYY6bbvQ.jpg)

-------------

## 🔎Features
- **Home page** with a short introduction
- **Shelters dashboard** (displayed as cards) with a **search bar** to filter results
- **Shelter details page** showing:
  - name, location, phone, rating
  - a grid of **dog cards** with description, breed, gender, age, and posted year
  - a **search bar** to filter dog cards
- **About page** with app description, creator cards, and a map image
- **Handlebars partials** for reusable UI components (menu, shelters, dogs, footer)
- **JSON-based data storage** using LowDB
- **Winston logging** for basic server logs

-------------

## 🧰Technologies
- **Node.js**
- **Express** (routing + server)
- **Express-Handlebars** (views + partials)
- **LowDB** (JSON persistence)
- **Fomantic UI / Semantic UI** (styling)
- **Vanilla JS** (search/filter UI)

![Dog Tech](https://media.licdn.com/dms/image/v2/D4D12AQH5AuaPhibnHw/article-cover_image-shrink_423_752/article-cover_image-shrink_423_752/0/1701772426604?e=1773273600&v=beta&t=RjbUpbFWkgOhyZsbZMk-BxjmvFA-tlrayK47gMdiD2Q)

-------------

## 🚀Getting Started
### 📦Prerequisites
- **Node.js + npm** installed

### ▶️Run the App
1. Install dependencies:  
   ```
   npm install  

2. Start the server:
    ```
    npm start

3. Open your browser:
    ```
    http://localhost:3000/