Init package.json
```bash
npm init -y
```

Add library
```bash
npm i --D tailwindcss postcss autoprefixer vite
```

Init taiwind
```bash
npx tailwindcss init -p
```

Create file css/tailwind.css
In the file tailwind.css, add the command
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```


```bash
npx tailwindcss-cli build css/tailwind.css -o build/taiwind.css --watch
```

In the file index.html, add the command
```bash
<link rel="stylesheet" href="./build/taiwind.css">
```

Edit the script to
```bash
"scripts": {
  "dev": "vite"
}
```

Start
```bash
npm run dev
```
