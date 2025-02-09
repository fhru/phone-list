export const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);

    if (isNaN(date.getTime())) {
        throw new Error("Invalid date string");
    }

    const formatter = new Intl.DateTimeFormat("id-ID", {
        dateStyle: 'medium',
        timeStyle: 'short'
    });

    return formatter.format(date);
};
