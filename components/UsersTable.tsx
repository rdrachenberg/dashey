import { User } from "@prisma/client";
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@tremor/react";

type Props = {
  users: User[];
  
}
export default function UsersTable({ users }: Props) {
  // console.log('users here: ----->')
  // console.log(users);
  // console.log('<----------')
  
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Created</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users?.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              {new Intl.DateTimeFormat('en-US').format(user.createdAt)}
            </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
