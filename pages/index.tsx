import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
// Adjusted icon imports: Magic and Resize do not exist in lucide-react; replaced with Sparkles and Expand
import { ChevronRight, Upload, Zap, Sparkles, Expand, Download, Star, Users, Clock, TrendingUp, Shield, CheckCircle } from 'lucide-react';

export default function SmartBatchLanding() {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Remoção de Fundo com IA",
      description: "Remove fundos automaticamente com 99% de precisão em segundos",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Expand className="w-8 h-8" />,
      title: "Redimensionamento Inteligente",
      description: "Adapta para qualquer marketplace com 15+ presets prontos",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Processamento Ultra-rápido",
      description: "100 imagens processadas em 30 segundos com tecnologia de ponta",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Download Organizado",
      description: "Todas as imagens em um ZIP com nomenclatura SEO otimizada",
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Carla Mendes",
      role: "CEO",
      company: "Fashion Store Brasil",
      image: "/api/placeholder/80/80",
      text: "Reduzimos o tempo de processamento de imagens de 4 horas para 30 segundos. Nossas vendas aumentaram 35% com imagens mais profissionais.",
      rating: 5
    },
    {
      name: "Roberto Silva",
      role: "Dropshipper",
      company: "RS Imports",
      image: "/api/placeholder/80/80",
      text: "Com o Smart Batch, processo 500 imagens por semana em minutos. O ROI foi imediato - economizo R$ 2.000/mês com design.",
      rating: 5
    },
    {
      name: "Patricia Oliveira",
      role: "Gerente de Marketplace",
      company: "TechMart",
      image: "/api/placeholder/80/80",
      text: "A qualidade das imagens melhorou tanto que nosso ticket médio aumentou 28%. Ferramenta indispensável para e-commerce.",
      rating: 5
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "29",
      credits: "100 imagens/mês",
      features: ["Remoção de fundo", "Compressão inteligente", "15+ presets", "Suporte por email"],
      popular: false
    },
    {
      name: "Professional",
      price: "79",
      credits: "500 imagens/mês",
      features: ["Todas as features Starter", "Processamento prioritário", "API integrada", "Suporte prioritário"],
      popular: true,
      savings: "Economize R$ 60"
    },
    {
      name: "Enterprise",
      price: "199",
      credits: "2000 imagens/mês",
      features: ["Todas as features Pro", "Conta gerente dedicada", "SLA garantido", "Treinamento exclusivo"],
      popular: false
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Integração com sistema de email
    console.log('Email capturado:', email);
    window.open('https://smartbatch.dev/', '_blank');
  };

  return (
    <>
      <Head>
        <title>Smart Batch - Processamento de Imagens em Lote com IA | Economize 5h por Semana</title>
        <meta name="description" content="Transforme 100 imagens em 30 segundos. Remoção de fundo, redimensionamento e otimização automática para e-commerce. Teste grátis!" />
        <meta name="keywords" content="otimização de imagens, e-commerce, processamento em lote, IA, remoção de fundo" />
        <meta property="og:title" content="Smart Batch - Processamento de Imagens em Lote com IA" />
        <meta property="og:description" content="Economize 5 horas por semana com processamento inteligente de imagens" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://smartbatch.dev/" />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23006DFF'/%3E%3Cpath d='M18 34l10 10 18-24' stroke='%23fff' stroke-width='6' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E"
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-md transform rotate-12"></div>
                </div>
                <span className="text-xl font-bold text-gray-900">Smart Batch</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
                <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Preços</a>
                <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Depoimentos</a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                  onClick={() => window.open('https://smartbatch.dev/', '_blank')}
                >
                  Começar Agora
                </motion.button>
              </div>

              <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                  <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Zap className="w-4 h-4 mr-2" />
                  Processamento 10x mais rápido
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Transforme Seu
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> E-commerce</span>
                  <br />em 30 Segundos
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Processamento em lote com IA que economiza 5 horas por semana e aumenta suas vendas em 23%. 
                  Remoção de fundo, otimização e nomenclatura SEO automática.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-shadow flex items-center justify-center"
                    onClick={() => window.open('https://smartbatch.dev/', '_blank')}
                  >
                    Experimente Grátis por 7 Dias
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors"
                  >
                    Assista Demo de 2 Minutos
                  </motion.button>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100+</div>
                    <div className="text-sm text-gray-600">Imagens por lote</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">30s</div>
                    <div className="text-sm text-gray-600">Tempo de processamento</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">23%</div>
                    <div className="text-sm text-gray-600">Aumento nas vendas</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative w-full h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 shadow-2xl">
                  <div className="bg-white rounded-xl p-6 shadow-lg mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-500">smartbatch.dev</span>
                    </div>
                    <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center">
                      <Upload className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Arraste suas imagens aqui</p>
                      <p className="text-sm text-gray-400">ou clique para selecionar</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Processando...</p>
                          <p className="text-sm text-gray-500">45/100 imagens</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-blue-600">15 segundos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Automatize em 4 Passos Simples
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                De imagens brutas para produtos profissionais em segundos. Nossa IA faz todo o trabalho pesado para você.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className={`bg-gradient-to-br ${feature.color} p-6 rounded-2xl text-white shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2`}>
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-blue-50 opacity-90">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Economize 5 Horas por Semana
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Aumente Suas Vendas em 23%
                  </span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">98% Mais Rápido</h3>
                      <p className="text-gray-600">De 4 horas para 30 segundos no processamento de imagens</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Sites 40% Mais Rápidos</h3>
                      <p className="text-gray-600">Imagens otimizadas melhoram a velocidade e aumentam conversão em 23%</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Economia Garantida</h3>
                      <p className="text-gray-600">Elimina necessidade de designer por R$ 2.000/mês</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600">Tempo economizado por semana:</span>
                    <span className="text-2xl font-bold text-blue-600">5 horas</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Economia mensal:</span>
                    <span className="text-2xl font-bold text-green-600">R$ 2.000</span>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Calculadora de ROI</h3>
                    <p className="text-gray-600">Veja quanto você vai economizar</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Imagens por mês</label>
                      <input type="range" min="50" max="2000" defaultValue="500" className="w-full" />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>50</span>
                        <span className="font-medium text-blue-600">500</span>
                        <span>2000</span>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-1">R$ 2.000</div>
                        <div className="text-sm text-gray-600">Economia mensal</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Resultados Reais de Clientes
              </h2>
              <p className="text-xl text-gray-600">
                Milhares de lojistas já transformaram seus negócios
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role} • {testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full">
                <Users className="w-5 h-5 mr-2" />
                <span className="font-semibold">+2.500 lojistas satisfeitos</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Planos que Cabem no Seu Bolso
              </h2>
              <p className="text-xl text-gray-600">
                Comece grátis e escale conforme crescer
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative ${plan.popular ? 'transform scale-105' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        MAIS POPULAR
                      </div>
                    </div>
                  )}
                  
                  <div className={`bg-white rounded-2xl p-8 shadow-xl h-full ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-gray-900">R$ {plan.price}</span>
                        <span className="text-gray-600">/mês</span>
                      </div>
                      <p className="text-blue-600 font-medium">{plan.credits}</p>
                      {plan.savings && (
                        <div className="text-green-600 text-sm font-medium mt-2">{plan.savings}</div>
                      )}
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                        plan.popular
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                      onClick={() => window.open('https://smartbatch.dev/', '_blank')}
                    >
                      Começar Agora
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full">
                <Shield className="w-5 h-5 mr-2" />
                <span className="font-semibold">7 dias de garantia • Cancele quando quiser</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pronto para Transformar Seu E-commerce?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Comece hoje e economize 5 horas esta semana. Milhares de lojistas já fizeram a mudança.
              </p>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8">
                <div className="grid grid-cols-3 gap-4 text-center text-white">
                  <div>
                    <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                    <div className="text-sm opacity-80">horas</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                    <div className="text-sm opacity-80">minutos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                    <div className="text-sm opacity-80">segundos</div>
                  </div>
                </div>
                <p className="text-center text-white/80 mt-4 text-sm">
                  Para aproveitar o desconto especial de lançamento
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-shadow inline-flex items-center"
                onClick={() => window.open('https://smartbatch.dev/', '_blank')}
              >
                Garantir Meu Desconto Agora
                <ChevronRight className="w-5 h-5 ml-2" />
              </motion.button>

              <p className="text-blue-100 text-sm mt-4">
                ✓ 7 dias grátis • ✓ Cancele quando quiser • ✓ Suporte 24/7
              </p>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-md transform rotate-12"></div>
                  </div>
                  <span className="text-xl font-bold">Smart Batch</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Otimização inteligente de imagens para e-commerce. Economize tempo e aumente suas vendas.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Produto</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#pricing" className="hover:text-white transition-colors">Preços</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Empresa</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Suporte</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Ajuda</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Smart Batch. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}