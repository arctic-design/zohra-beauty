"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/storefront.jpg-VCDZPYbylUOcQiCdvrgpj0OIj7d5c4.jpeg",
    alt: "Salon storefront with signage",
    category: "Exterior",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salon-interior-1.jpg-UFWz8nWzlkIShSc7gB70PmNXYTdBsI.jpeg",
    alt: "Salon Interior - Professional styling stations",
    category: "Interior",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salon-interior-2.jpg-GJ30BD9paFbdtA4eQ8J8YktxpSuAAp.jpeg",
    alt: "Modern salon chairs and mirrors",
    category: "Interior",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salon-interior-3.jpg-qrYfKCv3ayozs1BPLXgWmFnOb6qHZD.jpeg",
    alt: "Luxurious salon interior with marble flooring",
    category: "Interior",
  },
  {
    src: "/images/led-facial-treatment-room.jpg",
    alt: "LED facial treatment room with blue light therapy",
    category: "Spa & Facial",
  },
  {
    src: "/images/spa-treatment-area-with-led-therapy.jpg",
    alt: "Professional spa treatment area with LED therapy equipment",
    category: "Spa & Facial",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/team-photo.jpg-0FwTMLEUb9lQXD3pVKxM6LdoVsB77h.jpeg",
    alt: "Professional team at Zohra Beauty",
    category: "Team",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a glimpse into our beautiful salon and professional environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                    <p className="font-medium text-sm">{image.alt}</p>
                    <p className="text-xs text-gray-300">{image.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery image"
                width={800}
                height={600}
                style={{ width: "auto", height: "auto" }}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                crossOrigin="anonymous"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
