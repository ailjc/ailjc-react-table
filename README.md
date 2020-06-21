# ailjc-react-table

A React table component.

## Install

```sh
npm i ailjc-react-table --save
```

### Usage

```tsx
import { Table, Column, HeaderCell, Cell } from 'ailjc-react-table';
import 'ailjc-react-table/lib/less/index.less';

const dataList = [
  { id: 1, name: 'a', email: 'a@email.com', avartar: '...' },
  { id: 2, name: 'b', email: 'b@email.com', avartar: '...' },
  { id: 3, name: 'c', email: 'c@email.com', avartar: '...' },
];

const ImageCell = ({ rowData, dataKey, ...rest }) => (
  <Cell {...rest}>
    <img src={rowData[dataKey]} width="50" />
  </Cell>
);

const App = () => (
  <Table data={dataList}>
    <Column width={100} sort fixed resizable>
      <HeaderCell>ID</HeaderCell>
      <Cell dataKey="id" />
    </Column>

    <Column width={100} sort resizable>
      <HeaderCell>Name</HeaderCell>
      <Cell dataKey="name" />
    </Column>

    <Column width={100} sort resizable>
      <HeaderCell>Email</HeaderCell>
      <Cell>
        {(rowData, rowIndex) => {
          return <a href={`mailto:${rowData.email}`}>{rowData.email}</a>;
        }}
      </Cell>
    </Column>

    <Column width={100} resizable>
      <HeaderCell>Avartar</HeaderCell>
      <ImageCell dataKey="avartar" />
    </Column>
  </Table>
);
```

## API

> ...待补充
