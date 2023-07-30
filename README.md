# KUNSTAUSHANG IMAGE GALLERY WEBSITE

soundSPA is a full-stack MERN Web Application that allows the user to upload audio tracks with artist name and title and to store the metadata of the tracks to a database. The track-information from the database I then being listed in the tracklist.

This MERN app is built with React in the frontend and uses ExpressJS, MongoDB and Mongoose in the backend and works with a database.
It uses Jason Web Token for signing the user up, logging him in or out.

## FEATURES

- User Sign-up with authentication with encrypted passwords (or social login) and authorization using Jason Web Token. Only logged-in users can use the audio file upload functionality and view the tracklist
- User login and logout and authorization using Jason Web Token
- Uploading of audio track files ( "aac", "aiff", "amr", "flac", "m4a", "mp3", "ogg", "opus" "wav"), which can be viewed under "tracklist"
- After the file upload, the provided information, which the user entered by filling out the form fields, is appearing on the main tracklist page.
- The tracklist shows this data in list-form by grabbing it from the database and showing it on the main tracklist page

## TECHNOLOGIES USED

- Front-end: HTML, CSS, JavaScript, React
- Back-end: Node.js, Express.js
- Database: MongoDB, Mongoose
- External APIs: Cloudinary

## INSTALLATION

1. Clone the repository
2. Go to the repository directory
3. Install the dependencies: npm inst

## USAGE

1. Signup for a new user account
2. Provide information about the audio file, which is going to be uploaded
3. Choose the file from the local storage and submitting the upload
4. The audio file information is listed in a graphical appealing way on the tracklist page

## API DOCUMENTATION

- API used for image upload (Cloudinary API). Refer to their official documentation for more details on how to use the API: https://cloudinary.com/documentation/image_upload_api_reference

## TECHNICAL CHALLENGES

- API Integration: Integrating and working with third-party APIs, such as Cloudinary and Unsplash, requires understanding their documentation, authentication mechanisms, and usage patterns
- Authentication and User Management: setting up user registration, login, password hashing, session management, and secure access to protected routes using Jason Web Token
- Database Integration: connecting your application to the database, handling the database connection, using CRUD operations, managing data schemas

## CONTRIBUTING

Thank you for considering contributing to our MERN web app! We welcome contributions from the community and appreciate your interest in making our project better.

Getting Started
Before you start contributing, make sure you have the following prerequisites installed: Node.js (version X.X.X), NPM (version X.X.X)
Setting Up the Development Environment on GitHub

Code Style and Guidelines
Follow the existing coding style and guidelines used in the project.
Ensure proper indentation and code readability.
Write meaningful commit messages.
Bug Reports and Feature Requests
If you encounter any bugs or have ideas for new features, please open an issue on GitHub. We appreciate your feedback and will address them accordingly.

License
By contributing to this project, you agree that your contributions will be licensed under the project's LICENSE.

## LIBRARIES/SDK

[Cloudinary SDK](https://cloudinary.com/documentation): The Cloudinary SDK is used for image uploads and management. Please refer to the Cloudinary documentation for license information and usage terms.
