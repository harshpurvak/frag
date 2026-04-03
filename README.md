# 🌸 Scentbase

> A modern fragrance discovery platform — built by a developer, for fragrance lovers.

Inspired by Fragrantica but rebuilt from the ground up with a clean UI, smart features, and a community-first approach. This is also a full-stack learning project, built progressively in JavaScript from React all the way to the backend.

---

## ✨ What Is This?

Scentbase is a web app where you can explore, review, and collect fragrances — and connect with people who smell good. Think Fragrantica, but if it were designed in 2025.

It fixes the things that frustrate Fragrantica users:
- Cluttered, outdated UI
- No dupe/alternative finder
- No real user identity or community features
- No gamification or achievements

---

## 🚀 Core Features

### 🔍 Fragrance Discovery
- Search and browse a rich fragrance database
- Filter by notes (top / heart / base), house, season, longevity, sillage
- Detailed fragrance pages with note pyramids, accords, and community ratings

### 🧬 Dupe Finder *(flagship feature)*
- Get recommendations for cheaper or discontinued alternatives
- Similarity scored by shared notes, accords, and community feedback
- "Smells like" tags crowdsourced from users

### 👤 User Profiles
- Personal fragrance **collection** (own, want, tried)
- **Badges** earned through activity (e.g. *First Review*, *100 Frags Deep*, *Niche Nerd*)
- **Achievements** that users unlock and display proudly
- Stats like review count, most-worn notes, collection size

### ⭐ Reviews & Ratings
- Rate longevity, sillage, and overall impression
- Season and occasion tags
- Verified purchase or sample flags

### 🏠 Fragrance Houses
- Dedicated pages for brands/houses
- Filter collections by house

---



## 🧱 Project Structure *(planned)*

```
scentbase/
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Route-level pages
│   │   ├── hooks/           # Custom React hooks
│   │   ├── store/           # Global state (Zustand)
│   │   └── api/             # API call functions
├── server/                  # Express backend
│   ├── routes/              # API routes
│   ├── controllers/         # Route logic
│   ├── models/              # Mongoose schemas
│   └── middleware/          # Auth, error handling
└── README.md
```

---

## 🏅 Badge & Achievement System

Users earn badges by doing things on the platform. Some examples:

| Badge | How to Earn |
|---|---|
| 🌱 First Sniff | Write your first review |
| 📚 Collector | Add 25 frags to your collection |
| 🧪 Sample Rat | Log 10 samples |
| 🕵️ Dupe Hunter | Use the dupe finder 5 times |
| 💎 Niche Nerd | Own 5 niche house fragrances |
| 🌍 Globetrotter | Review frags from 10 different countries |
| 👑 Top Reviewer | Get 100 helpful votes on reviews |

Badges are displayed on user profiles. Users control which ones they show off.

---

## 🧠 Why Build This?

Two reasons:

1. **Learning** — The best way to learn full-stack development is to build something real, with real complexity, that you actually care about.

2. **The gap is real** — Fragrantica is the go-to fragrance site, but it hasn't meaningfully evolved its UX in years. There's a real opportunity to build something better for the community.

---

## 🤝 Contributing

This is a personal learning project right now, but issues, ideas, and feedback are welcome. As it matures, contributing guidelines will be added.

---

## 📄 License

MIT — do what you want, just don't call it Fragrantica.

---

*Built with curiosity, caffeine, and way too many fragrance samples.*