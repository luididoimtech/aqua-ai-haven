import React from "react";
import { FaFish, FaRobot, FaWater, FaCamera } from "react-icons/fa";
import { motion } from "framer-motion";
import neonTetraImg from "@/assets/neon-tetra.jpg";
import bettaFishImg from "@/assets/betta-fish.jpg";
import guppyFishImg from "@/assets/guppy-fish.jpg";
import angelfishImg from "@/assets/angelfish.jpg";

const fishImages = [
  {
    src: neonTetraImg,
    alt: "Neon Tetra"
  },
  {
    src: bettaFishImg,
    alt: "Betta"
  },
  {
    src: guppyFishImg,
    alt: "Guppy"
  },
  {
    src: angelfishImg,
    alt: "Peixe-anjo"
  }
];

const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6 text-foreground">
      <motion.h1
        className="text-4xl font-bold text-center mb-6 text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🐠 Meu Aquário – Seu mundo aquático, agora inteligente!
      </motion.h1>

      <motion.p
        className="mb-6 text-lg text-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <strong className="text-primary">Meu Aquário</strong> é um aplicativo encantador e interativo desenvolvido com <strong>React</strong> que transforma o cuidado com aquários em uma experiência simples, divertida e inteligente.
        Ideal para iniciantes e apaixonados por aquarismo, ele traz recursos modernos — incluindo <strong className="text-coral-warm">inteligência artificial</strong> — para ajudar você a cuidar melhor dos seus peixes e plantas aquáticas.
      </motion.p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2 text-ocean-medium">
        <FaFish className="text-coral-warm" /> Funcionalidades que encantam
      </h2>

      <ul className="space-y-4 text-lg">
        <li className="p-4 bg-card rounded-lg border border-border shadow-soft">
          <strong className="text-primary">🏠 Página Inicial:</strong> Um ponto de partida caloroso com imagens relaxantes e um convite para mergulhar no mundo do aquarismo.
        </li>
        <li className="p-4 bg-card rounded-lg border border-border shadow-soft">
          <strong className="text-ocean-medium">🐟 Meu Aquário:</strong> Cadastre seu aquário, adicione espécies, defina temperatura e pH. Receba recomendações inteligentes para manter tudo equilibrado.
        </li>
        <li className="p-4 bg-card rounded-lg border border-border shadow-soft">
          <strong className="text-accent">
            <FaCamera className="inline animate-bounce mr-2" /> 
            Reconhecimento de Espécies:
          </strong> Envie uma imagem para identificar peixes, plantas ou possíveis problemas com IA.
        </li>
        <li className="p-4 bg-card rounded-lg border border-border shadow-soft">
          <strong className="text-coral-warm">
            <FaRobot className="inline animate-pulse mr-2" /> 
            Chatbot:
          </strong> Um assistente virtual pronto para responder dúvidas, dar dicas e orientar você 24h por dia.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2 text-ocean-medium">
        <FaWater className="text-accent" /> Por que você vai adorar?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div 
          className="p-4 bg-gradient-aqua rounded-lg shadow-soft"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-foreground">✨ Simplifica o dia a dia de quem cuida de aquários</p>
        </motion.div>
        <motion.div 
          className="p-4 bg-gradient-coral rounded-lg shadow-soft"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-foreground">🔍 Identifica espécies e problemas com ajuda da IA</p>
        </motion.div>
        <motion.div 
          className="p-4 bg-gradient-ocean rounded-lg shadow-soft"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-primary-foreground">💡 Oferece sugestões inteligentes com base nos dados do seu aquário</p>
        </motion.div>
        <motion.div 
          className="p-4 bg-card border border-border rounded-lg shadow-soft"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-foreground">🎯 Torna o hobby mais interativo e prazeroso</p>
        </motion.div>
      </div>

      <motion.div
        className="mt-10 text-xl text-center font-medium text-primary bg-gradient-aqua p-8 rounded-2xl shadow-ocean"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        🌟 Comece agora com o <strong>Meu Aquário</strong> e leve sua paixão para o próximo nível!
      </motion.div>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-center text-ocean-medium">📺 Aprenda mais com vídeos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-card border border-border rounded-lg overflow-hidden shadow-soft"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            width="100%"
            height="215"
            src="https://www.youtube.com/embed/T7ZNtal3JOw"
            title="AI Aquarium"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full"
          ></iframe>
          <p className="p-4 text-center text-muted-foreground">AI Aquarium – reconhecimento automático de espécies aquáticas</p>
        </motion.div>

        <motion.div
          className="bg-card border border-border rounded-lg overflow-hidden shadow-soft"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe
            width="100%"
            height="215"
            src="https://www.youtube.com/embed/Ee2QG_ZcOPA"
            title="Fish Identification with AI"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full"
          ></iframe>
          <p className="p-4 text-center text-muted-foreground">Fish Identification with AI – protótipo de reconhecimento de peixes com IA</p>
        </motion.div>
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-center text-ocean-medium">🎠 Galeria de Peixes</h2>
      <motion.div
        className="flex space-x-4 overflow-x-auto pb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {fishImages.map((fish, index) => (
          <motion.img
            key={index}
            src={fish.src}
            alt={fish.alt}
            className="h-48 w-48 rounded-2xl shadow-ocean object-cover flex-shrink-0 border-2 border-coral-light"
            whileHover={{ scale: 1.1, rotateY: 10 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default About;