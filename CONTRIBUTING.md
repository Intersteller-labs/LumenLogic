# Contributing to LumenLogic 🤝

First off, thank you for considering contributing to LumenLogic! It's people like you that make the open-source community such an amazing place to learn, inspire, and create. 

LumenLogic aims to be the standard for programmable remittances on Stellar. We welcome contributions in the form of bug reports, feature requests, documentation improvements, and code submissions.

## 📜 Code of Conduct
By participating in this project, you are expected to uphold our Code of Conduct. Please treat everyone with respect, whether you are filing an issue or submitting a pull request.

---

## 🚀 How Can I Contribute?

### 1. Reporting Bugs
If you find a bug, please create an issue and include:
* **Clear description:** What were you trying to do, and what actually happened?
* **Steps to reproduce:** Please provide clear, step-by-step instructions.
* **Environment:** Which OS, Browser, or Stellar network (Testnet/Futurenet/Mainnet) were you using?

### 2. Suggesting Enhancements
Have an idea for a new feature? We'd love to hear it. Open an issue labeled `enhancement` and describe your proposal, the use case, and how it aligns with the Stellar ecosystem.

### 3. Pull Requests (Code Contributions)
If you're ready to write some code, follow these steps:
1. **Fork the repo** and create your branch from `main`.
2. **Setup your environment** (see [Development Setup](#development-setup)).
3. **Write tests** for your changes. We require test coverage for all smart contracts.
4. **Ensure the test suite passes:** Run `make test` for contracts and `pnpm test` for frontend.
5. **Format your code:** Use `cargo fmt` for Rust and `prettier` for frontend code.
6. **Issue that pull request!**

---

## 💻 Development Setup

### Rust & Soroban (Backend)
1. Navigate to the `/contracts` directory.
2. Ensure you have the `wasm32-unknown-unknown` target installed:
   ```bash
   rustup target add wasm32-unknown-unknown
   ```
3. Build the contracts:
   ```bash
   cargo build --target wasm32-unknown-unknown --release
   ```
4. Run tests:
   ```bash
   cargo test
   ```

### Frontend (React / Next.js)
1. Navigate to the `/frontend` directory.
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Run the development server:
   ```bash
   pnpm dev
   ```

---

## 🎨 Styleguides

### Git Commit Messages
* Use the present tense ("Add feature" not "Added feature").
* Limit the first line to 72 characters or less.
* Reference issues and pull requests liberally after the first line.

### Rust Code Style
* Follow standard Rust conventions. 
* Always run `cargo fmt` and `cargo clippy` before submitting a PR.
* Document public functions heavily, as these are smart contracts managing financial assets.

### UI Code Style
* Use functional components and Hooks.
* Style using Tailwind CSS.
* Ensure all code is formatted using Prettier.

---

Once again, thank you for contributing to LumenLogic and the broader Stellar ecosystem! ✨
