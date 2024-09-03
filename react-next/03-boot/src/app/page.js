import Image from "next/image";
import styles from "./page.module.css";
import Pagina from "./components/Pagina";
import { Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <Pagina titulo="Página Inicial">
      <h1>Home Page</h1>
      <p>Texto</p>
    </Pagina>
  );
}
