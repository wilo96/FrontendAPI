import { useEffect, useState } from 'react';
import { Persona } from '../components/Persona';
import { Spinner } from '../components/Spinner';
import { useQuery } from '../Hooks/useQuery';
import { get } from '../utils/httpClient';
import styles from './GridPersonajes.module.css';


export function GridPersonaje({persons}) {
    const [character, setCharacter] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const query = useQuery();
    const search = query.get("name");

    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search 
        ? "/character/?name=" + search 
        : "/character";
        get(searchUrl).then((data) => {
           // console.log(data);
            if(data.error) {
                setCharacter(...character);
            }
            else{
                setCharacter(data);
            }
            setIsLoading(false);
        });
    }, [search]);

    useEffect(() => {
        setCharacter(persons)
        
    }, [persons]);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <ul className={styles.personajesGrid}>
            {character.results.map((charac, index) => (
                <Persona key={index} personaje={charac} />
            ))}
        </ul>
        

    );
}