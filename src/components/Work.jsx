import './Work.css';

const projetos = [
    {
        id: 1,
        titulo: "UsuarioNET", 
        imagem: "arar"
    },
    {
        id: 2,
        titulo: "Framework Analgésia",
        imagem: "arar"
    },
    {
        id: 3,
        titulo: "Minimal-API",
        imagem: "arar"
    },
    {
        id: 4,
        titulo: "GET-Users",
        imagem: "arar"
    }
];

function Work() {
    return (
        <div className='work-container fade-in'>
            <header className='work-header'>
                <h1>Work</h1>
                <p className='subtitulo'>Projetos</p>
            </header>
        
            <div className='work-grid'>
                {projetos.map((projeto) => (
                    <div key={projeto.id} className='work-item'>
                        <div className='word-item-imagem'>
                            <img src={projeto.imagem} alt={projeto.titulo}/>
                        </div>
                        <div className='work-item-info'>
                            <h3>{projeto.titulo}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Work;