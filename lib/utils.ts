export const cn = (
    ...classes: Array<string | false | null | undefined>
) => classes.filter(Boolean).join(" ");

export const clamp = (
    value: number,
    min: number,
    max: number,
) => Math.min(Math.max(value, min), max);

export const isValidCoordinate = (
    latitude: number,
    longitude: number,
) =>
    Number.isFinite(latitude) &&
    Number.isFinite(longitude) &&
    latitude >= -90 &&
    latitude <= 90 &&
    longitude >= -180 &&
    longitude <= 180;