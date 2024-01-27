import { MdMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import Button from "../Button/Button";
import "./ContactForm.css";
import images from "/images/Service 24_7-pana 1.svg";
const ContactForm = () => {
  return (
    <section className="container-form">
      <div>
        <div className="button-top">
          <Button
            icon={<MdMessage fontSize={"24px"} />}
            text={"Via Super Chat"}
          ></Button>
          <Button
            icon={<IoCallOutline fontSize={"24px"} />}
            text={"Via Call"}
          ></Button>
        </div>
        <form>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className="form-control">
            <label htmlFor="name">Email</label>
            <input type="text" name="name" />
          </div>
          <div className="form-controls">
            <label htmlFor="name">Text</label>
            <input className="" type="text" name="name" />
          </div>
        </form>
        <Button text={"Submit"}></Button>
      </div>
      <div>
        <img src={images} alt="image" />
      </div>
    </section>
  );
};

export default ContactForm;
