import React, { useState } from "react";
import { FormGroup, Form } from "react-bootstrap";
import "./Filters.css";

const Filters = (props: IFiltersProps) => {
  const [sol, setSol] = useState(1);

  return (
    <>
      <FormGroup>
        <Form.Label>Solar Day</Form.Label>
        <Form.Control
          type="number"
          placeholder="Solar Day"
          onChange={(ev) => {
            setSol(Number(ev.target.value) || 0);
            props.onChangeSolarDay(Number(ev.target.value) || 0);
          }}
          value={sol === 0 ? "" : sol}
          className="input-box"
        />
        <Form.Text className="text-muted">
          Between 1 - {props.manifest?.max_sol}
        </Form.Text>
      </FormGroup>
    </>
  );
};

export default Filters;

export interface IFiltersProps {
  manifest: any;
  onChangeSolarDay: (sol: Number) => void;
}
