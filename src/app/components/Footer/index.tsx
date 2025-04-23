export function Footer() {
  return (
    <footer className='flex w-full justify-around gap-5 sm:justify-between'>
      <small>
        <a
          href='mailto:contato@yzadvogados.com.br'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-1'
        >
          <p>contato@yzadvogados.com.br</p>
        </a>
      </small>
      <small className='text-right'>
        &copy; 2025. Todos os direitos reservados.
      </small>
      {/* <small>+55 11 98765-4321</small> */}
    </footer>
  );
}
