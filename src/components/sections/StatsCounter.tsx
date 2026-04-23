"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { num: 1000, suffix: "+", label: "Đối tác" },
  { num: 5000, suffix: "+", label: "Tỷ chi tiêu Facebook" },
  { num: 15, suffix: "+", label: "Năm kinh nghiệm" },
];

function useCountUp(target: number, duration = 1500, start: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      setValue(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return value;
}

function Stat({ num, suffix, label, start }: typeof STATS[0] & { start: boolean }) {
  const v = useCountUp(num, 1500, start);
  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-1.5 md:mb-2 drop-shadow-lg leading-none">
        {v.toLocaleString("vi-VN")}
        {suffix}
      </div>
      <div className="text-[13px] md:text-[15px] uppercase tracking-wider font-medium opacity-95">
        {label}
      </div>
    </div>
  );
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setStart(true),
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-[var(--primary)] text-white py-12 md:py-16">
      <div className="container-x" ref={ref}>
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-[22px] md:text-3xl font-extrabold mb-3">
            Những con số ấn tượng
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto text-[13.5px] md:text-[14.5px] leading-relaxed">
            Chi tiêu 100 tỷ VNĐ trong vòng 3 tháng từ quảng cáo Facebook. Luôn là đối tác cấp cao nhất ở Việt Nam. Đặc quyền ưu tiên khi sử dụng Facebook.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} start={start} />
          ))}
        </div>
      </div>
    </section>
  );
}
