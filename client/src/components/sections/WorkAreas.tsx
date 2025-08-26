import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Users, GraduationCap, MapPin, Scissors, Heart, Volume2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WorkAreas = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  const [selectedArea, setSelectedArea] = useState(0);

  const workAreas = [
    {
      icon: Users,
      title: "Women Employment Opportunities",
      description: "We create income-generating opportunities for women in rural and urban areas through skill development and employment in eco-friendly product manufacturing.",
      image: "/images/women-employment.jpg",
      details: [
        "Skill development programs",
        "Sustainable employment creation", 
        "Economic empowerment initiatives",
        "Rural and urban outreach"
      ],
      impact: "500+ women empowered"
    },
    {
      icon: GraduationCap,
      title: "Free BPL Education",
      description: "We offer free education to children from below poverty line families, ensuring no child is denied the right to learn due to financial constraints.",
      image: "/images/education.jpg",
      details: [
        "Free education programs",
        "Learning materials provision",
        "Teacher training initiatives",
        "Scholarship programs"
      ],
      impact: "1000+ children educated"
    },
    {
      icon: MapPin,
      title: "Remote Location Education",
      description: "We bridge the education gap in remote and underserved areas by providing access to quality learning resources through mobile classrooms and digital tools.",
      image: "/images/remote-education.jpg",
      details: [
        "Mobile classrooms",
        "Digital learning tools",
        "Volunteer teacher programs",
        "Educational resource distribution"
      ],
      impact: "50+ remote locations served"
    },
    {
      icon: Scissors,
      title: "Weaver Empowerment India",
      description: "Through our Swadesi Hathkargha initiative, we support traditional handloom weavers with fair wages and sustainable livelihood opportunities.",
      image: "/images/weaver-empowerment.jpg",
      details: [
        "Fair wage initiatives",
        "Traditional skill preservation",
        "Market linkage support",
        "Quality improvement programs"
      ],
      impact: "200+ weavers supported"
    },
    {
      icon: Heart,
      title: "Women Hygiene Awareness",
      description: "We conduct awareness programs about women's health and hygiene, providing education and resources to improve quality of life.",
      image: "/images/hygiene-awareness.jpg",
      details: [
        "Health awareness campaigns",
        "Hygiene education programs",
        "Resource distribution",
        "Community health initiatives"
      ],
      impact: "300+ women reached"
    },
    {
      icon: Volume2,
      title: "Do Not Honk Awareness on Road",
      description: "Our road safety and noise pollution awareness campaigns aim to create peaceful and safe transportation environments in urban areas.",
      image: "/images/karmaveer-award.jpg",
      details: [
        "Noise pollution awareness",
        "Road safety campaigns",
        "Community engagement",
        "Behavioral change initiatives"
      ],
      impact: "Multiple cities covered"
    }
  ];

  return (
    <section id="work-areas" className="relative py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-green-950/10 via-transparent to-green-950/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-green-500/30 mb-6">
            <Heart className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">Our Impact</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Areas of</span>
            <br />
            <span className="gradient-text">Social Concern</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            RA works on the following areas of social concerns, creating sustainable 
            impact across communities through innovative approaches and dedicated service.
          </p>
        </div>

        {/* Work areas grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left column - Work area cards */}
          <div className="space-y-6">
            {workAreas.map((area, index) => {
              const Icon = area.icon;
              const isActive = selectedArea === index;
              
              return (
                <Card 
                  key={index}
                  className={`cursor-pointer smooth-animation border transition-all duration-500 ${
                    isActive 
                      ? "glass border-green-500 bg-green-500/10" 
                      : "glass border-green-500/20 hover:border-green-500/50"
                  } ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedArea(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg transition-colors ${
                        isActive ? "bg-green-500/30" : "bg-green-500/20"
                      }`}>
                        <Icon className="w-6 h-6 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {area.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {area.description}
                        </p>
                        {isActive && (
                          <div className="mt-4 space-y-2">
                            {area.details.map((detail, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                                <span className="text-green-300 text-sm">{detail}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Right column - Detailed view */}
          <div className={`sticky top-24 transition-all duration-700 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}>
            <div className="glass p-8 rounded-2xl border border-green-500/20 h-fit">
              <div className="text-center mb-8">
                <div className="mb-6 relative overflow-hidden rounded-lg">
                  <img 
                    src={workAreas[selectedArea].image} 
                    alt={workAreas[selectedArea].title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  {workAreas[selectedArea].title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {workAreas[selectedArea].description}
                </p>
              </div>

              {/* Impact stats */}
              <div className="bg-green-500/10 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-green-400 mb-3">Impact Achieved</h4>
                <div className="text-2xl font-bold text-white">
                  {workAreas[selectedArea].impact}
                </div>
              </div>

              {/* Key features */}
              <div className="space-y-3 mb-8">
                <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                {workAreas[selectedArea].details.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-300">{detail}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Learn More About This Initiative
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto glass p-8 rounded-2xl border border-green-500/20">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              Sustainable Living, Empowered Communities
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Every initiative we undertake follows our core principle of creating sustainable, 
              long-term impact while empowering communities to become self-reliant.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Join Our Mission
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkAreas;
