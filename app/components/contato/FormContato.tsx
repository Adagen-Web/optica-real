'use client';

import { useState } from 'react';

const FormContato = () => {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // fake delay
    setTimeout(() => setStatus('success'), 1000);
  };

  return (
    <section className="relative bg-off-white pt-20 pb-0 px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-normal tracking-[-1px] font-heebo text-[#2A2A29] border-b-2 inline-block border-[#ce954a] pb-1">
          Entre em contato
        </h2>
        <p className="mt-2 text-[#2A2A29] font-public-sans font-normal">
          e saiba mais sobre o que podemos fazer por você!
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-md p-8 relative z-30">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6 font-public-sans font-normal">
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={form.nome}
              onChange={handleChange}
              required
              className="border border-black w-full px-4 py-3 text-sm focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="border border-black w-full px-4 py-3 text-sm focus:outline-none"
            />
          </div>

          <textarea
            name="mensagem"
            placeholder="Mensagem"
            value={form.mensagem}
            onChange={handleChange}
            required
            rows={6}
            className="border border-black w-full px-4 py-3 text-sm focus:outline-none font-public-sans font-normal text-black"
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-black font-heebo font-medium cursor-pointer text-white px-8 py-3 text-sm hover:opacity-90 transition"
            >
              {status === 'loading' ? 'Enviando...' : 'Enviar'}
            </button>
            {status === 'success' && (
              <p className="text-green-600 font-public-sans mt-2 text-sm">Mensagem enviada com sucesso!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 mt-2 font-public-sans text-sm">Erro ao enviar. Tente novamente.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormContato;
