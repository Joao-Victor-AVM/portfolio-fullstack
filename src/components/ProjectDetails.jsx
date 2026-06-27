import { useParams, Link } from 'react-router-dom';
import './ProjectDetail.css';

const projetos = [
    {
        id: 4,
        titulo: "UsuarioNET",
        descricao: "Este programa foi desenvolvido com fins de estudo na criação de um backend puro, utilizando Node.js e .NET. A proposta central era estabelecer uma estrutura padrão para o backend que pudesse ser replicada e adaptada em diferentes projetos e tecnologias, servindo como base sólida para o desenvolvimento de futuras aplicações.",
        imagem: "/images/UserNET.jpg",
        capturas: ["/images/Captura_UserNET.png"],
        ano: "2024",
        tecnologias: ["Node.js", ".NET"]
    },
    {
        id: 3,
        titulo: "Framework Analgésia",
        descricao: "Projeto freelancer sem fins lucrativos desenvolvido com o objetivo de adquirir experiência prática. Consistiu na criação de uma aplicação voltada ao ensino do tratamento de pacientes em UTI, orientando a escolha adequada do tipo de sedação por meio de um fluxo de páginas estruturado. Embora o planejamento inicial previsse uma aplicação full stack, o curto prazo permitiu a entrega apenas de um frontend funcional, contendo todas as telas e o fluxo de navegação necessários, além da geração de uma folha-perfil de um paciente hipotético. O projeto foi desenvolvido utilizando React com JavaScript, proporcionando experiência na implementação de fluxos de navegação bidirecionais entre páginas, em contraste com aplicações de fluxo linear.",
        imagem: "/images/Framework Analgesia.png",
        capturas: ["/images/Captura_Framework_Analgesia.png"],
        ano: "2025",
        tecnologias: ["React", "JavaScript"]
    },
    {
        id: 2,
        titulo: "Minimal-API",
        descricao: "Projeto desenvolvido durante o curso de Backend e Inteligência Artificial da DIO com o objetivo de consolidar conhecimentos em desenvolvimento backend. Embora incompleto, o projeto proporcionou uma compreensão mais aprofundada da estrutura de aplicações backend e de sua integração com o frontend em arquiteturas full stack, permitindo a comunicação com um banco de dados MySQL. Foram utilizados C# como linguagem principal, JavaScript para integração, além de VS Code e GitHub para desenvolvimento e versionamento do código.",
        imagem: "/images/Backend Minimal-API.jpg",
        capturas: ["/images/Captura_Minimal_API.png"],
        ano: "2025",
        tecnologias: ["Javascript", "C#", "MySQL"]
    },
    {
        id: 1,
        titulo: "GET-Users",
        descricao: "A este projeto foi concebido como uma arquitetura de treinamento para o desenvolvimento de frontend, com o objetivo de consolidar os fundamentos da comunicação entre o frontend e o backend. A proposta permitiu explorar, na prática, os principais comandos e padrões de requisição utilizados em integrações fullstack, além de simular a lógica de gerenciamento de usuários e suas interações em um sistema completo.Para este projeto, foram utilizados de linguagens padrões para esse tipo de trabalho: REACT com Javascript e C#.",
        imagem: "/images/GET-Users.png",
        capturas: ["/images/Captura_GET_Users.png"],
        ano: "2025",
        tecnologias: ["React", "Javascript", "C#"]
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