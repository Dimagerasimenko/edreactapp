import React, {Component} from 'react';
import {Button} from 'reactstrap';
import './post-status-filter.css';


class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'},
        ]

    }

    render() {
        const buttons = this.buttons.map((item) => {
            const active = this.props.filter === item.name;
            const atr = active ? 'success' : 'secondary';

            return (
                <Button
                    key={item.name}
                    type={'button'}
                    onClick={() => {
                        this.props.onFilterSelect(item.name);
                    }}
                    color={atr}>

                    {item.label}
                </Button>
            )
        })
        return <div className='btn__group'>
            {buttons}
        </div>
    }

}


export default PostStatusFilter;