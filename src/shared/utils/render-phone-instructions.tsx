export const renderPhoneInstructions = (value: string, errors: any, disabled?: boolean) => {
  if (errors?.type === 'required' && !disabled) {
    return (
      <span data-test-id='hint' className='modal-input-line_instructions__warning-text'>
        Поле не может быть пустым
      </span>
    );
  }

  if (errors?.type === 'pattern' && !disabled) {
    return (
      <span data-test-id='hint' className='modal-input-line_instructions__warning-text'>
        В формате +375 (xx) xxx-xx-xx
      </span>
    );
  }

  return <span data-test-id='hint'>В формате +375 (xx) xxx-xx-xx</span>;
};
