# AstroRange

**AstroRange** é uma aplicação web desenvolvida com **Next.js** que traz uma experiência interativa de aprendizado sobre o **Sistema Solar**. O projeto combina **gráficos 3D com Three.js** e **cálculos astronômicos em tempo real** utilizando a biblioteca `astronomy-engine`.

## Funcionalidades

### 🪐 Página Principal – Visualização 3D dos Planetas
- Exibição de todos os planetas do Sistema Solar em 3D.
- Modelos realistas com rotação e interatividade.
- Informações e curiosidades sobre os planetas.

  ![image](https://github.com/user-attachments/assets/ec9598d2-07f1-4f39-8026-a7e7dd8ad46e)


### ☀️ Medidor de Distância ao Sol (Tempo Real)
- Página dedicada que exibe, em tempo real, a **distância entre cada planeta e o Sol**.
- Dados obtidos por meio de uma **API desenvolvida com o Next.js**.
- A API utiliza o pacote **`astronomy-engine`** para cálculos astronômicos precisos com base na data e hora atual.

  ![image](https://github.com/user-attachments/assets/ff3f7295-2d44-4e02-8668-950352b34dd5)


## 🛠️ Tecnologias Utilizadas

- **Next.js** – Framework React com renderização híbrida (SSR/SSG).
- **Three.js** – Biblioteca para criação de gráficos 3D no navegador.
- **astronomy-engine** – Biblioteca open source para cálculos de posições dos astros (Sol, Lua, planetas, etc...) e predições de eventos do cosmos.
- **React** – Biblioteca JavaScript para construção de interfaces modernas.

## 📁 Estrutura do Projeto

```bash
AstroRange/
├── public/                     # Arquivos estáticos
├── app/
│   ├── api/
│   │   └── planet/             
│   │       └── [planet]/       # Rota dinâmica para cada planeta
│   │           └── route.ts    # Retorna dados do planeta via astronomy-engine
│   ├── components/             
│   ├── data/                   # Dados estáticos dos planetas
│   ├── distance/
│   │   └── page.tsx            # Página com medidor de distância em tempo real
│   ├── global.css              
│   ├── layout.tsx              
│   └── page.tsx                # Página principal com visualização 3D
├── package.json
└── README.md
