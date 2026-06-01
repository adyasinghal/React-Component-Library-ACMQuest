import './Button.css';

export const Button = ({
  children,
  variant = 'primary',
  isDisabled = false,
  isLoading = false,
  onClick,
}) => {
  // Combine classes dynamically based on the props provided
  const buttonClasses = [
    'btn',
    `btn-${variant}`,
    isDisabled ? 'btn-disabled' : '',
    isLoading ? 'btn-loading' : '',
  ].filter(Boolean).join(' ');

  // Disable the button if it is explicitly disabled OR currently loading
  const shouldBeDisabled = isDisabled || isLoading;

  const handleClick = (event) => {
    if (shouldBeDisabled) {
      return;
    }
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={buttonClasses}
      disabled={shouldBeDisabled}
      onClick={handleClick}
    >
      {isLoading && <span data-testid="spinner" className="spinner" />}
      {children}
    </button>
  );
};
