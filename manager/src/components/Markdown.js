import React, { Component } from 'react';
import Editor from 'for-editor';
class Markdown extends Component {
    constructor(props) {
        super(props)
        this.state = { value: '' }
    }
    handleChange(value) {
        this.setState({ value })
    }
    render() {
        const { value } = this.state
        // console.log(this.props.fn)
        return (<Editor height="auto" value={value} onChange={this.handleChange.bind(this)} />)
    }
}
export default Markdown;