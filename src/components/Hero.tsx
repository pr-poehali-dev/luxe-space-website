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
        {/* Logo */}
        <div className="mb-8">
          <img
            src="https://cdn.poehali.dev/files/e3b9acff-c083-457c-8587-918045e553ce.jpg"
            alt="LuxeSpace Logo"
            className="h-32 md:h-40 mx-auto mb-6 filter brightness-110"
          />
        </div>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light leading-relaxed">
          Премиальное строительство и дизайн интерьеров
          <br />
          для самых взыскательных клиентов
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Наши проекты
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-8 py-4 text-lg transition-all duration-300 shadow-lg"
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
