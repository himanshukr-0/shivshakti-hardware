import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { BUSINESS, waLink } from "@/lib/site";

export default function Contact() {

  return (
    <section id="contact" className="scroll-mt-24 bg-secondary/60 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Get In Touch</p>
          <h2 className="mt-2 text-4xl sm:text-5xl">Contact Us</h2>
          <p className="mt-4 text-muted-foreground">
            Have a question or need a quote? Send us your requirement and we'll respond quickly.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 mx-auto max-w-2xl space-y-5"
        >
          <a href={`https://www.google.com/maps/search/${encodeURIComponent(BUSINESS.mapsQuery)}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 rounded-2xl border bg-card p-5 shadow-card transition hover:shadow-glow">
            <MapPin className="h-6 w-6 shrink-0 text-primary" />
            <span><span className="block font-bold">Address</span><span className="text-sm text-muted-foreground">{BUSINESS.address}</span></span>
          </a>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow transition-transform hover:scale-105">
              <Phone className="h-5 w-5" />
              Call Now
            </a>

            <a href={waLink("Hi Shiv Shakti Hardware, I would like to enquire about your products.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-bold text-white shadow-glow transition-transform hover:scale-105">
              <MessageCircle className="h-5 w-5" />
              Chat with us
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border shadow-card">
            <iframe
              title="Shiv Shakti Hardware location map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1785.681024505214!2d85.70650139787288!3d26.47628531805842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1781515704682!5m2!1sen!2sin"
              className="h-64 w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
