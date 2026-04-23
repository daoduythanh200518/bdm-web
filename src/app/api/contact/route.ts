import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { SITE } from "@/config/site";

const schema = z.object({
  name: z.string().min(2, "Họ tên quá ngắn"),
  phone: z.string().min(9, "Số điện thoại không hợp lệ"),
  email: z.string().email().optional().or(z.literal("")),
  message: z.string().optional(),
  service: z.string().optional(),
});

const RECIPIENT = process.env.CONTACT_TO || "hotro@biendongmedia.vn";
const FROM = process.env.CONTACT_FROM || "Biển Đông Media <onboarding@resend.dev>";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const subject = `[${SITE.name}] Yêu cầu tư vấn mới từ ${data.name}`;
    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #eee;border-radius:12px;overflow:hidden">
        <div style="background:#f6a12a;color:#fff;padding:20px 24px">
          <h2 style="margin:0;font-size:20px">Yêu cầu tư vấn mới</h2>
          <p style="margin:4px 0 0;font-size:13px;opacity:.9">${new Date().toLocaleString("vi-VN")}</p>
        </div>
        <div style="padding:24px;font-size:15px;color:#222;line-height:1.6">
          <p><strong>Họ tên:</strong> ${escape(data.name)}</p>
          <p><strong>Số điện thoại:</strong> <a href="tel:${escape(data.phone)}">${escape(data.phone)}</a></p>
          ${data.email ? `<p><strong>Email:</strong> ${escape(data.email)}</p>` : ""}
          ${data.service ? `<p><strong>Dịch vụ quan tâm:</strong> ${escape(data.service)}</p>` : ""}
          ${data.message ? `<p><strong>Nội dung:</strong><br>${escape(data.message).replace(/\n/g, "<br>")}</p>` : ""}
        </div>
        <div style="padding:14px 24px;background:#f8f8f8;font-size:12px;color:#666;border-top:1px solid #eee">
          Email này được gửi tự động từ website ${SITE.domain}.
        </div>
      </div>
    `;

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      const result = await resend.emails.send({
        from: FROM,
        to: RECIPIENT,
        subject,
        html,
        replyTo: data.email || undefined,
      });
      if (result.error) {
        console.error("[contact] Resend error:", result.error);
        return NextResponse.json(
          { ok: false, error: "Không thể gửi email. Vui lòng gọi hotline." },
          { status: 502 }
        );
      }
    } else {
      console.warn(
        "[contact] RESEND_API_KEY chưa được cấu hình - lead chỉ được log ra console."
      );
      console.log("[contact] new lead:", {
        ...data,
        at: new Date().toISOString(),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, errors: err.flatten() },
        { status: 400 }
      );
    }
    console.error("[contact] unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
