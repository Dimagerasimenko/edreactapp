import React, {Component} from 'react';
import nextId from "react-id-generator";

import './app.css';
import styled from 'styled-components';
// import css from './App.module.css';


import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [
                {label: 'Learning CSS', important: true, like: false, id: nextId()},
                {label: 'Learning JS', important: false, like: false, id: nextId()},
                {label: 'Learning React', important: false, like: false, id: nextId()},
            ],
            term: '',
            filter: 'all',
            appHeader: {
                name: "Dmitry",
                surname: "Gerasomenko"
            }
        }
    };

    searchPost = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(i => {
            return i.label.indexOf(term) > -1;
        })
    }

    filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter(i => i.like)
        } else {
            return items;
        }
    }


    onDelete = (id) => {
        this.setState(({posts}) => {
            const state = posts.filter(item => item.id !== id);
            return {
                posts: state
            }
        })
    }

    onAddNewFormItem = (text) => {

        this.setState(({posts}) => {
            const newLabel = {label: text, important: false, like: false, id: nextId()};
            const newPosts = [...posts, newLabel];

            return {
                posts: newPosts
            }
        })
    }

    onToggleImportant = (id) => {
        this.setState(({posts}) => {
            const index = posts.findIndex(i => i.id === id);
            const changingItem = posts[index];

            const newItem = {...changingItem, important: !changingItem.important};
            const newState = [...posts.slice(0, index), newItem, ...posts.slice(index + 1)];

            return {
                posts: newState
            }
        })
    }

    onToggleLike = (id) => {
        this.setState(({posts}) => {
            const index = posts.findIndex(i => i.id === id);
            const changingItem = posts[index];

            const newItem = {...changingItem, like: !changingItem.like};
            const newState = [...posts.slice(0, index), newItem, ...posts.slice(index + 1)];

            return {
                posts: newState
            }
        })
    }
    onUpdateSearch = (term) => {
        this.setState({term})
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {posts, appHeader, term, filter} = this.state;
        const amountLikes = posts.filter(i => i.like).length;
        const amountPosts = posts.length;
        const visibilityPosts = this.filterPost(this.searchPost(posts, term), filter);
        return (
            <AppBlock>

                <AppHeader
                    appHeader={appHeader}
                    amountLikes={amountLikes}
                    amountPosts={amountPosts}
                />

                <div className="search-panel d-flex">
                    <SearchPanel
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                        onUpdateSearch={this.onUpdateSearch}/>
                </div>
                <PostList posts={visibilityPosts}

                          onDelete={(id) => {
                              this.onDelete(id)
                          }}
                          onToggleImportant={this.onToggleImportant}
                          onToggleLike={this.onToggleLike}
                />
                <PostAddForm onAddNewFormItem={this.onAddNewFormItem}/>
            </AppBlock>
        )


    }


}

