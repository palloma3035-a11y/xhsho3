import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

export const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:enestahiri1516@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    {
      icon: MapPin,
      labelKey: 'contact.address',
      value: "Schützenstraße 76",
      subValue: "49084 Osnabrück, Deutschland",
    },
    {
      icon: Phone,
      labelKey: 'contact.phone',
      value: "+49 151 1123 1950",
    },
    {
      icon: MessageCircle,
      labelKey: 'WhatsApp',
      value: "+49 151 1123 1950",
    },
    {
      icon: Mail,
      labelKey: 'contact.email',
      value: "info@xhamia-osnabrueck.de",
    },
    {
      icon: Clock,
      labelKey: 'contact.hours',
      value: t('contact.hoursValue'),
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold font-medium tracking-wider uppercase text-sm mb-3">
              {t('contact.label')}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info & Form */}
            <div className="space-y-6">
              {/* Contact Info Card */}
              <div className="card-elevated">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  {t('contact.info')}
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.labelKey} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {item.labelKey === 'WhatsApp' ? 'WhatsApp' : t(item.labelKey)}
                        </p>
                        <p className="font-medium text-foreground text-sm">{item.value}</p>
                        {item.subValue && (
                          <p className="text-xs text-muted-foreground">
                            {item.subValue}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <Button variant="gold" className="w-full sm:w-auto" asChild>
                    <a
                      href="https://wa.me/4915111231950"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      {t('contact.whatsapp')}
                    </a>
                  </Button>
                </div>
              </div>

              {/* Contact Form Card */}
              <div className="card-elevated">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  {t('contact.formTitle')}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder={t('contact.formName')}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder={t('contact.formEmail')}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder={t('contact.formMessage')}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      className="bg-secondary border-border resize-none"
                    />
                  </div>
                  <Button type="submit" variant="gold" className="w-full">
                    <Send className="w-4 h-4" />
                    {t('contact.formSubmit')}
                  </Button>
                </form>
              </div>
            </div>

            {/* Map */}
            <div className="card-elevated p-0 overflow-hidden h-fit lg:sticky lg:top-24">
              <div className="aspect-video lg:aspect-[4/5] bg-secondary relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.8!2d8.0279!3d52.2826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9e5f9c3c3c3c3%3A0x0!2sSch%C3%BCtzenstra%C3%9Fe%2076%2C%2049084%20Osnabr%C3%BCck!5e0!3m2!1sde!2sde!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort der Moschee"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 pointer-events-none border-4 border-gold/10 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
