import React, { useEffect, useState } from "react"
import axios from 'axios';
const Exercices = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(
                "http://localhost:3000/exercices"
            )
            .then((res) => setData(res.data));
        console.log(data[0]) //todo destructuring
    }, [])
    return (
            <div className="exercices">
            <ul className="liste-exercices">
                {data.map((exo,key)=>{
                    return (
                    <div>
                        <li>id {exo._id}</li>
                        <li>nom {exo.nom}</li>
                        <li>langage {exo.langage}</li>
                        <li>enonce {exo.enonce}</li>
                        <li>Aide {exo.aides}</li>
                        <li>correction {exo.correction}</li>
                        <li>Difficulte {exo.difficulte}</li>
                    </div>
                    )
                })}
            </ul>
        </div>
    );
};
export default Exercices;