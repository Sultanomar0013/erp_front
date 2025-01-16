import React, { useState, useRef } from 'react';
import { Box, Button, Typography } from '@mui/material';

const AttendanceComponent = () => {
  const [image, setImage] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Unable to access the camera. Please check your permissions.');
    }
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const capturedImage = canvas.toDataURL('image/png');
      setImage(capturedImage);
    }
  };

  const handleSubmit = () => {
    if (!image) {
      alert('Please capture an image before submitting.');
      return;
    }

    // Perform submit action here, e.g., send image to server
    console.log('Attendance submitted:', image);
    alert('Attendance submitted successfully!');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        mt: 4
      }}
    >
      <Typography variant="h5" gutterBottom>
        Mark Your Attendance
      </Typography>

      <Box sx={{ position: 'relative', width: 300, height: 200, border: '1px dashed gray' }}>
        <video ref={videoRef} style={{ width: '100%', height: '100%', display: image ? 'none' : 'block' }} />
        {image && (
          <img
            src={image}
            alt="Captured"
            style={{ width: '100%', height: '100%', borderRadius: 8 }}
          />
        )}
        <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      </Box>

      <Button
        variant="contained"
        onClick={startCamera}
        sx={{ mt: 2 }}
      >
        Start Camera
      </Button>

      <Button
        variant="contained"
        onClick={captureImage}
        sx={{ mt: 2 }}
      >
        Capture Image
      </Button>

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ mt: 2 }}
      >
        Submit Attendance
      </Button>
    </Box>
  );
};

export default AttendanceComponent;
