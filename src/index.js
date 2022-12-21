import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ImageUpload from './imageUpload/ImageUpload';
import rollNumber from './imageUpload/ImageUpload';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ImageUpload />
);