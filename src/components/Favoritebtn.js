import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveFavorite } from '../actions/productActions';
import { toast } from 'react-toastify';

function Favoritebtn({ad}) {

    const favoriteHandler = (slug) => {
        dispatch(saveFavorite(slug));
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
            {
                ad.liked_by_current_user === 'true' ? (
                <a onClick={() => { return }}>
                   <span className=""><i className="lni-heart"></i></span>
                </a>
                )
                :
                <a onClick={() => { favoriteHandler(ad.slug) }}>
                  <span className=""><i className="lni-heart bg-none"></i></span>
                </a>
            }

        </>
    )
}

export default Favoritebtn