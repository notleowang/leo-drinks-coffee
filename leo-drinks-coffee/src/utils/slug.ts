// Helper function
// - Converts a URL into the convention I want
//      - lowercase
//      - no whitespace
//      - remove all non-alphanumerical characters except hyphens
//      - replace spaces with hyphens

export const toSlug = (str: string): string => {
    return str
        .toLowerCase()
        .trim() // Remove any leading/trailing whitespace
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/[^\w-]+/g, ''); // Remove non-alphanumeric characters except hyphens
};