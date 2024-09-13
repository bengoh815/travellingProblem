# Learning Log

## App Layer Structure Mapping

I’ve learned that there doesn’t need to be a strict 1-to-1 mapping between layers such as routes, controllers, services, and models. The most important thing is to keep concerns separated, maintain modularity, and ensure the structure is adaptable to future changes.

This aligns well with the **KISS (Keep It Simple, Stupid)** principle, reminding me to focus on simplicity and avoid over-complicating the architecture.

# MVC Architecture

I understand that MVC (Model-View-Controller) architecture organizes code into three main components:

    •	Model: Manages the data and business logic (e.g., interacts with the database).
    •	View: The presentation layer, which is responsible for displaying the data to the user (often in frontend frameworks).
    •	Controller: Handles user input, interacts with the model to retrieve or update data, and updates the view accordingly.

Typically used in frontend frameworks or full-stack applications with heavy client-side interactions. It is particularly helpful when there is a direct connection between the UI and the business logic.

# Layered Architecture

I understand that Layered Architecture is similar to MVC, but it typically involves more layers and more separation of concerns. The application is divided into distinct layers, with each layer having a specific responsibility. Common layers include:

    •	Presentation Layer: Handles incoming requests and sends responses (similar to MVC’s controller).
    •	Business Logic Layer: Contains the core business rules and logic (often implemented in services).
    •	Data Access Layer: Interacts with the database, retrieves and saves data (models or repositories).

While Layered Architecture can still involve presentation, business, and data access layers, it can have additional layers like middleware, validation, or even an API layer. It’s typically used for more complex backend systems where modularity and maintainability are important.

# Service-Oriented Architecture (SOA)

In Service-Oriented Architecture (SOA), the application is broken down into independent, reusable services. Each service is a distinct part of the system that performs specific business functions and can be reused throughout the application.

    •	Services are often independent and communicate through APIs or other protocols.
    •	SOA promotes reusability, scalability, and flexibility since services can be reused across multiple parts of the application or even by different applications.

Unlike Layered Architecture, which focuses on separating concerns within a single system, SOA emphasizes dividing the system into distinct, loosely coupled services.

# Nodemailer

Nodemailer is a popular Node.js library used for sending emails. It is simple to use but requires sensitive information, such as:

    •	The email account (e.g., Gmail).
    •	The email password or an app-specific password.

In the case of Gmail, for security reasons, you need to create an App Password when using third-party apps like Nodemailer. This app password replaces your usual email password and is used to authenticate your application when sending emails.

Nodemailer is widely used in the industry for tasks such as sending verification emails, password resets, and notifications.
