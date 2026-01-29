# Lenny SHA-256 Plugin

A lightweight, zero-dependency implementation of the SHA-256 hashing algorithm. 
Created for a Computer Security assignment.

## Installation

```bash
npm install lenny-sha256-plugin
```

## Usage

```javascript
import { SHA256 } from 'lenny-sha256-plugin';

const hash = SHA256.hash("Hello World");
console.log(hash);
// Output: a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e
```