import React from 'react'


export const CategoriesBadges = (props) => {

    return (
        <a onClick={()=> props.selected(props.category)} className="badge badge-pill badge-secondary">{props.category}</a>
    )
};

export default CategoriesBadges;