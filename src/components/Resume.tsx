import styled from "@emotion/styled";
import React from "react";
import { IResume } from "../models/IResume";
import { capitalizeTheFirstLetter } from "./../helper";

interface PropsResume {
  resume: IResume;
}

const ContainerResume = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Resume = ({ resume }: PropsResume) => {
  //extract data
  if (resume.mark === "" || resume.year === "" || resume.plan === "") {
    return null;
  }

  return (
    <ContainerResume>
      <h2>Quote Resume</h2>
      <ul>
        <li>Mark: {capitalizeTheFirstLetter(resume.mark)}</li>
        <li>Plan: {capitalizeTheFirstLetter(resume.plan)}</li>
        <li>Year: {resume.year}</li>
      </ul>
    </ContainerResume>
  );
};

export default Resume;
