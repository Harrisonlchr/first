import Head from "next/head";
import { PROJECT_NAME } from "../constants/projectGenerics";
import ButtonCustom from "../components/button";
import DeleteIcon from "@material-ui/icons/Delete";

export default function Home() {
  return (
    <>
      <Head>
        <title>{PROJECT_NAME}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logoDos.png" />
      </Head>
      <div style={{display:'flex', flexDirection:'column'}}>
      <ButtonCustom text="boton personalizado con icono" icon={<DeleteIcon/>}/>
      <ButtonCustom text="boton personalizado" />
      <ButtonCustom text="boton personalizado disableado" disabled/>
      <ButtonCustom text="boton personalizado cargando" loading/>
      </div>
    </>
  );
}
