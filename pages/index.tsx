// pages/index.js
import AWS from "@/assets/aws.webp";
import Logo from "@/assets/logo.jpeg";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import {
  FaAward,
  FaBuilding,
  FaChalkboardTeacher,
  FaCloud,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaNewspaper,
  FaPhone,
  FaPodcast,
  FaTiktok,
  FaTwitter,
  FaUserGraduate,
  FaUsers,
  FaYoutube,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

interface WhyChooseCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface contactingCardProps {
  title: string;
  icon: React.ReactNode;
  content: string;
}

interface AnimatedSectionProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  className?: string;
}
const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  direction = "left",
  className = "",
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        delay: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const titre = "ConnectToCloud";

  const testimonials = [
    {
      name: "Issa Diop",
      role: "CTO, Fsocity",
      content:
        "ConnectToCloud nous a permis de réaliser notre transformation numérique en temps record.",
    },
    {
      name: "Balla Sock",
      role: "Étudiant en Informatique",
      content:
        "Grâce à leur programme, j'ai obtenu ma certification AWS du premier coup !",
    },
    {
      name: "Soxna Ngone Niang",
      role: "Directrice SI",
      content:
        "Un accompagnement professionnel et personnalisé qui a dépassé nos attentes.",
    },
  ];

  const stats = [
    { number: "500+", label: "Clients Satisfaits" },
    { number: "95%", label: "Taux de Réussite" },
    { number: "50+", label: "Experts Cloud" },
    { number: "1000+", label: "Certifications Obtenues" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
    setEmail("");
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section (inchangé) */}
      <div className="relative min-h-screen bg-blue-600">
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [transform-origin:0_0] animate-[grid_20s_linear_infinite]" />

        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-screen py-12 lg:py-0">
              {/* Left Column - Text Content */}
              <div className="space-y-6 md:space-y-8 text-center lg:text-left mt-16 lg:mt-0">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                    {titre}
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto lg:mx-0">
                  Transformez votre entreprise avec des solutions cloud
                  innovantes et sécurisées.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-full font-semibold transform transition hover:scale-105 hover:shadow-xl">
                    Démarrer maintenant
                  </button>
                  <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 rounded-full text-white font-semibold backdrop-blur-sm transform transition hover:scale-105 hover:shadow-xl hover:bg-white/10">
                    En savoir plus
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 sm:pt-8">
                  {[
                    { value: "99.9%", label: "Disponibilité" },
                    { value: "24/7", label: "Support" },
                    { value: "+1000", label: "Clients" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-2 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm"
                    >
                      <div className="text-lg sm:text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-200">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Logo & Visual Elements */}
              <div className="relative order-first lg:order-last">
                <div className="relative z-10 transform transition-all duration-500 hover:scale-105">
                  <div className="absolute inset-0 bg-white rounded-full blur-3xl opacity-30 animate-pulse" />
                  <Image
                    src={Logo}
                    alt="ConnectToCloud Logo"
                    width={500}
                    height={500}
                    className="relative mx-auto rounded-xl w-full max-w-md"
                    priority
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rotate-45 opacity-30">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-blue-300/20 blur-3xl" />
                  <div className="absolute inset-0 bg-gradient-conic from-white/30 via-transparent to-blue-300/30 animate-spin-slow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <AnimatedSection direction="right">
        <section className="py-16 px-8 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Features Section (existant) */}
      <AnimatedSection direction="left">
        <section className="py-16 px-8 bg-gray-100">
          <h2 className="text-4xl font-bold text-center mb-12">Nos Services</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FaBuilding className="w-10 h-10" />}
              title="Entreprises"
              description="Accompagnement personnalisé pour votre transformation numérique, quelle que soit la taille de votre entreprise."
            />
            <FeatureCard
              icon={<FaUserGraduate className="w-10 h-10" />}
              title="Formation Certifiante"
              description="Préparation à la certification AWS Cloud Practitioner pour étudiants et professionnels."
            />
            <FeatureCard
              icon={<FaPodcast className="w-10 h-10" />}
              title="Émissions Tech"
              description="Découvrez nos émissions dédiées au cloud et aux nouvelles technologies."
            />
          </div>
        </section>
      </AnimatedSection>

      {/* Why Choose Us Section */}
      <AnimatedSection direction="up">
        <section className="py-16 px-8 bg-white">
          <h2 className="text-4xl font-bold text-center mb-12">
            Pourquoi Nous Choisir ?
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <WhyChooseCard
              icon={<FaCloud className="w-8 h-8" />}
              title="Expertise Cloud"
              description="Une équipe d'experts certifiés dans les principales plateformes cloud."
            />
            <WhyChooseCard
              icon={<FaAward className="w-8 h-8" />}
              title="Excellence"
              description="Un taux de réussite exceptionnel pour nos candidats à la certification."
            />
            <WhyChooseCard
              icon={<FaUsers className="w-8 h-8" />}
              title="Accompagnement"
              description="Un suivi personnalisé tout au long de votre parcours."
            />
            <WhyChooseCard
              icon={<FaChalkboardTeacher className="w-8 h-8" />}
              title="Pédagogie"
              description="Des méthodes d'apprentissage adaptées à chaque profil."
            />
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection direction="right">
        <section className="py-16 px-8 bg-gray-100">
          <h2 className="text-4xl font-bold text-center mb-12">Témoignages</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-xl italic mb-6">
                {testimonials[activeTestimonial].content}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === activeTestimonial
                          ? "bg-blue-600"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Certification Section (existant) */}
      <AnimatedSection direction="left">
        <section className="py-16 px-8 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Certification AWS Cloud Practitioner
          </h2>
          <Image
            src={AWS}
            alt="AWS Certification Logo"
            className="w-109 h-109 mx-auto my-8"
            width={800}
            height={700}
            style={{ borderRadius: "12px" }}
          />
          <p className="text-xl max-w-2xl mx-auto">
            Obtenez la certification AWS Cloud Practitioner avec notre programme
            d&apos;accompagnement sur mesure.
          </p>
        </section>
      </AnimatedSection>

      <AnimatedSection direction="up">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <FaNewspaper className="w-12 h-12 text-white opacity-80" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Restez à jour avec ConnectToCloud
            </h2>

            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Abonnez-vous à notre newsletter pour recevoir les dernières
              actualités du Cloud, des conseils d&apos;experts et des astuces
              exclusives pour optimiser vos projets.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  className="flex-1 px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  S&apos;abonner
                </button>
              </div>
              {status === "success" && (
                <p className="mt-4 text-green-300">
                  Merci de votre inscription ! 🎉
                </p>
              )}
            </form>

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full" />
                <span>Tips & Astuces Cloud</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full" />
                <span>Dernières Nouveautés</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full" />
                <span>Guides Pratiques</span>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection direction="up">
        <section className="py-16 px-8 bg-gray-100" id="contact">
          <h2 className="text-4xl font-bold text-center mb-12">
            Contactez-nous
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <ContactInfo
                icon={<FaEnvelope className="w-6 h-6" />}
                title="Email"
                content="connectocloud22@gmail.com"
              />
              <ContactInfo
                icon={<FaPhone className="w-6 h-6" />}
                title="Téléphone"
                content="+221 78 505 86 46"
              />
              <ContactInfo
                icon={<FaMapMarkerAlt className="w-6 h-6" />}
                title="Adresse"
                content="000 Avenue du Cloud, Dakar, Senegal"
              />
            </div>
            <ContactForm />
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section (modifié) */}
      <AnimatedSection direction="down">
        <section className="bg-blue-600 text-white py-12 px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à démarrer votre voyage dans le cloud ?
          </h2>
          <p className="mb-8">
            Rejoignez ConnectToCloud et transformez votre avenir numérique
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contactez-nous
          </a>
          <div className="flex justify-center gap-6 mt-8">
            <SocialLink
              href="https://www.facebook.com/profile.php?id=61566385864153"
              icon={<FaFacebook className="w-6 h-6" />}
              label="Facebook"
            />
            <SocialLink
              href="https://www.instagram.com/connectocloud/"
              icon={<FaInstagram className="w-6 h-6" />}
              label="Facebook"
            />
            <SocialLink
              href="https://x.com/ConnectToCloud0"
              icon={<FaTwitter className="w-6 h-6" />}
              label="Twitter"
            />
            <SocialLink
              href="https://www.linkedin.com/company/connecttocloud/"
              icon={<FaLinkedin className="w-6 h-6" />}
              label="LinkedIn"
            />
            <SocialLink
              href="https://www.youtube.com/@ConnectToCloud/"
              icon={<FaYoutube className="w-6 h-6" />}
              label="YouTube"
            />
            <SocialLink
              href="#"
              icon={<FaTiktok className="w-6 h-6" />}
              label="TikTok"
            />
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}

// Components existants
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <a
    href={href}
    aria-label={label}
    className="text-white hover:-translate-y-1 transition-transform"
  >
    {icon}
  </a>
);

// Nouveaux composants
const WhyChooseCard: React.FC<WhyChooseCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="text-center p-6">
    <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
    <h3 className="font-bold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const ContactInfo: React.FC<contactingCardProps> = ({
  icon,
  title,
  content,
}) => (
  <div className="flex items-center space-x-4">
    <div className="text-blue-600">{icon}</div>
    <div>
      <h4 className="font-bold">{title}</h4>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

const ContactForm = () => (
  <form className="space-y-4">
    <input
      type="text"
      placeholder="Nom"
      className="w-full p-3 rounded-lg border border-gray-300"
    />
    <input
      type="email"
      placeholder="Email"
      className="w-full p-3 rounded-lg border border-gray-300"
    />
    <textarea
      placeholder="Message"
      rows={4}
      className="w-full p-3 rounded-lg border border-gray-300"
    ></textarea>
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
    >
      Envoyer
    </button>
  </form>
);
