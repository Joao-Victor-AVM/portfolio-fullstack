import './Work.css';
import { Link } from 'react-router-dom';

import img1 from "/images/UserNET.jpg";
import img2 from "/images/Framework Analgesia.png";
import img3 from "/images/Backend Minimal-API.jpg";
import img4 from "/images/GET-Users.png";

const projetos = [
    {
        id: 4,
        titulo: "UsuarioNET", 
        imagem: img4
    },
    {
        id: 3,
        titulo: "Framework Analgésia",
        imagem: img3
    },
    {
        id: 2,
        titulo: "Minimal-API",
        imagem: img2
    },
    {
        id: 1,
        titulo: "GET-Users",
        imagem: img1
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
                    <Link to={'/work/${projeto.id}'} key={projeto.id} className='work-item-link'>
                        <div className='work-itme'>
                            <div className='work-item-imagem'>
                                <img src={projeto.imagem} alt={projeto.titulo}/>
                            </div>

                            <div className='work-item-info'>
                                <h3>{projeto.titulo}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Work;