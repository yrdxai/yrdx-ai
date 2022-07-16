import Card from "../../components/card/Card"
import Tile from "../../components/tile/Tile"
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
              tileImg="https://bieqa.github.io/images/appi_ajp_2014.gif"
              tileDescription='Anqi Qiu*, Ta Anh Tuan, Mei Lyn Ong, Yue Li, Anne Rifkin-Graboi, Helen Chen, Birit FP Broekman, Kenneth Kwek, Seang-Mei Saw, Yap-Seng Chong, Peter D. Gluckman, Marielle V. Fortier, Joanna Dawn Holbrook, Michael J. Meaney, "COMT Haplotypes Modulate Associations of Antenatal Maternal Anxiety and Neonatal Cortical Morphology", American Journal of Psychiatry, 172(2):163-72, 2015. [FEATURE ARTICLE with Editors Special Comments, impact factor: 14.721]'
              tileLink="https://bieqa.github.io/publications/appi_ajp_2014.pdf"
            />

            <Tile 
              tileImg="https://bieqa.github.io/images/HBM_2014.gif"
              tileDescription='Jamie Yu Jin Thong, Jia Du, Nagulan Ratnarajah, Yanhong Dong, Hock Wei Soon, Monica Saini, Ming Zhen Tan, Anh Tuan Ta, Christopher Chen and Anqi Qiu, "Abnormalities of Cortical Thickness, Subcortical Shapes, and White Matter Integrity in Subcortical Vascular Cognitive Impairment", Human Brain Mapping, 35(5):2320-2332, 2014.'
              tileLink="https://bieqa.github.io/publications/hbm22330.pdf"
            />

            <Tile 
              tileImg="https://bieqa.github.io/images/cover.gif"
              tileDescription='Jamie Yu Jin Thong, Jia Du, Nagulan Ratnarajah, Yanhong Dong, Hock Wei Soon, Monica Saini, Ming Zhen Tan, Anh Tuan Ta, Christopher Chen and Anqi Qiu, "Abnormalities of Cortical Thickness, Subcortical Shapes, and White Matter Integrity in Subcortical Vascular Cognitive Impairment", Human Brain Mapping, 35(5):2320-2332, 2014.'
              tileLink="https://bieqa.github.io/publications/hbm22125.pdf"
            />
          </div>
        </div>
    </div>
  )
}

export default Home