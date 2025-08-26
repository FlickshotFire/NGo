import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Leaf, Users, GraduationCap, Heart, Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [counters, setCounters] = useState({
    years: 0,
    communities: 0,
    women: 0,
    children: 0
  });

  useEffect(() => {
    if (inView) {
      const animateCounter = (target: number, key: keyof typeof counters) => {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 30);
      };

      animateCounter(11, 'years');
      animateCounter(50, 'communities');
      animateCounter(500, 'women');
      animateCounter(1000, 'children');
    }
  }, [inView]);

  const achievements = [
    {
      icon: Leaf,
      title: "Environmental Impact",
      description: "Leading the fight against single-use plastic with our Jhola movement"
    },
    {
      icon: Users,
      title: "Women Empowerment",
      description: "Creating employment opportunities for women through sustainable practices"
    },
    {
      icon: GraduationCap,
      title: "Education Access",
      description: "Providing free education to underprivileged children and remote communities"
    },
    {
      icon: Heart,
      title: "Community Welfare",
      description: "Comprehensive social work including health awareness and skill development"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Rex Karamveer Chakra Gold 2022 and Devbhoomi Rashtriya Ratan Award 2025"
    },
    {
      icon: Target,
      title: "Self-Sustainable Model",
      description: "Operating without external funding through our innovative Swadesi Hathkargha arm"
    }
  ];

  return (
    <section id="about" className="relative py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-green-500/30 mb-6">
            <Leaf className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">Our Story</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">A Short Story About</span>
            <br />
            <span className="gradient-text">Raghukul Aryawart</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Raghukul Aryawart is a decade old NGO working for various aspects of social life 
            and wellbeing of society. Run by experienced as well as young enthusiasts, 
            it works on a unique model of self-sustainability.
          </p>
        </div>

        {/* Stats counter */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="text-center glass p-6 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
              {counters.years}+
            </div>
            <div className="text-gray-400">Years of Experience</div>
          </div>
          <div className="text-center glass p-6 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
              {counters.communities}+
            </div>
            <div className="text-gray-400">Communities Served</div>
          </div>
          <div className="text-center glass p-6 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
              {counters.women}+
            </div>
            <div className="text-gray-400">Women Empowered</div>
          </div>
          <div className="text-center glass p-6 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
              {counters.children}+
            </div>
            <div className="text-gray-400">Children Educated</div>
          </div>
        </div>

        {/* Mission statement */}
        <div className="glass p-8 md:p-12 rounded-2xl mb-20 border border-green-500/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Vision & Mission</span>
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To eliminate single-use plastic by replacing unconscious habits with conscious 
                eco-friendly choices. We aim to inspire global change through innovative 
                alternatives, education, and mass awareness campaigns.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-gray-300">Sustainable living advocacy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-gray-300">Women empowerment through employment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-gray-300">Education for underprivileged children</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="text-8xl opacity-20 absolute -top-4 -right-4">🌱</div>
              <div className="glass p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-green-400 mb-4">
                  Educate. Employ. Empower.
                </h4>
                <p className="text-gray-300">
                  Our three-pillar approach ensures sustainable development 
                  while preserving environmental integrity for future generations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={index} 
                className={`glass border-green-500/20 hover:border-green-500/50 smooth-animation transition-all duration-500 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-500/20 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Self-sustainability model */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto glass p-8 rounded-2xl border border-green-500/20">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              Unique Self-Sustainability Model
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Initially funded by its members, when we realized the difficulty of fueling 
              big projects through self-funding, we created <strong className="text-green-400">Swadesi Hathkargha</strong> - 
              our financial arm that works for the welfare of handloom weavers. 
              We take a very small profit margin to run other projects, ensuring complete independence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
