import "./App.css";
import Navigation from "./components/Navigation";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <div>
      <Navigation />
      <ContactHeader></ContactHeader>
      <ContactForm></ContactForm>
    </div>
  );
}

export default App;
