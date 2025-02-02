# Hexa

Hexa an example app showing how you can create apps using hexagonal architecture

In this tutorial, we'll build a serverless Node.js application using Hexagonal Architecture (also known as Ports and Adapters). The app will allow users to create and save user records in a DynamoDB table. We'll use TypeScript for type safety and better maintainability.

### Prerequisites

Before starting, ensure you have the following installed:

- Node.js (v14 or higher)
- AWS CLI (configured with your credentials)
- TypeScript (npm install -g typescript)

Before we get started on this tutorial, let us first understand what is hexagonal architecture

## What is hexagonal architecture and what are its benefits?

Hexagonal Architecture, also known as Ports and Adapters, is a software design pattern introduced by Alistair Cockburn. It aims to create loosely coupled, maintainable, and testable systems by separating the core business logic from external concerns like user interfaces, databases, and third-party services. The architecture is visualized as a hexagon, where the core application sits at the center, and external interactions occur through "ports" and "adapters."

### Key Concepts

1. Core Application (Hexagon):

- Contains the business logic and domain model.
- Is independent of external systems like databases, UIs, or APIs.

2. Ports:

- Interfaces that define how the core application interacts with the outside world.
- Two types:
  - Primary (Driving) Ports: Used by external actors (e.g., users, APIs) to interact with the application (e.g., REST API endpoints).
  - Secondary (Driven) Ports: Used by the application to interact with external systems (e.g., database access).

3. Adapters:

- Implementations of ports that handle communication with external systems.

Examples:

- A REST API adapter for a primary port.
- A database adapter for a secondary port.

### Benefits of Hexagonal Architecture

1. Separation of Concerns:

- Business logic is isolated from external dependencies, making the system easier to understand and maintain.

2. Testability:

- The core application can be tested in isolation using mock adapters, ensuring thorough unit and integration testing.

3. Flexibility and Adaptability:

- External systems (e.g., databases, UIs, APIs) can be replaced or updated without modifying the core application.
- For example, switching from a SQL database to a NoSQL database only requires changing the adapter.

4. Technology Agnostic:

- The core application is not tied to specific frameworks, libraries, or tools, making it easier to evolve over time.

5. Improved Maintainability:

- Changes to external systems or business logic are localized, reducing the risk of unintended side effects.

6. Scalability:

- Components can be scaled independently, as the architecture promotes modularity.

7. Clear Boundaries:

- The separation between the core application and external systems enforces clear boundaries, reducing complexity.

### Example Use Case

Imagine an e-commerce application:

- Core Application: Handles business logic like order processing, inventory management, and pricing.

- Primary Ports: REST API endpoints for placing orders or checking product availability.

- Secondary Ports: Interfaces for accessing a database or integrating with a payment gateway.

- Adapters:

  - A REST API adapter for handling HTTP requests.

  - A MySQL adapter for database access.

  - A Stripe adapter for payment processing.

If the payment gateway changes from Stripe to PayPal, only the payment adapter needs to be updated, leaving the core application unaffected.

---

### Challenges

1. Initial Complexity:

- Setting up the architecture requires more upfront effort compared to traditional layered architectures.

2. Learning Curve:

- Developers need to understand the principles of ports, adapters, and dependency inversion.

3. Overhead for Small Projects:

- For simple applications, the added abstraction might be unnecessary.
