// import { createClient } from "@supabase/supabase-js";
import React from "react";
import toast from 'react-hot-toast';

import OfTheGulag from "../Toasts";
import { StyledRegisterVideo } from "./styles";


// Custom Hook
function useForm(propsDoForm) {
  const [values, setValues] = React.useState(propsDoForm.initialValues);

  return {
    values,
    handleChange: (ev) => {
      const value = ev.target.value;
      const name = ev.target.name;

      setValues({
        ...values,
        [name]: value,
      })
    },
    clearForm() {
      setValues({});
    }
  };
}

// const PROJECT_URL = "https://qsyqzguwvjgeagktzpri.supabase.co";
// const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzeXF6Z3V3dmpnZWFna3R6cHJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxOTAwNDcsImV4cCI6MTk4Mzc2NjA0N30.DKtuMG92qh2-R5BzRCh7NnXcYZDvlBiNhdpdlnTmulo"
// const supabase = createClient(PROJECT_URL, API_KEY)

function getYoutubeThumb(url) {
  return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`
}

export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: {
      titulo: "Frostpunk",
      url: "https://www.youtube.com/watch?v=QsqatJxAUtk"
    }
  });
  const [formVisible, setFormVisible] = React.useState(false);

  const notify = () => {
    toast.custom((t) => (<OfTheGulag target={t} />), { duration: 5000 })
  }

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisible(true)}>
        +
      </button>
      {formVisible && (
        <form onSubmit={(ev) => {
          ev.preventDefault();

          notify();

          // supabase.from("video").insert({
          //   title: formCadastro.values.titulo,
          //   url: formCadastro.values.url,
          //   thumb: getYoutubeThumb(formCadastro.values.url),
          //   playlist: "jogos"
          // })
          //   .then((oqueveio) => {
          //     console.log(oqueveio);
          //   })
          //   .catch((err) => {
          //     console.log(err);
          //   })

          setFormVisible(false);
          formCadastro.clearForm();
        }}>
          <div>
            <button type="button" className="close-modal"
              onClick={() => setFormVisible(false)}>
              x
            </button>
            <input
              placeholder="Título do vídeo"
              name="titulo"
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChange}
            />
            <input
              placeholder="URL"
              name="url"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />
            <button type="submit" >
              Cadastrar
            </button>
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  )
}


