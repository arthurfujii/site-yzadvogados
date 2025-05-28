export function Footer() {
  return (
    <footer className='flex w-full justify-around gap-5 sm:justify-between'>
      <a
        href='mailto:contato@yzadvogados.com.br'
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center gap-1'
      >
        <small>contato@yzadvogados.com.br</small>
      </a>
      <small className='text-right'>
        &copy; 2025. Todos os direitos reservados.
      </small>
      {/* <small>+55 11 98765-4321</small> */}
    </footer>
  );
}
