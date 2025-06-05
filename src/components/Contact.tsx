import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      details: "+7 (495) 123-45-67",
      subtitle: "Звоните с 9:00 до 21:00",
    },
    {
      icon: "Mail",
      title: "Email",
      details: "info@luxespace.ru",
      subtitle: "Ответим в течение часа",
    },
    {
      icon: "MapPin",
      title: "Офис",
      details: "Москва, ул. Тверская, 15",
      subtitle: "Приезжайте на консультацию",
    },
  ];

  return (
    <section className="py-24 bg-zinc-50">
      <div className="container mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-zinc-900 mb-8 tracking-tight">
            Контакты
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto font-light leading-relaxed">
            Свяжитесь с нами для обсуждения вашего проекта
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-1"
            >
              <CardContent className="pt-12 pb-10">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-500/20">
                  <Icon name={info.icon} size={32} className="text-amber-600" />
                </div>
                <h3 className="text-2xl font-light text-zinc-900 mb-3 tracking-wide">
                  {info.title}
                </h3>
                <p className="text-lg text-zinc-800 font-medium mb-2">
                  {info.details}
                </p>
                <p className="text-zinc-600 text-sm font-light">
                  {info.subtitle}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-12 md:p-16 shadow-xl max-w-5xl mx-auto text-center border border-zinc-200/50">
          <h3 className="text-4xl font-light text-zinc-900 mb-6 tracking-wide">
            Готовы обсудить ваш проект?
          </h3>
          <p className="text-zinc-600 mb-10 text-xl font-light leading-relaxed">
            Запишитесь на бесплатную консультацию с нашими экспертами
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-medium px-10 py-4 text-base tracking-wide transition-all duration-300"
            >
              ЗАКАЗАТЬ ЗВОНОК
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-zinc-300 text-zinc-700 hover:bg-zinc-100 hover:border-zinc-400 px-10 py-4 text-base tracking-wide transition-all duration-300"
            >
              НАПИСАТЬ В WHATSAPP
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
