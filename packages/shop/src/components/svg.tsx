import { Box } from './box';

export const Svg = ({ size = 18, ...props }) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    width={size + ''}
    height={size + ''}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  />
);
