import { Button } from '@mui/material';
import PropTypes from 'prop-types';

export default function CommonButton({
  children,
  color,
  disabled,
  size,
  variant,
}) {
  return (
    <Button color={color} disabled={disabled} size={size} variant={variant}>
      {children}
    </Button>
  );
}

CommonButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  disabled: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};
