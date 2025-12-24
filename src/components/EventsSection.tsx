import { Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const EventsSection = () => {
  const { t, language } = useLanguage();

  const events = [
    {
      date: "",
      month: "",
      titleKey: 'events.lecture',
      descKey: 'events.lectureDesc',
      timeKey: 'events.lectureTime',
      isRecurring: true,
    },
    {
      date: "18",
      month: language === 'de' ? 'Feb' : language === 'sq' ? 'Shk' : language === 'ar' ? 'فبر' : language === 'tr' ? 'Şub' : 'Feb',
      titleKey: 'events.iftar',
      descKey: 'events.iftarDesc',
      time: "19:30",
    },
    {
      date: "30",
      month: language === 'de' ? 'Mär' : language === 'sq' ? 'Mar' : language === 'ar' ? 'مار' : language === 'tr' ? 'Mar' : 'Mar',
      titleKey: 'events.eid',
      descKey: 'events.eidDesc',
      timeKey: 'events.eidTime',
    },
  ];

  const announcements = [
    t('events.ann1'),
    t('events.ann2'),
    t('events.ann3'),
  ];

  return (
    <section id="events" className="section-padding">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold font-medium tracking-wider uppercase text-sm mb-3">
              {t('events.label')}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t('events.title')}
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Events Column */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gold" />
                {t('events.upcoming')}
              </h3>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="card-elevated flex gap-5 group hover:shadow-gold transition-all duration-300"
                  >
                    {/* Date Badge */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gold/10 flex flex-col items-center justify-center">
                      {event.isRecurring ? (
                        <span className="text-xs font-medium text-gold text-center px-1">
                          {t(event.timeKey!)}
                        </span>
                      ) : (
                        <>
                          <span className="text-2xl font-bold text-gold">
                            {event.date}
                          </span>
                          <span className="text-xs uppercase text-muted-foreground">
                            {event.month}
                          </span>
                        </>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-gold transition-colors">
                        {t(event.titleKey)}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-1">
                        {t(event.descKey)}
                      </p>
                      {!event.isRecurring && (
                        <p className="text-sm font-medium text-gold">
                          {event.timeKey ? t(event.timeKey) : event.time}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Announcements Column */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                📢 {t('events.announcements')}
              </h3>
              <div className="card-elevated bg-gold/5 border border-gold/20">
                <ul className="space-y-4">
                  {announcements.map((announcement, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gold" />
                      <p className="text-muted-foreground">{announcement}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
