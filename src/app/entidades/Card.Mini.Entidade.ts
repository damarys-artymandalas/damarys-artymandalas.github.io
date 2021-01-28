import { Card } from "./Card.Entidade";

export class MiniCard {

    static ObterCardContato(): Card {
        return new Card('Entre em Contato, Tire Dúvidas e Agende!', 'Contatos:', './../assets/imagens/damarys1.jpg',
            `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: damarisc.reges@gmail.com<br>
            WhatsApp: <a style="color: white" href="https://api.whatsapp.com/send?phone=5562992188233&text=Ol%C3%A1,%20atrav%C3%A9s%20do%20site%20Damarys-Artymandalas%20encontrei%20seu%20contato.%20Pode%20me%20ajudar?">(62) 99218-8233</a> <br>  
            &nbsp;Instagram: @damarys_artymandalas<br>
            &nbsp;&nbsp;YoutTube: Damarys C. Reges<br>
        `);
    }

}