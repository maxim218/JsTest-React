import React, {Component} from 'react';
import globalObj from "../actions/globalObj";
import write from "../actions/write";

export default class PrintAreaField extends Component {
    constructor(props) {
        super(props);

        globalObj().areaNameSpace = this;

        const {paramsObj} = props;
        const content = paramsObj.content.toString();

        this.state = {
            content: content
        };

        write("PrintAreaField CREATED");
    }

    onContentChange = (e) => {
        this.setState({
            content: e.target.value
        });
    };

    setContent(contentString) {
        this.setState({
            content: contentString.toString()
        });
    }

    getContent() {
        const content = this.state.content;
        return content.toString();
    }

    render() {
        return(
            <div>
                <textarea onChange={this.onContentChange} value={this.state.content}/>
            </div>
        );
    }
}