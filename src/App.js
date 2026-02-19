import React, { useState, useEffect } from 'react';
import { 
  Phone, MapPin, Clock, Star, 
  Music, Utensils, ShieldCheck, Menu, 
  X, Smile, ChevronRight, Heart, Pizza, 
  Check, ChevronLeft, Calendar, Camera,
  Users, Coffee, Zap, Send
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [currentInstalacion, setCurrentInstalacion] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState("Paquete Mágico");

  // Imágenes del Hero
  const heroImages = [
    'https://images.unsplash.com/photo-1533294485618-f58a74030b33?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1472653376319-504514a709d4?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80'
  ];

  // Instalaciones (Carpeta /img/*.png)
  const instalaciones = [
    { url: '/img/instalacion1.png', label: 'Área de Juegos Principal' },
    { url: '/img/instalacion2.png', label: 'Zona de Comedor' },
    { url: '/img/instalacion3.png', label: 'Tirolesa Extrema' },
    { url: '/img/instalacion4.png', label: 'Baby Park Seguro' },
    { url: '/img/instalacion5.png', label: 'Entrada y Recepción' },
    { url: '/img/instalacion6.png', label: 'Área de Piñatas' }
  ];

  const latLong = "19.563115801159583,-99.0201908967529";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const heroTimer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    const instTimer = setInterval(() => {
      setCurrentInstalacion((prev) => (prev + 1) % instalaciones.length);
    }, 4000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(heroTimer);
      clearInterval(instTimer);
    };
  }, [heroImages.length, instalaciones.length]);

  const handlePackageSelection = (pkgName) => {
    setSelectedPackage(pkgName);
    const element = document.getElementById('reserva');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Datos de servicios con imágenes de fondo representativas
  const serviciosData = [
    { 
      icon: <Zap />, 
      t: "Tirolesa", 
      d: "Aventura segura para los más valientes.",
      bg: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80" 
    },
    { 
      icon: <Utensils />, 
      t: "Banquete", 
      d: "Menús variados y deliciosos para todos.",
      bg: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80" 
    },
    { 
      icon: <Music />, 
      t: "Sonido Pro", 
      d: "DJ y audio de alta fidelidad para el baile.",
      bg: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80" 
    },
    { 
      icon: <Heart />, 
      t: "Baby Park", 
      d: "Zona acolchada para los más pequeñitos.",
      bg: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=600&q=80" 
    },
    { 
      icon: <Coffee />, 
      t: "Área Adultos", 
      d: "Espacio cómodo para los papás.",
      bg: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80" 
    },
    { 
      icon: <Check />, 
      t: "Limpieza", 
      d: "Personal constante en áreas y baños.",
      bg: "https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&w=600&q=80" 
    },
    { 
      icon: <ShieldCheck />, 
      t: "Seguridad", 
      d: "Circuito cerrado y acceso controlado.",
      bg: "https://images.unsplash.com/photo-1557597774-9d2739f8f0ec?auto=format&fit=crop&w=600&q=80" 
    },
    { 
      icon: <Users />, 
      t: "Staff", 
      d: "Coordinadores de evento a tu disposición.",
      bg: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80" 
    }
  ];

  return (
    <div className="font-sans text-gray-800 bg-white selection:bg-orange-100 scroll-smooth">
      {/* Navbar */}
      <nav className={`fixed w-full z-[60] transition-all duration-500 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-orange-500 p-2 rounded-2xl shadow-lg">
              <Smile className="h-6 w-6 text-white" />
            </div>
            <span className={`font-black text-2xl tracking-tighter ${scrolled ? 'text-orange-600' : 'text-white'}`}>
              HAPPY KIDS
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {['Inicio', 'Instalaciones', 'Paquetes', 'Servicios', 'Reserva'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm font-bold uppercase hover:text-orange-400 transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                {item}
              </a>
            ))}
            <a href="tel:5557790664" className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-black shadow-lg flex items-center gap-2">
              <Phone size={18} /> 55 5779 0664
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`md:hidden p-2 ${scrolled ? 'text-gray-700' : 'text-white'}`}>
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center bg-black overflow-hidden text-center text-white">
        {heroImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentHeroSlide ? 'opacity-50' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
        
        <div className="relative z-10 px-4 max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight">
            FIESTAS QUE <br/> <span className="text-yellow-400 drop-shadow-2xl">HACEN HISTORIA</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-medium">
            Seguridad, diversión y los mejores banquetes en Tulpetlac.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#paquetes" className="px-10 py-5 bg-orange-500 text-white rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl">
              VER PAQUETES
            </a>
            <a href="#reserva" className="px-10 py-5 bg-white text-gray-900 rounded-full font-black text-xl hover:bg-gray-100 transition-all">
              RESERVAR AHORA
            </a>
          </div>
        </div>
      </section>

      {/* Instalaciones */}
      <section id="instalaciones" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 text-orange-500 font-bold mb-4 uppercase tracking-widest">
            <Camera size={20} /> NUESTRO MÁGICO LUGAR
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-12">Explora las <span className="text-blue-500">Instalaciones</span></h2>
          
          <div className="relative max-w-5xl mx-auto h-[350px] md:h-[600px] rounded-[40px] overflow-hidden shadow-2xl group bg-gray-200">
            {/* Imagen de respaldo mientras cargan archivos locales */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566415117399-c80f4c0c76d7?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-20"></div>
            
            {instalaciones.map((inst, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                  idx === currentInstalacion ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              >
                <img 
                  src={inst.url} 
                  alt={inst.label} 
                  className="w-full h-full object-cover relative z-10"
                  onError={(e) => { e.target.style.display = 'none'; }} 
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white text-left z-20">
                  <span className="text-2xl font-black">{inst.label}</span>
                </div>
              </div>
            ))}
            
            <button onClick={() => setCurrentInstalacion(prev => (prev - 1 + instalaciones.length) % instalaciones.length)} className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-4 rounded-full backdrop-blur-md transition-all z-30">
              <ChevronLeft className="text-white" size={32} />
            </button>
            <button onClick={() => setCurrentInstalacion(prev => (prev + 1) % instalaciones.length)} className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-4 rounded-full backdrop-blur-md transition-all z-30">
              <ChevronRight className="text-white" size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* Servicios con Fondos Corregidos */}
      <section id="servicios" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Todo lo que <span className="text-orange-500">Necesitas</span></h2>
            <p className="text-gray-600 font-bold">Un evento sin preocupaciones con servicios de primera clase.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviciosData.map((s, i) => (
              <div key={i} className="group relative bg-white h-64 rounded-3xl shadow-lg overflow-hidden transition-all hover:-translate-y-2">
                {/* Imagen de fondo sin copyright */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                  style={{ backgroundImage: `url(${s.bg})` }}
                ></div>
                {/* Overlay para legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
                
                <div className="relative h-full p-8 flex flex-col justify-end text-white">
                  <div className="bg-orange-500 w-fit p-3 rounded-2xl mb-4 shadow-lg">
                    {React.cloneElement(s.icon, { size: 24 })}
                  </div>
                  <h4 className="font-black text-xl mb-1">{s.t}</h4>
                  <p className="text-gray-200 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {s.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paquetes */}
      <section id="paquetes" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-4xl md:text-5xl font-black mb-16">Paquetes <span className="text-blue-500">Especiales</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Paquete Básico", price: "$4,500", features: ["50 adultos / 30 niños", "5 horas de salón", "Uso de todos los juegos", "Personal de apoyo"] },
              { name: "Paquete Mágico", price: "$7,800", features: ["80 adultos / 40 niños", "6 horas de salón", "Menú infantil incluido", "Refrescos ilimitados", "DJ y Luces"], popular: true },
              { name: "Paquete Premium", price: "$12,500", features: ["120 adultos / 60 niños", "7 horas de salón", "Banquete 3 tiempos", "Pastel temático", "Mesa de dulces"] }
            ].map((pkg, i) => (
              <div key={i} className={`bg-gray-50 rounded-[40px] p-10 shadow-xl flex flex-col ${pkg.popular ? 'ring-4 ring-orange-500 scale-105 z-10 bg-white' : ''}`}>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{pkg.name}</h3>
                <div className="text-5xl font-black text-orange-600 mb-8 tracking-tighter">{pkg.price}</div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {pkg.features.map((feat, j) => (
                    <li key={j} className="flex gap-3 items-start text-gray-600 font-bold leading-tight">
                      <Check className="text-green-500 shrink-0" size={20} /> {feat}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => handlePackageSelection(pkg.name)}
                  className="w-full py-4 bg-gray-900 text-white rounded-2xl font-black hover:bg-orange-600 transition-all"
                >
                  LO QUIERO
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reserva y Horarios */}
      <section id="reserva" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          <div className="bg-white text-gray-900 rounded-[50px] p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl font-black mb-8">Cotiza tu Fecha</h2>
            <form className="grid md:grid-cols-2 gap-4 font-bold">
              <input type="text" placeholder="Nombre completo" className="w-full p-4 rounded-2xl border-2 border-gray-100 bg-gray-50 outline-none focus:border-orange-500 transition-colors" />
              <input type="tel" placeholder="Teléfono" className="w-full p-4 rounded-2xl border-2 border-gray-100 bg-gray-50 outline-none focus:border-orange-500 transition-colors" />
              <input type="date" className="w-full p-4 rounded-2xl border-2 border-gray-100 bg-gray-50 outline-none focus:border-orange-500 transition-colors" />
              <select 
                value={selectedPackage} 
                onChange={(e) => setSelectedPackage(e.target.value)}
                className="w-full p-4 rounded-2xl border-2 border-gray-100 bg-gray-50 outline-none focus:border-orange-500 transition-colors"
              >
                <option value="Paquete Mágico">Paquete Mágico</option>
                <option value="Paquete Básico">Paquete Básico</option>
                <option value="Paquete Premium">Paquete Premium</option>
              </select>
              <textarea placeholder="Cuéntanos más sobre tu evento..." className="md:col-span-2 w-full p-4 rounded-2xl border-2 border-gray-100 bg-gray-50 h-32 outline-none focus:border-orange-500 transition-colors"></textarea>
              <button type="button" className="md:col-span-2 bg-orange-500 text-white py-5 rounded-2xl font-black text-xl hover:bg-orange-600 shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-all">
                ENVIAR SOLICITUD <Send />
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 text-yellow-400 font-black mb-4 uppercase tracking-widest">
                <Clock size={24} /> HORARIOS DE ATENCIÓN
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Visítanos y conoce nuestras <span className="text-orange-500">promociones.</span></h2>
              <div className="space-y-4">
                <div className="flex justify-between p-4 bg-gray-800 rounded-2xl border-l-4 border-orange-500">
                  <span className="font-bold">Lunes a Viernes</span>
                  <span className="text-orange-400 font-black">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between p-4 bg-gray-800 rounded-2xl border-l-4 border-yellow-400">
                  <span className="font-bold">Sábados</span>
                  <span className="text-yellow-400 font-black">11:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between p-4 bg-gray-800 rounded-2xl border-l-4 border-blue-500">
                  <span className="font-bold">Domingos</span>
                  <span className="text-blue-400 font-black">Previa Cita</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-[40px] flex items-center gap-6">
              <div className="bg-orange-500 p-4 rounded-3xl">
                <MapPin size={32} />
              </div>
              <div>
                <p className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-1">Ubicación</p>
                <p className="font-black text-lg leading-tight">Vía Adolfo López Mateos 299, Santa María Tulpetlac, Ecatepec.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="h-[500px] w-full bg-gray-100">
        <iframe 
          src={`https://www.google.com/maps?q=${latLong}&z=17&output=embed`}
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
          title="Ubicación Happy Kids"
        ></iframe>
      </section>

      <footer className="py-12 bg-black text-white text-center">
        <div className="flex justify-center gap-2 mb-6">
          <div className="bg-orange-500 p-2 rounded-xl"><Smile /></div>
          <span className="font-black text-2xl tracking-tighter">HAPPY KIDS</span>
        </div>
        <p className="text-gray-500 font-bold">Haciendo felices a los niños de Ecatepec por más de 10 años.</p>
        <p className="mt-8 text-gray-700 text-sm">© {new Date().getFullYear()} Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}