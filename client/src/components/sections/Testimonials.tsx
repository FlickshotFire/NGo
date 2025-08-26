import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Mr. Ramesh Menon",
      role: "Entrepreneur",
      image: "/images/ramesh-menon.jpg",
      quote: "The concept of using cloth Jholas is so very Indian and logical. Its reusable, it's practical, it's attractive. Raghukul Aryawart seems to have hit the right button in promoting the Cloth Bag with its committed dedicated group of young volunteers.",
      location: "Mumbai"
    },
    {
      name: "Mrs. Shanker",
      role: "School Administrator",
      image: "/images/mrs-shanker.jpg",
      quote: "She is Administrator and Coordinator of Surya Academy Senior Secondary Public School, Sultanpur (UP), committed for environment protection she is highly determine to connect Jhola-Abhiyan in her school, parents and locality.",
      location: "Sultanpur, UP"
    },
    {
      name: "Mrinalini Gupta",
      role: "Social Activist",
      image: "/images/mrinalini-gupta.png",
      quote: "Lady with full on Jhose and Junoon, she is executive member and heading many groups, societies and committees that work for many social causes. She has not only approached us first also gave so many ideas to make this project successful.",
      location: "Faridabad"
    },
    {
      name: "Rachna Tiwary",
      role: "Educationist & Writer",
      image: "/images/rachna-tiwary.jpg",
      quote: "An educationist, trainer, Writer, Editor, Gold medalist, Member of Appellate Authority, DDA, Joint secretary and executive member of Lady Irwin College Alumni Association, executive member of Efforts Group.",
      location: "Delhi Safdarjung Enclave"
    },
    {
      name: "Pankaj Aggarwal",
      role: "Chartered Accountant",
      image: "/images/pankaj-aggarwal.jpg",
      quote: "Renowned CA by profession, have been associated with many environmental and social causes; he ordered 100 Jholas from us and promised us to promote it as much as he can.",
      location: "Delhi Safdarjung Enclave"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-green-500/30 mb-6">
            <Quote className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">Our Allies</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Echoes of the</span>
            <br />
            <span className="gradient-text">Jhola Movement</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Hear from our partners, supporters, and community leaders who have joined 
            our mission to create a plastic-free, sustainable future.
          </p>
        </div>

        {/* Main testimonial display */}
        <div className={`transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="relative max-w-4xl mx-auto">
            {/* Navigation buttons */}
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="sm"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 glass border-green-500/50 text-white hover:bg-green-500/20 rounded-full w-12 h-12 p-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="sm"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 glass border-green-500/50 text-white hover:bg-green-500/20 rounded-full w-12 h-12 p-0"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            {/* Testimonial card */}
            <Card className="glass border-green-500/20 mx-12">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  {/* Profile */}
                  <div className="mb-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                      <img 
                        src={testimonials[currentTestimonial].image} 
                        alt={testimonials[currentTestimonial].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-green-400 mb-1">{testimonials[currentTestimonial].role}</p>
                    <p className="text-gray-400 text-sm">{testimonials[currentTestimonial].location}</p>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-8">
                    <Quote className="absolute -top-4 -left-4 w-8 h-8 text-green-500/30" />
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic px-8">
                      "{testimonials[currentTestimonial].quote}"
                    </p>
                    <Quote className="absolute -bottom-4 -right-4 w-8 h-8 text-green-500/30 rotate-180" />
                  </div>

                  {/* Dots indicator */}
                  <div className="flex justify-center space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentTestimonial
                            ? "bg-green-500"
                            : "bg-gray-600 hover:bg-gray-500"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* All testimonials grid (smaller cards) */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-white mb-12">
            Our Community of Change-Makers
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className={`glass border-green-500/20 hover:border-green-500/50 cursor-pointer smooth-animation transition-all duration-500 ${
                  index === currentTestimonial ? "ring-2 ring-green-500/50" : ""
                } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setCurrentTestimonial(index)}
              >
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-white mb-1">{testimonial.name}</h4>
                    <p className="text-green-400 text-sm mb-2">{testimonial.role}</p>
                    <p className="text-gray-400 text-xs mb-3">{testimonial.location}</p>
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto glass p-8 rounded-2xl border border-green-500/20">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              Become Part of Our Story
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Join hundreds of individuals and organizations who have already committed 
              to our mission of creating a sustainable, plastic-free future.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Join the Movement
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
