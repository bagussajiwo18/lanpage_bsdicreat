# PRD — StudioDesign Landing Page (Next.js)

**Versi:** 1.0 (draft untuk review)
**Sumber referensi:** Static HTML/Tailwind mockup yang diberikan
**Target:** Rebuild sebagai Next.js app, deploy ke Vercel

---

## 1. Ringkasan & Tujuan

StudioDesign adalah landing page one-page untuk jasa desain visual (branding, UI/UX, marketing). Tujuan utama:

- Mengonversi pengunjung menjadi lead via CTA "Konsultasi Gratis via WhatsApp"
- Menampilkan portofolio dan kredibilitas (testimoni, alur kerja) untuk membangun trust
- Tampil profesional, cepat dimuat, dan responsif di semua perangkat

**Non-goals (di luar cakupan v1):** CMS backend, sistem booking, blog, multi-page navigation, autentikasi user.

---

## 2. Tech Stack

| Layer | Pilihan |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS (custom theme sesuai token di HTML asli) |
| Font | Plus Jakarta Sans (Google Fonts), Material Symbols Outlined (ikon) |
| Hosting | Vercel |
| Bahasa konten | Bahasa Indonesia (sesuai mockup) |
| Gambar | Next.js `<Image>` (ganti `<img>` mentah untuk optimasi otomatis) |

---

## 3. Struktur Halaman (Single Page, dengan anchor navigation)

1. **Header / Top Nav** — sticky, logo + nav (Layanan, Portofolio, Alur Kerja, Ulasan) + CTA "Konsultasi Gratis" + hamburger menu mobile
2. **Hero Section** — headline besar, sub-copy, 2 CTA (WhatsApp, Lihat Portofolio), gambar dashboard mockup
3. **Layanan (Services)** — 3 kartu: Branding, UI/UX Design, Marketing
4. **Portofolio** — filter bar (Semua/Grafis/Feed/F&B) + grid 6 kartu gambar dengan label kategori
5. **Alur Kerja (Workflow)** — 4 langkah bernomor (Discovery, Wireframe, Feedback, Serah Terima)
6. **Ulasan (Testimonials)** — 3 kartu dengan rating bintang, kutipan, nama & jabatan klien
7. **Footer** — logo, sosial media (WhatsApp, Email, Instagram, TikTok), copyright, link legal (Privacy/Terms/Cookie)

---

## 4. Komponen (untuk dipecah jadi React components)

- `Header` (nav + mobile menu state)
- `Hero`
- `ServiceCard` (dipakai 3x — icon, title, desc, link)
- `PortfolioFilterBar` (state aktif kategori, filtering client-side)
- `PortfolioCard` (image, category badge, hover zoom)
- `WorkflowStep` (nomor, title, desc)
- `TestimonialCard` (stars, quote, avatar/name, role)
- `Footer`
- `Button` (variant: primary/secondary, dipakai berulang)

---

## 5. Design System (diekstrak dari kode)

### Warna utama
| Token | Hex | Kegunaan |
|---|---|---|
| primary | #00658d | CTA, aksen utama |
| primary-container | #35a7e0 | Highlight, filter aktif |
| secondary | #712ae2 | Aksen UI/UX card |
| tertiary | #855400 | Aksen Marketing card |
| background | #F8FAFC | BG halaman |
| surface | #FFFFFF | BG card/section alternating |
| text-primary | #0F172A | Teks utama |
| text-secondary | #475569 | Teks deskripsi |
| border | #E2E8F0 | Border kartu |
| error | #ba1a1a | (reserved, belum dipakai di UI) |

### Tipografi (Plus Jakarta Sans)
| Style | Size | Weight |
|---|---|---|
| display-lg | 64px / mobile 40px | 800 |
| headline-xl | 36px | 700 |
| headline-lg | 28px | 700 |
| body-lg | 18px | 400 |
| body-md | 16px | 400 |
| label-md | 14px | 600 |
| label-sm | 12px | 600 |

### Spacing & Radius
- Spacing scale: xs(4) sm(12) base(8) md(24) gutter(24) lg(40) xl(80)
- Margin: mobile 20px, desktop 64px
- Radius: default 4px, lg 8px, xl 12px, full (pill/button)

### Efek visual
- Glassmorphism (`glass-panel`, `glass-card`): background blur, border tipis, shadow halus, hover border→primary + glow shadow
- Button primary: gradient biru + scale-up saat hover
- Button secondary: outline + subtle background tint saat hover

---

## 6. Konten yang Perlu Disiapkan

- [ ] Logo StudioDesign (aset final, bukan placeholder Google image link)
- [ ] Gambar hero (dashboard mockup)
- [ ] 6 gambar portofolio + kategori masing-masing (Grafis / Feed / F&B)
- [ ] 3 testimoni klien (real, dengan izin pakai nama & jabatan)
- [ ] Nomor WhatsApp aktif untuk semua CTA
- [ ] Copy final untuk tiap section (saat ini bahasa Indonesia dari mockup bisa dipakai langsung atau direvisi)
---

## 7. Requirement Non-Fungsional

- **Responsif:** mobile-first, breakpoint mengikuti Tailwind default (`md`, `lg`) — grid 1 kolom di mobile → 3 kolom di desktop untuk services/portfolio/testimonials
- **Performa:** target Lighthouse ≥ 90 (Performance, SEO, Accessibility); gambar lazy-loaded via `next/image`
- **SEO:** meta title/description, Open Graph tags, favicon, semantic HTML (h1 sekali, heading hierarchy benar)
- **Aksesibilitas:** kontras warna cukup, alt text semua gambar, aria-label pada ikon sosial (sudah ada di mockup), focus states pada interactive elements
- **Analytics:** rekomendasi tambah Vercel Analytics atau Google Analytics (opsional, konfirmasi dulu)
- **Browser support:** evergreen browsers (Chrome, Safari, Firefox, Edge terbaru)

---

## 8. Keputusan Final

1. **Filter portofolio** — harus benar-benar berfungsi (filtering interaktif client-side berdasarkan kategori Grafis/Feed/F&B), bukan sekadar visual.
2. **Kontak** — semua tombol CTA (header, hero, footer) mengarah ke WhatsApp. Nomor WhatsApp final menyusul sebelum go-live.
3. **Domain** — deploy awal pakai subdomain bawaan `*.vercel.app`, belum pakai domain custom.
4. **Gambar** — placeholder (`googleusercontent.com`) dipakai sementara saat development, akan diganti dengan aset asli sebelum go-live.
5. **Kontak lanjutan** — cukup WhatsApp saja, tidak perlu form kontak tambahan.

---

## 9. Rencana Kerja (setelah PRD disetujui)

1. Setup project Next.js + Tailwind + font config
2. Bangun komponen sesuai Section 4, styling sesuai Section 5
3. Isi dengan konten final (Section 6) atau placeholder sementara jika belum siap
4. QA responsif + Lighthouse check
5. Deploy ke Vercel (connect repo → auto-deploy on push)
6. Review bersama kamu → revisi → go-live