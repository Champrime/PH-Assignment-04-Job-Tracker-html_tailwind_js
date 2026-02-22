# 📚 What I Learned Here

## 1. `getElementsByClassName` vs `querySelectorAll`

| Feature | `getElementsByClassName` | `querySelectorAll` |
|---|---|---|
| Returns | Live `HTMLCollection` | Static `NodeList` |
| Selector | Class names only | Any CSS selector |
| `.forEach` | ❌ (needs `Array.from()`) | ✅ Works directly |
| Performance | Slightly faster | Slightly slower |
| Auto-updates with DOM | ✅ Yes | ❌ No |

**Takeaway:** Use `querySelectorAll` most of the time for flexibility. Use `getElementsByClassName` when you need a live collection.

---

## 2. CSS `clamp()` — Responsive Values

### Syntax
```css
clamp(minimum, preferred, maximum)
```

### Rules
- ❌ **No space** before `(` → `clamp(...)` not `clamp (...)`
- The **middle value** should use fluid units (`vw`, `%`) to actually scale

### Formula for Fluid Scaling Between Two Breakpoints

Given:
- `minFont` at `minWidth`
- `maxFont` at `maxWidth`

$$m = \frac{maxFont - minFont}{maxWidth - minWidth} \times 100 \quad (vw)$$

$$b = minFont - \frac{maxFont - minFont}{maxWidth - minWidth} \times minWidth \quad (px)$$

**Result:** `clamp(minFont, m·vw + b, maxFont)`

### Example: 8px → 16px between sm (640px) and 2xl (1536px)
```css
font-size: clamp(8px, 0.89vw + 2.29px, 16px);
```

---

## 3. `rem` vs `body` Font Size

- **`rem`** is relative to the **`<html>`** element, NOT `<body>`
- Tailwind uses `rem` for its font sizes (`text-sm`, `text-base`, etc.)
- ❌ Setting `font-size` on `body` won't affect `rem`-based sizes
- ✅ Set it on `html` for Tailwind compatibility:
```css
html {
    font-size: clamp(8px, 0.89vw + 2.29px, 16px);
}
```

---

## 4. Semantic HTML — `<output>` Tag

For search result counts like "8 Jobs found":
```html
<output>8 Jobs</output>
```
- Semantically means "result of a user action" — perfect for search results
- Alternatives: `<p>`, `<span>`, `<small>` (less semantic)

---

## 5. CSS Transitions & Animation

### `transition` Property
```css
transition: <property> <duration> <timing-function> <delay>;
```
- You can list **multiple properties** separated by commas
- The transition is defined on the **base state** (not `:hover`)
- On mouse leave, it plays in **reverse** automatically

### Timing Functions
| Function | Behavior |
|---|---|
| `ease` | Slow → fast → slow (default) |
| `ease-in` | Starts slow, ends fast |
| `ease-out` | Starts fast, ends slow (natural closing) |
| `ease-in-out` | Slow on both ends |
| `cubic-bezier(x1,y1,x2,y2)` | Custom curve |

### `max-height` Hack (for expand/collapse)
- CSS **cannot animate** `height: auto`
- Use `max-height` with a large value instead
- ⚠️ Flaw: closing animation feels delayed if `max-height` >> actual content height
- Modern fix: `interpolate-size: allow-keywords` (Chrome 129+, Firefox 131+)

### `transform` — GPU Accelerated
- More performant than animating `width`/`height`
- Common: `scale()`, `translateY()`, `rotate()`, `opacity`
- `transform: scale(1.01)` → subtle zoom, makes elements feel alive

### `will-change`
```css
will-change: max-height, transform;
```
- Hints the browser to prepare for animation → smoother performance
- Use **sparingly** — only on elements that actually animate

### `box-shadow` on Hover
- Adds depth — element feels like it's lifting off the page
- Combine with `transform: translateY(-4px)` for a "floating" effect

### Transition Delays — Layered Animations
```css
transition:
    max-height  400ms ease-in-out,
    background  300ms ease-in-out 100ms;  /* 100ms delay */
```
- The background **waits** for the height to start first
- Creates a polished, layered feel

### 🧪 Experiments to Try
| Change | Effect |
|---|---|
| `400ms` → `150ms` | Snappy fast animation |
| `400ms` → `1000ms` | Slow, dramatic reveal |
| `ease-in-out` → `ease-out` | Faster start, soft landing |
| `scale(1.01)` → `scale(1.05)` | More dramatic zoom |
| Delay `100ms` → `0ms` | Everything starts together |
| Add `translateY(-4px)` | Card "lifts up" on hover |
