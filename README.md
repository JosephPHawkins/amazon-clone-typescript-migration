#  Amazon Clone E-Commerce Project

https://josephphawkins.github.io/Javascript-Review-Amazon-Project/amazon.html

A full-featured Amazon-inspired e-commerce web application built with vanilla JavaScript, demonstrating modern front-end development practices, object-oriented programming, and real-world e-commerce functionality.

##  Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Key Features & Implementation](#key-features--implementation)
- [Getting Started](#getting-started)
- [Screenshots](#screenshots)
- [Key Accomplishments](#key-accomplishments)

## Overview

This project is a comprehensive e-commerce application that replicates core Amazon functionality, including product browsing, shopping cart management, checkout process, order tracking, and order history. Built entirely with vanilla JavaScript (ES6+), the project demonstrates proficiency in modern JavaScript concepts, DOM manipulation, state management, and API integration.

## Features

### Core E-Commerce Functionality
- **Product Catalog**: Dynamic product grid with images, ratings, prices, and product details
- **Shopping Cart**: Add/remove items, update quantities, persistent cart using localStorage
- **Checkout System**: Complete checkout flow with order summary and payment processing
- **Delivery Options**: Multiple delivery speed options with dynamic pricing and date calculation
- **Order Management**: Order history page with order tracking functionality
- **Product Categories**: Support for different product types (Clothing, Appliances, etc.) with specialized information

### 💻 Technical Features
- **Object-Oriented Programming**: Class-based architecture with inheritance (Product, Clothing, Appliance classes)
- **Asynchronous Programming**: Async/await and Promises for API calls and data loading
- **State Management**: Cart state persistence using localStorage
- **API Integration**: Fetch API and XMLHttpRequest for backend communication
- **Responsive Design**: Mobile-first responsive layout with adaptive UI components
- **Error Handling**: Try-catch blocks and promise error handling
- **Testing**: Unit tests using Jasmine testing framework

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **State Management**: LocalStorage API
- **API Communication**: Fetch API, XMLHttpRequest
- **Date Handling**: Day.js library
- **Testing**: Jasmine Testing Framework
- **Architecture**: ES6 Modules, Object-Oriented Programming

## 📁 Project Structure

```
javascript-amazon-project-main/
├── index.html              # Landing page redirect
├── amazon.html             # Main product catalog page
├── checkout.html           # Checkout page
├── orders.html             # Order history page
├── tracking.html           # Order tracking page
├── data/                   # Data models and business logic
│   ├── products.js         # Product classes and data management
│   ├── cart.js             # Shopping cart functionality
│   ├── orders.js           # Order management
│   ├── deliveryOptions.js  # Delivery options configuration
│   └── class-cart.js       # OOP cart implementation
├── scripts/                # JavaScript modules
│   ├── amazon.js           # Main product page logic
│   ├── checkout.js         # Checkout page logic
│   ├── checkout/
│   │   ├── orderSummary.js # Order summary rendering
│   │   └── paymentSummary.js # Payment summary rendering
│   └── utils/
│       └── money.js        # Currency formatting utilities
├── styles/                 # CSS styling
│   ├── shared/             # Shared components (header, general)
│   └── pages/              # Page-specific styles
├── images/                 # Product images and icons
├── test-jasmine/           # Jasmine test suite
│   ├── data/
│   │   └── cartTest.js     # Cart functionality tests
│   └── utils/
│       └── moneyTest.js    # Utility function tests
└── backend/                # Backend practice files
    └── backendPractice.js  # API integration examples
```

## Key Features & Implementation

### 1. **Object-Oriented Product System**
- Implemented class hierarchy with `Product` base class
- Specialized classes: `Clothing` and `Appliance` with inheritance
- Polymorphic `extraInfo()` method for category-specific details
- Encapsulation of product data and methods

```javascript
class Product {
  constructor(productDetail) { ... }
  getURL() { ... }
  getFormattedPrices() { ... }
  extraInfo() { ... }
}

class Clothing extends Product {
  extraInfo() { return size chart link }
}

class Appliance extends Product {
  extraInfo() { return instruction and warranty links }
}
```

### 2. **Shopping Cart Management**
- Add/remove items with quantity management
- Persistent cart using localStorage
- Real-time cart quantity updates in header
- Delivery option selection per cart item
- Dynamic cart total calculations

### 3. **Asynchronous Data Loading**
- Promise-based product loading with `fetch()`
- Async/await implementation for clean asynchronous code
- Error handling with try-catch blocks
- Parallel data loading with `Promise.all()`

### 4. **Checkout System**
- Dynamic order summary rendering
- Delivery date calculation using Day.js
- Multiple delivery options (Standard, Express, Overnight)
- Payment summary with total calculations
- Order placement functionality

### 5. **Responsive Design**
- Mobile-first approach
- Adaptive header with mobile logo variants
- Flexible grid layouts
- Touch-friendly interface elements

### 6. **Testing**
- Unit tests for cart functionality
- Utility function testing
- LocalStorage mocking in tests
- Jasmine test framework integration

## 🏁 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for ES6 modules)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd javascript-amazon-project-main
```

2. Open the project:
   - Option 1: Open `amazon.html` directly in your browser
   - Option 2: Use a local server (recommended for ES6 modules):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using VS Code Live Server extension
     ```

3. Navigate to:
   - Main page: `http://localhost:8000/amazon.html`
   - Checkout: `http://localhost:8000/checkout.html`
   - Orders: `http://localhost:8000/orders.html`

### Running Tests

1. Open `test-jasmine/test.html` in your browser
2. Tests will run automatically using Jasmine

## Screenshots
<img width="1511" height="865" alt="Screenshot 2025-11-24 at 3 39 35 PM" src="https://github.com/user-attachments/assets/874777c8-cbc6-4fd8-a146-833c9b192e56" />
<img width="1505" height="860" alt="Screenshot 2025-11-24 at 3 39 51 PM" src="https://github.com/user-attachments/assets/2787ff30-8206-43ef-b373-be5cafb06804" />
<img width="1512" height="866" alt="Screenshot 2025-11-24 at 3 40 08 PM" src="https://github.com/user-attachments/assets/3daf5a2a-14ab-4505-863e-41a81f6110b9" />

- Product catalog page with grid layout
- Shopping cart with items and delivery options
- Checkout page with order summary
- Order history page

## Key Accomplishments

### Technical Skills Demonstrated

**Advanced JavaScript Concepts**
- ES6+ features (classes, modules, arrow functions, destructuring)
- Asynchronous programming (Promises, async/await)
- Event handling and DOM manipulation
- LocalStorage API for state persistence

**Object-Oriented Programming**
- Class-based architecture
- Inheritance and polymorphism
- Encapsulation and abstraction
- Method overriding

**API Integration**
- Fetch API for modern HTTP requests
- XMLHttpRequest for legacy support
- Error handling and response parsing
- Async data loading patterns

**State Management**
- Cart state persistence
- Order history management
- Real-time UI updates
- Data synchronization across pages

 **Testing & Quality Assurance**
- Unit testing with Jasmine
- Test-driven development practices
- Mocking localStorage in tests
- Utility function testing

**Frontend Development**
- Responsive web design
- CSS Grid and Flexbox layouts
- Mobile-first approach
- Cross-browser compatibility

 **Code Organization**
- Modular architecture with ES6 modules
- Separation of concerns
- Reusable utility functions
- Clean code principles

### Project Highlights

- **100+ Products**: Managed product catalog with multiple categories
- **Full E-Commerce Flow**: Complete user journey from browsing to order completion
- **Persistent State**: Cart and orders saved across sessions
- **Dynamic UI**: Real-time updates without page refreshes
- **Production-Ready Code**: Clean, maintainable, and well-structured codebase

## Future Enhancements

Potential improvements for the project:
- [ ] Search functionality implementation
- [ ] User authentication and accounts
- [ ] Payment gateway integration
- [ ] Product filtering and sorting
- [ ] Product reviews and ratings system
- [ ] Wishlist functionality
- [ ] Backend API integration
- [ ] Database integration

## 📝 License

This project is for educational and portfolio purposes.

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Portfolio: [Your Portfolio](https://yourportfolio.com)

---

⭐ If you found this project helpful or interesting, please consider giving it a star!
