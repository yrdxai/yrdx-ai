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
            cardLink="https://bieqa.github.io/manifold_shape.html"
            cardImg="https://bieqa.github.io/images/res_pic/img1.jpg" cardTitle="Manifold Learning  &  Deep Learning" />

            <Card 
            cardLink="https://bieqa.github.io/subcortical_shape.html"
            cardImg="https://bieqa.github.io/images/res_pic/LDDMM.png" cardTitle="LDDMM" />
          
            <Card 
              cardLink="https://bieqa.github.io/Imaging_Genetics2.html"
              cardImg="	https://bieqa.github.io/images/neonatal_anat_net.jpg" cardTitle="Imaging Genetics" />
            
            <Card 
              cardLink="https://bieqa.github.io/signal.html"
              cardImg="https://bieqa.github.io/images/res_pic/img4.png" cardTitle="Signal Processing On Manifold" />
          </div>
        </div>
        <div className="section">
          <h1 className="section-title">
          Key Projects
          </h1>
          <div className="row">
            <Card 
            cardLink="https://bieqa.github.io/brain_development.html"
            cardImg="https://bieqa.github.io/images/res_pic/img5.jpg" cardTitle="Brain Development GUSTO" />

            <Card 
            cardLink="https://bieqa.github.io/brain_aging.html"
            cardImg="https://bieqa.github.io/images/res_pic/subcortical_shape.jpg" cardTitle="Brain Aging" />
          
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
              tileLink="https://onlinelibrary.wiley.com/journal/15222586"
            />
          </div>
        </div>
    </div>
  )
}

export default Home