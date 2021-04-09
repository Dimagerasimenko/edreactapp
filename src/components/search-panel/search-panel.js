import React, {Component} from 'react';
import './search-panel.css'
import PostStatusFilter from "../post-status-filter/post-staus-filter";

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return <div className={'search-panel'}>
            <input
                type="text"
                className={'form-control search-input'}
                placeholder={'Поиск по записям'}
                onChange={this.onUpdateSearch}
            />
            <PostStatusFilter
                onFilterSelect={this.props.onFilterSelect}
                filter={this.props.filter}/>
        </div>
    }

}

export default SearchPanel;