import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';
export default function Contato() {
  return (
    <div>
      <h1 className='sm:hidden'>Contato</h1>
      <div>
        <div>
          <h3>Endereço:</h3>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.834349189702!2d-46.691853122482236!3d-23.57439216207519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5772d78fa367%3A0x17857be0a373664e!2sAv.%20Brig.%20Faria%20Lima%2C%201912%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001451-000!5e0!3m2!1spt-BR!2sbr!4v1745350258873!5m2!1spt-BR!2sbr'
            width='500'
            height='300'
            style={{ border: 0 }}
            allowFullScreen={false}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
        <div>
          <WhatsappLogo size={32} />
        </div>
      </div>
    </div>
  );
}
