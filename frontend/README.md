# Portfolio — สุวนิช สิลาอ่อน

พอร์ตโฟลิโอส่วนตัวสำหรับนักพัฒนา สร้างด้วย React + Vite ออกแบบในสไตล์ minimalist เน้นความเป็น engineering ได้แรงบันดาลใจจาก Linear และ Vercel

---

## เทคโนโลยีที่ใช้

| Layer | เทคโนโลยี |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Routing | React Router DOM v7 |
| Styling | Vanilla CSS (CSS custom properties) |
| Fonts | Inter, JetBrains Mono |
| Linter | ESLint |

---

## โครงสร้างโปรเจกต์

```
frontend/
├── public/
│   ├── icons.svg
│   ├── Resume_Suwanich_Silaon.pdf
│   └── images/
│       ├── profile/
│       └── projects/
│           └── income-expense/
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Experience/
│   │   ├── Projects/
│   │   ├── ProjectCard/
│   │   └── Contact/
│   ├── data/
│   │   ├── projects.js      # ข้อมูล featured project และโปรเจกต์อื่น ๆ
│   │   └── skills.js        # ข้อมูลทักษะแยกตามหมวดหมู่
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── ProjectDetail.jsx
│   ├── index.css            # Design tokens และ base styles
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## ส่วนประกอบของหน้าเว็บ

- **Hero** — แนะนำตัว, badge สถานะ, tech stack tags และปุ่ม CTA
- **About** — พื้นหลังและแรงบันดาลใจในการเรียนและพัฒนา
- **Projects** — Featured project พร้อม architecture diagram และ challenge/solution block รวมถึง project card อื่น ๆ
- **Skills** — ทักษะด้านเทคนิคแยกตามหมวดหมู่ (Programming, Mobile, Backend, Database, Tools)
- **Experience** — ไทม์ไลน์ประสบการณ์จากโปรเจกต์และการเรียน
- **Contact** — ลิงก์ Email และ GitHub


## Featured Project — Income & Expense Tracker

แอปพลิเคชันบนมือถือแบบ full-stack สำหรับบันทึกและจัดการการเงินส่วนบุคคล

**Architecture**

```
React Native → SQLite / OCR → REST API → Node.js / Express → MySQL
```

**ฟีเจอร์หลัก**
- จัดการธุรกรรม (CRUD)
- OCR สแกนสลิปธนาคาร
- ฐานข้อมูลแบบคู่ (SQLite บนเครื่อง + MySQL บน server)
- ซิงค์ข้อมูล: local → REST API → backend → cloud DB
- Export เป็น Excel / PDF พร้อมวิเคราะห์ข้อมูล

**ปัญหาที่พบและวิธีแก้ไข**

แอปไม่สามารถซิงค์ข้อมูลผ่านเครือข่ายมือถือ (4G/5G) ได้ เนื่องจากเรียกผ่าน Private IP บน HTTP ซึ่ง Android บล็อกโดยค่าเริ่มต้น แก้ไขโดยใช้ **Ngrok Tunnel (HTTPS)** เพื่อ expose server ออกสู่ public endpoint โดยไม่ต้องแก้ไข network security policy ของ Android

---

## Design System

ตัวแปรสีและ font ทั้งหมดกำหนดไว้ใน `src/index.css`

| Token | ค่า | การใช้งาน |
|---|---|---|
| `--bg-main` | `#09090b` | พื้นหลังหน้าเว็บ |
| `--bg-card` | `#111113` | พื้นหลัง card |
| `--border-color` | `#27272a` | เส้นขอบทั่วไป |
| `--text-primary` | `#fafafa` | หัวข้อและ label |
| `--text-secondary` | `#a1a1aa` | เนื้อหาทั่วไป |
| `--text-muted` | `#52525b` | metadata และ timestamp |
| `--accent` | `#3b82f6` | CTA, active state, timeline dot |
| `--success` | `#10b981` | checkmark, badge สถานะพร้อมรับงาน |
| `--font-main` | Inter | ข้อความ UI ทั้งหมด |
| `--font-mono` | JetBrains Mono | tag, badge, code label |

---

## การเพิ่มข้อมูล

**เพิ่มโปรเจกต์** — แก้ไขที่ `src/data/projects.js` เพิ่ม object ใน `otherProjects` หรืออัปเดต `featuredProject`

**เพิ่มทักษะ** — แก้ไขที่ `src/data/skills.js` เพิ่ม key ใหม่ในออบเจกต์เพื่อสร้างหมวดหมู่ใหม่

**เพิ่มประสบการณ์** — แก้ไข `src/data/projects.js` เพิ่ม object ใน `Experience`

---

## License

พอร์ตโฟลิโอส่วนตัว — สงวนลิขสิทธิ์ทั้งหมด
