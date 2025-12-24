import { Users, Heart, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const AboutSection = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      titleKey: 'about.community',
      descKey: 'about.communityDesc',
    },
    {
      icon: BookOpen,
      titleKey: 'about.education',
      descKey: 'about.educationDesc',
    },
    {
      icon: Users,
      titleKey: 'about.integration',
      descKey: 'about.integrationDesc',
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <p className="text-gold font-medium tracking-wider uppercase text-sm mb-3">
                {t('about.label')}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t('about.title')}
                <span className="text-gold">{t('about.titleHighlight')}</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t('about.p1')}</p>
                <p>{t('about.p2')}</p>
                <p>{t('about.p3')}</p>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Decorative Background */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/10 to-gold/5 islamic-pattern" />
                
                {/* Inner Content */}
                <div className="absolute inset-8 rounded-2xl bg-card shadow-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-gold"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M12 2L12 6M12 22L12 18M2 12L6 12M22 12L18 12" />
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 8C12 8 9 10 9 12C9 14 12 16 12 16C12 16 15 14 15 12C15 10 12 8 12 8Z" />
                      </svg>
                    </div>
                    <p className="text-2xl font-bold text-foreground mb-2">
                      {t('about.since')}
                    </p>
                    <p className="text-muted-foreground">
                      {t('about.serving')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {values.map((value, index) => (
              <div
                key={value.titleKey}
                className="card-elevated group hover:shadow-gold transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mb-4 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {t(value.titleKey)}
                </h3>
                <p className="text-muted-foreground">{t(value.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
