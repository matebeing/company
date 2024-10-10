import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const PasswordField = ({label, errors = {}, ...fields}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <TextField
      {...fields}
      label={label}
      variant="outlined"
      type={showPassword ? 'text' : 'password'}
      error={!!errors[fields.name]}
      helperText={errors[fields.name]? errors[fields.name].message : ''}
      InputProps={{
        inputProps: {
          'data-testid': "password-input"
        },
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              data-testId="showPassword"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordField;
