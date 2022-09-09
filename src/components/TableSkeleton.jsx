import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function TableSkeleton() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="rounded" width={'100%'} height={80} />
      <Skeleton variant="rounded" width={'100%'} height={80} />
      <Skeleton variant="rounded" width={'100%'} height={80} />
      <Skeleton variant="rounded" width={'100%'} height={80} />
      <Skeleton variant="rounded" width={'100%'} height={80} />
    </Stack>
  );
}
