import { Box, BoxProps } from '@chakra-ui/react';

export const Container = (props: BoxProps) => {
  return <Box {...props} maxW='1280px' margin='0 auto' />;
};
