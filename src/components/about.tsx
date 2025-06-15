import { Heart, Users, Award, Clock } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Heart,
      title: "Passionate Care",
      description: "We treat every client with love and attention to detail",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with years of experience",
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "Premium products and latest techniques",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Convenient timing to fit your schedule",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-primary-600">Zohra Beauty</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted family salon dedicated to enhancing your natural beauty
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div>
            <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-gray-900 mb-6">
              Our Story & Mission
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Established with a vision to provide exceptional beauty and
                wellness services, Zohra Beauty Family Salon has been serving
                the community with dedication and expertise. We believe that
                everyone deserves to look and feel their absolute best.
              </p>
              <p>
                Our salon combines traditional beauty wisdom with modern
                techniques and premium products. From the moment you step in,
                you'll experience a warm, welcoming atmosphere where your
                comfort and satisfaction are our top priorities.
              </p>
              <p>
                We take pride in our skilled team of professionals who are
                passionate about their craft and committed to delivering
                personalized services that exceed your expectations.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mt-16 text-center">
          <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-gray-900 mb-8">
            Our Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="font-semibold text-xl text-gray-900 mb-3">
                Excellence
              </h4>
              <p className="text-gray-600">
                We strive for perfection in every service we provide, using only
                the finest products and techniques.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="font-semibold text-xl text-gray-900 mb-3">
                Trust
              </h4>
              <p className="text-gray-600">
                Building lasting relationships with our clients through honest,
                reliable, and professional service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="font-semibold text-xl text-gray-900 mb-3">
                Innovation
              </h4>
              <p className="text-gray-600">
                Staying updated with the latest trends and technologies to offer
                you the best beauty solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
