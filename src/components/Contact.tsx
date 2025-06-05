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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Контакты
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами для обсуждения вашего проекта
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow border-0 bg-white"
            >
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={info.icon} size={28} className="text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-lg text-slate-800 font-medium mb-1">
                  {info.details}
                </p>
                <p className="text-gray-600 text-sm">{info.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Готовы обсудить ваш проект?
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            Запишитесь на бесплатную консультацию с нашими экспертами
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg"
            >
              Заказать звонок
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-4 text-lg"
            >
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
