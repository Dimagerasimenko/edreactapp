import React from 'react';
import PostListItem from "./post-list-item/post-list-item";
import './post-list.css';
import {ListGroup} from 'reactstrap';

function PostList({posts, onDelete, onToggleImportant, onToggleLike}) {
    /*function isEmpty(obj) {
        for (let k in obj) {
            return false
        }
        return true;
    }*/


    return (
        <ListGroup className={'app-list'}>
            {posts.map(i => {
                const {id, ...iProps} = i;
                return <PostListItem

                    {...iProps}
                    key={id}
                    onDelete={() => {
                        onDelete(id)
                    }
                    }
                    onToggleImportant={() => {
                        onToggleImportant(id);
                    }
                    }
                    onToggleLike={() => {
                        onToggleLike(id);
                    }}

                />

            })}
        </ListGroup>
    )
}

export default PostList;