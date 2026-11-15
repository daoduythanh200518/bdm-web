/**
 * Chèn dữ liệu cấu trúc JSON-LD vào trang.
 * Escape "<" để chuỗi trong dữ liệu không thể đóng thẻ <script> (chống XSS).
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
