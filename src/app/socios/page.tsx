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
          <div className='flex flex-col gap-0.75'>
            <h2>Elthon Yen</h2>

            <p>
              Sócio de <strong>Yen Zanetti Advogados</strong>. É mestre em
              Direito Civil pela Universidade de São Paulo – USP (Faculdade de
              Direito do Largo de São Francisco), onde também se graduou
              bacharel.
            </p>

            <p>
              Especialista na área de direito imobiliário, direito registral,
              compliance, regulatório, direito digital e de tecnologia. Na área
              empresarial, atua com ênfase em contratos, estruturando relações
              comerciais com redes de fornecedores, clientes, parcerias
              empresariais e distribuidores, bem como representando clientes em
              negociações. Possui ampla experiência com resolução de conflitos
              judiciais e extrajudiciais, entre particulares, empresas e
              autoridades.
            </p>

            <p>
              Foi assessor jurídico da Associação dos Registradores de Imóveis
              de São Paulo – ARISP, gerente jurídico do Operador Nacional do
              Sistema de Registro Eletrônico de Imóveis – ONR, trabalhou com
              escritórios de renome e assessorou desembargadores e juízes no
              Tribunal de Justiça do Estado de São Paulo.
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-5 lg:flex-row-reverse'>
          <div className='max-w-[350px] lg:min-w-[200px]'>
            <ExportedImage
              src={fotoZanetti}
              alt='Foto Zanetti'
              className='h-auto w-full'
            />
          </div>
          <div className='lg:text-right'>
            <h2>César Zanetti</h2>
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
