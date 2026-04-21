# Hướng dẫn xuất bản `bdm-web`

## Tổng quan các bước

1. Đẩy source lên GitHub
2. Kết nối Vercel → deploy tự động
3. Mua domain + trỏ DNS về Vercel
4. Đăng ký Resend → verify domain email → lấy API key
5. Cấu hình biến môi trường trên Vercel

---

## Bước 1 — Push lên GitHub

1. Tạo repo mới tại https://github.com/new
   - Đặt tên: `bdm-web` (hoặc tên khác)
   - Private hoặc Public tuỳ bạn
   - **Không** tick "Add README"

2. Trên máy (PowerShell hoặc Git Bash):

```bash
cd h:/project-veo3/bdm-web
git add .
git commit -m "Initial commit: Biển Đông Media website"
git branch -M main
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```

Thay `<username>` và `<repo-name>` bằng thông tin thật.

---

## Bước 2 — Deploy lên Vercel

1. Đăng ký tài khoản tại https://vercel.com (đăng nhập bằng GitHub cho nhanh)

2. Vào dashboard → **Add New → Project**

3. Chọn repo `bdm-web` vừa push → **Import**

4. Màn hình cấu hình:
   - Framework Preset: **Next.js** (Vercel tự nhận)
   - Root Directory: giữ nguyên `.`
   - Build/Output: giữ mặc định
   - **KHOAN bấm Deploy** — vào phần **Environment Variables** trước

5. Thêm các biến môi trường (xem bước 5 bên dưới)

6. Bấm **Deploy** — chờ 2-3 phút là xong.
   - URL tạm sẽ dạng: `https://bdm-web-xxx.vercel.app`

---

## Bước 3 — Trỏ domain về Vercel

Domain đã có: **biendongmedia.vn**

### Trỏ domain về Vercel

1. Trong Vercel project → **Settings → Domains → Add Domain**
2. Nhập `biendongmedia.vn` → Vercel sẽ hiện các DNS records cần thêm
3. Vào trang quản lý domain (nơi mua) → **DNS Management**
4. Thêm 2 records:

| Type  | Name | Value                   |
|-------|------|-------------------------|
| A     | @    | 76.76.21.21             |
| CNAME | www  | cname.vercel-dns.com.   |

5. Chờ 5-60 phút DNS propagate → Vercel tự cấp SSL (https).

---

## Bước 4 — Cấu hình Resend để gửi email

1. Đăng ký tại https://resend.com (có gói miễn phí 3000 email/tháng, 100/ngày)

2. **Domains → Add Domain** → nhập `biendongmedia.vn`

3. Resend sẽ cung cấp 3-4 DNS records (SPF, DKIM, Return-Path). Thêm vào DNS giống bước 3.

4. Chờ 5-30 phút → Resend verify xong → chuyển trạng thái **Verified**.

5. Vào **API Keys → Create API Key** → đặt tên `bdm-web-prod` → copy key `re_xxxxxxxxxxxxxxxxxxxxx` (lưu lại, chỉ hiện 1 lần).

---

## Bước 5 — Biến môi trường trên Vercel

Vào project Vercel → **Settings → Environment Variables** → thêm 4 biến cho cả 3 environment (Production, Preview, Development):

| Name | Value |
|------|-------|
| `RESEND_API_KEY` | `re_xxxxxxxxxxxxxxxxxxxxx` (lấy từ bước 4) |
| `CONTACT_TO` | `hotro@biendongmedia.vn` |
| `CONTACT_FROM` | `Biển Đông Media <no-reply@biendongmedia.vn>` |
| `NEXT_PUBLIC_SITE_URL` | `https://biendongmedia.vn` |

Sau khi thêm → **Deployments → ... → Redeploy** để biến mới có hiệu lực.

---

## Bước 6 — Kiểm tra sau deploy

- [ ] Mở `https://biendongmedia.vn` → hiện trang chủ
- [ ] Check `/sitemap.xml` + `/robots.txt` có data đúng
- [ ] Test form liên hệ → kiểm tra email có nhận được ở `hotro@biendongmedia.vn`
- [ ] Kiểm tra responsive mobile/tablet/desktop
- [ ] Google Search Console → submit sitemap để index

---

## Cập nhật nội dung sau khi đã live

Mỗi lần sửa code:

```bash
git add .
git commit -m "mô tả thay đổi"
git push
```

Vercel tự động deploy lại — mất ~2 phút là site update.
