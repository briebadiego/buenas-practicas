import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Menu, X, Phone, Mail, MapPin, Clock, Instagram, Linkedin, Youtube, Users, BookOpen, Heart, Target, Lightbulb, Award, MessageSquare, CheckCircle, Star, ArrowRight, ChevronDown } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Import assets
import bpcaaLogo from "@/assets/bpcaa-logo.jpg";
import heroImage from "@/assets/hero-caa.jpg";
import therapyOffice from "@/assets/therapy-office.jpg";
import claudiaMarimon from "@/assets/claudia-marimon.jpg";
import groupTherapy from "@/assets/group-therapy.jpg";
const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consultationType: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos",
        variant: "destructive"
      });
      return;
    }

    // WhatsApp integration
    const whatsappMessage = `Hola! Mi nombre es ${formData.name}. 
Email: ${formData.email}
Teléfono: ${formData.phone}
Tipo de consulta: ${formData.consultationType}
Mensaje: ${formData.message}`;
    const whatsappUrl = `https://wa.me/56998206450?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    toast({
      title: "¡Mensaje enviado!",
      description: "Te contactaremos pronto a través de WhatsApp"
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      consultationType: "",
      message: ""
    });
  };
  const navigationItems = [{
    href: "#inicio",
    label: "Inicio"
  }, {
    href: "#quienes-somos",
    label: "Quiénes Somos"
  }, {
    href: "#servicios",
    label: "Servicios"
  }, {
    href: "#programas",
    label: "Programas"
  }, {
    href: "#buenas-practicas",
    label: "Buenas Prácticas CAA"
  }, {
    href: "#faq",
    label: "FAQ"
  }, {
    href: "#testimonios",
    label: "Testimonios"
  }, {
    href: "#contacto",
    label: "Contacto"
  }];
  const services = [{
    icon: Target,
    title: "Evaluación y Diagnóstico CAA",
    description: "Evaluaciones integrales para determinar necesidades comunicativas y sistemas apropiados"
  }, {
    icon: Heart,
    title: "Intervención Individual",
    description: "Terapias personalizadas con sistemas de CAA adaptados a cada usuario"
  }, {
    icon: Users,
    title: "Capacitación Familiar",
    description: "Formación a familias en estrategias y uso de sistemas CAA"
  }, {
    icon: BookOpen,
    title: "Asesoría Profesional",
    description: "Consultoría a equipos educativos y terapéuticos"
  }, {
    icon: MessageSquare,
    title: "Talleres Grupales",
    description: "Sesiones grupales para usuarios de CAA y sus familias"
  }, {
    icon: Award,
    title: "Pasantías",
    description: "Experiencia de capacitación intensiva para profesionales y usuarios de sistemas de CAA"
  }];
  const programs = [{
    title: "Diplomado en CAA",
    description: "Programa académico avalado por Universidad del Desarrollo",
    icon: Award
  }, {
    title: "Cursos de Actualización",
    description: "Talleres sobre nuevas tendencias y tecnologías en CAA",
    icon: Lightbulb
  }, {
    title: "Formación en Estrategias",
    description: "Modelado de CAA, estimulación asistida del lenguaje",
    icon: Target
  }, {
    title: "Certificaciones",
    description: "Programas certificados para profesionales",
    icon: CheckCircle
  }];
  const faqData = [{
    question: "¿Qué es la Comunicación Aumentativa y Alternativa?",
    answer: "La CAA incluye todas las formas de comunicación (aparte del habla) que se usan para expresar pensamientos, necesidades, deseos e ideas. Incluye gestos, lenguaje de señas, símbolos gráficos, dispositivos electrónicos y muchas otras formas de comunicación."
  }, {
    question: "¿Quiénes pueden beneficiarse de la CAA?",
    answer: "Personas con parálisis cerebral, autismo, síndrome de Down, afasia, lesiones cerebrales traumáticas, ELA, y cualquier condición que afecte la comunicación verbal."
  }, {
    question: "¿Cuánto tiempo dura el proceso de evaluación?",
    answer: "La evaluación inicial puede tomar entre 2-4 sesiones, dependiendo de las necesidades individuales. Luego se desarrolla un plan de intervención personalizado."
  }, {
    question: "¿Trabajan con seguros de salud?",
    answer: "Sí, trabajamos con la mayoría de seguros de salud. Te ayudamos con la documentación necesaria para los reembolsos."
  }, {
    question: "¿Ofrecen atención online?",
    answer: "Sí, ofrecemos servicios de telerehabilitación y consultas online para familias que no pueden asistir presencialmente."
  }, {
    question: "¿Qué requisitos hay para los cursos?",
    answer: "Los cursos están dirigidos a profesionales de la salud, educación y familias. Los requisitos específicos varían según el programa."
  }];
  const testimonials = [{
    name: "María González",
    role: "Madre de usuario CAA",
    content: "El trabajo de Claudia transformó completamente la comunicación de mi hijo. Ahora puede expresar sus necesidades y emociones de manera efectiva.",
    rating: 5
  }, {
    name: "Dr. Carlos Méndez",
    role: "Fonoaudiólogo",
    content: "La formación que recibí en Buenas Prácticas de CAA elevó mi práctica profesional. Los conocimientos son aplicables inmediatamente.",
    rating: 5
  }, {
    name: "Ana Rodríguez",
    role: "Educadora Diferencial",
    content: "Los talleres son excepcionales. La evidencia científica combinada con casos prácticos hace que el aprendizaje sea muy efectivo.",
    rating: 5
  }];
  return <div className="min-h-screen bg-background">
      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/56998206450" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg caa-transition animate-float">
        <Phone className="w-6 h-6" />
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/src/assets/bpcaa-logo-2.png" alt="BPCAA Logo" className="h-12 w-auto" />
              <img src="/src/assets/buenas-practicas-text.png" alt="Buenas Prácticas de CAA" className="h-16 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigationItems.map(item => <a key={item.href} href={item.href} className="text-sm font-medium text-foreground hover:text-primary caa-transition">
                  {item.label}
                </a>)}
            </nav>

            <div className="flex items-center space-x-4">
              <Button asChild className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#contacto">Contáctanos</a>
              </Button>

              {/* Mobile menu button */}
              <Button variant="outline" size="icon" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && <div className="lg:hidden py-4 border-t">
              <nav className="flex flex-col space-y-2">
                {navigationItems.map(item => <a key={item.href} href={item.href} className="py-2 px-4 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md caa-transition" onClick={() => setMobileMenuOpen(false)}>
                    {item.label}
                  </a>)}
                <Button asChild className="mx-4 mt-2 bg-primary hover:bg-primary/90">
                  <a href="#contacto">Contáctanos</a>
                </Button>
              </nav>
            </div>}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroImage})`
      }}>
          <div className="absolute inset-0 caa-gradient-hero"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Transformando vidas a través de la Comunicación</h1>
            
            <p className="text-xl md:text-2xl mb-4 opacity-95 animate-slide-in-left">
              Centro especializado en Comunicación Aumentativa y Alternativa dirigido por Claudia Marimón, educadora diferencial y experta en CAA
            </p>
            
            <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto animate-slide-in-left">
              Acompañamos a personas con necesidades comunicativas complejas y sus familias, promoviendo la inclusión social y autonomía comunicativa basada en evidencia científica.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 font-semibold px-8">
                <a href="#servicios">
                  Conoce nuestros servicios
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              
              <Button size="lg" asChild className="bg-white/20 text-white border-2 border-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm">
                <a href="#contacto">Agenda una consulta</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* About Section */}
      <section id="quienes-somos" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Nuestra Historia y Misión
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Buenas Prácticas de CAA es un centro fundado por Claudia Marimón, educadora diferencial, magíster y especialista reconocida internacionalmente en Comunicación Aumentativa y Alternativa.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">Es docente de la Universidad del Desarrollo (UDD) donde dirige un diplomado en CAA, es Presidenta de ISAAC Español (Asociación Internacional de CAA) y forma parte del equipo profesional del Centro de Rehabilitación Amancay.</p>
                
                <p className="text-lg text-muted-foreground leading-relaxed font-semibold">
                  Nuestra misión es promover la comunicación funcional e inclusión social de personas con necesidades comunicativas complejas mediante capacitación en buenas prácticas de CAA, apoyadas en evidencia científica.
                </p>
              </div>
              
              <div className="relative">
                <img src={claudiaMarimon} alt="Claudia Marimón" className="rounded-2xl caa-shadow-card w-full" />
              </div>
            </div>

            <Card className="caa-shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-primary mb-8">
                  Nuestros Valores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[{
                  icon: CheckCircle,
                  title: "Asumir competencia comunicativa",
                  description: "en cada persona"
                }, {
                  icon: Heart,
                  title: "Respeto por la dignidad",
                  description: "y potencial de todos"
                }, {
                  icon: Users,
                  title: "Inclusión real",
                  description: "y significativa"
                }, {
                  icon: BookOpen,
                  title: "Formación constante",
                  description: "basada en evidencia"
                }, {
                  icon: Target,
                  title: "Trabajo colaborativo",
                  description: "e interdisciplinario"
                }, {
                  icon: MessageSquare,
                  title: "La comunicación como un derecho",
                  description: "para todos"
                }].map((value, index) => <div key={index} className="text-center space-y-3">
                      <value.icon className="w-12 h-12 text-primary mx-auto" />
                      <h3 className="font-semibold text-foreground">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                ¿Qué Hacemos?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Ofrecemos servicios especializados en Comunicación Aumentativa y Alternativa
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => <Card key={index} className="group hover:shadow-lg caa-transition caa-shadow-card">
                  <CardHeader>
                    <service.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 caa-transition" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programas" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Programas Especializados
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Formación profesional y académica en CAA
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, index) => <Card key={index} className="group hover:shadow-lg caa-transition caa-shadow-card">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <program.icon className="w-10 h-10 text-primary" />
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {program.description}
                    </CardDescription>
                  </CardContent>
                </Card>)}
            </div>

            <div className="mt-12">
              <img src={groupTherapy} alt="Programas de capacitación grupal" className="rounded-2xl caa-shadow-card w-full max-w-4xl mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section id="buenas-practicas" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Fundamentos de Nuestro Trabajo
            </h2>
            
            <p className="text-lg text-muted-foreground mb-12">
              Trabajamos bajo los principios fundamentales de la CAA:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[{
              icon: CheckCircle,
              title: "Asumir Competencia",
              description: "Creemos en la capacidad comunicativa de cada persona"
            }, {
              icon: BookOpen,
              title: "Vocabulario Robusto",
              description: "Sistemas equilibrados con vocabulario esencial y personalizado"
            }, {
              icon: Target,
              title: "Modelado de CAA",
              description: "Demostraciones constantes del uso del sistema"
            }, {
              icon: Users,
              title: "Acceso Total",
              description: "Disponibilidad permanente del sistema de comunicación"
            }, {
              icon: MessageSquare,
              title: "Multimodalidad",
              description: "Combinación de gestos, símbolos, tecnología y habla"
            }, {
              icon: Award,
              title: "Prácticas basadas en la evidencia",
              description: "Intervenciones fundamentadas en investigación científica actual"
            }].map((principle, index) => <Card key={index} className="text-center p-6 hover:shadow-lg caa-transition caa-shadow-card">
                  <principle.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{principle.title}</h3>
                  <p className="text-muted-foreground">{principle.description}</p>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Preguntas Frecuentes
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6 caa-shadow-card">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary caa-transition">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Experiencias que nos Motivan
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => <Card key={index} className="text-center p-6 hover:shadow-lg caa-transition caa-shadow-card">
                  <CardContent className="space-y-4">
                    <div className="flex justify-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                    </div>
                    
                    <p className="text-muted-foreground italic mb-4">
                      "{testimonial.content}"
                    </p>
                    
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Conecta con Nosotros
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form and Social Media */}
              <div className="space-y-8">
                <Card className="p-6 caa-shadow-card">
                  <CardHeader>
                    <CardTitle>Envíanos tu consulta</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">Nombre completo *</Label>
                        <Input id="name" type="text" value={formData.name} onChange={e => setFormData({
                        ...formData,
                        name: e.target.value
                      })} required className="mt-1" />
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
                        ...formData,
                        email: e.target.value
                      })} required className="mt-1" />
                      </div>

                      <div>
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input id="phone" type="tel" value={formData.phone} onChange={e => setFormData({
                        ...formData,
                        phone: e.target.value
                      })} className="mt-1" />
                      </div>

                      <div>
                        <Label htmlFor="consultationType">Tipo de consulta</Label>
                        <Select onValueChange={value => setFormData({
                        ...formData,
                        consultationType: value
                      })}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Selecciona una opción" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="evaluacion">Evaluación</SelectItem>
                            <SelectItem value="capacitacion">Capacitación</SelectItem>
                            <SelectItem value="asesoria">Asesoría</SelectItem>
                            <SelectItem value="informacion">Información general</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message">Mensaje *</Label>
                        <Textarea id="message" value={formData.message} onChange={e => setFormData({
                        ...formData,
                        message: e.target.value
                      })} required rows={4} className="mt-1" />
                      </div>

                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Enviar consulta
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <Card className="p-6 caa-shadow-card">
                  <CardHeader>
                    <CardTitle>Síguenos en Redes Sociales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="icon" asChild>
                        <a href="https://instagram.com/buenaspracticasdecaa" target="_blank" rel="noopener noreferrer">
                          <Instagram className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a href="https://linkedin.com/in/claudia-marimon" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a href="https://youtube.com/@buenaspracticascaa" target="_blank" rel="noopener noreferrer">
                          <Youtube className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information and Office Image */}
              <div className="space-y-8">
                <Card className="p-6 caa-shadow-card">
                  <CardHeader>
                    <CardTitle>Información de Contacto</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">Dirección</p>
                        <p className="text-muted-foreground">Camino San Francisco de Asis 150, Oficina 632, Vitacura</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">Teléfono</p>
                        <p className="text-muted-foreground">+56 9 9820 6450</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-muted-foreground">buenaspracticasdecaa@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">Horarios</p>
                        <p className="text-muted-foreground">Lunes a Viernes 9:00-18:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div>
                  <img src={therapyOffice} alt="Oficina de terapia CAA" className="rounded-2xl caa-shadow-card w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="space-y-4">
                
                <p className="text-background/70">
                  Comunicación para todos, inclusión real
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
                <ul className="space-y-2">
                  {navigationItems.slice(0, 4).map(item => <li key={item.href}>
                      <a href={item.href} className="text-background/70 hover:text-background caa-transition">
                        {item.label}
                      </a>
                    </li>)}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Servicios</h3>
                <ul className="space-y-2">
                  {navigationItems.slice(4, 8).map(item => <li key={item.href}>
                      <a href={item.href} className="text-background/70 hover:text-background caa-transition">
                        {item.label}
                      </a>
                    </li>)}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Contacto</h3>
                <div className="space-y-2 text-background/70">
                  <p>Camino San Francisco de Asis 150, Oficina 632, Vitacura, Santiago</p>
                  <p>+56 9 9820 6450</p>
                  <p>buenaspracticasdecaa@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="border-t border-background/20 pt-8 text-center">
              <p className="text-background/70">
                © 2025 Buenas Prácticas de CAA. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;