import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/ebf8fdb3-f201-49bd-8c15-52b9fb4de495/files/1df3533d-f355-429e-87b6-081a57ed9c5b.jpg";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.85s ease ${delay}s, transform 0.85s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

const CTA = () => (
  <button
    className="cta-btn"
    onClick={() => document.getElementById("final-form")?.scrollIntoView({ behavior: "smooth" })}
  >
    Получить расчёт доходности
  </button>
);

export default function Index() {
  return (
    <div style={{ backgroundColor: "var(--land-dark)", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Земельные участки Холмец"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.35)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, var(--land-dark) 0%, rgba(11,14,11,0.5) 50%, transparent 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24 pt-32 w-full">
          <div className="animate-fade-up">
            <span className="green-tag mb-8 inline-block">Холмец · Московская область · Участки от 8 соток</span>
          </div>

          <h1 className="hero-title animate-fade-up delay-200 mt-6 max-w-3xl">
            Инвестиции в землю<br />
            <span style={{ color: "var(--land-beige)" }}>от 456 000 ₽</span>
          </h1>

          <p
            className="animate-fade-up delay-400 mt-5"
            style={{
              fontFamily: "'Cormorant', serif",
              fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)",
              fontWeight: 300,
              color: "var(--land-beige-dark)",
              lineHeight: 1.45,
              maxWidth: "640px",
            }}
          >
            Рост стоимости в 2–3 раза за 24 месяца —<br />
            за счёт дорог, электричества и развития локации
          </p>

          {/* Вход / Выход */}
          <div
            className="animate-fade-up delay-600 mt-8 inline-flex gap-10 px-7 py-5"
            style={{
              border: "1px solid rgba(200,184,154,0.18)",
              backgroundColor: "rgba(11,14,11,0.55)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div>
              <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--land-beige-dark)" }}>Вход</p>
              <p style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 300, color: "var(--land-beige-light)", lineHeight: 1.1, marginTop: "0.25rem" }}>456 000 ₽</p>
            </div>
            <div style={{ width: "1px", backgroundColor: "rgba(200,184,154,0.15)" }} />
            <div>
              <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--land-green-accent)" }}>Потенциал выхода</p>
              <p style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 300, color: "var(--land-green-accent)", lineHeight: 1.1, marginTop: "0.25rem" }}>от 900 000 ₽+</p>
            </div>
          </div>

          <div className="animate-fade-up delay-800 mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <CTA />
          </div>

          {/* Слоган внизу */}
          <p
            className="animate-fade-up delay-1000 mt-6"
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              color: "var(--land-beige-dark)",
              textTransform: "uppercase",
            }}
          >
            Кто заходит сейчас — зарабатывает.&nbsp;&nbsp;Кто позже — покупает дороже.
          </p>
        </div>
      </section>

      {/* ── СМЫСЛ ── */}
      <section className="py-32 px-6" style={{ backgroundColor: "var(--land-dark)" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="section-label">Смысл инвестиции</span>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
            <Reveal delay={0.1}>
              <div
                className="p-8"
                style={{
                  border: "1px solid rgba(200,184,154,0.12)",
                  backgroundColor: "rgba(26,51,40,0.2)",
                }}
              >
                <p className="section-label mb-4" style={{ color: "var(--land-beige-dark)" }}>Сейчас</p>
                <p className="block-title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)" }}>
                  Земля без инфраструктуры
                </p>
                <p className="body-text mt-4">
                  Цена отражает текущее состояние: отсутствие дорог, коммуникаций,
                  застройки. Именно поэтому она ниже рыночной. Это не недостаток —
                  это точка входа.
                </p>
                <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(200,184,154,0.1)" }}>
                  <span className="number-large" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>456 000 ₽</span>
                  <p className="body-text mt-1" style={{ fontSize: "0.8rem" }}>цена входа сегодня</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div
                className="p-8"
                style={{
                  border: "1px solid rgba(61,122,95,0.4)",
                  backgroundColor: "rgba(26,51,40,0.5)",
                }}
              >
                <p className="section-label mb-4" style={{ color: "var(--land-green-accent)" }}>Через 24 месяца</p>
                <p className="block-title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)" }}>
                  Сформированная локация
                </p>
                <p className="body-text mt-4">
                  Дороги, электричество, соседи с домами — всё это поднимает
                  стоимость участка кратно. Вы входите до этого момента
                  и выходите после него.
                </p>
                <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(61,122,95,0.2)" }}>
                  <span className="number-large" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "var(--land-green-accent)" }}>×2–3</span>
                  <p className="body-text mt-1" style={{ fontSize: "0.8rem" }}>расчётный рост стоимости</p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.3}>
            <p className="body-text mt-10 max-w-2xl" style={{ fontSize: "1rem" }}>
              Это не покупка дачи. Это вход в актив на ранней стадии — до того момента,
              когда цена вырастет вместе с районом.
            </p>
          </Reveal>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── ДИНАМИКА РОСТА ── */}
      <section className="py-32 px-6" style={{ backgroundColor: "var(--land-dark)" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="section-label">Динамика роста</span>
            <h2 className="block-title mt-4 max-w-xl">
              Как растёт стоимость по этапам
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-px" style={{ backgroundColor: "rgba(200,184,154,0.1)" }}>
            {[
              {
                period: "0–3 мес",
                label: "Вход",
                desc: "Покупка участка до начала инфраструктурных изменений. Минимальная цена.",
                price: "100%",
                color: "var(--land-beige-dark)",
              },
              {
                period: "3–9 мес",
                label: "Инфраструктура",
                desc: "Прокладка дорог, подключение электричества. Первый рост цены.",
                price: "130–150%",
                color: "var(--land-beige)",
              },
              {
                period: "9–18 мес",
                label: "Застройка",
                desc: "Активное строительство соседних участков. Локация становится живой.",
                price: "170–210%",
                color: "var(--land-green-accent)",
              },
              {
                period: "18–24 мес",
                label: "Выход",
                desc: "Сформированная среда. Пиковый спрос. Перепродажа по рыночной цене.",
                price: "200–300%",
                color: "var(--land-beige-light)",
              },
            ].map((step, i) => (
              <Reveal key={step.period} delay={i * 0.12}>
                <div
                  className="p-8 h-full"
                  style={{ backgroundColor: "var(--land-dark-2)" }}
                >
                  <p className="section-label mb-3">{step.period}</p>
                  <p
                    style={{
                      fontFamily: "'Cormorant', serif",
                      fontSize: "1.5rem",
                      fontWeight: 400,
                      color: step.color,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {step.label}
                  </p>
                  <p className="body-text" style={{ fontSize: "0.88rem" }}>{step.desc}</p>
                  <div className="mt-6 pt-4" style={{ borderTop: "1px solid rgba(200,184,154,0.1)" }}>
                    <span
                      style={{
                        fontFamily: "'Cormorant', serif",
                        fontSize: "2.2rem",
                        fontWeight: 300,
                        color: step.color,
                      }}
                    >
                      {step.price}
                    </span>
                    <p className="body-text" style={{ fontSize: "0.75rem", marginTop: "0.2rem" }}>от цены входа</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── МОДЕЛЬ ── */}
      <section className="py-32 px-6" style={{ backgroundColor: "var(--land-dark-2)" }}>
        <div className="max-w-6xl mx-auto text-center">
          <Reveal>
            <span className="section-label">Модель заработка</span>
          </Reveal>
          <Reveal delay={0.15}>
            <div
              className="mt-16 flex flex-col md:flex-row items-center justify-center gap-0"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {["Купил", "Подождал 24 мес", "Продал дороже"].map((step, i) => (
                <div key={step} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <span
                      style={{
                        fontSize: "clamp(2rem, 5vw, 4.5rem)",
                        fontWeight: 300,
                        color: i === 2 ? "var(--land-green-accent)" : "var(--land-beige-light)",
                        lineHeight: 1,
                      }}
                    >
                      {step}
                    </span>
                    <div
                      className="mt-2"
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        backgroundColor: i === 2 ? "var(--land-green-accent)" : "var(--land-beige-dark)",
                      }}
                    />
                  </div>
                  {i < 2 && (
                    <span
                      style={{
                        fontSize: "clamp(1.5rem, 3vw, 3rem)",
                        color: "var(--land-green-accent)",
                        margin: "0 1.5rem",
                        fontWeight: 300,
                      }}
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="body-text mt-10 max-w-lg mx-auto">
              Стратегия без сложностей. Земля дорожает вместе с районом —
              вы фиксируете прибыль при выходе.
            </p>
          </Reveal>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── ЦЕНА НИЖЕ РЫНКА ── */}
      <section className="py-32 px-6" style={{ backgroundColor: "var(--land-dark)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="section-label">Почему цена ниже рынка</span>
            <h2 className="block-title mt-4">
              Вы входите раньше,<br />чем приходят деньги
            </h2>
            <p className="body-text mt-6">
              Рынок закладывает в цену то, что уже существует: дороги, коммуникации,
              сформированный спрос. В Холмце этого ещё нет — и именно поэтому
              участок стоит ниже.
            </p>
            <p className="body-text mt-4">
              Когда инфраструктура появится — цена сделает шаг вверх автоматически.
              Ваша задача: зайти до этого момента.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="space-y-4">
              {[
                { label: "Участки со всеми коммуникациями", value: "850 000–1 200 000 ₽", highlight: false },
                { label: "Участки с дорогами и электричеством", value: "600 000–850 000 ₽", highlight: false },
                { label: "Холмец — вход до инфраструктуры", value: "от 456 000 ₽", highlight: true },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex justify-between items-center p-5"
                  style={{
                    border: `1px solid ${row.highlight ? "rgba(61,122,95,0.5)" : "rgba(200,184,154,0.1)"}`,
                    backgroundColor: row.highlight ? "rgba(26,51,40,0.5)" : "transparent",
                  }}
                >
                  <span
                    className="body-text"
                    style={{ fontSize: "0.88rem", color: row.highlight ? "var(--land-beige)" : "var(--land-beige-dark)" }}
                  >
                    {row.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Sans', sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: 400,
                      color: row.highlight ? "var(--land-green-accent)" : "var(--land-beige-dark)",
                      whiteSpace: "nowrap",
                      marginLeft: "1rem",
                    }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── ЛОКАЦИЯ ── */}
      <section className="py-32 px-6" style={{ backgroundColor: "var(--land-dark-2)" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="section-label">Локация</span>
            <h2 className="block-title mt-4">Холмец, Московская область</h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "Navigation",
                label: "150 км от Москвы",
                desc: "Оптимальное расстояние для дачной и жилой застройки. Доступность без московских цен.",
              },
              {
                icon: "Route",
                label: "Минское и Новорижское шоссе",
                desc: "Два крупных направления. Высокий спрос на участки вдоль этих трасс исторически.",
              },
              {
                icon: "TrendingUp",
                label: "Растущий район",
                desc: "Активное освоение территорий Подмосковья. Потенциал роста — несколько лет вперёд.",
              },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.12}>
                <div className="flex flex-col gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center"
                    style={{ border: "1px solid rgba(61,122,95,0.4)" }}
                  >
                    <Icon name={item.icon} size={18} style={{ color: "var(--land-green-accent)" }} />
                  </div>
                  <p
                    style={{
                      fontFamily: "'Cormorant', serif",
                      fontSize: "1.3rem",
                      fontWeight: 400,
                      color: "var(--land-beige)",
                    }}
                  >
                    {item.label}
                  </p>
                  <p className="body-text" style={{ fontSize: "0.9rem" }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── ФАКТОРЫ РОСТА ── */}
      <section className="py-32 px-6" style={{ backgroundColor: "var(--land-dark)" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="section-label">Факторы роста</span>
            <h2 className="block-title mt-4">
              Что поднимает стоимость участка
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px" style={{ backgroundColor: "rgba(200,184,154,0.08)" }}>
            {[
              { icon: "Gauge", label: "Дороги", desc: "Грунтовка → твёрдое покрытие. Доступность = спрос" },
              { icon: "Zap", label: "Электричество", desc: "Основная коммуникация для строительства дома" },
              { icon: "Building2", label: "Развитие района", desc: "Новые объекты, магазины, школы поднимают привлекательность" },
              { icon: "Users", label: "Рост спроса", desc: "Подмосковная земля дорожает системно каждый год" },
            ].map((f, i) => (
              <Reveal key={f.label} delay={i * 0.1}>
                <div className="p-8" style={{ backgroundColor: "var(--land-dark-2)" }}>
                  <Icon name={f.icon} size={22} style={{ color: "var(--land-green-accent)", marginBottom: "1rem" }} />
                  <p
                    style={{
                      fontFamily: "'Cormorant', serif",
                      fontSize: "1.4rem",
                      fontWeight: 400,
                      color: "var(--land-beige)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {f.label}
                  </p>
                  <p className="body-text" style={{ fontSize: "0.85rem" }}>{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── СЦЕНАРИИ ── */}
      <section className="py-32 px-6" style={{ backgroundColor: "var(--land-dark-2)" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="section-label">Сценарии выхода</span>
            <h2 className="block-title mt-4">Два пути к прибыли</h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="p-10" style={{ border: "1px solid rgba(200,184,154,0.12)", backgroundColor: "var(--land-dark)" }}>
                <span className="section-label">Сценарий 01</span>
                <h3
                  style={{
                    fontFamily: "'Cormorant', serif",
                    fontSize: "2rem",
                    fontWeight: 300,
                    color: "var(--land-beige)",
                    margin: "1rem 0",
                  }}
                >
                  Перепродажа участка
                </h3>
                <p className="body-text">
                  Купить → подождать развития района → продать по рыночной цене.
                  Минимальные усилия, максимальная ликвидность.
                </p>
                <div className="mt-6 pt-6 space-y-2" style={{ borderTop: "1px solid rgba(200,184,154,0.08)" }}>
                  <div className="flex justify-between body-text" style={{ fontSize: "0.85rem" }}>
                    <span>Горизонт</span><span style={{ color: "var(--land-beige)" }}>18–24 месяца</span>
                  </div>
                  <div className="flex justify-between body-text" style={{ fontSize: "0.85rem" }}>
                    <span>Трудозатраты</span><span style={{ color: "var(--land-beige)" }}>Минимальные</span>
                  </div>
                  <div className="flex justify-between body-text" style={{ fontSize: "0.85rem" }}>
                    <span>Расчётный рост</span><span style={{ color: "var(--land-green-accent)" }}>×2–3</span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-10" style={{ border: "1px solid rgba(61,122,95,0.25)", backgroundColor: "rgba(26,51,40,0.3)" }}>
                <span className="section-label">Сценарий 02</span>
                <h3
                  style={{
                    fontFamily: "'Cormorant', serif",
                    fontSize: "2rem",
                    fontWeight: 300,
                    color: "var(--land-beige)",
                    margin: "1rem 0",
                  }}
                >
                  Построить дом и продать дороже
                </h3>
                <p className="body-text">
                  Возведение дома на участке кратно увеличивает стоимость объекта.
                  Продажа готового дома в сформированной локации — другой ценовой уровень.
                </p>
                <div className="mt-6 pt-6 space-y-2" style={{ borderTop: "1px solid rgba(61,122,95,0.15)" }}>
                  <div className="flex justify-between body-text" style={{ fontSize: "0.85rem" }}>
                    <span>Горизонт</span><span style={{ color: "var(--land-beige)" }}>24–36 месяцев</span>
                  </div>
                  <div className="flex justify-between body-text" style={{ fontSize: "0.85rem" }}>
                    <span>Трудозатраты</span><span style={{ color: "var(--land-beige)" }}>Активные</span>
                  </div>
                  <div className="flex justify-between body-text" style={{ fontSize: "0.85rem" }}>
                    <span>Расчётный рост</span><span style={{ color: "var(--land-green-accent)" }}>×3–5</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── БЕЗОПАСНОСТЬ ── */}
      <section className="py-32 px-6" style={{ backgroundColor: "var(--land-dark)" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="section-label">Юридическая безопасность</span>
            <h2 className="block-title mt-4">
              Ваш актив защищён документально
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "01", label: "Право собственности", desc: "Оформление в Росреестре. Полное юридическое право на объект." },
              { num: "02", label: "Кадастровый номер", desc: "Уникальный номер участка. Публичная кадастровая карта." },
              { num: "03", label: "Договор купли-продажи", desc: "Официальный ДКП с указанием всех существенных условий." },
              { num: "04", label: "Государственная регистрация", desc: "Переход права зарегистрирован в ЕГРН." },
            ].map((item, i) => (
              <Reveal key={item.num} delay={i * 0.1}>
                <div>
                  <p
                    style={{
                      fontFamily: "'Cormorant', serif",
                      fontSize: "3.5rem",
                      fontWeight: 300,
                      color: "rgba(200,184,154,0.15)",
                      lineHeight: 1,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {item.num}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Cormorant', serif",
                      fontSize: "1.2rem",
                      fontWeight: 400,
                      color: "var(--land-beige)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.label}
                  </p>
                  <p className="body-text" style={{ fontSize: "0.85rem" }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── ДЕФИЦИТ ── */}
      <section className="py-32 px-6" style={{ backgroundColor: "var(--land-dark-2)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="section-label">Ограниченное предложение</span>
            <h2 className="block-title mt-4">
              Участков мало.<br />Цена растёт по мере продаж.
            </h2>
            <p className="body-text mt-6">
              Каждый проданный участок увеличивает плотность спроса и поднимает
              стоимость оставшихся. Это системная механика: чем ближе к финалу продаж,
              тем выше цена входа.
            </p>
            <p className="body-text mt-4">
              Войти сейчас — значит зафиксировать минимальную цену.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="space-y-6">
              <div
                className="p-6"
                style={{
                  border: "1px solid rgba(200,184,154,0.12)",
                  backgroundColor: "var(--land-dark)",
                }}
              >
                <div className="flex justify-between items-baseline mb-3">
                  <span className="section-label">Доступно сейчас</span>
                  <span
                    style={{
                      fontFamily: "'Cormorant', serif",
                      fontSize: "2.5rem",
                      fontWeight: 300,
                      color: "var(--land-green-accent)",
                    }}
                  >
                    ограничено
                  </span>
                </div>
                <div
                  className="h-2 w-full"
                  style={{ backgroundColor: "rgba(200,184,154,0.1)", borderRadius: "2px" }}
                >
                  <div
                    style={{
                      width: "35%",
                      height: "100%",
                      backgroundColor: "var(--land-green-accent)",
                      borderRadius: "2px",
                    }}
                  />
                </div>
                <p className="body-text mt-2" style={{ fontSize: "0.8rem" }}>
                  Часть участков уже продана
                </p>
              </div>
              <div
                className="p-6"
                style={{ border: "1px solid rgba(200,184,154,0.12)", backgroundColor: "var(--land-dark)" }}
              >
                <p className="section-label mb-2">Динамика цены</p>
                <p className="body-text" style={{ fontSize: "0.9rem" }}>
                  Цена пересматривается по мере продаж. Следующая очередь — дороже.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── ФИНАЛ ── */}
      <section id="final-form" className="py-40 px-6" style={{ backgroundColor: "var(--land-dark)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="section-label">Расчёт доходности</span>
            <h2
              style={{
                fontFamily: "'Cormorant', serif",
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                fontWeight: 300,
                lineHeight: 1.05,
                color: "var(--land-beige-light)",
                marginTop: "1.5rem",
              }}
            >
              Земля дешевеет только один раз —<br />
              <span style={{ color: "var(--land-beige)", fontStyle: "italic" }}>прямо сейчас</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="body-text mt-8 max-w-xl mx-auto">
              Через 24 месяца этот участок будет стоить дороже. Это не прогноз —
              это механика: инфраструктура строится, район развивается, спрос растёт.
              Вопрос только в том, войдёте ли вы до или после.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto">
              {[
                { value: "456 000 ₽", label: "вход от" },
                { value: "×2–3", label: "рост стоимости" },
                { value: "24 мес", label: "горизонт" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    style={{
                      fontFamily: "'Cormorant', serif",
                      fontSize: "clamp(1.4rem, 3vw, 2rem)",
                      fontWeight: 300,
                      color: "var(--land-beige)",
                    }}
                  >
                    {s.value}
                  </p>
                  <p className="body-text mt-1" style={{ fontSize: "0.75rem" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="mt-14">
              <CTA />
            </div>
            <p className="body-text mt-6" style={{ fontSize: "0.8rem" }}>
              Оставьте контакт — пришлём индивидуальный расчёт по вашему бюджету
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 px-6" style={{ borderTop: "1px solid rgba(200,184,154,0.08)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="section-label">Холмец · Московская область</p>
          <p className="body-text" style={{ fontSize: "0.78rem" }}>
            Информация носит ознакомительный характер. Рост стоимости не гарантирован.
          </p>
        </div>
      </footer>
    </div>
  );
}