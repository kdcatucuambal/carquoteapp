import styled from "@emotion/styled";
import React, { useState } from "react";
import { IResume } from "../models/IResume";
import { getYearDifference, getIncreaseByMark, getPlan } from "./../helper";

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  --webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  &:hover {
    cursor: pointer;
    background-color: #26c6da;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

type FormElement = React.FormEvent<HTMLFormElement>;

type InputElement = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

interface Props {
  setResume(resume: IResume): void;
  setLoading(loading: boolean): void;
}

const Form = (props: Props) => {
  const [data, setData] = useState({
    mark: "",
    year: "",
    plan: "basic",
  });

  const [error, setError] = useState(false);

  //extract values
  const { mark, year, plan } = data;

  //Read form data and put in the state
  const getData = (e: InputElement) => {
    

    setData({ ...data, [e.target.name]: e.target.value });
  };

  //When the user press submit
  const quoteInsurance = (e: FormElement) => {
    e.preventDefault();
    if (mark.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    //Base 2000
    let result = 2000;

    //get year difference
    const difference = getYearDifference(Number(year));
    //for each year 3%
    result -= (difference * 3 * result) / 100;

    //American: 15%
    //Asian 5%
    //European 30%
    result = getIncreaseByMark(mark) * result;

    //Basic: add 20%
    //Complete: add 50%
    const planIncrease = getPlan(plan);
    console.log("Plan Increase: " + planIncrease);

    result = planIncrease * result;

    props.setLoading(true);

    setTimeout(() => {
      //Total
      props.setLoading(false);
      props.setResume({ mark, year, price: result, plan });
    }, 1000);
  };

  return (
    <form onSubmit={quoteInsurance}>
      {error ? <Error>All fields are required!</Error> : null}
      <Field>
        <Label htmlFor="mark">Mark:</Label>
        <Select name="mark" value={mark} onChange={getData}>
          <option value="">-- Select --</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asian">Asian</option>
        </Select>
      </Field>
      <Field>
        <Label htmlFor="year">Year:</Label>
        <Select name="year" value={year} onChange={getData}>
          <option value="">-- Select --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>
      <Field>
        <Label htmlFor="plan">Plan:</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basic"
          checked={plan === "basic"}
          onChange={getData}
        />
        Basic
        <InputRadio
          type="radio"
          name="plan"
          value="complete"
          checked={plan === "complete"}
          onChange={getData}
        />
        Complete
      </Field>
      <Button type="submit">Quote</Button>
    </form>
  );
};

export default Form;
