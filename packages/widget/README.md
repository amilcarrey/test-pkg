# amilcarrey-widget

A React widget component with shadcn/ui Card and Tailwind CSS styling.

## Features

- Built with React and TypeScript
- Includes shadcn/ui Card component
- Pre-styled with Tailwind CSS
- Green "Hello World" title
- CSS bundle included

## Installation

```bash
npm install amilcarrey-widget
# or
yarn add amilcarrey-widget
# or  
bun add amilcarrey-widget
```

## Usage

```tsx
import { Widget } from 'amilcarrey-widget'
import 'amilcarrey-widget/styles.css'

function App() {
  return (
    <div>
      <Widget />
    </div>
  )
}
```

## Components

- `Widget` - Main widget component with card and green title
- `Card`, `CardContent`, `CardHeader`, etc. - Individual card components

## License

MIT