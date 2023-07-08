import React, { useState } from "react";
import './styles/StylesAboutMe.css'


export default function AboutMe() {
    const [style, setStyle] = useState(false)
    const handleStyle = () => {
        setStyle(!style)
        console.log(style)
    }

    return <>
        <div className="AboutMeConteiner">
            <h1>Um pouco sobre mim </h1>
            <h4 className={style ? 'hidenAboutMe' : 'white text-focus-in'}>Sou um jovem talentoso de 22 anos com uma paixão ardente pelo desenvolvimento de software. Meu objetivo é me especializar nessa área fascinante e abraçar os desafios que ela proporciona. Além disso, tenho um interesse entusiasmado pelo design gráfico, explorando minha criatividade em projetos variados.

                Destaco-me por minha habilidade de encontrar soluções de forma ágil e criativa. Sou um pesquisador incansável, sempre buscando respostas para os problemas que surgem no meu caminho. Tenho o prazer de compartilhar minhas soluções com os outros, promovendo um ambiente colaborativo e de aprendizado contínuo.

                Se você está em busca de um profissional com uma mentalidade inovadora, proativo e apaixonado pela tecnologia, estou pronto para fazer parte da sua equipe.</h4>
            <button onClick={handleStyle}
             className="btnStyles">
                Ler Mais
            </button>
        </div >
    </>
}
