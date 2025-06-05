import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Building2",
      title: "Премиальное строительство",
      description:
        "Элитные жилые комплексы, частные резиденции и коммерческие объекты с использованием передовых технологий и материалов высочайшего качества.",
    },
    {
      icon: "Palette",
      title: "Дизайн интерьеров",
      description:
        "Индивидуальные дизайн-проекты интерьеров в стиле luxury. От концепции до полной реализации с вниманием к каждой детали.",
    },
    {
      icon: "Hammer",
      title: "Отделочные работы",
      description:
        "Высококлассная внутренняя отделка с использованием эксклюзивных материалов: мрамор, натуральное дерево, дизайнерская плитка.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Наши услуги
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр услуг премиального строительства и дизайна
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500/20 transition-colors">
                  <Icon
                    name={service.icon}
                    size={32}
                    className="text-yellow-600"
                  />
                </div>
                <CardTitle className="text-2xl text-slate-900 group-hover:text-yellow-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-center">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
