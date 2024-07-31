'use client'
import CardContrato from "./components/card_contrato";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [relatorioSelected, setRelatorioSelected] = useState("mensal");

  function renderRelatorio(value:string){
    switch(value) {
      case "mensal":
        return (<h1>mensal</h1>);
      case "anual":
        return (<h1>Anual</h1>);
      case "data":
        return (<h1>Aqui complicou</h1>);
      default: 
        return (<></>);
    }
  }

  function renderUltimosContratos(){
    // fetch data chamando os serviços
    const fakeData= [
      {
        objetivo:"Atualização dos Sistemas Operacionais", 
        entrega:"Atualizar todos os computadores da empresa que utilizam 'Windows 7' para o Windows 10", 
        dtInicial:"11/05/2024", 
        dtFinal:"11/08/2024",
        local:"Sede da empresa eXemplo",
        valor:4300,
        situacao:"em contratação",
        pagamentos:[
          {
            forma:"cartão de credito",
            valor:2000,
            comprovante:"1272551"
          },
          {
            forma:"pix",
            valor:500,
            comprovante:"6158323"
          }
      ],
        empresa:{
          nome:"Torradeira TI",
          responsavel:"Oliver Guerreiro",
        },
        gestor:"Alicia Freitas"
      }
    ];
    return (
      <div className={styles.ultimos_contratos}>
        <CardContrato 
          objetivo={fakeData[0].objetivo}
          dtInicial={fakeData[0].dtInicial}
          dtFinal={fakeData[0].dtFinal}
          valor={fakeData[0].valor}
          situacao={fakeData[0].situacao}
        />
        <CardContrato 
          objetivo={fakeData[0].objetivo}
          dtInicial={fakeData[0].dtInicial}
          dtFinal={fakeData[0].dtFinal}
          valor={fakeData[0].valor}
          situacao={fakeData[0].situacao}
        />
        <CardContrato 
          objetivo={fakeData[0].objetivo}
          dtInicial={fakeData[0].dtInicial}
          dtFinal={fakeData[0].dtFinal}
          valor={fakeData[0].valor}
          situacao={fakeData[0].situacao}
        />
      </div>
    );
  }


  return (
    <main className={styles.main}>
      <h1>Ultimos Contratos</h1>
        {renderUltimosContratos()}            
      <h1 className={styles.relatorio_gastos}>
        Relatório de gastos
          <select name="selectedDate" className={styles.relatorio_gastos__select} defaultValue={relatorioSelected} onChange={(e)=>{setRelatorioSelected(e.target.value); console.log(e.target.value)}}>
            <option value={"mensal"}>Mensal</option> 
            <option value={"anual"}> Anual</option> 
            <option value={"data"}>Data expecifica</option>
          </select>
        {renderRelatorio(relatorioSelected)}
      </h1>
    </main>
  );
}
