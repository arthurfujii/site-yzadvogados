import ExportedImage from 'next-image-export-optimizer';
import fotoYen from '../../../public/images/_UX_0721pb.jpg';
import fotoZanetti from '../../../public/images/_UX_0406pb.jpg';

export default function Socios() {
  return (
    <div className='text-[var(--secondary)]'>
      <h1 className='pb-10 sm:hidden'>Sócios</h1>
      <div className='flex flex-col gap-15'>
        <div className='flex flex-col gap-5 lg:flex-row'>
          <div className='max-w-[350px] lg:min-w-[200px]'>
            <ExportedImage
              src={fotoYen}
              alt='Foto Yen'
              className='h-auto w-full'
            />
          </div>
          <div>
            <h3>Elthon Yen</h3>

            <p>
              Lorem ipsum dolor sit amet. Ut soluta nemo in voluptates modi et
              quam nulla qui incidunt illum et voluptas ipsam. Eum internos
              quisquam et nostrum galisum hic quos minima et quod obcaecati et
              dolor fuga cum magni neque. Est autem corrupti est obcaecati nihil
              eos galisum dolor ut autem autem? Nam nemo saepe 33 distinctio
              quasi et explicabo necessitatibus.
            </p>

            <p>
              Et mollitia distinctio quo nostrum galisum ut recusandae
              consequatur aut reiciendis galisum et iste consequatur eum
              temporibus autem est quae reiciendis. Hic dolor rerum ut dolores
              possimus ut suscipit inventore? 33 consequatur inventore id
              laudantium galisum a voluptate quos ea nihil recusandae et
              molestiae omnis a doloremque laborum non nesciunt voluptatum.
            </p>

            <p>
              Quo explicabo numquam et dolor eius qui possimus voluptatibus. Sit
              inventore saepe et incidunt libero ut sint voluptate ad omnis
              iste. Et nostrum distinctio et reiciendis enim qui nulla iste id
              unde recusandae ut architecto quos! Id esse quia ut modi
              consequatur ut ducimus corporis id placeat dolorem qui corporis
              dolor eos iure reprehenderit ut perferendis omnis.
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-5 lg:flex-row-reverse'>
          <div className='max-w-[400px] lg:min-w-[200px]'>
            <ExportedImage
              src={fotoZanetti}
              alt='Foto Zanetti'
              className='h-auto w-full'
            />
          </div>
          <div className='lg:text-right'>
            <h3>César Zanetti</h3>
            <p>
              Sócio de <strong>Yen Zanetti Advogados</strong>, César é graduado
              em Direito pela Universidade Presbiteriana Mackenzie e
              pós-graduado em Direito Empresarial pela Escola Paulista da
              Magistratura. Atua com foco em Direito Empresarial, Contencioso
              Estratégico, Transações Imobiliárias e Legal Due Diligences, com
              experiência consolidada tanto na consultoria quanto na condução de
              disputas complexas.
            </p>
            <p>
              Antes de fundar o escritório, integrou o corpo técnico do Tribunal
              de Justiça de São Paulo, assessorando Juízes e Desembargadores na
              elaboração de sentenças e acórdãos nas áreas empresarial, cível,
              imobiliária e ambiental, o que lhe conferiu uma visão
              multidisciplinar e aprofundada das interações entre os agentes
              econômicos e o Poder Judiciário.
            </p>
            <p>
              É membro da Comissão de Contencioso Societário e Disputas de M&A
              do Ibrademp (Instituto Brasileiro de Direito Empresarial).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
