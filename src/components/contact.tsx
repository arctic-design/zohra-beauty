import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Button from "@/components/ui/button";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["8981940467", "9163434422"],
      action: "tel:8981940467",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["R-1/3 Patuli, Kol-94", "Kolkata, West Bengal"],
      action: null,
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Mon - Sat: 10:00 AM - 8:00 PM", "Sunday: 11:00 AM - 6:00 PM"],
      action: null,
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@zohrabeauty.com"],
      action: "mailto:info@zohrabeauty.com",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-primary-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to book your appointment? Contact us today and let us take
            care of your beauty needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-gray-900 mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">
                        {info.action ? (
                          <a
                            href={info.action}
                            className="hover:text-primary-600 transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="w-6 h-6 text-green-600" />
                <h4 className="font-semibold text-gray-900">
                  Quick Booking via WhatsApp
                </h4>
              </div>
              <p className="text-gray-600 mb-4">
                Get instant responses and book your appointment directly through
                WhatsApp
              </p>
              <Button
                href="https://wa.me/918981940467?text=Hi%20there!%20I%20want%20to%20book%20an%20appointment%20at%20Zohra%20Beauty%20Salon"
                className="btn-whatsapp flex items-center space-x-2"
                external
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </Button>
            </div>
          </div>

          {/* Map/Location */}
          <div>
            <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-gray-900 mb-8">
              Find Us
            </h3>

            {/* Google Maps */}
            <div className="bg-gray-200 rounded-xl h-64 overflow-hidden mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.5!2d88.3639!3d22.4734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI4JzI2LjQiTiA4OMKwMjEnNTAuMCJF!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zohra Beauty Family Salon Location"
              ></iframe>
            </div>

            {/* Directions */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">
                How to Reach Us
              </h4>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Located in the heart of Patuli area</li>
                <li>• Easy access by public transport</li>
                <li>• Parking available nearby</li>
                <li>• Look for our distinctive red signage</li>
              </ul>
              <a
                href="https://www.google.com/maps/search/?api=1&query=R-1/3+Patuli,+Kol-94,+Kolkata,+West+Bengal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>View on Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white shadow-2xl">
          <h3 className="font-serif text-2xl lg:text-3xl font-semibold mb-4 text-white">
            Ready to Transform Your Look?
          </h3>
          <p className="text-xl text-white mb-6 max-w-2xl mx-auto opacity-95">
            Book your appointment today and experience the difference at Zohra
            Beauty Family Salon
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              href="https://wa.me/918981940467?text=Hi%20there!%20I%20want%20to%20book%20an%20appointment%20at%20Zohra%20Beauty%20Salon"
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center space-x-2 shadow-lg"
              external
            >
              <MessageCircle className="w-5 h-5" />
              <span>Book via WhatsApp</span>
            </Button>
            <Button
              href="tel:8981940467"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center space-x-2"
              external
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
