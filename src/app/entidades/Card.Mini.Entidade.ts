import { Card } from "./Card.Entidade";

export class MiniCard {

    static ObterCardContato(): Card {
        return new Card('Entre em Contato, Tire Dúvidas e Agende!', 'Contatos:', './../assets/imagens/damarys1.jpg',
            `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: damarisc.reges@gmail.com<br>
         WhatsApp: <a style='color: #FFFFFF' target="_blank" href="https://api.whatsapp.com/send?phone=5562992188233&text=Ol%C3%A1,%20atrav%C3%A9s%20do%20site%20Damarys-Artymandalas%20encontrei%20seu%20contato.%20Pode%20me%20ajudar?">(62) 99218-8233</a> <br>  
         &nbsp;Instagram: <a style='color: #FFFFFF' target="_blank" href="https://www.instagram.com/damarys_artymandalas/"> @damarys_artymandalas</a><br>
         &nbsp;&nbsp;YoutTube: <a style='color: #FFFFFF' target="_blank" href="https://www.youtube.com/user/Damaris8648"> Damarys C. Reges</a><br>
         &nbsp;&nbsp;Telegram: <a style='color: #FFFFFF' target="_blank" href="https://t.me/joinchat/HJzs4lbcTA5gHpSX"> Astro Day</a><br>
        `
        );
    }
    static ObterCardProdutos(): Card {
        return new Card("Produtos", "Arte feita com muito amor e luz! Entregas para todo Brasil", './../assets/imagens/mandala_saojorge.png',
            `<li>Mandalas</li>
        <li>Japamalas</li>
        <li>Colares</li>
        <li>Conjuntos</li>
        `
        );
    }
    static ObterCardServicos(): Card {
        return new Card("Mapa Astral, Tarot, Constelação", "Desvendando o Inconciente...", './../assets/imagens/tarot.jpeg',
            `<p>Venha projetar seu <b>inconsciente</b> para analisar e interagir com o seu rico <b>mundo interior</b>. Definindo posições, hierarquias afim de ter uma vida próspera e equilibrada,
        baseando na sua pessoa <b>única</b> que você é!</p> 
        Fazendo isso através das cartas, constelações familiar, individual, Mapa Astral, etc...`
        );
    }

    static ObterCardConstelacaoPrincipal(): Card {
        return new Card("Constelação Sistêmica ou Familiar", "Entendendo os movimentos...", './../assets/imagens/Terapia/Constelacao/imagem.jpg',
            `<p>A constelação familiar é uma prática terapêutica que busca resolver conflitos <b>familiares</b> que atravessam gerações. 
        Num primeiro olhar, a técnica tem conteúdos parecidos aos do psicodrama, 
          por conta da dramatização de situações, e da psicoterapia breve, pela ação rápida</p> 
        Fazendo isso através das cartas, constelações familiar, individual, Mapa Astral, etc...`
        );
    }

    static ObterCardConstelacaoBonecos(): Card {
        return new Card("Constelação Sistêmica ou Familiar", "Alternativo...", './../assets/imagens/Terapia/Constelacao/imagem.jpg',
            `<p>Para quem tem vergonha, ou não consegue quantidade de pessoas para realizar o movimento existe a possibilidade de realizar através de bonecos (Playmobil).</p>`
        );
    }

    
    static ObterCardTaro(): Card {
        return new Card("Tarot", "pensamentos, palavras e atitudes...", './../assets/imagens/taro.jpg',
            `<p>"<i>O dedo aponta a lua, o sábio olha a lua, o tolo vê só o dedo.</i>” Provérbio chinês. </p>
            <p><b>Tarô</b> é um mapa de viagem, um caminho para o <b>autoconhecimento</b>, cujo objetivo é nos inspirar e ajudar a construir 
           um projeto de vida equilibrado para nós, para os que nos cercam; para a <b>humanidade</b> e para o <b>planeta</b>. 
           Ao abrir uma leitura de <b>Tarô</b> observamos o que está disponível e o que é percebido por nós, além do que temos 
           em <b>potencial</b> e ainda não conseguimos perceber. Apura nosso poder inato para promover mudanças de 
           <b>pensamentos, palavras e atitudes</b></p>`
        );
    }

    static LinkTaro(): string{
        return "https://youtu.be/H7JCj9SlAiU";
    }
    static LinkConstelacaoFamiliar(): string{
        return "https://youtu.be/GkN8g2qlues";
    }
}