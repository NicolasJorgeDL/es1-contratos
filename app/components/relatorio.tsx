import { title } from "process";
import { useState } from "react";
import Chart from "react-google-charts";


export default function Relatorio(value:string){
    const [optionBar, setOptionBar] = useState({title: "Grafico Mensal"})

    const [data, setData] = useState([
        ["Mes","Concluidos","Cancelados"],
        ["Janeiro", 4, 1],
        ["Fevereiro", 1, 3],
        ["Março", 2, 2],
        ["Abril", 4, 0],
        ["Maio", 5, 2],
        ["Junho", 3, 0],
        ["Julho", 4, 1],
        ["Agosto", 1, 3],
        ["Setembro", 2, 2],
        ["Outubro", 2, 0],
        ["Novembro", 3, 3],
        ["Dezembro", 5, 2]
    ])

    switch(value) {
      case "mensal":
        return (<div> 
            <Chart
                width={"500px"}
                height={"300px"}
                chartType="BarChart"
                data={data}
                options={optionBar}
            />
            </div>);
      case "anual":
        return (<h1>Anual</h1>);
      case "data":
        return (<h1>Aqui complicou</h1>);
      default: 
        return (<></>);
    }
  }

