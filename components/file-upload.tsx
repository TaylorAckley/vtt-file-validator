import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { VTTFileState } from '../lib/enums/vtt-file-state.enum';
import { validator } from '../lib/validator.class';

const Uploader = (props: any) => {
  const [vttFileState, setVTTFileState] = useState(VTTFileState.none);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader()
      reader.onprogress = () => {
        setVTTFileState(VTTFileState.uploading)
      }
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        setVTTFileState(VTTFileState.uploaded)
        const textStr = reader.result  as string;
        onUploaded(textStr);
      }
      reader.readAsText(file);
    })
    
  }, [props]);

  const onUploaded = function (textStr: string) {
    if (validator.isVTT(textStr)) {
      setVTTFileState(VTTFileState.valid)
      props.onFileRead(textStr);
    } else {
      setVTTFileState(VTTFileState.invalid)
    }

  }
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag  Your VTT file here, or click to select from a dialog.</p>
    </div>
  )
}

export default Uploader;