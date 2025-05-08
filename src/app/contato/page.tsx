import ExportedImage from 'next-image-export-optimizer';
import icon_whatsapp from '../../../public/images/icon_whatsapp.svg';
import icon_email from '../../../public/images/icon_email.svg';
import MyMap from '../components/MyMap';

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
                placeholder='empty'
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
              <ExportedImage
                src={icon_email}
                alt='E-mail icon'
                placeholder='empty'
                width={18}
              />
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
                placeholder='empty'
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
              <ExportedImage
                src={icon_email}
                alt='E-mail icon'
                placeholder='empty'
                width={18}
              />
              <p>elthon@yzadvogados.com.br</p>
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div>
            <h3>Endereço:</h3>
            <p>Av. Brig. Faria Lima, 1912 - Pinheiros - São Paulo - SP</p>
            <p>01451-000</p>
          </div>
          <div className='h-80 w-auto'>
            <MyMap />
          </div>
        </div>
      </div>
    </div>
  );
}
