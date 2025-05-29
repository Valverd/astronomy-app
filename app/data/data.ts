export const moon_and_planets = [
    {
        name: "Mercúrio",
        description: "Mercúrio é o planeta mais próximo do Sol. Pequeno e rochoso, não possui uma atmosfera significativa, o que faz com que enfrente temperaturas extremamente altas durante o dia e muito frias à noite. É um planeta árido, sem luas, e sua superfície lembra bastante a da Lua da Terra.",
        topics: ["Tipo: Rochoso", "Diâmetro: 4.880 km", "Temperaturas: -173°C (Mín) 427° (Máx)", "Temperatura Média: 167°C", "Luas: Nenhuma", "Curiosidade: Da superfície de Mercúrio, o Sol pareceria mais de três vezes maior do que quando visto da Terra, e a luz solar seria até sete vezes mais brilhante."],
        id: "Mercury",
        type: "planet",
        í: 82_500_000,
        máx: 1_446_000_000
    },
    {
        name: "Vênus",
        description: "Vênus é o segundo planeta do Sistema Solar e é semelhante em tamanho à Terra. No entanto, sua atmosfera é muito densa e composta quase inteiramente de dióxido de carbono, o que provoca um forte efeito estufa. Como resultado, é o planeta mais quente, mesmo estando mais distante do Sol que Mercúrio.",
        topics: ["Tipo: Rochoso", "Diâmetro: 12.104 km", "Temperaturas: ~464°C (Mín) ~464° (Máx)", "Temperatura Média: 464°C", "Luas: Nenhuma", "Curiosidade: A pressão atmosférica na superfície de Vênus é tão alta (90x a da Terra) que o som viajaria mais devagar e soaria diferente, sua voz pareceria mais grave e abafada."],
        id: "Venus",
        type: "planet",
        min: 39_790_000,
        max: 1_736_000_000
    },
    {
        name: "Terra",
        description: "Terra é o terceiro planeta e o único conhecido até hoje que abriga vida. Possui uma atmosfera equilibrada, rica em oxigênio, além de grande quantidade de água em estado líquido. Sua superfície é variada, com oceanos, continentes e climas diversos. Tem apenas uma lua.",
        topics: ["Tipo: Rochoso", "Diâmetro: 12.742 km", "Temperaturas: -89°C (Mín) 56,7°C (Máx)", "Temperatura Média: 15°C", "Luas: 1 (a Lua de Luna ou Selene)", "Curiosidade: Cerca de 70% da superfície da Terra é coberta por água, mas o planeta tem menos de 1% de água potável disponível na superfície."],
        id: "Earth",
        type: "planet",
        min: 147.1,
        max: 152.1
    },
    {
        name: "Marte",
        description: "Marte é o quarto planeta e é conhecido como o “planeta vermelho” por causa do óxido de ferro presente em sua superfície. Possui calotas polares, vulcões, vales e sinais de antigos rios, indicando que já teve água líquida. Tem duas pequenas luas: Fobos e Deimos.",
        topics: ["Tipo: Rochoso", "Diâmetro: 6.794 km", "Temperaturas: -140°C (Mín) 30°C (Máx)", "Temperatura Média: -65°C", "Luas: 2 (Fobos e Deimos)", "Curiosidade: Marte abriga o maior vulcão do Sistema Solar: Olympus Mons, com 22 km de altura, quase 3x o Monte Everest!"],
        id: "Mars",
            type: "planet",
            min: 55_650_000,
            max: 2_671_000_000
    },
    {
        name: "Júpiter",
        description: "Júpiter é o quinto planeta e o maior de todo o Sistema Solar. Composto principalmente por gases como hidrogênio e hélio, possui uma gigantesca tempestade chamada Grande Mancha Vermelha. Abriga dezenas de luas, incluindo as quatro grandes luas galileanas: Io, Europa, Ganimedes e Calisto.",
        topics: ["Tipo: Gasoso (gigante)", "Diâmetro: 142.984 km", "Temperaturas: -145°C (Mín) -130°C (Máx)", "Temperatura Média: -110°C", "Luas: +90 (destaques: Ganimedes, Io, Europa e Calisto)", "Curiosidade: É o maior planeta do Sistema Solar e emite mais energia do que recebe do Sol."],
        id: "Jupiter",
        type: "planet",
        min: 591_970_000,
        max: 6_454_000_000
    },
    {
        name: "Saturno",
        description: "Saturno é o sexto planeta e é famoso por seus belos e largos anéis compostos de gelo e poeira. Também é um gigante gasoso, com muitas luas, sendo Titã a maior e uma das mais interessantes do Sistema Solar, pois possui lagos de metano líquido e uma atmosfera espessa.",
        topics: ["Tipo: Gasoso (gigante)", "Diâmetro: 120.536 km", "Temperaturas: -130°C (Mín) -185°C (Máx)", "Temperatura Média: -14 0°C", "Luas: +80 (destaque: Titã)", "Curiosidade: Além dos anéis, Saturno tem uma formação em forma de hexágono gigante no polo norte, uma corrente de jato atmosférica hexagonal estável."],
        id: "Saturn",
        type: "planet",
        min: 1_204_280_000,
        max: 11_046_000_000
    },
    {
        name: "Urano",
        description: "Urano é o sétimo planeta a partir do Sol. Possui uma coloração azul-esverdeada devido à presença de metano em sua atmosfera. Um fato curioso é que ele gira quase deitado, com seu eixo de rotação inclinado mais de 90 graus em relação ao plano da órbita, o que o torna único entre os planetas.",
        topics: ["Tipo: Gasoso (gigante gelado)", "Diâmetro: 51.118 km", "Temperaturas: -224°C (Mín) -197°C (Máx)", "Temperatura Média: -195°C", "Luas: 27", "Curiosidade: Em simulações laboratoriais, acredita-se que dentro de Urano (e Netuno), a pressão extrema pode causar chuvas de diamantes, com carbono se cristalizando no interior profundo."],
        id: "Uranus",
        type: "planet",
        min: 2_586_880_000,
        max: 21_089_000_000
    },
    {
        name: "Netuno",
        description: "Netuno é o oitavo e mais distante planeta do Sol. Também tem uma coloração azul intensa por causa do metano e é conhecido por seus ventos fortíssimos, os mais rápidos do Sistema Solar. É um planeta gasoso, frio e com várias luas, sendo Tritão a maior delas.",
        topics: ["Tipo: Gasoso (gigante gelado)", "Diâmetro: 49.538 km", "Temperaturas: -218°C (Mín) -200°C (Máx)", "Temperatura Média: -214°C", "Luas: 14 (destaque: Tritão)", "Curiosidade: Possui os ventos mais rápidos do Sistema Solar, chegando a mais de 2.000 km/h."],
        id: "Neptune",
        type: "planet",
        min: 4_311_002_000,
        max: 31_317_000_000
    }
]