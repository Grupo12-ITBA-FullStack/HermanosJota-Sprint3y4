export default function Footer({
  showroom = {
    titulo: "SHOWROOM Y TALLER",
    nombre: "Hermanos Jota — Casa Taller",
    direccion1: "Av. San Juan 2847",
    direccion2: "C1232AAB — Barrio de San Cristóbal",
    ciudad: "Ciudad Autónoma de Buenos Aires, Argentina",
  },
  contacto = {
    titulo: "CONTACTO DIGITAL",
    web: { label: "Sitio web", href: "https://www.hermanosjota.com.ar", text: "www.hermanosjota.com.ar" },
    email: { label: "Email general", href: "mailto:info@hermanosjota.com.ar", text: "info@hermanosjota.com.ar" },
    ventas: { label: "Ventas", href: "mailto:ventas@hermanosjota.com.ar", text: "ventas@hermanosjota.com.ar" },
    ig: { label: "Instagram", href: "https://instagram.com/hermanosjota_ba", text: "@hermanosjota_ba" },
    wa: { label: "WhatsApp", href: "https://wa.me/541145678900", text: "+54 11 4567-8900" },
  },
  horarios = {
    titulo: "Horarios:",
    lv: "Lunes a Viernes: 10:00 - 19:00",
    sab: "Sábados: 10:00 - 14:00",
  },
  anio = new Date().getFullYear(),
}) {
  return (
    <footer>
      <div className="box">
        <div className="flex-items">
          <h1>{showroom.titulo}</h1>
          <p><strong>{showroom.nombre}</strong></p>
          <p>{showroom.direccion1}</p>
          <p>{showroom.direccion2}</p>
          <p>{showroom.ciudad}</p>
        </div>

        <div className="flex-items">
          <h1>{contacto.titulo}</h1>
          <p><strong>{contacto.web.label}</strong> <a href={contacto.web.href} target="_blank" rel="noreferrer">{contacto.web.text}</a></p>
          <p><strong>{contacto.email.label}</strong> <a href={contacto.email.href}>{contacto.email.text}</a></p>
          <p><strong>{contacto.ventas.label}</strong> <a href={contacto.ventas.href}>{contacto.ventas.text}</a></p>
          <p><strong>{contacto.ig.label}</strong> <a href={contacto.ig.href} target="_blank" rel="noreferrer">{contacto.ig.text}</a></p>
          <p><strong>{contacto.wa.label}</strong> <a href={contacto.wa.href} target="_blank" rel="noreferrer">{contacto.wa.text}</a></p>
        </div>

        <div className="flex-items">
          <p><strong>{horarios.titulo}</strong></p>
          <p>{horarios.lv}</p>
          <p>{horarios.sab}</p>
        </div>
      </div>

      <div className="copy">
        <p><strong>© {anio} Hermanos Jota.</strong> Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
