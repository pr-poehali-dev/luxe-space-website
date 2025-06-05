import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070')",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <div className="mb-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className="text-white">Luxe</span>
            <span className="text-yellow-400 ml-2">Space</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
        </div>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light leading-relaxed">
          Премиальное строительство и дизайн интерьеров
          <br />
          для самых взыскательных клиентов
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
          >
            Наши проекты
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 text-lg transition-all duration-300"
          >
            Консультация
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
