import style from './Search.module.css';
import { RiSearchEyeLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useQuery } from '../Hooks/useQuery';

export function Search() {
    const query = useQuery();
    const search = query.get("name");

    const [searchText, setSearchText] = useState("");
    const history = useHistory();

    useEffect(() => {
        setSearchText(search || "");
    },[search])

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/?name=" + searchText);
    };
    return (
        <form className={style.search} onSubmit={handleSubmit}>
            <div className={style.searchdiv}>
                <input 
                    className={style.searchinput} 
                    type="text" 
                    value={searchText} 
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className={style.searchbutton} type="submit">
                    <RiSearchEyeLine size={20}/>
                </button>
            </div>
        </form>
    );
}
