import { Users, User, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const LeadershipSection = () => {
  const { t } = useLanguage();

  const boardMembers = [
    { role: t('leadership.president'), name: "Shpejtim Berisha" },
    { role: t('leadership.vicePresident'), name: "Muhamet Arifi" },
    { role: t('leadership.treasurer'), name: "Heset Gashi" },
    { role: t('leadership.secretary'), name: "Egzon Zejnullahu" },
    { role: t('leadership.advisor'), name: "Mazllam Mullahasani" },
  ];

  return (
    <section id="leadership" className="section-padding bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              {t('leadership.label')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('leadership.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('leadership.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Board Members */}
            <div className="card-elevated">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {t('leadership.board')}
                </h3>
              </div>
              <div className="space-y-4">
                {boardMembers.map((member, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Imam */}
            <div className="card-elevated">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {t('leadership.imam')}
                </h3>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-gold/5 to-gold/10 border border-gold/20">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <p className="text-xl font-semibold text-foreground">Hekuran Helshani</p>
                  <p className="text-muted-foreground">{t('leadership.imamTitle')}</p>
                </div>
              </div>
              <p className="mt-6 text-muted-foreground text-sm">
                {t('leadership.imamDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
