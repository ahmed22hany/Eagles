import { Text as ChakraText, TextProps } from '@chakra-ui/react';
import { useMemo } from 'react';

type TextVariants = 'heading' | 'subHeading' | 'body' | 'caption' | 'link';

type Props = TextProps & {
  variant?: TextVariants;
};

const variants: Record<TextVariants, Record<string, string>> = {
  heading: {
    fontSize: '2xl',
    fontWeight: 'bold',
    color: 'primary',
  },
  subHeading: {
    fontSize: 'xl',
    fontWeight: 'semibold',
    color: 'primary',
  },
  body: {
    fontSize: 'md',
    fontWeight: 'normal',
    color: 'primary',
  },
  caption: {
    fontSize: 'sm',
    fontWeight: 'normal',
    color: 'primary',
  },
  link: {
    fontSize: 'sm',
    fontWeight: 'semibold',
    color: 'primary',
  },
};

export const Text = (props: Props) => {
  const styles = useMemo(
    () => (props.variant ? variants?.[props?.variant as TextVariants] : {}),
    [props.variant]
  );

  return <ChakraText {...styles} {...props} />;
};
