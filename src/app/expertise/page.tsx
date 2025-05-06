export default function Especialidades() {
  const areasAgrupadas = [
    {
      title: 'Direito Empresarial',
      items: [
        'Contratos',
        'Societário',
        'Compliance',
        'Arbitragem',
        'Governança corporativa',
        'M&A, Private Equity e Venture Capital',
      ],
    },
    {
      title: 'Outras Áreas',
      items: [
        'Resolução de disputas e contencioso',
        'Startups',
        'Imobiliário',
        'Legal Due Diligence',
        'Privacidade e Proteção de dados',
        'Propriedade intelectual',
        'Wealth Planning',
        'Direito Digital',
        'Terceiro Setor',
      ],
    },
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

      <div className='flex flex-wrap gap-8'>
        {areasAgrupadas.map((grupo) => (
          <div key={grupo.title}>
            <h4 className='mb-2'>{grupo.title}</h4>
            <ul className='list-disc pl-5 text-[var(--secondary)]'>
              {grupo.items.map((item, index) => (
                <li key={index} className='mb-1'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
