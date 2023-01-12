# `tdeep`

A simple way to update deep objects in immutable environments like React or Zustand. Comes with powerful TypeScript!

## Installation

```bash
npm install --save tdeep
yarn add tdeep
pnpm add tdeep
```

## Usage

```ts
import { setState } from "react";
import { tdeep } from "tdeep";

function App() {
  const [data, setData] = useState({
    my: {
      quite: {
        nested: {
          object: true,
          array: [1, 2, 3],
        },
      },
    },
  });

  // ...

  setData(tdeep("my.quite.nested.object", false));
  setData(tdeep("my.quite.nested.object", (value) => !value));
  setData(tdeep("my.quite.nested.array.0", 42));
  setData(tdeep("my.quite.nested.array", [3, 2, 1]));
}
```
