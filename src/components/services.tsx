import { Scissors, Sparkles, Palette, Hand } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Scissors,
      name: "Hair Cutting & Styling",
      description:
        "Professional haircuts, styling, and hair treatments for all hair types",
      features: ["Precision Cutting", "Hair Styling", "Hair Wash", "Blow Dry"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Sparkles,
      name: "Facial & Skin Care",
      description:
        "Rejuvenating facial treatments and advanced skin care solutions",
      features: [
        "Deep Cleansing Facial",
        "Anti-Aging Treatment",
        "Skin Brightening",
        "Acne Treatment",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Palette,
      name: "Hair Spa & Treatment",
      description: "Nourishing hair spa treatments for healthy, lustrous hair",
      features: [
        "Hair Smoothing",
        "Deep Conditioning",
        "Scalp Treatment",
        "Hair Repair",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Hand,
      name: "Manicure & Pedicure",
      description: "Complete nail care services for beautiful hands and feet",
      features: ["Classic Manicure", "Pedicure", "Nail Art", "Cuticle Care"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive beauty and wellness services tailored to your needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-gray-900">
                      {service.name}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2 text-sm text-gray-700"
                    >
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white shadow-2xl">
          <h3 className="font-serif text-2xl lg:text-3xl font-semibold mb-4 text-white">
            Additional Services
          </h3>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="text-lg font-semibold">D-Tan Treatment</div>
              <div className="text-white text-sm">
                Remove tan & brighten skin
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold">Eyebrow Shaping</div>
              <div className="text-white text-sm">Perfect brow styling</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold">Hair Coloring</div>
              <div className="text-white text-sm">Professional hair color</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold">Bridal Packages</div>
              <div className="text-white text-sm">Complete bridal makeover</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
