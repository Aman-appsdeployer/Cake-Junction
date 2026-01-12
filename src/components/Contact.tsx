import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const offices = [
  { city: 'Kochi', address: 'TV Center, Kakkanad, Kochi, Kerala 682037' },
  { city: 'Thrissur', address: 'Flamon Complex, Main Rd, Kuriachira, Thrissur, Kerala 680006' },
  { city: 'Calicut', address: 'Oorkadavu, Kozhikode, Kerala 673640' },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'We will get back to you within 24 hours.',
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-title">Get In Touch</p>
          <h2 className="section-heading">
            Looking for the Most Creative Event Planners?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Contact us today to bring your vision to life and create unforgettable memories!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-elegant w-full"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input-elegant w-full"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-elegant w-full"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-elegant w-full min-h-[120px] resize-none"
                  placeholder="Tell us about your event..."
                  required
                />
              </div>

              <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Phone & Email */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <a href="tel:+918590010011" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                    +91-859-001-0011
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <a href="mailto:melodiaeventmanagement@gmail.com" className="text-lg font-semibold text-foreground hover:text-primary transition-colors break-all">
                    melodiaeventmanagement@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              <h3 className="text-lg font-serif font-bold text-foreground">Our Offices</h3>
              {offices.map((office) => (
                <div key={office.city} className="glass-card p-4 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">{office.city}</p>
                    <p className="text-sm text-muted-foreground">{office.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
