import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Contact() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Página inicial</h1>
      <p>O tema atual é: {theme}</p>
    </div>
  );
}