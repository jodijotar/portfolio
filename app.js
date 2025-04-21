const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Configurar EJS como view engine
app.set('view engine', 'ejs');

// Configurar pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Dados para renderizar nas views
const portfolioData = {
    nome: 'Fabio Fonseca',
    titulo: 'Hacker - Independent Researcher',
    sobre: [
        'Possuo imenso interesse em segurança da informação, especificamente, segurança ofensiva/ethical hacking. Minha devoção por cybersegurança vem de uma grande curiosidade em realmente entender como as tecnologias e suas abstrações sustentam o mundo digital. Nesse contexto, cybersegurança inevitavelmente exige do profissional uma compreensão de como os componentes funcionam no "high level": aplicações web, integrações, etc... ;e também no "low level": Protocolos de Redes - HTTP e métodos de requisição, Sistemas operacionais/Kernel, Networking, entre outros conceitos. Portanto, encontrei em segurança da informação essa paixão de poder permear com profundidade nas abstrações da computação.',
        'Pretendo, neste portfólio, apresentar meus projetos pessoais e acadêmicos, assim como minhas qualificações profissionais. Entretanto, algumas de minhas contribuições não serão mencionas por sigilo profissional.'
    ],
    educacao: [
        {
            instituicao: 'FATEC - São José dos Campos',
            curso: 'Desenvolvimento de Software Multiplataforma - Tecnólogo',
            periodo: 'Agosto de 2024 - Agosto de 2027 (Previsto)',
            descricao: 'Por meio do modelo de Project-based Learning, a cada semestre desenvolvemos uma solução de software em grupos através da metodologia ágil Scrum. Cada integrante assume um dos papéis da equipe (P.O, Master, Dev Team) e entrega, em cada sprint mensal, o produto de maior valor possível para o cliente, que pode ser tanto os professores quanto uma empresa real em estudos de case.<br>Com isso, desenvolvemos não somente intensa familiaridade e convivência com as tecnologias vigentes no mercado atual de tecnologia, como também habituação com os frameworks ágeis de trabalho do contexto atual do desenvolvimento de software.'
        }
    ],
    projetos: [
        {
            nome: 'DemoQuerycy',
            link: 'https://github.com/AgileKrakens/DemoQuerycy',
            empresa: 'Agile Krakens - FATEC',
            periodo: 'Setembro de 2024 - Novembro de 2024',
            descricao: 'Atuei como Scrum Master e no backend do desenvolvimento de uma aplicação web de consulta, tratamento e interpretação de dados públicos da atuação dos vereadores do último mandato de São José dos Campos. Meu trabalho enquanto Scrum Master enquadra, principalmente:<br> - Revisão da Arquitetura de Software com o P.O através da enumeração de requisitos por User Stories (Product Backlog).><br> - Gerenciar cerimônias baseadas em metodologia ágil, com objetivo de garantir o MVP de cada sprint, alinhadamente com a capacidade/tempo do DevTeam.<br> - Diferentemente de um contexto corporativo, a atuação do Scrum Master nesse cenário acadêmico abrange não somente Engenharia de Software, mas também minha contribuição com código.'
        }
    ],
    hardSkills: [
        'Linguagens de Programação: Python, Javascript/Typescript',
        'Frameworks: Flask, Django, Node.js, React',
        'Banco de dados: MongoDB, MySQL',
        'Tecnologias: Git/GitHub, Docker, AWS',
        'Metodologias ágeis: Scrum',
        'Hacking ético: Linux, Reconhecimento de Infraestrutura de redes, Pentest e Análise de vulnerabilidades em aplicações web.'
    ],
    outrosConhecimentos: [
        {
            titulo: 'Metodologias Ágeis',
            descricao: 'Como já dito na seção sobre meu trabalho como Master, tenho uma vivência intensa com o framework Scrum no desenvolvimento de software. Sei o papel de cada integrante da equipe Scrum, como as tarefas são pensadas a partir das user stories, o processo de montagem do product backlog, as cerimônias e artefatos que promovem a comunicação e organização entre as partes, etc. Destaco minha leitura do excelente livro "Scrum e Agile em Projetos" de Fábio Cruz que tem me ajudado muito no aprendizado das metodologias ágeis.'
        },
        {
            titulo: 'Sistemas Operacionais/Linux',
            descricao: 'De modo geral, me interesso muito sobre os assuntos menos óbvios ou "pouco práticos" para o desenvolvedor médio, especialmente na área de sistemas operacionais e redes. Gosto de entender como sistemas funcionam em uma perspectiva de camadas (OSI model), Kernels e em quantas camadas de virtualização uma linguagem de programação opera, como um editor de texto executa comandos de sistema, pipelines, paralelismo, hierarquias de memória, até os protocolos de comunicação que permitem a internet existir, aplicações modernas em contâineres, plataformas em nuvem etc. Acredito que esse conhecimento mais profundo amplia minha criatividade e controle sobre os meus programas, além de me manter sempre pensando sobre como inovações podem ser feitas.'
        }
    ],
    contatos: [
        {
            nome: 'LinkedIn',
            link: 'https://www.linkedin.com/in/fabiofonsecajodi/'
        },
        {
            nome: 'GitHub',
            link: 'https://www.github.com/jodijotar'
        },
        {
            email: 'fabiofjotar@gmail.com'
        }
    ]
};

// Rotas
app.get('/', (req, res) => {
    res.render('index', { portfolio: portfolioData });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
