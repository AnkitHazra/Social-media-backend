# Social Media Backend API

A robust backend API for a social media platform built with Node.js, Express, and MongoDB. This API supports user authentication, post creation, file uploads, and more.

![Tech Stack](https://img.shields.io/badge/tech-stack-ff69b4) 
![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green)
![Express](https://img.shields.io/badge/Express-v4.18%2B-lightgrey)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0%2B-brightgreen)

## Features

- User authentication (Register/Login) with JWT
- Password encryption using bcrypt
- Post creation, update, deletion
- File uploads using multer and Cloudinary
- Like/Unlike functionality
- Comment system
- Follow/Unfollow users
- Profile management
- API documentation with Postman

## Technologies Used

- **Backend**: Node.js, Express
- **Database**: MongoDB (with Mongoose ODM)
- **Authentication**: JSON Web Tokens (JWT), bcrypt
- **File Storage**: Cloudinary
- **File Upload**: Multer
- **API Testing**: Postman
- **Environment Variables**: dotenv

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (v18 or higher)
- MongoDB (or MongoDB Atlas connection string)
- Cloudinary account (for file storage)
- Postman (for API testing)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/AnkitHazra/Social-media-backend.git
cd Social-media-backend
