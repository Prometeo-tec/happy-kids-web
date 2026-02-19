import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Star, PartyPopper, Music, Cake, ShieldCheck, Menu, X, ChevronRight, Smile, Waves } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto para el navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigation = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Instalaciones', href: '#instalaciones' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Opiniones', href: '#opiniones' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-2">
                <div className="bg-orange-500 p-2 rounded-full">
                  <Smile className="h-6 w-6 text-white" />
                </div>
                <span className={`font-bold text-2xl tracking-tight ${scrolled ? 'text-orange-600' : 'text-white drop-shadow-md'}`}>
                  Happy Kids
                </span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {navigation.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className={`text-sm font-medium hover:text-orange-400 transition-colors ${scrolled ? 'text-gray-700' : 'text-white drop-shadow-sm'}`}
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="tel:5557790664"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-5 py-2 rounded-full font-bold transition-transform transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <Phone size={18} />
                Reservar
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className={`p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-gray-100">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="tel:5557790664"
                className="block w-full text-center mt-4 bg-orange-500 text-white px-4 py-3 rounded-lg font-bold shadow-md"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-500 to-orange-400 overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-32 h-32 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6 border border-white/30">
            🎉 El mejor lugar para celebrar en Ecatepec
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Donde la magia y la <br/>
            <span className="text-yellow-300">diversión</span> se encuentran
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
            Creamos recuerdos inolvidables para tus hijos con instalaciones seguras, juegos increíbles y el mejor ambiente familiar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contacto" className="px-8 py-4 bg-white text-orange-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg transform hover:-translate-y-1">
              Cotizar mi Fiesta
            </a>
            <a href="#instalaciones" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Ver Instalaciones
            </a>
          </div>
        </div>
        
        {/* Curve Separator */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Características / Instalaciones */}
      <section id="instalaciones" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-orange-500 font-bold tracking-wide uppercase text-sm mb-2">¿Por qué elegirnos?</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">Diversión garantizada para todas las edades</h3>
            <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
              Contamos con espacios diseñados para que chicos y grandes disfruten al máximo con total seguridad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-blue-50 rounded-2xl p-8 hover:bg-blue-100 transition-colors duration-300 border border-blue-100">
              <div className="bg-blue-500 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <PartyPopper className="text-white h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Tirolesa Extrema</h4>
              <p className="text-gray-600">
                ¡Vuela por el salón! Nuestra atracción estrella para los más aventureros, siempre bajo supervisión experta.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-orange-50 rounded-2xl p-8 hover:bg-orange-100 transition-colors duration-300 border border-orange-100">
              <div className="bg-orange-500 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Waves className="text-white h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Piscina Divertida</h4>
              <p className="text-gray-600">
                Una zona acuática refrescante perfecta para días calurosos. Diversión segura y controlada para los niños.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-purple-50 rounded-2xl p-8 hover:bg-purple-100 transition-colors duration-300 border border-purple-100">
              <div className="bg-purple-500 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="text-white h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Área de Juegos Multinivel</h4>
              <p className="text-gray-600">
                Laberintos, resbaladillas y zonas de obstáculos. Un paraíso de exploración totalmente acolchado y seguro.
              </p>
            </div>
          </div>

          {/* Banner visual de contexto */}
          <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl relative h-80 bg-gray-900 flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/80 z-10"></div>
             {/* Placeholder image background */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530103862676-de3c9a59af57?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-50"></div>
             
             <div className="relative z-20 text-center px-6">
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">¿Listo para la mejor fiesta del año?</h3>
                <p className="text-blue-100 text-lg mb-8">Nos encargamos de todo para que tú solo te encargues de disfrutar.</p>
                <a href="tel:5557790664" className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors">
                  <Phone size={20} />
                  Llamar al 55 5779 0664
                </a>
             </div>
          </div>
        </div>
      </section>

      {/* Servicios Adicionales */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Más que un salón, una <span className="text-orange-500">experiencia completa</span></h2>
              <p className="text-lg text-gray-600 mb-6">
                En Happy Kids entendemos que cada detalle cuenta. Por eso ofrecemos servicios integrales para tu evento.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 p-1 rounded-full mt-1">
                    <Music className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900">Música y Ambiente</p>
                    <p className="text-gray-500">Sistema de sonido profesional para animar tu evento.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-pink-100 p-1 rounded-full mt-1">
                    <Cake className="h-5 w-5 text-pink-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900">Mobiliario Cómodo</p>
                    <p className="text-gray-500">Mesas y sillas en perfecto estado para niños y adultos.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-yellow-100 p-1 rounded-full mt-1">
                    <Star className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900">Servicio de Staff</p>
                    <p className="text-gray-500">Personal de apoyo, limpieza y seguridad en entrada (Valet).</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 p-4 bg-orange-100 rounded-lg border-l-4 border-orange-500">
                <p className="text-orange-800 font-medium italic">
                  "El gerente muy amable y servicial, buen trato con la gente."
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                   <div className="h-48 bg-gray-200 rounded-2xl overflow-hidden shadow-lg transform translate-y-4">
                      <img src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Fiesta infantil" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
                   </div>
                   <div className="h-48 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                      <img src="https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Juegos" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
                   </div>
                </div>
                <div className="space-y-4 pt-8">
                   <div className="h-48 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                      <img src="https://images.unsplash.com/photo-1576615278693-f4c7d0d09995?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Pastel" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
                   </div>
                   <div className="h-48 bg-gray-200 rounded-2xl overflow-hidden shadow-lg transform -translate-y-4">
                      <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Niños jugando" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="opiniones" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Lo que dicen los papás</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 relative">
              <div className="absolute -top-4 left-6 bg-orange-500 rounded-full p-2">
                 <Star className="text-white h-5 w-5 fill-current" />
              </div>
              <p className="text-gray-600 mb-4 italic">"Muy padre el lugar, lo recomiendo muchísimo, el personal muy amable, y cuenta con dinámicas muy divertidas para niños y adultos. Si eres adulto con Alma de niño disfrutarás..."</p>
              <div className="flex items-center mt-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">A</div>
                <div className="ml-3">
                  <p className="text-sm font-bold text-gray-900">Alma Oregel</p>
                  <div className="flex text-yellow-400 text-xs">
                    <Star className="h-3 w-3 fill-current" /><Star className="h-3 w-3 fill-current" /><Star className="h-3 w-3 fill-current" /><Star className="h-3 w-3 fill-current" /><Star className="h-3 w-3 fill-current" />
                  </div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 relative mt-4 md:mt-0">
               <div className="absolute -top-4 left-6 bg-orange-500 rounded-full p-2">
                 <Star className="text-white h-5 w-5 fill-current" />
              </div>
              <p className="text-gray-600 mb-4 italic">"Excelente lugar baños limpios y excelente servicio todos muy amables. Muy buen lugar para celebraciones infantiles y el área de juegos excelente."</p>
              <div className="flex items-center mt-4">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">U</div>
                <div className="ml-3">
                  <p className="text-sm font-bold text-gray-900">Usuario Google</p>
                  <div className="flex text-yellow-400 text-xs">
                    <Star className="h-3 w-3 fill-current" /><Star className="h-3 w-3 fill-current" /><Star className="h-3 w-3 fill-current" /><Star className="h-3 w-3 fill-current" /><Star className="h-3 w-3 fill-current" />
                  </div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 relative mt-4 md:mt-0">
               <div className="absolute -top-4 left-6 bg-orange-500 rounded-full p-2">
                 <Star className="text-white h-5 w-5 fill-current" />
              </div>
              <p className="text-gray-600 mb-4 italic">"Fui invitada hace poco y estuvo muy bien tanto el personal como la limpieza. La zona muy tranquila, regresaría sin dudarlo."</p>
              <div className="flex items-center mt-4">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">C</div>
                <div className="ml-3">
                  <p className="text-sm font-bold text-gray-900">Cookie Lozano</p>
                  <div className="flex text-yellow-400 text-xs">
                    <Star className="h-3 w-3 fill-current" /><Star className="h-3 w-3 fill-current" /><Star className="h-3 w-3 fill-current" /><Star className="h-3 w-3 fill-current" /><Star className="h-3 w-3 fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info & Map Section */}
      <section id="contacto" className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Info Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Visítanos y Reserva</h2>
                <p className="text-gray-400 mb-8">
                  Estamos listos para hacer de tu fiesta un evento inolvidable. Llámanos para agendar una cita, conocer el salón y apartar tu fecha.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Dirección</h3>
                    <p className="text-gray-300">Vía Adolfo López Mateos 299, Ejidos de Santa María Tulpetlac, 55400 Ecatepec de Morelos, Méx.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Teléfono</h3>
                    <p className="text-gray-300">55 5779 0664</p>
                    <a href="tel:5557790664" className="text-orange-400 hover:text-orange-300 text-sm mt-1 inline-block">Llamar ahora →</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                  <div className="w-full">
                    <h3 className="font-bold text-lg mb-2">Horarios de Atención</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                      <div>Lunes - Sábado:</div>
                      <div className="text-right">11:30 a.m. – 7:00 p.m.</div>
                      <div>Domingo:</div>
                      <div className="text-right">11:30 a.m. – 5:00 p.m.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Column */}
            <div className="h-full min-h-[400px] bg-gray-800 rounded-2xl overflow-hidden shadow-2xl relative group">
                {/* Simulated Map UI */}
                <div className="w-full h-full bg-slate-700 flex flex-col items-center justify-center relative">
                    <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Mapa Estático" className="w-full h-full object-cover opacity-30"/>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white p-4 rounded-lg shadow-xl text-center transform group-hover:scale-105 transition-transform">
                            <MapPin className="h-8 w-8 text-red-500 mx-auto mb-2" />
                            <p className="text-gray-900 font-bold text-sm">Happy Kids</p>
                            <p className="text-gray-500 text-xs">Ecatepec, Méx</p>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-4 rounded-xl">
                   <p className="text-gray-800 text-sm font-medium flex items-center gap-2">
                       <MapPin size={16}/> Vía Adolfo López Mateos 299
                   </p>
                   <a 
                     href="https://www.google.com/maps/search/?api=1&query=Salón+de+fiestas+infantiles+happy+kids+Ecatepec" 
                     target="_blank" 
                     rel="noreferrer"
                     className="mt-2 block w-full bg-blue-600 text-white text-center py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors"
                   >
                       Ver en Google Maps
                   </a>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
             <div className="bg-orange-600 p-1.5 rounded-full">
                  <Smile className="h-4 w-4 text-white" />
             </div>
             <span className="text-white font-bold text-lg">Happy Kids</span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Salón de fiestas infantiles Happy Kids. Todos los derechos reservados.</p>
        </div>
      </footer>
      
      {/* Botón flotante para móvil */}
      <a 
        href="tel:5557790664"
        className="fixed bottom-6 right-6 md:hidden bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 hover:bg-green-600 transition-colors animate-bounce"
        aria-label="Llamar"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}