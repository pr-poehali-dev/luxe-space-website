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
    <section className="py-24 bg-zinc-900">
      <div className="container mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-8 tracking-tight">
            Портфолио
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto font-light leading-relaxed">
            Реализованные проекты, которыми мы гордимся
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden bg-zinc-800/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-700 border border-zinc-700/50"
            >
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-black text-sm font-medium tracking-wide mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-light mb-3 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-zinc-300 font-light leading-relaxed">
                    {project.description}
                  </p>
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
