import { styled } from "frontity";
import colors from "../styles/colors";
import { Input, CheckBox, TextArea } from "./form-input";

export default function ScheduleConsultationForm() {
  const formInputArray = [
    { name: "firstName", label: "First Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
    { name: "email", label: "E-Mail", type: "email" },
    { name: "phone", label: "Phone ", type: "text" },
  ];
  const checkboxArray = [
    { name: "Telehealth", id: "Telehealth" },
    { name: "Cataract Evaluation", id: "cataractEvaluation" },
    { name: "LASIC Consultation", id: "lasicConsultation" },
    { name: "General Eye Care", id: "generalEyeCare" },
  ];
  const textArea = { name: "commentsQuestion", label: "Comments / Questions" };
  return (
    <Container>
      <h1>
        SCHEDULE AN <b>APPOINTMENT</b>
      </h1>
      <hr />
      <p>
        To <b>Schedule an appointment,</b> call us at{" "}
        <a href="tel:7012938242">+(701) 293-8242</a> or fill out the{" "}
        <b>Consultation Request Form</b> below and a member of our team will
        reach out to you shortly
      </p>
      <h4>CONSULTATION REQUEST FORM</h4>
      <Form>
        {formInputArray.map((content, index) => (
          <Input key={index} content={content} />
        ))}
        <span>
          <label>Reason For Scheduling</label>
          <div>
            {checkboxArray.map((content, index) => (
              <CheckBox content={content} key={index} />
            ))}
          </div>
        </span>
        <TextArea content={textArea} />

        <Button>Submit</Button>
      </Form>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Form = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: ${colors.navy};
  color: white;
  height: 50px;
  width: 250px;
`;
