import React from 'react';
import './post-list-item.css';

function PostListItem(props) {
    const {label, onDelete, important, like} = props;
    let classNames = 'app-list-item d-flex justify-content-between';

    if (important) {
        classNames += ' important';
    }
    if (like) {
        classNames += ' like';
    }
    return (<li className={classNames}>
            <span
                className={'app-list-item-label'}
                onClick={props.onToggleLike}
            >
                    {label}
            </span>
        <div
            className={'d-flex justify-content-center align-items-center'}
        >
            <button
                type={'button'}
                className={'btn-star btn-sm'}
                onClick={props.onToggleImportant}>
                <i className={'fa fa-star'}></i>
            </button>
            <button
                type={'button'}
                className={'btn-trash btn-sm'}
                onClick={onDelete}>
                <i className={'fa fa-trash-o'}></i>
            </button>
            <i className={'fa fa-heart'}></i>
        </div>

    </li>)

}

export default PostListItem;