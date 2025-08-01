import "./App.scss";
import { ServiceScreen } from "./components/screens/serviceScreen";
import { ContainerComponent } from "./components/UI/ContainerComponent/ContainerComponent";
import { Header } from "./components/UI/Header/Header";
import { Main } from "./components/UI/Main/Main";

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
        <ServiceScreen />
      </ContainerComponent>
    </div>
  );
}
