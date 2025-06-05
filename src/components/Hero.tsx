import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-slate-900 to-black text-white overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20 z-10"></div>

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070')",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-8">
        {/* Logo */}
        <div className="mb-12">
          <img
            src="https://cdn.poehali.dev/files/e3b9acff-c083-457c-8587-918045e553ce.jpg"
            alt="LuxeSpace Logo"
            className="h-36 md:h-44 mx-auto mb-8 filter brightness-110 drop-shadow-2xl"
          />
        </div>

        <p className="text-xl md:text-3xl text-zinc-200 mb-12 font-light leading-relaxed tracking-wide max-w-4xl mx-auto">
          Премиальное строительство и дизайн интерьеров
          <br />
          <span className="text-lg md:text-xl text-zinc-400 font-extralight mt-4 block">
            для самых взыскательных клиентов
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-medium px-10 py-4 text-base transition-all duration-300 hover:scale-105 shadow-2xl border-0 tracking-wide"
          >
            НАШИ ПРОЕКТЫ
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-amber-400/60 text-amber-400 hover:bg-amber-400/10 hover:border-amber-400 backdrop-blur-sm px-10 py-4 text-base transition-all duration-300 shadow-xl tracking-wide"
          >
            КОНСУЛЬТАЦИЯ
          </Button>
        </div>

        {/* Decorative line */}
        <div className="mt-16 flex justify-center">
          <div className="w-px h-16 bg-gradient-to-b from-amber-400/60 to-transparent"></div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-8 h-12 border border-amber-400/60 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-4 bg-amber-400 rounded-full mt-3 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
