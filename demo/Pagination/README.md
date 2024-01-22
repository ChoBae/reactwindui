# Pagination Component

## Description

This is a simple and user-friendly pagination component for use in React applications. It provides an effective way to navigate through various pages within your web application.

## Features

- Dynamic pagination
- Quick navigation to the first and last pages
- Previous and next page buttons
- Customizable number of pages to display
- Increased efficiency in class merging and flexibility in customization through Tailwind Merge

## Usage
```tsx
import React, { useState } from "react";
import { Pagination } from "reactwindui";

function App() {
  //  or useParams()
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      {/* Rest of your app components */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageNum={10}
        url="/your-url"
        displayPageCount={5}
      />
    </div>
  );
}
```



## Props
| Prop                | Type     | Description                                 |
|---------------------|----------|---------------------------------------------|
| `currentPage`       | number   | The current active page number              |
| `setCurrentPage`    | function | Function to set the page number             |
| `pageNum`           | number   | Total number of pages                       |
| `url`               | string   | Base URL for page links                     |
| `displayPageCount`  | number   | Maximum number of page numbers to display (default: 5) |
