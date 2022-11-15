// import { createClient } from "@supabase/supabase-js";
import React from "react";
import toast from 'react-hot-toast';
import { CgCloseO } from "react-icons/cg";
import { RiVideoAddFill } from "react-icons/ri";

import NotifyToast from "../Toasts";
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
      setValues({ playlist: "", titulo: "", url: "" });
    }
  };
}

// const projectUrl = process.env.NEXT_PUBLIC_PROJECT_URL;
// const apiKey = process.env.NEXT_PUBLIC_API_KEY;
// const supabase = createClient(projectUrl, apiKey)

function getYoutubeThumb(url) {
  return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`
}

export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: {
      playlist: "",
      titulo: "",
      url: ""
    }
  });
  // titulo: "Frostpunk",
  // url: "https://www.youtube.com/watch?v=QsqatJxAUtk"

  const [formVisible, setFormVisible] = React.useState(false);

  const notify = (type) => {

    toast.custom((t) => (
      <NotifyToast
        type={type}
        target={t}
      />
    ), { duration: 6000 })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();

    Object.keys(formCadastro.values).length === 0 ? (
      notify("Ghost")
    ) : (
      formCadastro.values.playlist == "" ? (
        console.log("GULAG", formCadastro.values.playlist),
        formCadastro.values.playlist = "GULAG",
        notify("Gulag")
      ) : (
        console.log("BUGS", formCadastro.values.playlist),
        notify("BugsBunny")
      )
      // enviardados
    )

    // console.log(formCadastro.values);

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
  }

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisible(true)}>
        <RiVideoAddFill />
      </button>
      {formVisible && (
        <form onSubmit={handleSubmit}>
          <div>
            <button type="button" className="close-modal"
              onClick={() => setFormVisible(false)}>
              <CgCloseO size={24} />
            </button>
            <input
              placeholder="Playlist"
              name="playlist"
              value={formCadastro.values.playlist}
              onChange={formCadastro.handleChange}
            />
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
            {formCadastro.values.url ?
              <div>
                <img src={getYoutubeThumb(formCadastro.values.url)} />
              </div>
              : ""
            }
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  )
}


