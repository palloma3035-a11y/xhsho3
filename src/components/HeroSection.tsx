
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Decorative Islamic Pattern Background */}
      <div className="absolute inset-0 islamic-pattern opacity-50" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 rounded-full bg-gold/5 blur-3xl" />

      <div className="container relative z-10 px-4 text-center">
        {/* Decorative Arc */}
        <div className="mb-8 animate-fade-in">
          <svg
            className="w-20 h-12 mx-auto text-gold opacity-60"
            viewBox="0 0 80 40"
            fill="none"
          >
            <path
              d="M5 35 C5 15, 40 5, 75 35"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="40" cy="8" r="4" fill="currentColor" />
          </svg>
        </div>

        <p
          className="text-gold font-medium tracking-wider uppercase text-sm mb-4 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          {t('hero.welcome')}
        </p>

        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          {t('hero.title')}
          <span className="block text-gold mt-2">{t('hero.subtitle')}</span>
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          {t('hero.description')}
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#prayer-times">{t('hero.viewPrayerTimes')}</a>
          </Button>
          <Button variant="gold-outline" size="lg" asChild>
            <a href="#about">{t('hero.learnMore')}</a>
          </Button>
        </div>

      </div>
    </section>
  );
};
