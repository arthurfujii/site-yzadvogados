export function Footer() {
  return (
    <footer className='flex w-full justify-between gap-5 pb-4'>
      <a
        href='mailto:contato@yzadvogados.com.br'
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center gap-1'
      >
        <small>contato@yzadvogados.com.br</small>
      </a>
      {
        <>
          <small className='text-right sm:hidden'>&copy; 2025.</small>
          <small className='hidden text-right sm:block'>
            &copy; 2025. Todos os direitos reservados.
          </small>
        </>
      }
      {/* <small>+55 11 98765-4321</small> */}
    </footer>
  );
}
