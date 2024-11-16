// pages/index.js
import Image from "next/image";
import { useState } from "react";
import {
  FaAward,
  FaBuilding,
  FaChalkboardTeacher,
  FaCloud,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaPodcast,
  FaTiktok,
  FaTwitter,
  FaUserGraduate,
  FaUsers,
  FaYoutube,
} from "react-icons/fa";

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Marie Laurent",
      role: "CTO, TechCorp",
      content:
        "ConnectToCloud nous a permis de réaliser notre transformation numérique en temps record.",
    },
    {
      name: "Thomas Dubois",
      role: "Étudiant en Informatique",
      content:
        "Grâce à leur programme, j'ai obtenu ma certification AWS du premier coup !",
    },
    {
      name: "Sophie Martin",
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

  return (
    <main className="min-h-screen">
      {/* Hero Section (inchangé) */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24 px-8 text-center">
        <Image
          src="/api/placeholder/120/120"
          alt="ConnectToCloud Logo"
          className="w-32 h-32 mx-auto mb-8 bg-white rounded-full p-4"
          width={100}
          height={100}
        />
        <h1 className="text-5xl font-bold mb-6">ConnectToCloud</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Démocratisons ensemble l&apos;accès au cloud computing. Votre
          partenaire de confiance pour la transformation numérique.
        </p>
      </section>

      {/* Stats Section */}
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

      {/* Features Section (existant) */}
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

      {/* Why Choose Us Section */}
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

      {/* Testimonials Section */}
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

      {/* Certification Section (existant) */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-4xl font-bold mb-12">
          Certification AWS Cloud Practitioner
        </h2>
        <Image
          src="/api/placeholder/200/200"
          alt="AWS Certification Logo"
          className="w-48 h-48 mx-auto my-8"
          width={100}
          height={100}
        />
        <p className="text-xl max-w-2xl mx-auto">
          Obtenez la certification AWS Cloud Practitioner avec notre programme
          d&apos;accompagnement sur mesure.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-8 bg-gray-100" id="contact">
        <h2 className="text-4xl font-bold text-center mb-12">Contactez-nous</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <ContactInfo
              icon={<FaEnvelope className="w-6 h-6" />}
              title="Email"
              content="contact@connecttocloud.fr"
            />
            <ContactInfo
              icon={<FaPhone className="w-6 h-6" />}
              title="Téléphone"
              content="+33 1 23 45 67 89"
            />
            <ContactInfo
              icon={<FaMapMarkerAlt className="w-6 h-6" />}
              title="Adresse"
              content="123 Avenue du Cloud, 75000 Paris"
            />
          </div>
          <ContactForm />
        </div>
      </section>

      {/* CTA Section (modifié) */}
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
            href="#"
            icon={<FaFacebook className="w-6 h-6" />}
            label="Facebook"
          />
          <SocialLink
            href="#"
            icon={<FaTwitter className="w-6 h-6" />}
            label="Twitter"
          />
          <SocialLink
            href="#"
            icon={<FaLinkedin className="w-6 h-6" />}
            label="LinkedIn"
          />
          <SocialLink
            href="#"
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
    </main>
  );
}

// Components existants
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    aria-label={label}
    className="text-white hover:-translate-y-1 transition-transform"
  >
    {icon}
  </a>
);

// Nouveaux composants
const WhyChooseCard = ({ icon, title, description }) => (
  <div className="text-center p-6">
    <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
    <h3 className="font-bold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const ContactInfo = ({ icon, title, content }) => (
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
      rows="4"
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
