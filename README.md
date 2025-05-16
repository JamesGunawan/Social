# Trend Tracker

## Project Overview
Industry: Technology

Developer: James Gunawan

Completion Date: 02/20/2023

GitHub Repository: https://github.com/JamesGunawan/TrendTracker

Project Board: https://github.com/users/JamesGunawan/projects/23/views/1

Live Demo: https://trendtracker-rose.vercel.app

## Business Problem
### Problem Statement
Managing social media presence across multiple platforms can be challenging, with scattered data, unclear insights, and time-consuming performance tracking.

## Target Audience
- **Social media managers**
- **Marketing teams**
- **Business owners**
- **Influencers**
- **Content creators**
- **Anyone seeking to track social media performance across multiple platforms**

### Current Solutions and Limitations
Most users rely on manual tracking, which is time-consuming and error-prone. Third-party tools are often expensive, and smaller businesses struggle to find affordable solutions. Existing tools are frequently designed for enterprise-level businesses, leaving smaller organizations with limited options.


## Solution Overview

### Project Description 
TrendTracker is a web-based social media performance tracking tool designed to simplify the process of monitoring and analyzing social media presence across multiple platforms. The application allows users to track their performance, identify trends, and make data-driven decisions to improve their online presence by connecting their accounts to the platform and tracking their performance over time.

### Key Features
- **Multi-Platform Support**: Connect and track performance across multiple social media platforms, including Facebook, Instagram
- **Real-Time Updates**: Receive real-time updates on performance metrics
- **User-Friendly Interface**: Intuitive and easy-to-use interface for users of all skill levels
- **Mobile Optimization**: Optimized for use on both desktop and mobile devices
- **Analytics**: Advanced analytics and insights to help users understand their performance and make data-driven decisions
- **secure Authentication**: Secure authentication and authorization to protect user data


### Value Proposition
TrendTracker offers users a reliable and affordable alternative to manual tracking and expensive third-party tools. While most small businesses and individuals don't require enterprise-level tracking, they still need a solution that provides valuable insights. Unlike other platforms that offer limited features in their free versions and minimal upgrades in their paid versions, TrendTracker strikes a balance between enterprise and lower-level tracking, making it an ideal choice for small to medium-sized businesses.

### Tech Stack

* **Frontend Framework**: Next.js (next@15.3.1)
* **UI Library**: React (react@19.1.0, react-dom@19.1.0)
* **Styling**: Tailwind CSS (tailwindcss@4.1.4, @tailwindcss/postcss@4.1.4)
* **Database**: MongoDB (@auth/mongodb-adapter@3.9.0)
* **Charts**: Chart.js (chart.js@4.4.9), Recharts (recharts@2.15.3)
* **Icons**: Lucide React (lucide-react@0.503.0)
* **Authentication**: NextAuth.js (next-auth@4.17.0)
* **Database Management**: MongoDB Atlas
* **Authentication Provider**: Google OAuth
* **Deployment**: Vercel




### Technical Implementation
- **Foundation:** Set up a Next.js, React, and Tailwind CSS for project the structure.
- **Database Setup:** Connect to MongoDB Atlas for data storage.
- **Authentication Setup:** Implement NextAuth.js and Google OAuth for secure authentication and authorization.
- **Feature Development:** Develop the core features of the application, including multi-platform support, real-time updates, user-friendly interface, mobile optimization, analytics, and secure authentication.
- **Testing and Debugging:** Conduct thorough testing and debugging to ensure the application is stable and performs
- **Deployment:** Deploy the application to Vercel for easy and fast deployment.

### Wireframes & System Architecture
The application follows a modern Next.js architecture with server and client components. Data flows from simulated data from platform APIs through our backend services, which process and normalize the information before storing it in the database (MongoDB Atlas). The frontend retrieves this data and displays it using React components with Recharts for visualization.


### Database Schema
Our database schema consists of the following collections: 
- **google-oauth-users**: stores user information, including authentication details and account settings.
- **connected-platforms**: stores information about the platforms connected to each user, including platform-specific data and performance metrics.

### Authentication and Authorization
The application utilizes NextAuth.js for secure authentication and authorization. Users can sign up using Google OAuth, and once authenticated, they can connect their social media platforms to the application. The application then simulates data performance metrics from these platforms and stores them in the database, ensuring a seamless and secure user experience.

## User Interface and Experience

### User Journey
1. **Onboarding**: User arrives at the application home page and is presented with a clear call-to-action to create an account or log in.
2. **Authentication**: User creates an account or logs in using Google OAuth, ensuring secure authentication and authorization.
3. **Dashboard**: User arrives at the dashboard, where they can connect their social media platforms and view an overview of their performance metrics.
4. **Platform Connection**: User connects their social media platforms, and the application simulates data performance metrics from these platforms.
5. **Performance Metrics**: User views their performance metrics, including real-time updates and historical data.
6. **Analytics**: User views advanced analytics and insights to help them understand their performance and make data-driven decisions.
7. **Session Management**: User can choose to log out or stay logged in, with the application ensuring secure session management.

### Key Screens and Components
Screen 1: Root/Home Page 
  - Product introduction 
  - Sign-in/Sign-up options 

Screen 2: Signup/Signin Page 
  - User authentication 
  - Account creation 

Screen 3: Dashboard 
  - Real-time updates 
  - Sidebar with options to:
    - Connect social media platforms 
    - View analytics 
    - Logout

Screen 4: Platform Connection 
  - User connects social media platforms 

Screen 5: Analytics 
  - Overview of user performance metrics 
  - Advanced analytics and insights 
  - Real-time updates 
  - Historical data visualization


### Responsive Design Approach
The application is designed to be fully responsive, ensuring a seamless user experience across various devices and screen sizes. This is achieved by utilizing Tailwind CSS's built-in utility classes, which provide a flexible and efficient way to create responsive layouts. By leveraging these classes, the application can adapt to different screen sizes and devices, providing an optimal user experience.

# Deployment

## Environment Variables

```.env.local
MONGODB_URI=mongodb+srv://username:password@cluster-name.mongodb.net/
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
NEXTAUTH_SECRET=your-nextauth-secret
```

## Setup Instructions

### Clone the Repository
```bash
git clone https://github.com/JamesGunawan/TrendTracker.git
```

### Install Dependencies
```bash
npm install
```

### Set up Environment Variables
1. Create a `.env.local` file in the root directory of the project.
2. Add the following environment variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string.
   - `GOOGLE_CLIENT_ID`: Your Google OAuth client ID.
   - `GOOGLE_CLIENT_SECRET`: Your Google OAuth client secret.
   - `NEXTAUTH_SECRET`: A secret key for NextAuth.js.

Example `.env` file:
```makefile
MONGODB_URI=mongodb+srv://username:password@cluster-name.mongodb.net/
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
NEXTAUTH_SECRET=your-nextauth-secret
```

### Run Development Server
```bash
npm run dev
```

## Future Enhancements
- **AI Integration**: Integrate AI-powered features to provide more accurate and personalized trend analysis.
- **Social Media Integration**: Allow users to share their trend analysis on social media platforms.