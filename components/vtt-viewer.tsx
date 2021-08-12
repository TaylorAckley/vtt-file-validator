import { Stylesheet } from "@fluentui/react";
import React from "react"
import Uploader from "./file-upload";
import VTTContent from "./vtt-content";
import styles from '../styles/Home.module.css'

interface IVTTViewer {
    hasFile: boolean;
    vttContent: string;
}

const initialState = { hasFile: false, vttContent: '' };

class VTTViewer extends React.Component {
    //hasFile: boolean;
    //vttContent: string;
    constructor(props: any) {
        super(props)
        this.state = { hasFile: false, vttContent: '' };
        this.onFileRead = this.onFileRead.bind(this);
    }

    componentDidMount() {
        console.log(this.state);
    }

    onFileRead(textStr: string) {
        console.log('on file read');
        console.log(textStr.length);
        this.setState({
            vttContent: textStr,
            hasFile: true
        });
      }

    render() {
        return (
            <div className={ styles.flexContainer  }>
                { !this.state.hasFile && <Uploader onFileRead={this.onFileRead}></Uploader>  }
                { this.state.hasFile && <VTTContent vttContent={this.state.vttContent} ></VTTContent>  }
            </div>
        );
    }

}

export default VTTViewer