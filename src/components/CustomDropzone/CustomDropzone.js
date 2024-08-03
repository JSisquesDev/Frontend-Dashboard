import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import '../../assets/scss/black-dashboard-react/custom/_dropzone.scss';

const dropzone = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', // Centra verticalmente
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#000000',
  color: '#ffffff', // Cambié el color del texto a blanco para que sea visible en el fondo negro
  outline: 'none',
  transition: 'border .24s ease-in-out',
  height: '100%',
  width: '100%',
  textAlign: 'center',
};

const focusedStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

const CustomDropzone = ({ handleFileUpload }) => {
  const onDrop = acceptedFiles => {
    acceptedFiles.forEach(file => handleFileUpload(file));
  };

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    accept: { 'image/*': [] },
    onDrop,
  });

  const style = useMemo(
    () => ({
      ...dropzone,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject],
  );

  return (
    <div
      className="container"
      style={{
        height: '100%',
        width: '100%',
        padding: '0px',
      }}
    >
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </div>
  );
};

export default CustomDropzone;
