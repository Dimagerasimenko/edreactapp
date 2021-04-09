import React, {Component} from 'react';
import './post-add-form.css'


class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    getInputValue = (e) => {

        this.setState({
            text: e.target.value
        })

    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text !== '') {
            this.props.onAddNewFormItem(this.state.text);
        }

        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <form
                onSubmit={this.onSubmit}
                className={'bottom-panel d-flex'}>
                <input
                    type="text"
                    placeholder={'What about are you thinking now'}
                    className={'form-control new-post-label'}
                    onChange={this.getInputValue}
                    value={this.state.text}
                />
                <button type={'button'}
                        className={'btn btn-outline-secondary'}
                        onClick={() => {
                            if (this.state.text !== '') {
                                this.props.onAddNewFormItem(this.state.text);
                            }

                        }}
                >
                    Add a Post
                </button>
            </form>
        )
    }

}

export default PostAddForm;