# RestInPests 🐛

A lightweight, no-dependency TypeScript REST API framework - because every API needs a few pests to keep things interesting!

## Features

🐜 **Lightweight**: No external dependencies  
🦗 **TypeScript First**: Built with TypeScript for type safety  
🐛 **Amusing**: Development should be fun, not boring  
🕷️ **Extensible**: Clean architecture for building REST APIs  

## Installation

```bash
# Once published
npm install rest-in-pests

# Or clone and build from source
git clone <repository-url>
cd RestInPests
npm install
npm run build
```

## Quick Start

### Basic Usage with PestFactory

```typescript
import { PestFactory } from 'rest-in-pests';

async function bootstrap() {
  // Create your pest-infested application
  const app = await PestFactory.create();
  
  // Your app is ready to buzz!
  console.log('🎉 Ready to serve!');
}

bootstrap();
```

### Different Factory Flavors

RestInPests offers three ways to create your application, each with its own personality:

```typescript
// Standard approach - professional but playful
const app = await PestFactory.create();

// For those who embrace chaos
const chaosApp = await PestFactory.unleashChaos();

// For the refined developer
const refinedApp = await PestFactory.cultivatePests();
```

## Project Structure

```text
src/
├── core/
│   ├── pest-factory.ts    # Main application factory
│   └── index.ts          # Core exports
└── index.ts              # Main library exports

examples/
└── basic/
    └── src/
        └── main.ts       # Basic usage example
```

## Development

```bash
# Build the project
npm run build

# Run the example
npm run start:example

# Run tests (when available)
npm test
```

## API Reference

### PestFactory

The main factory class for creating RestInPests applications.

#### Methods

- **`create(module?)`** - Creates a standard pest-infested application
- **`unleashChaos(module?)`** - Creates an application with chaotic flair
- **`cultivatePests(module?)`** - Creates an elegantly pest-ridden application

All methods return a `Promise<PestApplication>` and currently return an empty object ready for future expansion.

## Roadmap

- [ ] HTTP server integration
- [ ] Routing system
- [ ] Middleware support
- [ ] Decorators for controllers
- [ ] Dependency injection
- [ ] Request/Response handling
- [ ] Error handling
- [ ] Testing utilities

## Contributing

Found a bug? That's a feature! But seriously, contributions are welcome. Please ensure your pests are well-behaved and properly tested.

## License

Apache-2.0 - See LICENSE file for details.

---

*"In the garden of code, pests make the best debuggers."* 🐛✨
