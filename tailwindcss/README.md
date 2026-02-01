# Data Fetching Comparison Application

This Next.js application demonstrates the fundamental differences between server-side and client-side data fetching methodologies. The project serves as an educational tool to showcase how data retrieval impacts performance, SEO, and user experience in modern web applications.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Data Fetching Methods](#data-fetching-methods)
- [API Endpoints Used](#api-endpoints-used)
- [Performance Considerations](#performance-considerations)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This application presents two distinct approaches to data fetching in Next.js:

1. **Server-Side Data Fetching**: Data is retrieved on the server before the page is rendered, resulting in faster initial page loads and better SEO performance.
2. **Client-Side Data Fetching**: Data is fetched in the browser after the initial page load using JavaScript, allowing for more dynamic interactions.

## Features

- Side-by-side comparison of server-side and client-side data fetching
- Real-time data visualization from external APIs
- Responsive design with card-based layout
- Interactive navigation between different data fetching methods
- Type-safe implementations using TypeScript interfaces
- Modern UI with Tailwind CSS styling

## Technologies Used

- [Next.js](https://nextjs.org/) (v16.1.4) - React framework for production
- [React](https://reactjs.org/) (v19.2.3) - Frontend library
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Node.js](https://nodejs.org/) - Runtime environment
- [Fake Store API](https://fakestoreapi.com/) - E-commerce product data
- [Simple Books API](https://simple-books-api.glitch.me/) - Book information

## Installation

1. Clone or download this repository to your local machine
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

Or if you're using pnpm (as indicated by the pnpm-lock.yaml file):

```bash
pnpm install
```

## Usage

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

3. Use the navigation links to explore different data fetching approaches:
   - Click "Server Side" to view server-rendered content
   - Click "Client Side" to view client-rendered content

## Project Structure

```
my-app/
├── app/
│   ├── ClientSide/
│   │   └── page.tsx          # Client-side data fetching implementation
│   ├── ServerSide/
│   │   └── page.tsx          # Server-side data fetching implementation
│   ├── fonts/                # Local font files
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Home page with navigation
├── components/
│   └── Navbar.tsx            # Navigation component
├── public/                   # Static assets
│   └── 7.png                 # Logo image
├── package.json              # Project dependencies and scripts
└── README.md                 # This file
```

## Data Fetching Methods

### Server-Side Rendering (SSR)

Located in `app/ServerSide/page.tsx`:

- Data is fetched using the native `fetch` API in an async server component
- The data is retrieved on the server before the page is sent to the client
- Initial HTML contains the actual book data
- Better for SEO and initial load performance
- Uses the Simple Books API to fetch book information

Key implementation:
```typescript
async function ServerSidePage() {
  // Data fetching occurs on the server
  const res = await fetch("https://simple-books-api.glitch.me/books");
  const resp: Book[] = await res.json();

  // Render JSX with the fetched data
  return (
    // JSX using the data
  );
}
```

### Client-Side Rendering (CSR)

Located in `app/ClientSide/page.tsx`:

- Data is fetched using the native `fetch` API in a client component
- The data is retrieved in the browser after the initial page load
- Uses React hooks (`useState`, `useEffect`) to manage state and side effects
- Allows for more dynamic updates after the initial render
- Uses the Fake Store API to fetch product information

Key implementation:
```typescript
"use client";
import React, { useEffect, useState } from "react";

function ClientSidePage() {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data: Product[] = await response.json();
      setProduct(data);
    };
    fetchData();
  }, []);

  return (
    // JSX that renders based on state
  );
}
```

## API Endpoints Used

### Simple Books API
- Endpoint: `https://simple-books-api.glitch.me/books`
- Method: GET
- Response Format: Array of book objects with properties:
  - `id`: Unique identifier
  - `name`: Book title
  - `type`: Book category
  - `available`: Boolean indicating availability

### Fake Store API
- Endpoint: `https://fakestoreapi.com/products`
- Method: GET
- Response Format: Array of product objects with properties:
  - `id`: Product identifier
  - `title`: Product name
  - `price`: Product price
  - `description`: Product description
  - `category`: Product category
  - `image`: Product image URL
  - `rating`: Object containing rate and count

## Performance Considerations

### Server-Side Fetching Advantages:
- Faster initial page load with pre-rendered content
- Better search engine optimization (SEO)
- Improved accessibility for users with JavaScript disabled
- Reduced client-side processing

### Client-Side Fetching Advantages:
- More interactive user experiences
- Ability to update data without full page refresh
- Reduced server load after initial load
- More flexible data updates based on user interaction

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions about the implementation, please open an issue in the repository.