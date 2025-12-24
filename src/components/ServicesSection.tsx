import { BookOpen, Users, Heart, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: BookOpen,
      titleKey: 'services.jumuah',
      titleAl: "Namazi i Xhumasë",
      descKey: 'services.jumuahDesc',
      timeKey: 'services.jumuahTime',
    },
    {
      icon: GraduationCap,
      titleKey: 'services.islamic',
      titleAl: "Mësim-besimi",
      descKey: 'services.islamicDesc',
      timeKey: 'services.islamicTime',
    },
    {
      icon: Users,
      titleKey: 'services.community',
      titleAl: "Aktivitete të komunitetit",
      descKey: 'services.communityDesc',
      timeKey: 'services.communityTime',
    },
    {
      icon: Heart,
      titleKey: 'services.nikah',
      titleAl: "Nikah & Xhenaze",
      descKey: 'services.nikahDesc',
      timeKey: 'services.nikahTime',
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary/50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <p className="text-gold font-medium tracking-wider uppercase text-sm mb-3">
            {t('services.label')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.titleKey}
              className="card-elevated flex gap-5 group hover:shadow-gold transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <service.icon className="w-7 h-7 text-gold" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {t(service.titleKey)}
                </h3>
                <p className="text-sm text-gold mb-2">{service.titleAl}</p>
                <p className="text-muted-foreground mb-3">
                  {t(service.descKey)}
                </p>
                <p className="text-sm font-medium text-foreground">
                  🕐 {t(service.timeKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
