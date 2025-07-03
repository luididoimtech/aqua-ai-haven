import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFish, FaRobot, FaCamera, FaHeart } from "react-icons/fa";
import aquariumHeroImg from "@/assets/aquarium-hero.jpg";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-aqua">
      {/* Navigation */}
      <nav className="bg-card/80 backdrop-blur-sm border-b border-border shadow-soft">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaFish className="text-primary text-2xl" />
              <h1 className="text-xl font-bold text-primary">Meu Aquário</h1>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Início
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                Sobre
              </Link>
              <Button variant="default" size="sm">
                <FaRobot className="mr-2" />
                Chatbot
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={aquariumHeroImg} 
            alt="Beautiful aquarium with tropical fish" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-ocean opacity-60"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 text-primary-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            🐠 Meu Aquário
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Seu mundo aquático, agora inteligente! Cuide dos seus peixes com tecnologia de ponta e inteligência artificial.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/about">
              <Button size="lg" className="shadow-ocean">
                <FaHeart className="mr-2" />
                Descubra Mais
              </Button>
            </Link>
            <Button variant="secondary" size="lg" className="shadow-soft">
              <FaCamera className="mr-2" />
              Identificar Espécie
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-ocean-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Recursos Inteligentes para Aquaristas
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-6 bg-card rounded-2xl shadow-soft border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl mb-4">
                <FaCamera className="mx-auto text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Reconhecimento IA</h3>
              <p className="text-muted-foreground">
                Identifique peixes, plantas e possíveis problemas apenas tirando uma foto.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-card rounded-2xl shadow-soft border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl mb-4">
                <FaRobot className="mx-auto text-coral-warm" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Assistente Virtual</h3>
              <p className="text-muted-foreground">
                Chatbot inteligente disponível 24h para tirar suas dúvidas sobre aquarismo.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-card rounded-2xl shadow-soft border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-4xl mb-4">
                <FaFish className="mx-auto text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Gestão Completa</h3>
              <p className="text-muted-foreground">
                Monitore temperatura, pH, espécies e receba recomendações personalizadas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
