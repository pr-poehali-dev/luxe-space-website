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
    <section className="py-24 bg-zinc-50">
      <div className="container mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-zinc-900 mb-8 tracking-tight">
            Наши услуги
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto font-light leading-relaxed">
            Полный спектр услуг премиального строительства и дизайна
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-6 pt-12">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-amber-500/20 group-hover:to-yellow-500/20 transition-all duration-300 border border-amber-500/20">
                  <Icon
                    name={service.icon}
                    size={36}
                    className="text-amber-600"
                  />
                </div>
                <CardTitle className="text-2xl font-light text-zinc-900 group-hover:text-amber-600 transition-colors tracking-wide">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-12">
                <p className="text-zinc-600 leading-relaxed text-center font-light">
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
