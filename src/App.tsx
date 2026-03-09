/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Zap, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle, 
  XCircle,
  ArrowRight,
  Car,
  Search,
  Wallet,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';

const FORM_URL = "https://b24-222bml.bitrix24.site/crm_form_wedha/";

const Nav = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-bottom border-black/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <Car className="text-white w-6 h-6" />
        </div>
        <span className="text-2xl font-bold tracking-tighter">АВТОМАРКЕТ</span>
      </div>
      <div className="hidden md:flex items-center gap-8 font-medium">
        <a href="#about" className="hover:text-primary transition-colors">О сервисе</a>
        <a href="#pricing" className="hover:text-primary transition-colors">Цены</a>
        <a href="#locations" className="hover:text-primary transition-colors">Где мы</a>
      </div>
      <a href={FORM_URL} className="alfa-button !py-2 !px-6 text-sm">
        Записаться
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-32 pb-20 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <Zap className="w-4 h-4" />
          Экспресс-проверка за 30 минут
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
          Не покупай <br />
          <span className="text-primary">«кота в мешке»</span>
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-lg">
          Быстрая и недорогая проверка авто перед покупкой. Отсеиваем «убитые» варианты, пока вы не потратили время и деньги на СТО.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href={FORM_URL} className="alfa-button text-lg">
            Проверить авто за 1000 сом
            <ArrowRight className="w-5 h-5" />
          </a>
          <div className="flex items-center gap-3 px-4 py-2">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="user" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <span className="text-sm text-gray-500 font-medium">Более 500 проверок в месяц</span>
          </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://picsum.photos/seed/car-check/800/600" 
            alt="Car inspection" 
            className="w-full h-auto"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-lg border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold">Отчет «Светофор»</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-bold">NEW</span>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1 h-2 bg-yellow-400 rounded-full opacity-30"></div>
              <div className="flex-1 h-2 bg-red-500 rounded-full opacity-30"></div>
            </div>
            <p className="text-sm mt-3 text-gray-600">Зеленый свет: Автомобиль в отличном состоянии, можно брать!</p>
          </div>
        </div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
      </motion.div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      icon: <Wallet className="w-8 h-8 text-primary" />,
      title: "Цена ужина",
      desc: "Всего 1000 сом за полную проверку. Это в 3 раза дешевле, чем на обычном СТО."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Формат «Экспресс»",
      desc: "Кузов, сканирование, визуальный осмотр и юр. чистота — всё за 30 минут."
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Шаговая доступность",
      desc: "Мы там, где вы выбираете авто: у авторынков, ГРС, на АЗС и парковках ТЦ."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Вердикт в WhatsApp",
      desc: "Понятный отчет «Светофор». Не нужно быть экспертом, чтобы понять результат."
    }
  ];

  return (
    <section id="about" className="py-24 bg-bg-grey px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Почему выбирают нас</h2>
        <p className="section-subtitle">Мы создали сервис, который делает покупку подержанного авто безопасной и простой.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="alfa-card"
            >
              <div className="mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrafficLight = () => (
  <section className="py-24 px-6">
    <div className="max-w-7xl mx-auto bg-dark-grey rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden relative">
      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Отчет «Светофор» — <br />просто и понятно</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-green-500 flex-shrink-0 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Зеленый — Можно брать</h4>
                <p className="text-gray-400">Автомобиль прошел проверку, критических дефектов не обнаружено.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-yellow-400 flex-shrink-0 flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.4)]">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Желтый — На детальное СТО</h4>
                <p className="text-gray-400">Есть вопросы. Дарим скидку на партнерское СТО для глубокой диагностики.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-red-500 flex-shrink-0 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                <XCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Красный — Отказ</h4>
                <p className="text-gray-400">Обнаружены серьезные проблемы. Не рекомендуем к покупке.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm w-full max-w-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Car className="text-white" />
              </div>
              <div>
                <div className="font-bold">Toyota Camry, 2018</div>
                <div className="text-xs text-gray-500">ID Проверки: #88291</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                <span className="text-sm">Кузов (ЛКП)</span>
                <Check className="text-green-500 w-4 h-4" />
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                <span className="text-sm">Комп. диагностика</span>
                <Check className="text-green-500 w-4 h-4" />
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                <span className="text-sm">Юр. чистота</span>
                <Check className="text-green-500 w-4 h-4" />
              </div>
              <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-center">
                <span className="text-green-400 font-bold">РЕКОМЕНДОВАНО</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent"></div>
    </div>
  </section>
);

const Comparison = () => (
  <section className="py-24 px-6 bg-bg-grey">
    <div className="max-w-7xl mx-auto">
      <h2 className="section-title">Автомаркет vs Другие</h2>
      <p className="section-subtitle">Зачем платить больше и ждать дольше?</p>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="alfa-card opacity-60">
          <h3 className="text-xl font-bold mb-6">Обычное СТО</h3>
          <ul className="space-y-4 text-gray-500">
            <li className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              Цена ~3000 сом
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              Нужно записываться заранее
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              Сложные тех. заключения
            </li>
          </ul>
        </div>

        <div className="alfa-card border-primary ring-2 ring-primary/20 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
            ЛУЧШИЙ ВЫБОР
          </div>
          <h3 className="text-xl font-bold mb-6">Автомаркет</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span className="font-bold">Цена 1000 сом</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              Без записи, за 30 минут
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              Понятный отчет «Светофор»
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              Локации у авторынков
            </li>
          </ul>
        </div>

        <div className="alfa-card opacity-60">
          <h3 className="text-xl font-bold mb-6">Автоподборщики</h3>
          <ul className="space-y-4 text-gray-500">
            <li className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              Дорого при разовых выездах
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              Нужно ждать приезда эксперта
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              Человеческий фактор
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-24 px-6">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="section-title mx-auto">Прозрачные тарифы</h2>
      <p className="section-subtitle mx-auto">Никаких скрытых платежей. Выбирайте подходящий пакет.</p>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
        <div className="alfa-card text-left">
          <div className="text-primary font-bold mb-2">Разовая проверка</div>
          <div className="text-4xl font-bold mb-6">1 000 сом</div>
          <ul className="space-y-3 mb-8 text-gray-600">
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Проверка кузова (толщиномер)</li>
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Компьютерная диагностика</li>
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Визуальный осмотр узлов</li>
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Проверка юр. чистоты</li>
          </ul>
          <a href={FORM_URL} className="alfa-button w-full">Выбрать</a>
        </div>
        
        <div className="alfa-card text-left border-primary bg-primary/5">
          <div className="flex justify-between items-start">
            <div className="text-primary font-bold mb-2">Пакет «Выбор»</div>
            <span className="bg-primary text-white text-[10px] px-2 py-1 rounded font-bold uppercase">Выгодно</span>
          </div>
          <div className="text-4xl font-bold mb-6">2 500 сом</div>
          <div className="text-sm text-primary font-bold mb-6">3 проверки (833 сом за авто)</div>
          <ul className="space-y-3 mb-8 text-gray-600">
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Все услуги разовой проверки</li>
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Приоритетное обслуживание</li>
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Срок действия — 30 дней</li>
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Консультация эксперта</li>
          </ul>
          <a href={FORM_URL} className="alfa-button w-full">Выбрать пакет</a>
        </div>
      </div>
    </div>
  </section>
);

const SellerSection = () => (
  <section className="py-24 px-6 bg-dark-grey text-white">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="order-2 md:order-1">
        <img 
          src="https://picsum.photos/seed/seller/800/800" 
          alt="Seller checking car" 
          className="rounded-3xl shadow-2xl"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="order-1 md:order-2">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Продаете авто? <br /><span className="text-primary">Продайте быстрее!</span></h2>
        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
          Получите независимый электронный отчет и прикрепите его к объявлению. Это повышает доверие покупателей на 70% и ускоряет продажу.
        </p>
        <div className="space-y-6 mb-10">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <span>Меньше лишних вопросов от покупателей</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <span>Подтвержденное состояние кузова и агрегатов</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <span>Готовый PDF-отчет для WhatsApp и соцсетей</span>
          </div>
        </div>
        <a href={FORM_URL} className="alfa-button-outline !border-white !text-white hover:!bg-white/10">
          Получить отчет продавца
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-black/5 py-12 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Car className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tighter">АВТОМАРКЕТ</span>
        </div>
        <div className="flex gap-8 text-sm text-gray-500 font-medium">
          <a href="#" className="hover:text-primary">Политика конфиденциальности</a>
          <a href="#" className="hover:text-primary">Публичная оферта</a>
          <a href="#" className="hover:text-primary">Партнерам</a>
        </div>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">
            <Car className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Автомаркет. Все права защищены. Сервис экспресс-диагностики автомобилей.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Features />
      <TrafficLight />
      <Comparison />
      <Pricing />
      <SellerSection />
      
      <section id="locations" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="alfa-card bg-primary text-white p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Готовы к проверке?</h2>
              <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
                Найдите ближайшую точку «Автомаркет» или запишитесь на удобное время прямо сейчас.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={FORM_URL} className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl">
                  Записаться онлайн
                </a>
                <button className="border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors">
                  Найти на карте
                </button>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
