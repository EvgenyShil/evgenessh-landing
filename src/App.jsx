import React from "react";
import { Wifi, Router, Camera, Home, Sprout, Clock, ShieldCheck, Wrench, MapPin, Link as LinkIcon } from "lucide-react";

const BRAND = "Мастер связи";
const AVITO_URL = "https://www.avito.ru/vatutinki/predlozheniya_uslug/internet_na_dache_mesh_wi-fi_kamery_umnyy_dom_7566728669";

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="scroll-mt-24 py-16 sm:py-24">
    <div className="mx-auto max-w-6xl px-4">
      <div className="mb-10">
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">{title}</h2>
        {subtitle && <p className="mt-3 text-slate-600 max-w-3xl">{subtitle}</p>}
      </div>
      {children}
    </div>
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">{children}</span>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}>{children}</div>
);

const CardHeader = ({ Icon, title, text }) => (
  <div className="flex items-start gap-4 p-6">
    {Icon && (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
        <Icon className="h-6 w-6 text-amber-700" />
      </div>
    )}
    <div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      {text && <p className="mt-1 text-slate-600">{text}</p>}
    </div>
  </div>
);

// CTA без телефона и почты — только Avito
const CTAButtons = () => (
  <div className="flex flex-wrap items-center gap-3">
    <a
      href={AVITO_URL}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-3 font-semibold text-emerald-800 hover:bg-emerald-100"
    >
      <LinkIcon className="h-5 w-5" /> Оставить заявку на Avito
    </a>
  </div>
);

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-emerald-50 to-white text-slate-900">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-emerald-100/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="font-extrabold tracking-tight text-slate-900">
            {BRAND}
            <span className="ml-2 inline-block rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
              IT‑инженер
            </span>
          </a>
          <nav className="hidden gap-6 md:flex text-sm font-medium">
            <a href="#services" className="hover:text-emerald-700">Услуги</a>
            <a href="#pricing" className="hover:text-emerald-700">Цены</a>
            <a href="#cases" className="hover:text-emerald-700">Кейсы</a>
            <a href="#process" className="hover:text-emerald-700">Как работаю</a>
            <a href="#contacts" className="hover:text-emerald-700">Контакты</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-16 sm:py-24 md:grid-cols-2">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              <Pill><MapPin className="mr-1 h-4 w-4"/>Москва и Новая Москва</Pill>
              <Pill>Выезд и монтаж «под ключ»</Pill>
              <Pill>Аккуратно, чисто, без лишних дыр</Pill>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              Интернет на даче • Mesh Wi‑Fi • Камеры • Умный дом
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-700">
              Быстрый интернет (4G/5G/LTE), стабильный Wi‑Fi по дому и участку, видеонаблюдение и умная автоматика. Подбор, монтаж и настройка.
            </p>
            <div className="mt-8"><CTAButtons /></div>
          </div>
          <div className="relative">
            <img src="/hero.jpg" alt="Уличная антенна и аккуратная прокладка кабеля" className="w-full rounded-3xl ring-1 ring-emerald-200/60 shadow" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section id="services" title="Что делаю" subtitle="Подбираю оборудование, настраиваю, прокладываю кабель и аккуратно монтирую. Поясняю простыми словами и оставляю подсказки по управлению.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card><CardHeader Icon={Router} title="Интернет на даче" text="4G/5G/LTE‑роутеры, уличные антенны, усиление сигнала. Замер уровня и оптимальная точка установки." /></Card>
          <Card><CardHeader Icon={Wifi} title="Wi‑Fi по всему дому" text="Mesh‑системы, точки доступа внутри и на улице, бесшовный роуминг, гостевые сети." /></Card>
          <Card><CardHeader Icon={Camera} title="Видеонаблюдение" text="IP‑камеры, запись на регистратор или в облако, удалённый доступ, уведомления о движении." /></Card>
          <Card><CardHeader Icon={Home} title="Умный дом" text="Датчики протечки и дыма, умные розетки/реле, сценарии освещения, удалённое управление." /></Card>
          <Card><CardHeader Icon={Wrench} title="Диагностика и настройка" text="Решу проблемы со скоростью, обрывами, двоением Wi‑Fi, конфликтами оборудования." /></Card>
          <Card><CardHeader Icon={ShieldCheck} title="Чистый монтаж" text="Кабель‑каналы, гермобоксы, маркировка. Опрятно и надолго." /></Card>
        </div>
      </Section>

      {/* PRICING */}
      <Section id="pricing" title="Примеры цен" subtitle="Итоговая стоимость зависит от задачи и выбранного оборудования. Точно скажу после короткой диагностики на месте или по фото/видео объекта.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6">
            <h3 className="text-xl font-bold">Интернет + антенна</h3>
            <p className="mt-2 text-slate-600">Подбор, монтаж, настройка</p>
            <p className="mt-4 text-3xl font-extrabold">от 4 500 ₽</p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• Замер уровня сигнала</li>
              <li>• Компактный гермобокс</li>
              <li>• Проверка скорости</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold">Mesh Wi‑Fi / точки доступа</h3>
            <p className="mt-2 text-slate-600">Роуминг без разрывов</p>
            <p className="mt-4 text-3xl font-extrabold">от 3 500 ₽ / точка</p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• План размещения</li>
              <li>• Скрытая прокладка</li>
              <li>• Гостевая сеть</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold">Камеры наблюдения</h3>
            <p className="mt-2 text-slate-600">Улица/дом, запись и удалённый доступ</p>
            <p className="mt-4 text-3xl font-extrabold">от 2 500 ₽ / камера</p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• Настройка уведомлений</li>
              <li>• Проксировка в интернет</li>
              <li>• Короткий гайд по приложению</li>
            </ul>
          </Card>
        </div>
        <p className="mt-6 text-sm text-slate-500">Цены указаны за работы. Оборудование подбирается под бюджет и задачи; предоставлю варианты.</p>
      </Section>

      {/* CASES */}
      <Section id="cases" title="Кейсы" subtitle="Пару примеров типовых задач, которые закрываю за 1–2 визита.">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <div className="h-48 rounded-t-2xl bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.35),_transparent_60%)]" />
            <div className="p-6">
              <h4 className="font-semibold">Полив + Wi‑Fi на участке</h4>
              <p className="mt-1 text-sm text-slate-600">Контроллер полива, уличная точка доступа, датчики влажности. Управление со смартфона.</p>
            </div>
          </Card>
          <Card>
            <div className="h-48 rounded-t-2xl bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.35),_transparent_60%)]" />
            <div className="p-6">
              <h4 className="font-semibold">Камеры и уличное освещение</h4>
              <p className="mt-1 text-sm text-slate-600">IP‑камеры с записью, датчик движения, сценарии подсветки крыльца.</p>
            </div>
          </Card>
          <Card>
            <div className="h-48 rounded-t-2xl bg-[radial-gradient(ellipse_at_center,_rgba(52,211,153,0.35),_transparent_60%)]" />
            <div className="p-6">
              <h4 className="font-semibold">Усиление 4G/5G</h4>
              <p className="mt-1 text-sm text-slate-600">Настроенная MIMO‑антенна и гермобокс. Скорость выросла в 3–5 раз.</p>
            </div>
          </Card>
        </div>
      </Section>

      {/* PROCESS */}
      <Section id="process" title="Как работаю" subtitle="Просто и прозрачно — без навязанного железа и лишних услуг.">
        <div className="grid gap-6 md:grid-cols-2">
          <Card><CardHeader Icon={Clock} title="1. Диагностика / консультация" text="Удалённо по фото/видео или выезд на объект. Понимаю задачи и оцениваю варианты." /></Card>
          <Card><CardHeader Icon={Sprout} title="2. Подбор решения" text="Несколько конфигураций под бюджет: от базового до максимально надёжного." /></Card>
          <Card><CardHeader Icon={Wrench} title="3. Монтаж и настройка" text="Чисто, аккуратно, с маркировкой и проверкой скорости/качества связи." /></Card>
          <Card><CardHeader Icon={ShieldCheck} title="4. Передача и поддержка" text="Короткий гайд по управлению, рекомендации по эксплуатации. Поддержка по договорённости." /></Card>
        </div>
      </Section>

      {/* CONTACTS */}
      <Section id="contacts" title="Контакты">
        <Card className="p-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-emerald-700"/>
                <span>Москва и Новая Москва • выезд по договорённости</span>
              </div>
              <div className="flex items-center gap-3">
                <LinkIcon className="h-5 w-5 text-emerald-700"/>
                <a className="hover:underline" href={AVITO_URL} target="_blank" rel="noreferrer">Объявление на Avito</a>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-slate-700">Опишите задачу в свободной форме: адрес (посёлок/село), что нужно сделать, желаемые сроки и бюджет. Если сможете — приложите пару фото объекта.</p>
              <CTAButtons />
            </div>
          </div>
        </Card>
      </Section>

      <footer className="border-t border-emerald-100/60 bg-white/60 py-8">
        <div className="mx-auto max-w-6xl px-4 text-sm text-slate-500">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row">
            <p>© {new Date().getFullYear()} {BRAND}. Интернет на даче, Wi‑Fi, камеры, умный дом.</p>
            <p>Сделано на React + Tailwind. Готов к развёртыванию на Vercel.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
