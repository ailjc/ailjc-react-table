import * as React from 'react';
import ReactDOM from 'react-dom';
import './less/index.less';
import { Table, Column, Cell, HeaderCell } from '../src';

let dataList = [
  {
    id: 1,
    name: 'a',
    email: 'a@email.com',
    avartar:
      'https://avatars1.githubusercontent.com/u/20477654?s=460&u=ba41c47b3bd6b94f3a6ed28d01fe038632ff0f3a&v=4',
  },
  {
    id: 2,
    name: 'b',
    email: 'b@email.com',
    avartar:
      'https://avatars1.githubusercontent.com/u/20477654?s=460&u=ba41c47b3bd6b94f3a6ed28d01fe038632ff0f3a&v=4',
  },
  {
    id: 3,
    name: 'c',
    email: 'c@email.com',
    avartar:
      'https://avatars1.githubusercontent.com/u/20477654?s=460&u=ba41c47b3bd6b94f3a6ed28d01fe038632ff0f3a&v=4',
  },
];

let ImageCell = ({ rowData, dataKey, ...rest }) => (
  <Cell {...rest}>
    <img src={rowData[dataKey]} width="50" />
  </Cell>
);

let sortColumn: (key: any) => void = (key: any): void => {
  switch (key) {
    case 'id':
      let sortToggle = true;
      if (sortToggle) {
        dataList = dataList.sort((a, b) => a - b);
        sortToggle = false;
      } else {
        dataList = dataList.sort((a, b) => b - a);
        sortToggle = true;
      }
      break;

    default:
      break;
  }
};

const App = () => {
  return (
    <div>
      <h1>ailjc-react-table</h1>
      <p>A React table component</p>
      <Table data={dataList} onSortColumn={sortColumn}>
        <Column fixed>
          <HeaderCell>ID</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column>
          <HeaderCell>Email</HeaderCell>
          <Cell>
            {(rowData, rowIndex) => {
              return (
                <a href={`mailto:${rowData.email}`} key={rowIndex}>
                  {rowData.email}
                </a>
              );
            }}
          </Cell>
        </Column>
        <Column>
          <HeaderCell>Avartar</HeaderCell>
          <ImageCell dataKey="avartar" />
        </Column>
      </Table>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
