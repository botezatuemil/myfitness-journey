import React from 'react';

import { auth, clerkClient } from '@clerk/nextjs/server';

type Props = {};

const Page = async (props: Props) => {
  const { userId } = auth().protect();

  const user = await clerkClient.users.getUser(userId);

  if (!user) return null;
  return <div>Page</div>;
};

export default Page;
