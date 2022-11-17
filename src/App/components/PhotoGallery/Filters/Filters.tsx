import React, { useState } from "react";
import { FormGroup, Form } from "react-bootstrap";

const Filters = (props: IFiltersProps) => {
  const [sol, setSol] = useState(1);

  return (
    <>
      <FormGroup>
        <Form.Control
          type="number"
          placeholder="Solar Day"
          onChange={(ev) => {
            setSol(Number(ev.target.value) || 0);
            props.onChangeSolarDay(Number(ev.target.value) || 0);
          }}
          value={sol}
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
