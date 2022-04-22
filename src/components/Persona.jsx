import style from './Persona.module.css';
import { Link } from 'react-router-dom';

export function Persona({ personaje }) {

    return (
        <li className={style.persona}>
            <Link to={"/personaje/" + personaje.id}>
                <img
                    className={style.personaImagen}
                    width={171}
                    height={180}
                    src={personaje.image}
                    alt={personaje.name}
                />
                <div>{personaje.name}</div>
            </Link>
        </li >
    );
}