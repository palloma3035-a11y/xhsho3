import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.jpg";

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/80">
      {/* Top Border Decoration */}
      <div className="h-1 gold-gradient" />

      <div className="container px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={logo} 
                  alt="Xhamia Shqiptare Diaspora Osnabrück" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-background">
                    Xhamia Shqiptare
                  </p>
                  <p className="text-xs text-background/60">
                    Diaspora Osnabrück
                  </p>
                </div>
              </div>
              <p className="text-sm text-background/60">
                {t('footer.tagline')}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-background mb-4">
                {t('footer.quickLinks')}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#prayer-times"
                    className="text-background/60 hover:text-gold transition-colors"
                  >
                    {t('nav.prayerTimes')}
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-background/60 hover:text-gold transition-colors"
                  >
                    {t('footer.ourServices')}
                  </a>
                </li>
                <li>
                  <a
                    href="#events"
                    className="text-background/60 hover:text-gold transition-colors"
                  >
                    {t('nav.events')}
                  </a>
                </li>
                <li>
                  <a
                    href="#donate"
                    className="text-background/60 hover:text-gold transition-colors"
                  >
                    {t('nav.donate')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Summary */}
            <div>
              <h4 className="font-semibold text-background mb-4">{t('contact.label')}</h4>
              <ul className="space-y-2 text-sm text-background/60">
                <li>Schützenstraße 76</li>
                <li>49084 Osnabrück</li>
                <li>Tel: +49 541 123 4567</li>
                <li>info@xhamia-osnabrueck.de</li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/50">
            <p>© {currentYear} Xhamia Shqiptare Diaspora e.V. {t('footer.rights')}</p>
            <p className="flex items-center gap-1">
              created by{" "}
              <a 
                href="https://enestahiri.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold hover:text-gold/80 transition-colors"
              >
                enestahiri.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
