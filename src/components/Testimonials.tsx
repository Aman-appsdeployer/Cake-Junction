import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Arun & Priya",
    occasion: "Birthday Celebration",
    rating: 5,
    review:
      "The cake was absolutely delicious and beautifully designed! Everyone at the party loved it. Cake Junction exceeded our expectations.",
  },
  {
    name: "Rajesh Kumar",
    occasion: "Corporate Order",
    rating: 5,
    review:
      "We ordered custom cakes for our office event and the quality was outstanding. Timely delivery and amazing taste. Highly recommended!",
  },
  {
    name: "Meera Anand",
    occasion: "Wedding Cake",
    rating: 5,
    review:
      "Our wedding cake looked stunning and tasted even better. Cake Junction truly knows how to make special moments sweeter.",
  },
];

const Testimonials = () => {
  return (
    <section className=" bg-white">
      <div className="container mx-auto px-4">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-title">Testimonials</p>
          <h2 className="section-heading">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We bake happiness into every cake. Here’s what our happy customers
            have to say about Cake Junction.
          </p>
        </motion.div>

        {/* ================= TESTIMONIALS GRID ================= */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-card p-8 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/30 absolute top-6 right-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-primary fill-current"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-foreground/90 mb-6 leading-relaxed">
                “{testimonial.review}”
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.occasion}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
