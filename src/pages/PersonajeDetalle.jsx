import { useEffect, useState } from 'react';
import styles from './PersonajeDetalle.module.css';
import Figure from 'react-bootstrap/Figure';
import { useParams } from "react-router";
import { get } from "../utils/httpClient";
import { Spinner } from '../components/Spinner';



export function PersonajeDetalle() {
    const { personajeId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [per, setPer] = useState(null);

    useEffect(() => {
        setIsLoading(true);

        get("/character/" + personajeId).then((data) => {
            setPer(data);
            setIsLoading(false);
        });
    }, [personajeId]);

    if (isLoading) {
        return <Spinner />;
    }
    
    return (
        <div className={styles.personajeDetalle}>
            <Figure>
                <Figure.Image
                    className={`${styles.col} ${styles.personajeDetalleImagen}`}
                    width={471}
                    height={480}
                    alt="471x480"
                    src={per.image}
                />
            </Figure>
            <div className={`${styles.col} ${styles.persona}`}>
                <strong>Name: </strong>{per.name},
                <br />
                <strong>Status: </strong>{per.status}
                <br />
                <strong>Specie: </strong>{per.species}
                <br />
                <strong>Type: </strong>{per.type}
                <br />
                <strong>Gender: </strong>{per.gender}
                <br />
                <strong>Origin: </strong>{per.origin.name}
                <br />
                <strong>Location: </strong>{per.location.name}
                <br />
                <strong>List of Episodes: </strong>{"(" + per.episode.length + ")"}
                <br />
                {per.episode.map((charac, index) => (
                    <li key={index}>{charac}</li>
                ))}
            </div>
        </div>
    );
}