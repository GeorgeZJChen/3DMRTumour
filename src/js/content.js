import React, { Component } from 'react'
import '../css/content.css'
import Figure from './figure.js'
import Windows from './window.js'
import MyTable from './table.js'
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
      },
      {
        name: 'Why Convolutions',
        text: 'Ng, A. (2018). CNN11. Why Convolutions?. [online] YouTube. Available at: https://www.youtube.com/watch?v=C_U2Ymf9qgY [Accessed 8 Jul. 2018].'
      },
      {
        name: 'Inception',
        text: 'Szegedy, C., Liu, W., Jia, Y., Sermanet, P., Reed, S., Anguelov, D., Erhan, D., Vanhoucke, V. and Rabinovich, A., 2015. Going deeper with convolutions. In Proceedings of the IEEE conference on computer vision and pattern recognition (pp. 1-9).'
      },
      {
        name: 'Batch norm',
        text: 'Ioffe, S. and Szegedy, C., 2015. Batch normalization: Accelerating deep network training by reducing internal covariate shift. arXiv preprint arXiv:1502.03167.'
      },
      {
        name: 'ITK-SNAP',
        text: 'Paul Yushkevich and Guido Gerig. 2015. ITKSNAP. (2015). http://www.itksnap.org/pmwiki/pmwiki.php'
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
          <Figure source='figures/brain_slice.png' caption={
            <span>A slice of FLAIR image and its corresponding ground truth label. Shown are image patches with the tumor structures that are annotated in the different modalities (top left) and the final labels for the whole dataset (right). Image patches show from left to right: the whole tumor visible in FLAIR (a), the tumor core visible in t2 (b), the enhancing tumor structures visible in t1c (blue), surrounding the cystic/necrotic components of the core (green) (c). Segmentations are
            combined to generate the final labels of the tumor structures (d): edema (yellow), non-enhancing solid core (red), necrotic/cystic core (green), enhancing core(blue).<this.Cite name='BRATS paper 1'/></span>
          } width={600}/>
        </div>

        <p>A study that is done in my department used the same dataset to illustrate the results, the objective of which was to train filters for brain tumour texture analysis. The study reported an accuracy of 93.07%. As the extension of previous work, the motivation of this study is thus to extend the dimension of the structure setting from 2D to 3D and to develop new methods so as to achieve better results.</p>

        <this.SectionTitle title='Experiments Design'/>
        <this.Subtitle title='Observations upon the data'/>
        <p>Having data studied thoroughly is always instrumental in experiments design. To view the MR images, ITK-SNAP <this.Cite name='ITK-SNAP'/> was used. The size of an image is 155×240×240. In ITK-SNAP, the image is displayed in sectional views of the three dimensions. Besides observing through ITK-SNAP, an array of voxels from a sample is also plotted here in figure 2 to demonstrate a stereo view of the data.</p>

        <div className='fig-ct'>
          <Figure source='figures/patient02.png' caption={
            <span>Image voxels example. An image of size 155 × 240 × 249 contains nearly 9 million voxels. Only a relatively small fraction of those in this example were plotted here. Voxel values are visualised as opacity of the point on the graph. The tumour space here can be easily discerned. That is the dense region on the lower-right. But also see that opaque point does not necessarily belong to tumour region.</span>
          } width={400}/>
        </div>

        <p>Taking the perspective of a human experts, the brightness contrasts, tissue texture, and position information might be the most helpful features to be harnessed. But if the visual region is narrowed down to a small patch, position information becomes less observable. On the other hand, if the classification by feature extraction is to function in a texture way, the brightness factor, which the previous study did not eliminate, must be eliminated. To do so, the algorithm need also to normalise each image patch besides normalising the entire image. Figure 3 shows the effects of normalisation of patches.</p>
        <div className='fig-ct'>
          <Figure source='figures/patch.png' caption={
            <span>Effects of normalisation of patches. Images are from one slice of a sample. Four patches on the right: (A) a raw patch taken from tumour region, (B) a raw patch taken from non-tumour region, (C) normalised patch A, (D) normalised patch B.</span>
          } width={500}/>
        </div>
        <p>Texture feature of a patch was enhanced visually by normalising the patch itself. The experiments then were led to examine whether this enhancement would help the classification.</p>

        <this.Subtitle title='Model design'/>
        <p>CNN (convolutional neural network) is a high variance model that can handle difficult classification problem but also easily run into overfitting. Logistic regression is good binary classification but has high bias which means it tends to underfit complex problems.</p>
        <p>Two CNNs classify raw patches (e.g. patch A, B in figure 3 above) and normalised patches (e.g. patch C, D in figure 3 above) separately. Having done so, raw patches and normalised patches are concatenated together as different input channels to another CNN model. Figure 4 demonstrates the three models mentioned in this paragraph.</p>
        <div className='fig-ct'>
          <Figure source='figures/threemodels.png' caption={
            <span>Three different CNNs models. Configurations of all the models are controlled as the same, but the input data are different. From top to bottom, these three models are labelled as model 1, 2, and 3. Though the patches examples are visualised as 2D images, in effect, the models are designed to classify 3D images.</span>
          } width={400}/>
        </div>
        <p>There is another model which combines the first two CNNs and a logistic regression model. Pre-trained model that classifies raw patches and pre-trained model that classifies normalised patches play the role of data processors. For each patch, the two models output two predicted 2×1 vectors which are to be concatenated as 4×1 vectors. Logistic regression model then takes 4×1 vectors as training data and the model is to be trained to classify these vectors. Summing up, with this system, when a test patch comes in, it will in two different forms (raw and normalised) go through two paralleled neural networks the outputs of which are combined together as input to logistic regression classifier where prediction will be given (See figure 5).</p>
        <div className='fig-ct'>
          <Figure source='figures/multimodel.png' caption={
            <span>Combination of models. This model is labelled as model 4. Though the patches examples are visualised as 2D images, in effect, the models are designed to classify 3D images.</span>
          } width={650}/>
        </div>
        <p>Experiments were conducted to compare results from these models.</p>

        <this.SectionTitle title='Methods'/>
        <this.Subtitle title='Data gathering and pre-processing'/>
        <p>FLAIR images of 200 HGG samples from BraTS2015 were the whole set of data this study used. Some samples are different images from the same patient taken in separate period of time. To handle potential homogeneity of the data subset, the 200 samples were randomly shuffled before they eventually went into a training set, a validation set and a test set. 150 samples (75%) were included into training set, and the rest 50 were evenly allocated for validating and testing. The data were normalised into values between 0 and 1 with:</p>

        <div className='math-block'>
          <MathJax math='z_i=\frac{x_i-\min(x)}{\max(x)-\min(x)}\tag{1}'/>
        </div>

        <p>where <span className='math-inline'><MathJax math='x=(x_1,...,x_n)'/></span> is the FLAIR images set and <span className='math-inline'><MathJax math='z_i'/></span> is the <span className='math-inline'><MathJax math='i^{th}'/></span> normalised image.</p>
        <p>The algorithm to sample image patches took the three-dimension image as input and produced the equal number of tumour and non-tumour patches, having size of 14×28×28. The patches were then shuffled again and stored as data batches. Using equation (1) again, copies of cubic patches were normalised and stored as texture enhanced patches. Overall, there were 6564 patches produced across all datasets in this process.</p>

        <this.Subtitle title='Convolution neural network'/>
        <p>{`Neural network is commonly considered to be a very powerful learning algorithm today. Its design was originally inspired by the mechanism of the human brain which is also a machine, yet an organic and electrochemical one, made up of neurons and their connectomes. Basically, the mathematical foundation of neural network algorithms can be represented by matrices arithmetic. Matrix of weights Θ weighs the connections between layer l and layer l+1.
        Weighted values of each layer go through the activation function`} <span className='math-inline'><MathJax math='g(x)'/></span> before they partake in the next layer. The output of <span className='math-inline'><MathJax math='i^{th}'/></span> neuron in layer l+1 is</p>
        <div className='math-block'>
          <MathJax math='a_i^{l+1}= g\left(\sum_{j=0}^{n-1} \Theta_{lj}^{(l)} a_j^{(l)}\right)'/>
        </div>

        <p>Within the category of neural network there is convolution neural network (CNN) which has been proven to be greatly efficient in computer vision because of its parameter sharing and connection sparsity properties. <this.Cite name='Why Convolutions'/> Two different CNNs were built to conduct experiments.</p>
        <p>Network one consists of 15 trainable layers with a total number of 4,833,250 parameters (when number of input channels equals 1). Configuration of network one is shown in figure 6.</p>
        <div className='fig-ct'>
          <Figure source='figures/network1.png' caption={
            <span>Network one. Three-dimensional neural network using 3×3×3 filters. Seen here from left to right are (1) input layer, (2) convolution layer, (3) batch normalisation layer, (4) & (5) convolution layer, (6) batch normalisation layer, (7) max pooling layer, (8) convolution layer, (9) batch normalisation layer, (10) & (11) convolution layer, (12) batch normalisation layer, (13) max pooling layer, (14) & (15) fully connected layer, (16) dropout layer, (17) softmax layer, (18) output layer.</span>
          } width={800}/>
        </div>

        <p>The architecture of Network two is more complex than that of network one. It was implemented in light of the concept of deep inception network by Szegedy et al <this.Cite name='Inception'/>. The total number of parameters (when number of input channels equals 1) in this network is 18,555,810, much larger than in network one. Configuration of network two is shown in figure 7.</p>
        <div className='fig-ct'>
          <Figure source='figures/network2.png' caption={
            <span>Network two. Three-dimensional neural network applying inception architecture. Seen here from left to right are (1) input layer, (2) convolution layer, (3) batch normalisation layer, (4) convolution layer, (5) batch normalisation layer, (6) convolutional pool module, (7) inception module, (8) batch normalisation layer, (9) convolutional pool module, (10) inception module, (11) batch normalisation layer, (12) & (13) fully connected layer, (14) dropout layer, (15) softmax layer, (16) output layer, where configuration of convolutional pool module is on the left-bottom and configuration of inception module is on the right-bottom.</span>
          } width={800}/>
        </div>

        <p>Batch normalisation <this.Cite name='Batch norm'/> is a state-of-the-art technique that can by many times speed up convergence of the algorithm. In short, it computes mean and variance of a batch and uses these two values to normalise the input of a layer batch-wise. The mathematical outline is shown below:</p>
        <div className='math-block'>
          <MathJax math='\begin{split} & \mu=\frac{1}{m}\sum_{i=1}^mx_i \\ & \sigma=\frac{1}{m}\sum_{i=1}^m(x_i-\mu)^2 \\ & \widehat{x_i}=\frac{x_i-\mu}{\sqrt{\sigma^2+\epsilon}} \\ & y_i=\gamma\widehat{x_i}+\beta \end{split}'/>
        </div>

        <p>where <span className='math-inline'><MathJax math='x_i'/></span> is input value to batch normalisation layer and <span className='math-inline'><MathJax math='y_i'/></span> is the output of this layer. <span className='math-inline'><MathJax math='\gamma'/></span> and <span className='math-inline'><MathJax math='\beta'/></span> are both trainable variables.</p>

        <p>To reduce overfitting, dropout regularisation was applied before softmax layer. Moreover, L2 regularisation was as well introduced in cross entropy loss</p>
        <div className='math-block'>
          <MathJax math='\begin{matrix} J(\Theta)=\underbrace{ -\frac{1}{m}\sum_{i=1}^{m}y’^{(i)}\log y^{(i)}} \\Cross\ entropy \end{matrix}  + \begin{matrix} \underbrace{\frac{\lambda}{2m}\sum_{j=1}^{n}\Theta_j^2} \\L2\ regularisation \end{matrix} \tag{2}'/>
        </div>
        <p>In above, <span className='math-inline'><MathJax math='\lambda'/></span> denotes the regularisation parameter, m denotes batch size, <span className='math-inline'><MathJax math='y^{(i)}'/></span> denotes the predicted label and <span className='math-inline'><MathJax math='y’^{(i)}'/></span> denotes the ground truth label.</p>

        <this.Subtitle title='Logistic regression'/>
        <p>Logistic regression algorithm usually takes scalar features as input vector to perform binary classification. With hypothesis function</p>
        <div className='math-block'>
          <MathJax math='h_\theta(x)=\frac{1}{1+e^{-\Theta^Tx}}'/>
        </div>
        <p>similar to equation (2), cross entropy loss with L2 regularisation can be computed as</p>
        <div className='math-block'>
          <MathJax math='J(\Theta)=-\left[\frac{1}{m}\sum_{i=1}^{m}y^{(i)}\log h_\theta(x^{(i)}+(1-y^{(i)})\log (1-h_\theta(x^{(i)})))\right]+ \frac{\lambda}{2m}\sum_{j=1}^{n}\Theta_j^2'/>
        </div>
        <p>where <span className='math-inline'><MathJax math='x^{(i)}'/></span> being the input and <span className='math-inline'><MathJax math='y^{(i)}'/></span> being the label.</p>

        <this.SectionTitle title='Results'/>

        <p>All algorithms were run on GPU servers. The two different configurations of neural network were both implemented and trained. Because of the massive number of parameters in network two, its converging time was much longer, but all the run times were still within reason. For an instance, training loss, validation loss, training accuracy and validation accuracy from the training of model 1, using network 1 and 2 respectively are plotted from figure 8-11.</p>

        <div className='fig-ct'>
          <Figure source='figures/accuracy.png' caption={
            <span>Accuracy line chart of model 2, network 1.</span>
          } width={360}/>
          <Figure source='figures/loss.png' caption={
            <span>Loss line chart of model 2, network 1.</span>
          } width={360}/>
        </div>
        <div className='fig-ct'>
          <Figure source='figures/accuracy2.png' caption={
            <span>Accuracy line chart of model 2, network 2.</span>
          } width={360}/>
          <Figure source='figures/loss2.png' caption={
            <span>Loss line chart of model 2, network 2.</span>
          } width={360}/>
        </div>
        <p>By means of comparison, it is clear that network 2 has a better convergent performance over network 1. Also, noisiness of validation measurement and stability of training measurement in network 1 look outstanding as though it stands more ready to being overfitting. Be that as it may, with respect to test set, network 1 was not much better than network 2 as expected. In the worst case observable, network 1 achieved an accuracy of 86.50% whereas the number for network 2 was 88.37%.</p>
        <p>Table 1 shows the measured test accuracies across four models and two networks.</p>
        <MyTable caption={
          <span>Test accuracies.</span>
          }
          thead={
            <thead>
              <tr>
                <th></th>
                <th>Network 1</th>
                <th>Network 2</th>
              </tr>
            </thead>
          } tbody={
            <tbody>
            <tr>
              <th>Model 1</th>
              <td>91.83%</td>
              <td>93.18%</td>
            </tr>
            <tr>
              <th>Model 2</th>
              <td>86.50%</td>
              <td>88.37%</td>
            </tr>
            <tr>
              <th>Model 3</th>
              <td>94.81%</td>
              <td>95.78%</td>
            </tr>
            <tr>
              <th>Model 4</th>
              <td>94.81%</td>
              <td>96.10%</td>
            </tr>
          </tbody>
        }/>

        <p>Validation data were treated as training data for logistic regression model. Training of logistic regression took all the sample vectors as input at once. Therefore, the plot of the model is rather smooth. Training loss and validation loss changes are visualised in figure 12.</p>
        <div className='fig-ct'>
          <Figure source='figures/logreg.png' caption={
            <span>Loss chart of logistic regression model. Green line indicates training loss and yellow line indicates test loss.</span>
          } width={360}/>
        </div>

        <this.SectionTitle title='Discussion'/>
        <p>Model 1 took raw 3D patches as input and achieved a better accuracy than model 2 where the model took normalised patches as input. Given the results, it is save to conclude that texture patches are not as informative as raw patches. However, model 3 and 4 in which both form of patches were used yielded a noticeably improvement over the high accuracy achieved in model 1. It is also worth to note that while some of the greyscale information was removed in model 2’s input patches, texture information was still contained within patches in model 1. But, model 1 seemed not doing well in extracting texture features. When texture features were manually amplified (by normalisation), they came into more use for the machine to solve this classification. This was less likely to happen by chance when there were two different networks both attested the results. A technique for similar classification problems can be drawn from the findings here. To give it a name for discussion purpose, ‘feature augmentation’ may be an apt choice.</p>
        <p>Basically, the concept of feature augmentation is about prompting the machine for what to look at, by human experience. Techniques such as background removal is a typical use of feature augmentation. Removal of the background augments the non-background information. But to generalise this idea for being more philosophical, it could be a paternalism learning, where extra cares are given to the machine, or maybe a collaboration between human intelligence and artificial intelligence in a personification manner of speaking.</p>
        <p>As for model 3 and model 4, the difference between their results is less significant, so less so that there are hardly any points to argue that one has outperformed another. The CNN in Model 3 read both form of patches at once whereas two paralleled CNNs focused individually on analysing a single input feature. Farfetchedly though, if insisting that model 4 did outperform by a neck, the reason might be that model 4 had put more labour in the task, having three ‘brains’ specialised in three subtasks. In fact, model 4 may not really be able to exert its full strength since the training of its logistic model was run upon a small validation set after all.</p>
        <p>On the other hand, by comparing the results from two networks, it seems that the inception configuration did help to improve the performance, or maybe it could be so merely because of the larger number of parameters. None the less, this will be a constructive investigation point in further study.</p>

        <p>On the basis of model 4, an additionally experimental segmentation was conducted. In a FLAIR image, 3000 cubic patches were sampled and put into the pre-trained algorithm of model 4 in which previous best results were yielded. The algorithm predicted the classes of each patch and recorded its middle voxel position in the original image if it was predicted of tumour class. The predicted positions of one example and its ground truth mask are plotted in figure 13.</p>
        <div className='fig-ct'>
          <Figure source='figures/segmentation11.png' caption={
            <span>Predicted tumour voxel positions and ground truth mask. Blue marks indicate prediction and translucent dark marks indicate ground truth mask. Yellow plain is a slice of the MRI image along z axis.</span>
          } width={360}/>
        </div>
        <p>From figure 13, it is to know that there were a few scattered points predicted incorrectly. To eliminate those anomaly predictions, a function <span className='math-inline'><MathJax math='c(x,y,z)'/></span> to count a predicted point’s neighbours was applied. Anomalies were detected as:</p>
        <div className='math-block'>
          <MathJax math='A\gets\left\{(x,y,z) \mid c(x,y,z) < C\right\}'/>
        </div>
        <p>With anomalies removed, the field around each central predicted voxel were saturated. After this process, a mask was predicted (See figure 14 and 15).</p>
        <div className='fig-ct'>
          <Figure source='figures/segmentation12.png' caption={
            <span>Anomalies removed from figure 13.</span>
          } width={360}/>
          <Figure source='figures/segmentation13.png' caption={
            <span>The predicted mask.</span>
          } width={360}/>
        </div>
        <p>To evaluate the performance of this algorithm, dice score <this.Cite name='BRATS paper 1'/> was computed:</p>
        <div className='math-block'>
          <MathJax math='{\rm Dice}(P,T) = {\vert P_1 \wedge T_1\vert\over (\vert P_1\vert + \vert T_1\vert)/2}'/>
        </div>
        <p>where <span className='math-inline'><MathJax math='P \in \{0, 1\}'/></span> is the algorithmic predictions and <span className='math-inline'><MathJax math='T \in \{0, 1\}'/></span> is the experts' consensus truth.</p>
        <p>In this case, the dice score was 0.75 which was an affirmative value, but in some cases such as the one plotted in figure 16-17 having dice score of 0.55 the results seem less promising.</p>
        <div className='fig-ct'>
          <Figure source='figures/segmentation21.png' caption={
            <span>Predictions of a not good segmentation example.</span>
          } width={360}/>
          <Figure source='figures/segmentation23.png' caption={
            <span>Predicted mask of a not good segmentation example.</span>
          } width={360}/>
        </div>
        <p>Optimistically, this approach was not initially conceived to solve segmentation problem, but it turned out doing an ostensibly acceptable job without too much computational effort. This is also worth further experiments.</p>

        <this.SectionTitle title='References'/>
        <References references={this.references}/>

        <div className='windows-frame-size-keeper' ref='windowsSizeKeeper'></div>
        <Windows ref='windows' parent={this}/>
      </div>
    )
  }
}
export default Content
