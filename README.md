<div align="center">
  <h2>
    👉 <a href="https://contact-app-bice-tau.vercel.app/">Live Demo</a> 👈
  </h2>
</div>

<div align="center">
  <img src="/assets/Contact-App.gif" alt="Contact App Demo" width="800"/>
</div>

## 📌 About The Project

Contact App is a modern contact management application built with React. It allows users to efficiently manage their contacts with a user-friendly interface. Users can add new contacts, update existing ones, and delete contacts as needed. The app utilizes local storage to persist contact data across sessions.

### ✨ Key Features

- ➕ Add new contacts with name, email, department, and phone number
- ✏️ Update existing contact information
- 🗑️ Delete contacts
- 💾 Persist contact data using local storage
- 📱 Fully responsive design
- 💅 Sleek and intuitive user interface

### 🛠️ Built With

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)
- [React-Input-Mask](https://github.com/sanniassin/react-input-mask)

## 🚀 Getting Started

bash
# Clone the repository
git clone https://github.com/caneryesiltas/contact-app.git

# Navigate to project directory 
cd contact-app

# Install dependencies
npm install

# Start the development server
npm start


## 💻 Project Structure
 ```
src/
├── components/
│   ├── ContactForm/   # Contact form component
│   ├── ContactList/   # Contact list component
├── pages/
│   ├── Home/          # Home page component
├── styles/
│   └── App.css        # Main styling
├── App.js             # Main application component
└── index.js           # Entry point
 ```

## 🔍 Core Functionality

- **Contact Creation**: Users can create new contacts with name, email, department, and phone number
- **Contact Updating**: Existing contacts can be updated with new information
- **Contact Deletion**: Contacts can be deleted from the list
- **Data Persistence**: Contact data is stored in the browser's local storage
- **Responsive Design**: The app is fully responsive and works on all screen sizes

## 🎯 Component Details

### ContactForm Component
- Handles contact creation and updating
- Uses controlled form inputs
- Implements input validation with react-input-mask

### ContactList Component  
- Displays the list of contacts
- Allows deleting contacts
- Enables editing contacts by sending contact data back to the form

### Home Component
- Main page layout
- Combines ContactForm and ContactList components

## 📱 Responsive Design

- Fluid layout for all screen sizes
- Optimized for mobile devices
- Adaptive contact cards
- Flexible form layout

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

## 📄 License

Distributed under the MIT License. See LICENSE for more information.

## 📫 Contact

Caner Yesiltas - caneryesiltas1@gmail.com

Project Link: [https://contact-app-bice-tau.vercel.app/](https://contact-app-bice-tau.vercel.app/)

---

<div align="center">
  Made with ❤️ by Caner Yesiltas
</div>