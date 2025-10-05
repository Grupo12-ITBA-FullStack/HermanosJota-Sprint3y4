import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Contacto enviado:', form);
    setSent(true);
    setForm({ nombre: '', email: '', mensaje: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="seccioncontac">
      <div className="formulario">
        <h1>Contacto</h1>
        <p>Escribinos y te responderemos a la brevedad.</p>

        {sent && <div className="mensaje-exito" style={{ display: 'block' }}>Gracias — tu mensaje fue enviado.</div>}

        <form onSubmit={onSubmit}>
          <div className="campo">
            <label>Nombre</label>
            <input name="nombre" value={form.nombre} onChange={onChange} required />
          </div>

          <div className="campo">
            <label>Email</label>
            <input name="email" type="email" value={form.email} onChange={onChange} required />
          </div>

          <div className="campo">
            <label>Mensaje</label>
            <textarea name="mensaje" value={form.mensaje} onChange={onChange} required />
          </div>

          <button className="btn-primary" type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}
