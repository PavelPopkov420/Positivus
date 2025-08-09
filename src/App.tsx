import "./App.scss";
import { СonsultationScreen } from "./components/screens/consultationScreen";
import { TeamScreen } from "./components/screens/teamScreen";
import { CaseStudies } from "./components/UI/CaseStudies/CaseStudiesю";
import { ContainerComponent } from "./components/UI/ContainerComponent/ContainerComponent";
import { Header } from "./components/UI/Header/Header";
import { Main } from "./components/UI/Main/Main";
import { ServiceCards } from "./components/UI/ServiceCards/ServiceCrads";


export default function App() {
  

  return (
    <div className="container">
      <Header />
      <Main
        title="Navigating the digital landscape for success"
        discription="Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation."
      />
      <ContainerComponent
        title="Services"
        subtitle="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. 
      These services include:"
      >
        <ServiceCards
          title="Let’s make things happen"
          description="Contact us today to learn more about how our digital marketing services can help your business grow and succeed online."
          img={<img src="../../public/cta_img.png" alt="card1" />}
        />
      </ContainerComponent>
      <ContainerComponent
        title="Case Studies"
        subtitle="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      >
        <CaseStudies />
      </ContainerComponent>
      <ContainerComponent title="Our Working Process " subtitle="Step-by-Step Guide to Achieving Your Business Goals">
        <СonsultationScreen/>
      </ContainerComponent>

      <ContainerComponent title="Team" subtitle="Meet the skilled and experienced team behind our successful digital marketing strategies">
        <TeamScreen/>
      </ContainerComponent>


    </div>
  );
}
