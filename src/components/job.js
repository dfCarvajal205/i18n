/* eslint-disable react/style-prop-object */
import React from "react";
import {FormattedDate, FormattedNumber, FormattedMessage } from 'react-intl';

const Job = (props) => {
  return (
    <tr>
      <th scope="row">
        <FormattedMessage 
          id="idInt"
          defaultMessage= {props.offer.id}
          values={{
            elId: `${props.offer.id}`
          }}
        />
      </th>
      <td>
        <FormattedMessage 
        id="nombre"
        defaultMessage= '{empleo}'
        values={{
          empleo: `${props.offer.name}`,
          elNombre: `${props.offer.name}`
        }}
        />
      </td>
      <td>
        <FormattedMessage
          id="empresa"
          defaultMessage='{compania}'
          values={{
            compania: `${props.offer.company}`,
            laEmpresa: `${props.offer.company}`
          }}
        />
      </td>
      <td>
        <FormattedMessage
          id="salario"
          values={{
            salary: `${props.offer.salary}`
          }}
        />
      </td>
      <td>
        <FormattedMessage 
          id="ciudad"
          defaultMessage= '{ciudad}'
          values={{
            ciudad: `${props.offer.city}`,
            laCiudad: `${props.offer.city}`
          }}
        />
      </td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>
        <FormattedNumber
          value= {props.offer.views}
        />
      </td>
    </tr>
  );
};

export default Job;
