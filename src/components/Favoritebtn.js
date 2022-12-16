import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveFavorite } from '../actions/productActions';
import { toast } from 'react-toastify';

function Favoritebtn({slug}) {

    const favoriteHandler = (id) => {
        dispatch(saveFavorite(id));
    };

    const dispatch = useDispatch();

    const saveFavorites = useSelector((state) => state.saveFavorite);
    const { loading : loadingFavorite, error: errorFavorite, success: successFavorite, favorite } = saveFavorites;  

    const notify = (msg) => toast(msg);

    if(favorite){
        // notify(favorite['msg'])
    }

    return (
        <>
            <a onClick={() => { favoriteHandler(slug) }}>
                <span className="bg-green"><i className="lni-heart"></i></span>
            </a>
        </>
    )
}

export default Favoritebtn