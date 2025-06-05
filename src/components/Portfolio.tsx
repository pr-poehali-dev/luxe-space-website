const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Пентхаус Москва-Сити",
      category: "Жилой комплекс",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053",
      description: "400 м² элитного жилья с панорамными окнами",
    },
    {
      id: 2,
      title: "Загородная резиденция",
      category: "Частный дом",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075",
      description: "Современная архитектура в гармонии с природой",
    },
    {
      id: 3,
      title: "Бутик-отель",
      category: "Коммерческий объект",
      image:
        "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=2070",
      description: "Роскошный интерьер в стиле современной классики",
    },
    {
      id: 4,
      title: "Офис премиум-класса",
      category: "Офисное пространство",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070",
      description: "Минималистичный дизайн с акцентом на функциональность",
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Портфолио
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Реализованные проекты, которыми мы гордимся
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-gray-800 hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-yellow-500 text-black text-sm font-semibold rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
