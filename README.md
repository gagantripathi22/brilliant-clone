# Brilliant Clone

A responsive web application mimicking the core features of Brilliant.org, with integrated Google-based user authentication and course selection/filtering features. 

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/gagantripathi22/brilliant-clone.git
   cd brilliant-clone
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file in the root folder with the following Firebase configuration values:

   ```plaintext
   VITE_FIREBASE_API_KEY=AIzaSyADKPnbytvdBzkr6XSkifpfqVcuvWzHWxc
   VITE_FIREBASE_AUTH_DOMAIN=brilliant-clone-b2492.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=brilliant-clone-b2492
   VITE_FIREBASE_STORAGE_BUCKET=brilliant-clone-b2492.firebasestorage.app
   VITE_FIREBASE_MESSAGING_SENDER_ID=1046750263889
   VITE_FIREBASE_APP_ID=1:1046750263889:web:1662cf62ac5e5916561670
   ```

4. **Run the Application**:
   ```bash
   npm run dev
   ```

## Features Implemented

- **User Authentication**: Users can sign up and log in using their Google account via Firebase.
- **Responsive Design**: Layout adapts across various screen sizes and devices.
- **Course Filtering**: Courses can be filtered by category.
- **State Management**: Uses Redux for state handling across components.
- **Protected Routes**: Specific routes are restricted to authenticated users using react-router-dom.
- **Button Animations**: Hover and click animations interactivity added to buttons.

## Technical Decisions and Trade-offs

- **Firebase Authentication** Google authentication is the only method enabled for users to authenticate.
- **Redux for State Management** ensures changes across different components, especially useful for tracking loading states and user session details.
- **React Router for Protected Routes** limits access to certain areas of the app to authenticated users, enhancing security.

## Known Limitations

- **Limited Authentication Options**: Currently, only Google authentication is supported.
- **Responsiveness Needs Refinement**: CSS may require additional tweaks for optimal display on smaller screens.

## Time Spent

Approximately **7 hours** were spent developing this project.

## Local Development

To run the project locally:
1. Follow the setup instructions above to configure your local environment.
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Access the application at `http://localhost:5173`.