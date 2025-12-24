import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";

import communityImg from "@/assets/gallery/community.png";
import mosque1Img from "@/assets/gallery/mosque-1.png";
import mosque2Img from "@/assets/gallery/mosque-2.png";
import mosque3Img from "@/assets/gallery/mosque-3.png";
import mosque4Img from "@/assets/gallery/mosque-4.png";
import mosque5Img from "@/assets/gallery/mosque-5.png";

export const GallerySection = () => {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      src: mosque1Img,
      alt: "gallery.mosque",
    },
    {
      src: mosque2Img,
      alt: "gallery.mosque",
    },
    {
      src: mosque3Img,
      alt: "gallery.mosque",
    },
    {
      src: mosque4Img,
      alt: "gallery.mosque",
    },
    {
      src: mosque5Img,
      alt: "gallery.mosque",
    },
    {
      src: communityImg,
      alt: "gallery.community",
    },
  ];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  return (
    <>
      <section id="gallery" className="section-padding bg-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Camera className="w-4 h-4" />
              {t('gallery.label')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('gallery.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('gallery.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={t(image.alt)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">{t(image.alt)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 z-10 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Image */}
          <div
            className="max-w-[90vw] max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[currentIndex].src}
              alt={t(galleryImages[currentIndex].alt)}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white mt-4 text-lg font-medium">
              {t(galleryImages[currentIndex].alt)}
            </p>
            <p className="text-white/60 text-sm mt-1">
              {currentIndex + 1} / {galleryImages.length}
            </p>
          </div>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 z-10 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </>
  );
};
