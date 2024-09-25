Pontos Positivos:
    1 - Reutilização de Componentes:
        - É possível reutilizar o componente de Card com facilidade.
    
    2 - Não Duplicação de Estilos CSS:
        - Os estilos globais foram aplicados da maneira correta.
        - Quem implementar o componente de card não precisará replicar estilos CSS.
    
    3 - Responsabilidades Bem Definidas:
        - Cada componente tem sua responsabilidade definida.
        - O componente de Card serve apenas para projetar o conteúdo.
        - Os componentes pais servem para aplicar a estrutura do conteúdo que será projetado.
            * Adendo para a repetição na estrutura do conteúdo.
        - O componente de card não trata das peculiaridades das diferentes estruturas dos conteúdos.

    4 - Componente se Auto Documenta:
        - O código do componente é de fácil leitura.

Pontos Negativos:
    1 - Complexidade das Diretivas:
        - Para pessoas recentes no Angular, o conceito de diretivas pode ser complexo.
        - A curva de adaptação ao projeto pode ser maior.
            *Porém, a forma de uso dos componentes estará bem definida. O desenvolvedor novo não fará do seu jeito, evitando gambiarras.

    2 - Limitações de Personalização:
        - Com o uso das diretivas para estilizar, as personalizações dos elementos podem se tornar um pouco mais trabalhosas.
            *Adendo para não aplicar estilizações específicas nessas diretivas.

Pontos Gerais:
    1 - Code Review:
        - O Code Review é extremamente importante para validar se as padronizações e utilização dos componentes estão sendo feitas da maneira correta.