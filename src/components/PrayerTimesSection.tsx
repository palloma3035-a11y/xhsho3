import { Clock, Sun, Sunrise, Sunset, Moon, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePrayerTimes } from "@/hooks/usePrayerTimes";

export const PrayerTimesSection = () => {
  const { t, language } = useLanguage();
  const { prayerTimes, loading, error, date } = usePrayerTimes();

  const today = new Date().toLocaleDateString(
    language === 'de' ? 'de-DE' : language === 'sq' ? 'sq-AL' : 'en-GB',
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const prayers = [
    { key: 'Fajr', nameKey: 'prayer.fajr', icon: Sunrise },
    { key: 'Dhuhr', nameKey: 'prayer.dhuhr', icon: Sun },
    { key: 'Asr', nameKey: 'prayer.asr', icon: Clock },
    { key: 'Maghrib', nameKey: 'prayer.maghrib', icon: Sunset },
    { key: 'Isha', nameKey: 'prayer.isha', icon: Moon },
  ];

  return (
    <section id="prayer-times" className="section-padding bg-secondary/50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <p className="text-gold font-medium tracking-wider uppercase text-sm mb-3">
            {t('prayer.title')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('prayer.subtitle')}
          </h2>
          <p className="text-muted-foreground">{today}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-gold animate-spin" />
              <span className="ml-3 text-muted-foreground">{t('prayer.loading')}</span>
            </div>
          ) : error && !prayerTimes ? (
            <div className="text-center py-12 text-muted-foreground">
              {t('prayer.error')}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {prayers.map((prayer) => (
                  <div
                    key={prayer.key}
                    className="card-elevated text-center group hover:shadow-gold transition-all duration-300"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                      <prayer.icon className="w-6 h-6 text-gold" />
                    </div>
                    <p className="font-semibold text-foreground">{t(prayer.nameKey)}</p>
                    <p className="text-2xl font-bold text-gold mt-2">
                      {prayerTimes?.[prayer.key as keyof typeof prayerTimes] || '--:--'}
                    </p>
                  </div>
                ))}
              </div>

              {/* Jumu'ah Highlight */}
              <div className="mt-8 card-elevated bg-gold/5 border border-gold/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-center md:text-left">
                    <p className="text-gold font-semibold text-lg">{t('prayer.jumuah')}</p>
                    <p className="text-muted-foreground">{t('prayer.jumuahSub')}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-foreground">13:30</p>
                    <p className="text-sm text-muted-foreground">
                      {t('prayer.khutbah')} 13:00
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
