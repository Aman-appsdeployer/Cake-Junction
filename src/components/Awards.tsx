import { motion } from 'framer-motion';
import { Award, Newspaper, Shield, Star } from 'lucide-react';

const awards = [
  {
    icon: Award,
    title: 'Best Event Management Company',
    description: 'Awarded at BGS Business Growth Summit',
  },
  {
    icon: Newspaper,
    title: 'Featured in The New York Times',
    description: 'Recognized for South Indian Kerala weddings',
  },
  {
    icon: Shield,
    title: 'ISO 9001:2015 Certified',
    description: 'Quality management system certified',
  },
  {
    icon: Star,
    title: '4.8/5 Customer Rating',
    description: 'Based on 2500+ client reviews',
  },
];

const Awards = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="section-title">Awards & Recognitions</p>
          <h2 className="section-heading">
            The Best Event Management Company in Kerala
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 text-center group hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <award.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif font-bold text-foreground mb-2">
                {award.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
