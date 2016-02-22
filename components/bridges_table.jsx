import React from 'react'; // Needed for Table components(?)
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

const bridgesTable = (bridges) => (
  <Table multiSelectable={true}>>
    <TableHeader>
      <TableRow>
         <TableRowColumn>id</TableRowColumn>
         <TableRowColumn>ip address</TableRowColumn>
       </TableRow>
     </TableHeader>
     <TableBody>
       {bridges.ids.map((id, index) =>
          <TableRow key={index}>
            <TableRowColumn>{id}</TableRowColumn>
            <TableRowColumn>{bridges.ips[id]}</TableRowColumn>
          </TableRow>
        )}
    </TableBody>
  </Table>
)
export default bridgesTable;
