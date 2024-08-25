import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
   <div>
      <h1>Pagina Inicial</h1>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/fundamentos">fundamentos</a></li>
        <li><a href="/todos">todos</a></li>
        <li><a href="/todosRSC">todos RSC</a></li>
        <li><a href="/bootstrap">bootstrap</a></li>
      </ul>
   </div>
  );
}
