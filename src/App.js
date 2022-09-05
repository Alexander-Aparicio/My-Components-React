import Gallery from "./components/Galleries/Gallery";
import styles from "./App.module.css";
import Title from "./components/Titles/Title";
import Code from "./components/code/Code";
import { JsxGallery } from "./CodeComponents/Galleries/JSXmodelOne";
import { CssModuleGallery } from "./CodeComponents/Galleries/CSSmodelOne";
import TitleComponent from "./components/Titles/TitleComponent";
import Text from "./components/Texts/Text";
import ProgressBar from "./components/Graphics/ProgressBar";
import { JsxBarP } from "./CodeComponents/BarProgress/JSXmodelOne";
import { CssModuleBarP } from "./CodeComponents/BarProgress/CSSmodelOne";
import DivisionOfTheMonth from "./components/DivisionOfTheMonth/DivisionOfTheMonth";

function App() {
  return (
    <div className={styles.app}>
      <Title />
      <Text>Mis componentes sencillos de React usando solo modulos CSS.</Text>
      <TitleComponent>Galería</TitleComponent>
      <Gallery />
      <Code title={"Código"}>
        <>
          <pre>
            <h3>JSX</h3>
            <code>{JsxGallery}</code>
          </pre>
          <pre>
            <h3>CSS</h3>
            <code>{CssModuleGallery}</code>
          </pre>
        </>
      </Code>
      <br />
      <br />
      <TitleComponent>Barra de progreso</TitleComponent>
      <ProgressBar />
      <Code title={"Código"}>
        <>
          <pre>
            <h3>JSX</h3>
            <code>{JsxBarP}</code>
          </pre>
          <pre>
            <h3>CSS</h3>
            <code>{CssModuleBarP}</code>
          </pre>
        </>
      </Code>
      <br />
      <br />
      <TitleComponent>Destructurador del mes</TitleComponent>
      <DivisionOfTheMonth />
      <br />
      <br />
    </div>
  );
}

export default App;
