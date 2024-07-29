export function optionsConstructor(
  limit: string,
  offset: string,
  sortBy: string,
  sortOrder: string
) {
  const options: any = {
    limit: parseInt(limit as string, 10) || 10, // Default limit
    skip: parseInt(offset as string, 10) || 0, // Default offset
    sort: sortBy ? { [sortBy as string]: sortOrder === "desc" ? -1 : 1 } : {}, // Default sort
  };
  return options;
}
