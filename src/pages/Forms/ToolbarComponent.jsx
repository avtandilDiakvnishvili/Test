import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import { useDropzone } from 'react-dropzone';

const ToolbarComponent = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [blocks, setBlocks] = useState([]);
    // const canvasRef = useRef(null);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = function (event) {
            setImageUrl(event.target.result);
        };

        reader.readAsDataURL(file);
    };

    // const handleDrop = (acceptedFiles) => {
    //     const file = acceptedFiles[0];
    //     const reader = new FileReader();

    //     // console.log(acceptedFiles)
    //     reader.onload = function (event) {
    //         console.log(event.target)
    //         setImageUrl(event.target.result);
    //     };

    //     // reader.readAsDataURL(file);
    // };



    const onAddBlock = () => {
        // Logic to add a new block
        setBlocks([...blocks, { x: 0, y: 0, width: 100, height: 100 }]);
    };

    const onDownloadTemplate = () => {
        // Logic to download the template
        // You can use canvas to draw the image and blocks
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div>
            <Grid container spacing={2}>

                <Grid item xs={12}>
                    {/* Picture upload button */}
                    {/* <Button variant="contained" color="primary" component="label" style={{ marginRight: '10px' }}>
                        Upload Picture
                        <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleDrop} />
                    </Button> */}

                    {/* Dropzone component */}
                    <div {...getRootProps()} style={{ marginBottom: '20px' }}>
                        <input {...getInputProps()} />
                        <Button variant="contained" color="primary">
                            Upload Picture
                        </Button>
                    </div>

                    {/* Add block button */}
                    <Button variant="contained" color="primary" onClick={onAddBlock} style={{ marginRight: '10px' }}>
                        Add Block
                    </Button>
                    {/* Download template button */}
                    <Button variant="contained" color="primary" onClick={onDownloadTemplate} style={{ marginRight: '10px' }}>
                        Download Template
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    {/* Canvas box */}
                    <div style={{ position: 'relative', width: '100%', height: '500px', border: '1px solid #ccc' }}>
                        {imageUrl && (
                            <img
                                src={imageUrl}
                                alt="Uploaded"
                                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', position: 'absolute' }}
                            />
                        )}
                        {blocks.map((block, index) => (
                            <div
                                key={index}
                                style={{
                                    position: 'absolute',
                                    left: block.x + 'px',
                                    top: block.y + 'px',
                                    width: block.width + 'px',
                                    height: block.height + 'px',
                                    border: '2px solid red',
                                    resize: 'both',
                                    overflow: 'hidden',
                                }}
                            ></div>
                        ))}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default ToolbarComponent;
