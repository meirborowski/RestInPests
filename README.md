<div align="center">
  <img src="assets/logo.svg" alt="RestInPests Logo" width="400">
  <br>
  <p><em>🐛🦗🐜 Where bugs become features! 🕷️🦟🐝</em></p>
  
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![License](https://img.shields.io/badge/License-Apache%202.0-green.svg?style=for-the-badge)
  ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=nodedotjs&logoColor=white)
  ![Zero Dependencies](https://img.shields.io/badge/Dependencies-0-brightgreen?style=for-the-badge)
</div>

---

## ✨ Why Choose RestInPests?

<table>
<tr>
<td align="center">🐜</td>
<td><strong>Lightweight</strong><br>Zero dependencies - cleaner than a freshly debugged codebase!</td>
</tr>
<tr>
<td align="center">🦗</td>
<td><strong>TypeScript First</strong><br>Type safety so strong, even the bugs are well-typed</td>
</tr>
<tr>
<td align="center">🐛</td>
<td><strong>Amusing</strong><br>Development should be fun, not a swarm of frustration</td>
</tr>
<tr>
<td align="center">🕷️</td>
<td><strong>Extensible</strong><br>Weave your web of APIs with clean architecture</td>
</tr>
<tr>
<td align="center">🦟</td>
<td><strong>Fast</strong><br>Buzzes through requests faster than a mosquito at a BBQ</td>
</tr>
<tr>
<td align="center">🐝</td>
<td><strong>Productive</strong><br>Sweet APIs that make your code buzz with efficiency</td>
</tr>
</table>  

## 🚀 Quick Start

> **Warning**: ⚠️ May cause excessive buzzing and uncontrollable urges to debug with a smile!

### 1️⃣ Installation

```bash
# 📦 Once published (coming soon!)
npm install rest-in-pests

# 🛠️ Or build from source (for the adventurous)
git clone https://github.com/meirborowski/RestInPests.git
cd RestInPests
npm install && npm run build
```

### 2️⃣ Spawn Your First Pest Colony

```typescript
import { PestFactory } from 'rest-in-pests';

async function bootstrap() {
  // 🐛 Create your pest-infested application
  const app = await PestFactory.create();
  
  // 🎉 Your app is ready to buzz!
  console.log('🎉 Ready to serve some buggy goodness!');
}

bootstrap();
```

### 3️⃣ Choose Your Pest Personality

RestInPests offers three delightfully different ways to create your application:

```typescript
// 🎩 The Professional Pest - for the refined developer
const sophisticatedApp = await PestFactory.cultivatePests();

// 🌪️ The Chaos Bug - for those who embrace the madness  
const wildApp = await PestFactory.unleashChaos();

// 🐛 The Standard Pest - reliable and friendly
const normalApp = await PestFactory.create();
```

> 💡 **Pro Tip**: All methods create the same app, just with different... *ahem*... personality disorders!

## 🏗️ Project Structure

```text
RestInPests/
├── 📁 src/
│   ├── 📁 core/
│   │   ├── 🐛 pest-factory.ts    # The heart of the hive
│   │   └── 📄 index.ts          # Core exports
│   └── 📄 index.ts              # Main library exports
├── 📁 examples/
│   └── 📁 basic/
│       └── 📁 src/
│           └── 🎯 main.ts       # See the magic in action
├── 📁 assets/                   # Logo & branding swarm
└── 📚 README.md                 # You are here! 👋
```

## 🔧 Development Commands

```bash
# 🏗️ Build the pest colony
npm run build

# 🚀 Launch the example swarm
npm run start:example

# 🧪 Run tests (when the test bugs arrive)
npm test

# 🎯 Type checking (keep those bugs in line)
npx tsc --noEmit
```

## 📖 API Reference

### 🏭 PestFactory

The magical factory where all good pests are born and raised!

| Method | Description | Personality |
|--------|-------------|-------------|
| `create()` | 🐛 Standard pest spawning | Professional but playful |
| `unleashChaos()` | 🌪️ Chaotic swarm release | Wild and unpredictable |
| `cultivatePests()` | 🎩 Refined pest cultivation | Sophisticated and elegant |

**Returns**: `Promise<PestApplication>` - Currently an empty nest, but big things come in small packages!

---

## 🗺️ Roadmap to World Domination

Our pest army is growing! Here's what's buzzing in the pipeline:

### 🎯 Phase 1: Foundation (Current)
- [x] 🏭 PestFactory with personality disorders
- [x] 🎨 Gorgeous branding and logos
- [x] 📚 Documentation that doesn't bite

### 🌟 Phase 2: The Awakening
- [ ] 🌐 HTTP server integration
- [ ] 🛣️ Routing system (roads for our pests)
- [ ] 🔧 Middleware support (pest enhancers)
- [ ] 🎯 Decorators for controllers (fancy pest accessories)

### 🚀 Phase 3: Total Infestation
- [ ] 💉 Dependency injection (pest vitamins)
- [ ] 📥📤 Request/Response handling (pest communication)
- [ ] 🚨 Error handling (pest rehabilitation)
- [ ] 🧪 Testing utilities (pest quality assurance)

### 🌍 Phase 4: Global Buzzing
- [ ] 📊 Performance monitoring
- [ ] 🔒 Authentication & security
- [ ] 📝 OpenAPI/Swagger integration
- [ ] 🐳 Docker support

## 🎨 Logo & Assets

RestInPests comes with a complete swarm of branding assets:

| Asset | Purpose | When to Use |
|-------|---------|-------------|
| 🖼️ [`logo.svg`](assets/logo.svg) | Full horizontal logo | Headers, docs, presentations |
| 🎯 [`icon.svg`](assets/icon.svg) | Square icon | Profile pics, app icons |
| 🔗 [`favicon.svg`](assets/favicon.svg) | Tiny web icon | Websites, browser tabs |
| 💻 [`ascii-logo.txt`](assets/ascii-logo.txt) | Terminal art | CLI tools, console output |

**Color Palette**: Friendly greens (`#8BC34A`, `#2D5016`, `#689F38`) with a splash of energy!

---

## 🤝 Contributing

### Found a bug? 
🎉 **Congratulations!** You've discovered a feature in disguise! 

### Want to contribute?
We welcome all kinds of pests... er, contributors! Whether you're a:
- 🐛 **Bug Reporter** - Help us find more features!
- 🦗 **Code Cricket** - Chirp in with improvements
- 🐜 **Documentation Ant** - Help us organize the colony
- 🕷️ **Web Weaver** - Spin up new functionality

**Guidelines**:
1. Keep your pests well-behaved and properly tested
2. Follow the pest naming conventions  
3. Don't squash bugs - embrace them! 
4. Make sure your code buzzes with TypeScript happiness

---

## 📄 License

**Apache-2.0** - See [LICENSE](LICENSE) file for the legal pest control details.

---

<div align="center">

### 🎭 *"In the garden of code, pests make the best debuggers."* 

**Made with 💚 and a healthy dose of humor**  
*RestInPests - Where every bug is a feature waiting to happen!* 🐛✨

</div>
