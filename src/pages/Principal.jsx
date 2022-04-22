import { GridPersonaje } from "../Grid/GridPersonajes";
import { useEffect, useState } from 'react';
import { Search } from "../components/Search";
import ReactPaginate from 'react-paginate';

export function Principal() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getPages = async () => {
            const result = await fetch(
                'https://rickandmortyapi.com/api/character/?page=1'
            );
            const data = await result.json();
            setItems(data); 
        }
        getPages();
    },[]);

    const fetchPages = async (currentPage) => {
        const result = await fetch(
            'https://rickandmortyapi.com/api/character/?page='+currentPage
        );
        const data = await result.json();
        return data; 
    }

    const handlePageClick = async(e) => {
        console.log(e.selected);
        let currentPage = e.selected +1;

        const pagesfromServer = await fetchPages(currentPage);
        console.log(pagesfromServer);
        setItems(pagesfromServer);
    };
    return (
        <div>
            <Search />
            <GridPersonaje persons={items}/>
            <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={42}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination justify-content-center'}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={2}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={' '}
        />
        </div>
    );
}