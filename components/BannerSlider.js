import { useEffect, useRef, useState } from "react";
import { banners } from "../data/banners";

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);

  // Avanza solo cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  function goTo(index) {
    setCurrent((index + banners.length) % banners.length);
  }

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) goTo(current - 1);
    if (diff < -50) goTo(current + 1);
    touchStartX.current = null;
  }

  return (
    <div
      className="banner-slider"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="banner-slider__track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((b, i) => (
          <div
            key={i}
            className="banner-slider__slide"
            style={{ background: b.gradient }}
          >
            <p className={`banner-slider__subtitle banner-slider__subtitle--${b.accent}`}>
              {b.subtitle}
            </p>
            <h2>{b.title}</h2>
          </div>
        ))}
      </div>

      <div className="banner-slider__dots">
        {banners.map((_, i) => (
          <button
            key={i}
            className={i === current ? "is-active" : ""}
            onClick={() => goTo(i)}
            aria-label={`Ir al banner ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
