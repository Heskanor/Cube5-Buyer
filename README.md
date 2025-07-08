# Cube5-Buyer

A modern  RFP buyer-side web application built with React, TypeScript, Vite, Tailwind CSS, shadcn/ui, TanStack Table, and Bun.

## Tech Stack

- **React** (with TypeScript) — UI framework
- **Vite** — Fast build tool and dev server
- **Tailwind CSS** — Utility-first CSS framework
- **shadcn/ui** — Accessible, customizable UI components
- **TanStack Table** — Advanced table rendering and features
- **Bun** — Fast JavaScript runtime and package manager

## Project Structure

```
Cube5-Buyer/
  app/
    app.css           # Global styles (Tailwind)
    root.tsx          # Root React component
    routes/           # Route components (pages)
      home.tsx
      buyer-project.tsx
    routes.ts         # Route definitions
    lib/              # Utilities
  public/             # Static assets
  components.json     # shadcn/ui config
  package.json        # Project metadata
  vite.config.ts      # Vite config
  tsconfig.json       # TypeScript config
  bun.lock            # Bun lockfile
  README.md           # This file
```

## Getting Started

### Prerequisites
- [Bun](https://bun.sh/) installed globally

### Install dependencies
```sh
bun install
```

### Run the development server
```sh
bun run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Build for production
```sh
bun run build
```

### Preview production build
```sh
bun run preview
```

## Features
- Modern React app structure with file-based routing
- Fully styled with Tailwind CSS
- UI components from shadcn/ui
- Advanced, collapsible tables with TanStack Table
- Fast builds and dependency management with Bun

## Contributing

1. Fork this repo
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

MIT
