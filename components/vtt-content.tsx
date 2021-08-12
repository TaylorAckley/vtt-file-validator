import { Stylesheet } from "@fluentui/react";
import styles from '../styles/Home.module.css'

const VTTContent = (props: any) => {
    return (
        <pre className={ styles.flexContainer }>
            {props.vttContent}
        </pre>
    );
}

export default VTTContent;