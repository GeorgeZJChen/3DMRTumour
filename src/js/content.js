import React, { Component } from 'react'
import '../css/content.css'
import Figure from './figure.js'
import {Cite, References} from './cite.js'
import MathJax from './math.js'


class Content extends Component {
  constructor(props){
    super(props)
    this.titles = []
    this.references = [
      {
        name: 'MRI Book',
        text: 'McRobbie, D.W., Moore, E.A. and Graves, M.J., 2017. MRI from Picture to Proton. Cambridge university press.'
      },
      {
        name: 'MRI wiki',
        text: 'En.wikipedia.org. (2018). Magnetic resonance imaging. [online] Available at: https://en.wikipedia.org/wiki/Magnetic_resonance_imaging [Accessed 6 Jul. 2018].'
      },
      {
        name: 'BRATS paper 1',
        text: 'Menze, B.H., Jakab, A., Bauer, S., Kalpathy-Cramer, J., Farahani, K., Kirby, J., Burren, Y., Porz, N., Slotboom, J., Wiest, R. and Lanczi, L., 2015. The multimodal brain tumor image segmentation benchmark (BRATS). IEEE transactions on medical imaging, 34(10), p.1993.'
      },
      {
        name: 'BRATS paper 2',
        text: 'Kistler, M., Bonaretti, S., Pfahrer, M., Niklaus, R. and Büchler, P., 2013. The virtual skeleton database: an open access repository for biomedical research and collaboration. Journal of medical Internet research, 15(11).'
      }
    ]
    this.Cite = this.Cite.bind(this)
    this.SectionTitle = this.SectionTitle.bind(this)
    this.Subtitle = this.Subtitle.bind(this)
  }
  componentDidMount(){
    this.props.parent.refs.title.update(this.titles)
  }
  Cite(props){
    return <Cite name={props.name} references={this.references}/>
  }
  SectionTitle(props){
    this.titles.push({
      type: 1,
      text: props.title
    })
    return <React.Fragment>
    <h2 className='sec-title'>{props.title}<a name={props.title} className='anchor'>{props.title}</a></h2>
    <hr className='sec-s'/>
    </React.Fragment>
  }
  Subtitle(props){
    this.titles.push({
      type: 2,
      text: props.title
    })
    return <React.Fragment>
    <h3 className='sec-sub-title'>{props.title}<a name={props.title} className='anchor'>{props.title}</a></h3>
    <hr className='sec-s-s'/>
    </React.Fragment>
  }
  render() {
    return (
      <div className="content">

        <hr/>
        <this.SectionTitle title='Keywords'/>
        <p>Machine Learning, Neural Network, Deep Learning, MRI, 3D Convolution,
        Logistic Regression, Brain Tumour, Detection, Segmentation</p>

        <this.SectionTitle title='Summary'/>
        <p></p>

        <this.SectionTitle title='Introduction'/>

        <p>Magnetic resonance imaging (MRI) is a medical imaging technique used in radiology to form anatomy and the physiological processes of the body in both health and disease. <this.Cite name='MRI wiki'/> Brain tumour is the abnormally growing tissue inside the brain. While craniotomy remains the most desired treatment for this disease, MRI plays an important role in providing accurate and efficient diagnosis. Cerebrospinal fluid (CSF) may cause confounding information in MR images, so by nulling CSF signal, the images will produce clearer contrast between different tissues of the brain, these images being known as FLAIR (Fluid Attenuated Inversion Recovery) images. <this.Cite name='MRI Book'/></p>

        <p>In recent years, the field of machine learning as well as machine learning for medical automated diagnosis has grown at an astonishing pace. In 2012, Menze et al organised a so-called BraTS challenge in order to gauge the status of automated brain tumour segmentation and they released a considerable amount of MR images so as to attract researchers to take part in the challenges. Since then, data for BraTs challenges were issued every year. Data from BraTS2015 were used as the dataset of this study. <this.Cite name='BRATS paper 1'/><this.Cite name='BRATS paper 2'/></p>

        <p>A sample from BraTS2015 data consists of images of 4 different modalities, where different modalities highlight different tumour structures (i.e. edema, necrosis, enhancing tumour and non-enhancing tumour), and one segmentation label which is delineated by human experts, indicating the tumour area of four different structures against other organic matter in the skull. An example of different modalities of an image slice and its hue-labelled appearance is shown below in figure 1. </p>

        <div className='fig-ct'>
          <Figure source='/figures/brain_slice.png' caption={
            <span>A slice of FLAIR image and its corresponding ground truth label. Shown are image patches with the tumor structures that are annotated in the different modalities (top left) and the final labels for the whole dataset (right). Image patches show from left to right: the whole tumor visible in FLAIR (a), the tumor core visible in t2 (b), the enhancing tumor structures visible in t1c (blue), surrounding the cystic/necrotic components of the core (green) (c). Segmentations are
            combined to generate the final labels of the tumor structures (d): edema (yellow), non-enhancing solid core (red), necrotic/cystic core (green), enhancing core(blue).<this.Cite name='BRATS paper 1'/></span>
          } width={600}/>
        </div>

        <p>A study that is done in my department used the same dataset to illustrate the results, the objective of which was to train filters for brain tumour texture analysis. The study reported an accuracy of 93.07%. As the extension of previous work, the motivation of this study is thus to extend the dimension of the structure setting from 2D to 3D and to develop new methods so as to achieve better results.</p>

        <this.SectionTitle title='Methods'/>
        <this.Subtitle title='Data gathering and pre-processing'/>
        <p>FLAIR images of 200 HGG samples from BraTS2015 were the whole set of data this study used. Some samples are different images from the same patient taken in separate period of time. To handle potential homogeneity of the data subset, the 200 samples were randomly shuffled before they eventually went into a training set, a validation set and a test set. 150 samples (75%) were included into training set, and the rest 50 were evenly allocated for validating and testing. The data were normalised into values between 0 and 1 with:</p>

        <div className='math-block'>
          <MathJax math='z_i=\frac{x_i-\min(x)}{\max(x)-\min(x)}\tag{1}'/>
        </div>

        <p>where <span className='math-inline'><MathJax math='x=(x_1,...,x_n)'/></span> is the FLAIR images set and <span className='math-inline'><MathJax math='z_i'/></span> is the <span className='math-inline'><MathJax math='i^{th}'/></span> normalised image.</p>

        <p>The algorithm to sample image patches took the three-dimension image as input (the array of voxels from a normalised sample is plotted in figure 2) and produced the equal number of tumour and non-tumour patches, having size of 14 × 28 × 28. The patches were then shuffled again and stored as data batches. Overall, there were 3282 patches produced across all datasets in this process.</p>

        <div className='fig-ct'>
          <Figure source='/figures/patient02.png' caption={
            <span>Image voxels example. An image of size 155 × 240 × 249 contains nearly 9 million voxels. Only a relatively small fraction of those in this example were plotted here. Voxel values are visualised as opacity of the point on the graph. The tumour space here can be easily discerned. That is the dense region on the lower-right. But also see that opaque point does not necessarily belong to tumour region.</span>
          } width={400}/>
        </div>

        <this.SectionTitle title='References'/>
        <References references={this.references}/>

      </div>
    )
  }
}

export default Content;
