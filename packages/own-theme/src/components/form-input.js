import { styled } from "frontity";

export function Input({ content }) {
  return (
    <FormInput>
      <label htmlFor={content.name}>{content.label}</label>
      <input type={content.type} id={content.name} name={content.name} />
    </FormInput>
  );
}

const FormInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function TextArea({ content }) {
  return (
    <FormTextArea>
      <label htmlFor={content.name}>{content.label}</label>
      <textarea rows="5" cols="15" name={content.name}></textarea>
    </FormTextArea>
  );
}

const FormTextArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export function CheckBox({ content }) {
  return (
    <FormCheckbox>
      <input name={content.name} id={content.id} type="check" />
      <label htmlFor={content.id}>{content.name}</label>
    </FormCheckbox>
  );
}

const FormCheckbox = styled.div`
  display: flex;
  align-items: center;

  & input {
    margin: 0px 15px;
  }
`;
