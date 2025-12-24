import { Heart, Facebook, Youtube, ExternalLink, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const DonationSection = () => {
  const { t } = useLanguage();

  return (
    <section id="donate" className="section-padding bg-secondary/50">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card-elevated border border-gold/20 overflow-hidden">
            {/* Header */}
            <div className="bg-gold/5 p-8 text-center border-b border-gold/20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-gold" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {t('donate.title')}
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                {t('donate.description')}
              </p>
            </div>

            {/* Content */}
            <div className="p-8">

              {/* Bank Details */}
              <div className="bg-secondary rounded-xl p-6 mb-8">
                <h4 className="font-semibold text-foreground mb-4 text-center">
                  {t('donate.bankDetails')}
                </h4>
                <div className="space-y-4 text-sm">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-muted-foreground">{t('donate.accountHolder')}</p>
                      <p className="font-medium text-foreground">
                        Xhamia Shqiptare Diaspora e.V.
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">{t('donate.bank')}</p>
                      <p className="font-medium text-foreground">Sparkasse Osnabrück</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-muted-foreground">IBAN ({t('donate.germany')}):</p>
                    <p className="font-medium text-foreground font-mono">
                      DE41 2659 0025 1014 3050 01
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <a
                  href="https://gofund.me/2b63e1700"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl p-4 transition-colors"
                >
                  <Heart className="w-5 h-5" />
                  <span className="font-medium">GoFundMe</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://www.paypal.com/paypalme/xhamiashqiptarediaspora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-4 transition-colors"
                >
                  <span className="font-bold text-lg">P</span>
                  <span className="font-medium">PayPal</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Social Media Links */}
              <div className="flex justify-center gap-3 mb-8 flex-wrap">
                <a
                  href="https://www.facebook.com/xhamia2016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1877F2] hover:bg-[#166FE5] text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.youtube.com/@XhamiaShqiptareDiasporae.V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FF0000] hover:bg-[#CC0000] text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/xhamia.shqiptare.diaspora?igsh=MWFrcXN0cmhmemtzNQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90 text-white transition-opacity"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.tiktok.com/@xhamia.shqiptare.d?_r=1&_t=ZM-92SNhrfpkBH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-black hover:bg-gray-900 text-white transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/4915111231950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>

              {/* CTA */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  {t('donate.note')}
                </p>
                <a href="https://gofund.me/2b63e1700" target="_blank" rel="noopener noreferrer">
                  <Button variant="gold" size="lg">
                    <Heart className="w-5 h-5" />
                    {t('donate.cta')}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
