import './Work.css';

import img1 from "/images/UserNET.jpg";
import img2 from "/images/Framework Analgesia.png";
import img3 from "/images/Backend Minimal-API.jpg";
import img4 from "/images/GET-Users.png";

const projetos = [
    {
        id: 1,
        titulo: "UsuarioNET", 
        imagem: img1
    },
    {
        id: 2,
        titulo: "Framework Analgésia",
        imagem: img2
    },
    {
        id: 3,
        titulo: "Minimal-API",
        imagem: img3
    },
    {
        id: 4,
        titulo: "GET-Users",
        imagem: img4
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