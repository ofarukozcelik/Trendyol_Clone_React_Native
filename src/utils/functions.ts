function getInitials(
  firstName: string | undefined,
  lastName: string | undefined,
) {
  if (!firstName && !lastName) return '';

  const firstInitial = firstName?.charAt(0).toUpperCase() || '';
  const lastInitial = lastName?.charAt(0).toUpperCase() || '';

  return `${firstInitial} ${lastInitial}`;
}
export {getInitials};
