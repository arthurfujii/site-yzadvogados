import ExportedImage from 'next-image-export-optimizer';
import icon_whatsapp from '../../../public/images/icon_whatsapp.svg';
import icon_email from '../../../public/images/icon_email.svg';
export default function Contato() {
  return (
    <div className='flex flex-col text-[var(--secondary)]'>
      <h1 className='pb-10 sm:hidden'>Contato</h1>
      <div className='flex flex-col justify-around gap-8 lg:flex-row'>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-1'>
            <h3>Elthon Yen</h3>
            <a
              href='https://wa.me/5511971036823?text=Olá!%20Visitei%20seu%20site%20e%20gostaria%20de%20entrar%20em%20contato.'
              target='_blank'
              rel='noopener noreferrer'
              className='flex gap-1'
            >
              <ExportedImage
                src={icon_whatsapp}
                alt='WhatsApp icon'
                width={18}
              />
              <p>+55 11 97103-6823</p>
            </a>
            <a
              href='mailto:cesar@yzadvogados.com.br'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1'
            >
              <ExportedImage src={icon_email} alt='E-mail icon' width={18} />
              <p>cesar@yzadvogados.com.br</p>
            </a>
          </div>
          <div className='flex flex-col gap-1'>
            <h3>César Zanetti</h3>
            <a
              href='https://wa.me/5511981042665?text=Olá!%20Visitei%20seu%20site%20e%20gostaria%20de%20entrar%20em%20contato.'
              target='_blank'
              rel='noopener noreferrer'
              className='flex gap-1'
            >
              <ExportedImage
                src={icon_whatsapp}
                alt='WhatsApp icon'
                width={18}
              />
              <p>+55 11 98104-2665</p>
            </a>
            <a
              href='mailto:elthon@yzadvogados.com.br'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1'
            >
              <ExportedImage src={icon_email} alt='E-mail icon' width={18} />
              <p>elthon@yzadvogados.com.br</p>
            </a>
          </div>
        </div>
        <div>
          <h3>Endereço:</h3>
          <p>Av. Brig. Faria Lima, 1912 - Pinheiros</p>
          <p> São Paulo - SP </p>
          <p>01451-000</p>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.834349189702!2d-46.691853122482236!3d-23.57439216207519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5772d78fa367%3A0x17857be0a373664e!2sAv.%20Brig.%20Faria%20Lima%2C%201912%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001451-000!5e0!3m2!1spt-BR!2sbr!4v1745350258873!5m2!1spt-BR!2sbr'
            width='250'
            height='300'
            style={{ border: 0 }}
            allowFullScreen={false}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
      </div>
    </div>
  );
}
