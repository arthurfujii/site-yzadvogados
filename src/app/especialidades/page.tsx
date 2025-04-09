export default function Especialidades() {
  const especialidades = [
    {
      id: 1,
      titulo: 'Arquitetura',
      descricao:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nostrum. Quasi aut fugiat enim perspiciatis quisquam. Magnam illum, itaque quasi vel quod officia cupiditate? Nisi placeat sunt quidem nemo suscipit?',
    },
    {
      id: 2,
      titulo: 'Engenharia',
      descricao:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nostrum. Quasi aut fugiat enim perspiciatis quisquam. Magnam illum, itaque quasi vel quod officia cupiditate? Nisi placeat sunt quidem nemo suscipit?',
    },
    {
      id: 3,
      titulo: 'Contabilidade',
      descricao:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nostrum. Quasi aut fugiat enim perspiciatis quisquam. Magnam illum, itaque quasi vel quod officia cupiditate? Nisi placeat sunt quidem nemo suscipit?',
    },
    {
      id: 4,
      titulo: 'Educação',
      descricao:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nostrum. Quasi aut fugiat enim perspiciatis quisquam. Magnam illum, itaque quasi vel quod officia cupiditate? Nisi placeat sunt quidem nemo suscipit?',
    },
    {
      id: 5,
      titulo: 'Saúde',
      descricao:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nostrum. Quasi aut fugiat enim perspiciatis quisquam. Magnam illum, itaque quasi vel quod officia cupiditate? Nisi placeat sunt quidem nemo suscipit?',
    },
  ];

  return (
    <div>
      <h1 className='sm:hidden'>Áreas de especialidade</h1>
      <div className='flex flex-wrap gap-10'>
        {especialidades.map((especialidade) => {
          return (
            <div key={especialidade.id} className='w-2xs'>
              <h2>{especialidade.titulo}</h2>
              <p>{especialidade.descricao}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
