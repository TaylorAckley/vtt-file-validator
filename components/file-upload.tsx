import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

const  Uploader = (props: any) => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        const textStr = reader.result;
        props.onFileRead(textStr);
      }
      reader.readAsText(file);
    })
    
  }, [props])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag  Your VTT file here, or click to select from a dialog.</p>
    </div>
  )
}

export default Uploader;