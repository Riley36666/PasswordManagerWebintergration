🔐 Password Manager Web Integration

A secure web-based password manager built with Node.js and Express, designed to store and manage credentials using encryption.

⚠️ This is a personal project and is under active development.


====================================
🚀 Features
====================================

- Secure password storage
- Encryption using Fernet
- Web interface for managing credentials
- Environment-based configuration using dotenv
- Built with Node.js + Express


====================================
🛠 Tech Stack
====================================

Backend: Node.js
Framework: Express.js
Encryption: Fernet
Environment Management: dotenv


====================================
📦 Installation
====================================

1) Clone the Repository

    git clone https://github.com/Riley36666/PasswordManagerWebintergration.git
    cd PasswordManagerWebintergration

2) Install Dependencies

    npm install

3) Setup Environment Variables

Create a .env file in the root directory:

    PORT=3000
    FERNET_SECRET=your_generated_secret_here

Generate a secure Fernet key before running the application.

4) Start the Server

    node server.js

Server will run on:

    http://localhost:3000


====================================
🔐 Security Notes
====================================

- Passwords are encrypted before storage.
- Encryption key is stored in environment variables.
- Never commit your .env file.
- This project is for educational/personal use.
- This application has NOT undergone professional security auditing.
- Do NOT use in production without additional hardening.


====================================
📁 Project Structure
====================================

PasswordManagerWebintergration/
│── server.js
│── package.json
│── .env (not committed)
│── routes/
│── views/


====================================
📌 Roadmap
====================================

[ ] Add authentication system
[ ] Add hashed master password login
[ ] Add database integration (MongoDB / PostgreSQL)
[ ] Add frontend UI improvements
[ ] Add password strength checker
[ ] Add two-factor authentication
[ ] Add deployment support
[ ] Add automated testing


====================================
⚠️ Disclaimer
====================================

This is a personal learning project created for educational purposes.
It should not be used in production without proper security review,
penetration testing, and infrastructure hardening.


