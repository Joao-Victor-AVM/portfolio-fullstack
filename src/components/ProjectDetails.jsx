import { useParams, Link } from 'react-router-dom';
import './ProjectDetail.css';

const projetos = [
    {
        id: 1,
        titulo: "BLABLA",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imagem: "/images/GET-Users.png",
        capturas: ["/images/GET-Users.png", "/images/UserNET.jpg", "/images/Framework Analgesia.png"],
        ano: "2024",
        tecnologias: ["React"]
    },
    {
        id: 2,
        titulo: "BLABLA",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imagem: "/images/GET-Users.png",
        capturas: ["/images/GET-Users.png", "/images/UserNET.jpg", "/images/Framework Analgesia.png"],
        ano: "2024",
        tecnologias: ["React"]
    },
    {
        id: 3,
        titulo: "BLABLA",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imagem: "/images/GET-Users.png",
        capturas: ["/images/GET-Users.png", "/images/UserNET.jpg", "/images/Framework Analgesia.png"],
        ano: "2024",
        tecnologias: ["React"]
    },
    {
        id: 4,
        titulo: "BLABLA",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imagem: "/images/GET-Users.png",
        capturas: ["/images/GET-Users.png", "/images/UserNET.jpg", "/images/Framework Analgesia.png"],
        ano: "2024",
        tecnologias: ["React"]
    }
];

function ProjectDetails() { 
    const { id } = useParams();

    const projeto = projetos.find((projeto) => projeto.id === parseInt(id, 10));

    if (!projeto) {
        return (
            <div className = "project-not-found">
                <h2>Projeto Não Encontrado</h2>
                <Link to="/work">Voltar para Projetos</Link>
            </div>
        );
    }
    return(
        <div className="project-details fade-in">
            <Link to="/work" className="btn-voltar">Projetos</Link>

            <header className="project-header">
                <h1>{projeto.titulo}</h1>
            </header>

            <div className="project-imagem-principal">
                <img src={projeto.imagem} alt={projeto.titulo} />
            </div>

            <div className="project-info">
                <div className="project-descricao">
                    <h3>Sobre o projeto</h3>
                    <p>{projeto.descricao}</p>
                </div>

                <div className="project-galeria">
                    <h3>Capturas</h3>
                    <div className="galeria-grid">
                        {projeto.capturas.map((captura, index) => (
                            <div key={index} className="captura-item">
                                <img src={captura} alt={`${projeto.titulo} captura ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="project-metadados">
                    <div className="metadado-item">
                        <span className="label">Ano:</span>
                        <span className="value">{projeto.ano}</span>
                    </div>
                    <div className="metadado-item">
                        <span className="label">Tecnologias:</span>
                        <div className="tecnologias-lista">
                            {projeto.tecnologias.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;