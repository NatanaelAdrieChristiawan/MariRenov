## Image performance (optional)

This project includes conservative, safe-by-default image optimizations:

- All `<img>` default to `loading="lazy"` and `decoding="async"` via `ImageWithFallback`.
- Critical hero images use `fetchPriority="high"` and are preloaded.
- Components provide proper `sizes` so browsers download right-sized images.

You can optionally enable AVIF/WebP responsive variants for images in `public/images` and `public/portfolio`:

1. Install sharp:
  ```powershell
  npm i -D sharp
  ```
2. Generate responsive variants (writes `*-480/768/1080/1440.(webp|avif)` next to originals):
  ```powershell
  npm run optimize:images
  ```
3. Enable consumption in runtime by setting env flag in a `.env` file:
  ```dotenv
  VITE_OPTIMIZED_IMAGES=true
  ```

When enabled, `ImageWithFallback` will emit a `<picture>` with AVIF/WebP sources and fall back to the original file.


  # Mari Renov

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  