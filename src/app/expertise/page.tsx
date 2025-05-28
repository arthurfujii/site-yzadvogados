export default function Especialidades() {
  const areas = [
    'Contratos',
    'Societário',
    'Resolução de disputas e contencioso',
    'Compliance',
    'Arbitragem',
    'Governança corporativa',
    'M&A, Private Equity e Venture Capital',
    'Startups',
    'Imobiliário',
    'Legal Due Diligence',
    'Privacidade e Proteção de dados',
    'Propriedade intelectual',
    'Wealth Planning',
    'Direito Digital',
    'Terceiro Setor',
  ];

  return (
    <div className='flex flex-col gap-10'>
      <h1 className='sm:hidden'>Áreas de especialidade</h1>
      <div>
        <p className='text-[var(--secondary)]'>
          Com atuação especializada, personalizada e de excelência, nosso
          escritório se destaca no atendimento de casos de alta complexidade nos
          diversos segmentos do direito transacional e empresarial, atuando nas
          esferas consultiva, contenciosa, e na emissão de pareceres jurídicos.
        </p>
      </div>

      <div className='flex flex-wrap gap-10'>
        <ul className='list-disc gap-15 pl-5 text-[var(--secondary)] lg:columns-2'>
          {areas.map((area, index) => (
            <li key={index} className='mb-1'>
              {area}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
