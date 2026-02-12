import galleryHeroImage from "@/assets/hero3.png";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import {
  CalendarHeart,
  CheckCircle,
  ClipboardList,
  Mail,
  MapPin,
  PartyPopper,
  Phone,
  PhoneCall,
  Send,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

/* ================= DATA ================= */

const offices = [
  {
    city: "Mumbai",
    address: "Chembur, Mumbai 400043",
  },
  {
    city: "Tilak Nagar",
    address: "Mumbai, Maharashtra 400089",
  },
];

const steps = [
  {
    icon: PhoneCall,
    title: "Place Your Order",
    desc: "Share your cake idea and occasion details.",
  },
  {
    icon: ClipboardList,
    title: "Design & Baking",
    desc: "Our bakers craft your cake with premium ingredients.",
  },
  {
    icon: Sparkles,
    title: "Quality Check",
    desc: "Every cake is inspected for taste and quality.",
  },
  {
    icon: PartyPopper,
    title: "Celebrate",
    desc: "Enjoy sweet moments with your loved ones.",
  },
];

const reasons = [
  "Freshly Baked Every Day",
  "Premium Ingredients Only",
  "Custom Cake Designs",
  "On-Time Delivery",
  "Trusted by 1000+ Customers",
  "Affordable Pricing",
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Order Submitted ",
      description: "Our team will contact you shortly to confirm your cake.",
    });

    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <main className="overflow-x-hidden bg-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={galleryHeroImage}
            alt="Contact Cake Junction"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 " />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl text-white"
          >
            {/* <p className="uppercase tracking-widest text-primary font-semibold mb-3">
              Contact Cake Junction
            </p> */}

            {/* <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Let’s Bake Your <br />
              <span className="text-primary">Perfect Cake</span>
            </h1> */}

            {/* <p className="text-white/80 mb-10 text-lg">
              Birthdays, weddings, anniversaries, or custom cakes —
              we’re ready to make it special.
            </p> */}

            {/* <a href="#contact-form" className="btn-gold mt-72">
              Place an Order
            </a> */}
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-28 bg-white">
  <div className="container mx-auto px-4">

    {/* HEADER */}
    <div className="text-center max-w-2xl mx-auto mb-16">
      <p className="section-title">Why Choose Us</p>
      <h2 className="section-heading mb-4">
        Sweetness You Can <span className="text-primary">Trust</span>
      </h2>
      <p className="text-muted-foreground">
        We don’t just bake cakes — we create moments you’ll always remember.
      </p>
    </div>

    {/* CARDS */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          title: "Freshly Baked Daily",
          desc: "All our cakes are baked fresh every day using premium ingredients.",
        },
        {
          title: "Premium Ingredients",
          desc: "We use high-quality chocolates, dairy, and natural flavors only.",
        },
        {
          title: "Custom Cake Designs",
          desc: "Every cake is customized based on your theme and occasion.",
        },
        {
          title: "On-Time Delivery",
          desc: "We guarantee timely delivery so your celebration is stress-free.",
        },
        {
          title: "Trusted by Customers",
          desc: "Loved by hundreds of families and corporate clients.",
        },
        {
          title: "Affordable Pricing",
          desc: "Premium quality cakes at prices that fit your budget.",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="bg-card p-8 rounded-2xl shadow-md hover:shadow-xl transition"
        >
          {/* ICON */}
          <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mb-5">
            <CheckCircle className="w-6 h-6 text-primary" />
          </div>

          {/* TITLE */}
          <h4 className="font-semibold text-lg mb-2">
            {item.title}
          </h4>

          {/* DESCRIPTION */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>

    {/* CTA */}
    <div className="text-center mt-14">
      <a href="#contact-form" className="btn-gold">
        Order Your Cake Today
      </a>
    </div>

  </div>
</section>


      {/* ================= HOW IT WORKS ================= */}
     <section className=" bg-white">
  <div className="container mx-auto px-4">

    {/* HEADER */}
    <div className="text-center max-w-2xl mx-auto mb-16">
      <p className="section-title">How It Works</p>
      <h2 className="section-heading mb-4">
        Simple & Hassle-Free Cake Ordering
      </h2>
      <p className="text-muted-foreground">
        From your idea to the final celebration — here’s how we make it easy.
      </p>
    </div>

    {/* STEPS */}
    <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* CONNECTOR LINE (DESKTOP ONLY) */}
      <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-border" />

      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="relative bg-card p-8 rounded-2xl text-center shadow-md hover:shadow-xl transition"
        >
          {/* STEP NUMBER */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow">
              {i + 1}
            </div>
          </div>

          {/* ICON */}
          <step.icon className="w-10 h-10 text-primary mx-auto mt-6 mb-4" />

          {/* TITLE */}
          <h4 className="font-semibold text-lg mb-2">
            {step.title}
          </h4>

          {/* DESCRIPTION */}
          <p className="text-sm text-muted-foreground mb-3">
            {step.desc}
          </p>

          {/* EXTRA INFO */}
          <p className="text-xs text-muted-foreground">
            {i === 0 && "Call, WhatsApp, or fill the order form"}
            {i === 1 && "Custom design & premium ingredients"}
            {i === 2 && "Checked for taste, hygiene & freshness"}
            {i === 3 && "Delivered fresh for your celebration"}
          </p>
        </motion.div>
      ))}
    </div>

    {/* CTA */}
    <div className="text-center mt-14">
      <a href="#contact-form" className="btn-gold">
        Start Your Order
      </a>
    </div>

  </div>
</section>


      {/* ================= CONTACT FORM ================= */}
      <section id="contact-form" className="py-28 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14">

          {/* FORM */}
          <motion.form
  onSubmit={handleSubmit}
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="bg-card p-10 rounded-2xl shadow-xl space-y-6"
>
  {/* TITLE */}
  <h3 className="font-serif text-2xl font-bold flex items-center gap-3 mb-4">
    <CalendarHeart className="text-primary" />
    Send Your Cake Request
  </h3>

  {/* NAME */}
  <input
    type="text"
    name="name"
    aria-label="Full Name"
    placeholder="Full Name"
    value={formData.name}
    onChange={(e) =>
      setFormData({ ...formData, name: e.target.value })
    }
    className="input-elegant w-full"
    required
  />

  {/* PHONE */}
  <input
    type="tel"
    name="phone"
    aria-label="Phone Number"
    placeholder="Phone Number"
    value={formData.phone}
    onChange={(e) =>
      setFormData({ ...formData, phone: e.target.value })
    }
    pattern="[0-9]{10}"
    title="Enter a valid 10-digit phone number"
    className="input-elegant w-full"
    required
  />

  {/* EMAIL */}
  <input
    type="email"
    name="email"
    aria-label="Email Address"
    placeholder="Email Address"
    value={formData.email}
    onChange={(e) =>
      setFormData({ ...formData, email: e.target.value })
    }
    className="input-elegant w-full"
    required
  />

  {/* MESSAGE */}
  <textarea
    name="message"
    aria-label="Cake Details"
    placeholder="Cake details (flavour, size, occasion)"
    value={formData.message}
    onChange={(e) =>
      setFormData({ ...formData, message: e.target.value })
    }
    className="input-elegant w-full min-h-[140px] resize-none"
    required
  />

  {/* SUBMIT */}
  <button
    type="submit"
    className="btn-gold w-full flex justify-center items-center gap-2 text-base"
  >
    <Send className="w-4 h-4" />
    Submit Order
  </button>
</motion.form>


          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-card p-7 rounded-2xl shadow-md space-y-4">
              <p className="flex items-center gap-3 font-medium">
                <Phone className="text-primary" />
                +91 7347713573
              </p>
              <p className="flex items-center gap-3 font-medium">
                <Mail className="text-primary" />
                hello@cakejunction.com
              </p>
            </div>

            <div>
              <h4 className="font-serif font-bold mb-4 text-lg">
                Our Locations
              </h4>
              {offices.map((o) => (
                <div
                  key={o.city}
                  className="bg-card p-5 rounded-2xl shadow-md mb-4"
                >
                  <p className="font-semibold flex gap-2">
                    <MapPin className="text-primary" />
                    {o.city}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {o.address}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="h-[420px]">
        <iframe
          title="Cake Junction Mumbai"
          src="https://www.google.com/maps?q=Mumbai,India&z=12&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </section>

    </main>
  );
};

export default Contact;
