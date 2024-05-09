import React, { useState } from 'react';
import { Grid, Button, TextField } from  '@mui/material';
import { useDropzone } from 'react-dropzone';
import { ResizableBox } from 'react-resizable';

const ResizeBlock = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [blocks, setBlocks] = useState([]);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      setImageUrl(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  const onAddBlock = () => {
    // Logic to add a new block
    setBlocks([...blocks, { x: 0, y: 0, width: 100, height: 100 }]);
  };

  const onDownloadTemplate = () => {
    // Logic to download the template
    // You can use canvas to draw the image and blocks
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleResize = (index, direction, ref, delta) => {
    const newBlocks = [...blocks];
    const block = newBlocks[index];
    block.width = ref.style.width;
    block.height = ref.style.height;

    if (direction === 'topLeft') {
      block.x += delta.width;
      block.y += delta.height;
    } else if (direction === 'topRight') {
      block.y += delta.height;
    } else if (direction === 'bottomLeft') {
      block.x += delta.width;
    }

    setBlocks(newBlocks);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="Search" variant="outlined" fullWidth style={{ marginBottom: '20px' }} />
        </Grid>
        <Grid item xs={12}>
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
              <ResizableBox
                key={index}
                width={parseInt(block.width)}
                height={parseInt(block.height)}
                onResize={(event, data) => handleResize(index, data.handle, event.target, data.delta)}
                draggableOpts={{ grid: [25, 25] }} // Set the grid size for snapping while dragging
                style={{
                  position: 'absolute',
                  left: block.x + 'px',
                  top: block.y + 'px',
                  border: '2px solid red',
                  resize: 'both',
                  overflow: 'hidden',
                }}
              >
                <div style={{ width: '100%', height: '100%' }}></div>
              </ResizableBox>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResizeBlock;
