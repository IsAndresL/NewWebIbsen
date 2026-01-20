import React from 'react';
import { FaFileDownload, FaBalanceScale, FaUsers, FaHandHoldingUsd } from 'react-icons/fa';

const Transparency = () => {
  const documents = [
    {
      id: 1,
      title: "Estados Financieros",
      description: "Balance general y estado de resultados del último año fiscal.",
      icon: <FaBalanceScale className="text-4xl text-secondary" />,
      file: "/src/assets/docs/documento_ejemplo.pdf"
    },
    {
      id: 2,
      title: "Informe de Gestión Anual",
      description: "Reporte detallado de actividades, proyectos y logros alcanzados.",
      icon: <FaFileDownload className="text-4xl text-secondary" />,
      file: "/src/assets/docs/documento_ejemplo.pdf"
    },
    {
      id: 3,
      title: "Certificación de Requisitos",
      description: "Certificado del Representante Legal y/o Revisor Fiscal.",
      icon: <FaUsers className="text-4xl text-secondary" />,
      file: "/src/assets/docs/documento_ejemplo.pdf"
    },
    {
      id: 4,
      title: "Acta de Constitución",
      description: "Documento de constitución y estatutos de la asociación.",
      icon: <FaFileDownload className="text-4xl text-secondary" />,
      file: "/src/assets/docs/documento_ejemplo.pdf"
    },
    {
      id: 5,
      title: "Información de Directivos",
      description: "Listado de fundadores, directivos y personal administrativo.",
      icon: <FaUsers className="text-4xl text-secondary" />,
      file: "/src/assets/docs/documento_ejemplo.pdf"
    },
    {
      id: 6,
      title: "Detalle de Donaciones",
      description: "Registro de donaciones recibidas y su destinación.",
      icon: <FaHandHoldingUsd className="text-4xl text-secondary" />,
      file: "/src/assets/docs/documento_ejemplo.pdf"
    }
  ];

  return (
    <section id="transparency" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h3 className="text-secondary font-bold font-display uppercase tracking-widest mb-2">
            Régimen Tributario Especial
          </h3>
          <h2 className="text-4xl md:text-5xl font-script text-neutral mb-4">
            Transparencia y Rendición de Cuentas
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            En cumplimiento de los requisitos establecidos por la DIAN para entidades sin ánimo de lucro, 
            ponemos a disposición de la comunidad la siguiente información institucional y financiera.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {documents.map((doc, index) => (
            <div
              key={doc.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border-t-4 border-secondary"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{doc.icon}</div>
                <h4 className="text-lg font-bold text-neutral mb-2">{doc.title}</h4>
                <p className="text-sm text-gray-600 mb-4 flex-grow">{doc.description}</p>
                <a
                  href={doc.file}
                  download
                  className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-neutral font-semibold rounded-full hover:bg-secondary hover:text-white transition-colors"
                >
                  <FaFileDownload />
                  <span>Descargar</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Legal Notice */}
        <div className="mt-12 max-w-4xl mx-auto bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg" data-aos="fade-up">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-blue-900">Nota Legal:</strong> La información aquí publicada se actualiza anualmente 
            conforme a lo establecido en el artículo 364-5 del Estatuto Tributario y demás normas aplicables al 
            Régimen Tributario Especial. Para consultas o aclaraciones, por favor utilice nuestro módulo de PQRS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Transparency;
