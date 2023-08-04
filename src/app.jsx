
import './app'
import { Exemplo } from "./exemplo";
export default function App() {
  const listaalunos = ["Lincoln Duarte, 17 anos, live in New Andradina ","Alan, 17 anos, live in New Andradina ","Monkey, 15 anos, live in New Andradina"]
    return (
      <div>
        <h1>Hello Word!</h1>
        <Exemplo lista= {listaalunos}/>
      </div>
  
    );
  }