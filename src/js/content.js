import React, { Component } from 'react';
import '../css/content.css';

class Content extends Component {
  render() {
    return (
      <div className="content">

        <hr/>
        <h2 className='sec-title'>Keywords</h2>
        <hr className='sec-s'/>
        <p>Machine Learning, Neural Network, Deep Learning, MRI, 3D Convolution,
        Logistic Regression, Brain Tumour, Detection, Segmentation</p>

        <h2 className='sec-title'>Summary</h2>
        <hr className='sec-s'/>
        <p></p>

        <h2 className='sec-title'>Introduction</h2>
        <hr className='sec-s'/>
        <p>Magnetic resonance imaging (MRI) is a medical imaging technique used in radiology to form anatomy and the physiological processes of the body in both health and disease. [1] Brain tumour is the abnormally growing tissue inside the brain. While craniotomy remains the most desired treatment for this disease, MRI plays an important role in providing accurate and efficient diagnosis. Cerebrospinal fluid (CSF) may cause confounding information in MR images, so by nulling CSF signal, the images will produce clearer contrast between different tissues of the brain, these images being known as FLAIR (Fluid Attenuated Inversion Recovery) images. [2]</p>

      </div>
    )
  }
}

export default Content;
