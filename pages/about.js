import Meta from '../components/Meta';

const skills = [
  'Conhecimento e habilidades para execução da estratégia comercial',
  'Compromisso com as metas estabelecidas e responsabilidade na entrega de resultados',
  'Pesquisa e análise de mercado',
  'Elaboração e apresentação de indicadores KPIs',
  'Apoio as áreas de Marketing e Comunicação na organização de eventos em geral',
  'Empenho no aprendizado de novos desafios',
  'Proatividade e sinergia no envolvimento de novos projetos',
];

const about = () => {
  return (
    <div>
      <Meta title="Sobre" />
      <div
        style={{
          textAlign: 'center',
          padding: '0 100px',
          maxWidth: '1000px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1>Sobre mim</h1>
        <img
          src="raquel.png"
          alt=""
          style={{ borderRadius: '50%', maxHeight: '250px', maxWidth: '250px' }}
        />
        <p>
          <b>Abaixo trago alguns pontos sobre mim que acho válido ressaltar:</b>
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            flexWrap: 'wrap',
            textAlign: 'center',
            padding: '25px',
            width: '1200px',
          }}
        >
          {skills.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 'bold',
                width: '250px',
                heigth: '200px',
                margin: '25px',
                padding: '25px',
                backgroundColor: '#0006',
                color: 'white',
                borderRadius: '30px',
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default about;
