import { Card, Text, Title} from '@tremor/react';
import Search from '@/components/Search';
import UsersTable from '@/components/UsersTable';
import prisma from '@/lib/prisma';

type Props = {
  searchParams: {
    q?: string;
  }
  
  
}
export default async function Home({ searchParams }: Props ) {
  console.log(searchParams.q);

  const query = searchParams.q;
  const users = await prisma.user.findMany({
    where: {
      OR: [
        {
          email: query,
        },
        {
          name: query
        },
      ],
    },
  });
  // console.log(query)
  const allUsers = await prisma.user.findMany({
    where: {
      name: {
        contains: query
      }
    }
  });
  console.log(allUsers)
  return (
    <main className='p-4 md:p-10 mx-auto max-w-7xl'>
      <Title>Users</Title>
      <Text>In Database</Text>
      <Search query={query}/>
      <Card className='mt-6'>
        <UsersTable users={query ? users : allUsers}/>
      </Card>
    </main>
  )
}
