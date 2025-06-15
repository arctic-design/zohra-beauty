import { MessageCircle, Star, Sparkles, Heart } from "lucide-react";
import Button from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-25 to-amber-25"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-50/50 via-transparent to-gold-50/30"></div>

      {/* Beauty Salon Images */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full overflow-hidden">
          <Image
            src="/beauty-chair.svg"
            alt="Beauty salon chair"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full overflow-hidden">
          <Image
            src="/beauty-products.svg"
            alt="Beauty products"
            width={96}
            height={96}
            className="object-cover"
          />
        </div>
        <div className="absolute top-1/2 left-10 w-20 h-20 rounded-full overflow-hidden">
          <Image
            src="/hair-styling.svg"
            alt="Hair styling tools"
            width={80}
            height={80}
            className="object-cover"
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Beauty Icons */}
        <div className="absolute top-20 left-10 text-pink-400/30 animate-pulse">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute top-32 right-20 text-rose-400/30 animate-pulse delay-1000">
          <Heart className="w-6 h-6" />
        </div>
        <div className="absolute bottom-32 left-20 text-amber-400/30 animate-pulse delay-500">
          <Sparkles className="w-10 h-10" />
        </div>
        <div className="absolute bottom-20 right-16 text-pink-400/30 animate-pulse delay-700">
          <Heart className="w-7 h-7" />
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-pink-200/20 to-rose-300/15 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-amber-200/20 to-gold-300/15 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-rose-200/25 to-pink-300/20 rounded-full blur-lg"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-primary-600 drop-shadow-sm">Zohra</span>{" "}
              <span className="text-amber-600 drop-shadow-sm">Beauty</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 font-medium">
              Premium Family Salon & Spa
            </p>
          </div>

          {/* Tagline */}
          <div className="relative">
            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Where Beauty Meets Excellence. Experience professional hair & skin
              care services in a luxurious and welcoming environment.
            </p>

            {/* Decorative underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"></div>
          </div>

          {/* Rating */}
          {/* <div className="flex items-center justify-center space-x-2 mb-8 mt-12">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-gray-700 font-medium">
              4.9/5 Customer Rating
            </span>
          </div> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              href="https://wa.me/918981940467?text=Hi%20there!%20I%20want%20to%20book%20an%20appointment%20at%20Zohra%20Beauty%20Salon"
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 text-lg"
              external
            >
              <MessageCircle className="w-5 h-5" />
              <span>Book Now</span>
            </Button>

            <Button
              href="#services"
              className="bg-white/80 backdrop-blur-sm border-2 border-amber-400 text-amber-700 hover:bg-amber-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-md hover:shadow-lg"
            >
              View Services
            </Button>
          </div>

          {/* Quick Info */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/30">
              <div className="text-2xl font-bold text-primary-600">5+</div>
              <div className="text-gray-700 font-medium">Years Experience</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/30">
              <div className="text-2xl font-bold text-rose-600">1000+</div>
              <div className="text-gray-700 font-medium">Happy Customers</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/30">
              <div className="text-2xl font-bold text-amber-600">15+</div>
              <div className="text-gray-700 font-medium">Services</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
