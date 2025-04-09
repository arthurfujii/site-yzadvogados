import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';
export default function Contato() {
  return (
    <div>
      <h1 className='sm:hidden'>Contato</h1>
      <div>
        <div>
          <h3>Endereço:</h3>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0981692990686!2d-46.65451252248242!3d-23.56491746172722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5994f2e15a7d%3A0xdeb92126793e5e90!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1744226637364!5m2!1spt-BR!2sbr'
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
