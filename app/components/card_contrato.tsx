import styles from "./card.module.css";

interface contrato{
    objetivo: string;
    // entrega: string;
    dtInicial: string;
    dtFinal: string;
    // local: string;
    valor: number;
    situacao: string;
    // pagamentos: [{forma: string, valor: number, comprovante:string}];
    // empresa: {
    //     nome:string,
    //     responsavel: string
    // },
    // gestor:string
}


export default function CardContrato(data:contrato){
    let cardColor;
    console.log(data.situacao);
    switch (data.situacao){
        case "paralisado": cardColor = "#1195ff"; break;
        case "em contratação": cardColor = "green"; break;
        case "cancelado": cardColor = "red"; break;
    }
    return (        
    <div className={styles.card} style={{backgroundColor: cardColor }}> 
        <h3>{data.objetivo}</h3>
        <p>Situação: {data.situacao}</p>
        <p>Inicio: {data.dtInicial} Final: {data.dtFinal}</p>
    </div>
    );
}

// objetivo:"Atualização dos Sistemas Operacionais", 
// entrega:"Atualizar todos os computadores da empresa que utilizam 'Windows 7' para o Windows 10", 
// dtInicial:"11/05/2024", 
// dtFinal:"11/08/2024",
// local:"Sede da empresa eXemplo",
// valor:4300,
// situacao:"em contratação",
// pagamentos:[
//   {
//     forma:"cartão de credito",
//     valor:2000,
//     comprovante:"1272551"
//   },
//   {
//     forma:"pix",
//     valor:500,
//     comprovante:"6158323"
//   }
// ],
// empresa:{
//   nome:"Torradeira TI",
//   responsavel:"Oliver Guerreiro",
// },
// gestor:"Alicia Freitas"
// }