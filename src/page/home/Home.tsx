import Card from "../../components/card/Card"
import Tile from "../../components/tile/Tile"
import hightlightProjectImage1 from "../../assets/img/picture1.jpg"
import "./Home.css"
function Home() {

  return (
    <div className="home">
        <div className="section">
          <h1 className="section-title">
            Key Research Areas
          </h1>
          <div className="row">
            <Card 
            cardImg="https://bieqa.github.io/images/res_pic/img1.jpg" cardTitle="Deep Learning in Diagnosis of Lower Limb Diseases on MR Images" />

            <Card 
            cardImg="https://bieqa.github.io/images/res_pic/LDDMM.png" cardTitle="Deep Learning in Brain & Breast Cancer Prediction on MR Images" />
          
            <Card 
              cardImg="	https://bieqa.github.io/images/neonatal_anat_net.jpg" cardTitle="Graph Neural Network in Tracking Diversity of Stem Cells Development" />
            
            <Card 
              cardImg="https://bieqa.github.io/images/res_pic/img4.png" cardTitle="Deep Learning in Diabetic Retinopathy Analysis" />
          </div>
        </div>
        <div className="section">
          <h1 className="section-title">
          Key Projects
          </h1>
          <div className="row">
            <Card 
            cardImg="https://bieqa.github.io/images/res_pic/img5.jpg" cardTitle="Fully Diagnosis of ACL injuries with Multi-signals" />

            <Card 
            cardImg="https://bieqa.github.io/images/res_pic/subcortical_shape.jpg" cardTitle="Application of Artificial Intelligence in Rehabilitation" />
          
          </div>
        </div>
        <div className="section">
        <h1 className="section-title">
          Highlights
          </h1>
          <div className="column">
            <Tile 
              tileImg={hightlightProjectImage1}
              tileDescription='Automatic Detection of Meniscus Tears Using Backbone Convolutional Neural Networks on Knee MRI; Truong Nguyen Khanh Hung, Vu Pham Thao Vy, Nguyen Minh Tri, Le Ngoc Hoang, Le Van Tuan, Quang Thai Ho, Nguyen Quoc Khanh Le, Jiunn-Horng Kang; Journal of Magnetic Resonance Imaging (doi: 10.1002/jmri.28283)'
              tileLink="https://onlinelibrary.wiley.com/doi/10.1002/jmri.28284"
            />
          </div>
        </div>
    </div>
  )
}

export default Home
