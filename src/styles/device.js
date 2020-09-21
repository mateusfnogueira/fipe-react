export const size = {
    mobile: 575,
    tablet: 768,
    desktop: 992,
    largeDesktop: 1200,
};

export const device = {
    xs: `(max-width: ${size.mobile}px)`,
    sm: `(min-width: ${size.mobile}px)`,
    md: `(min-width: ${size.tablet}px)`,
    lg: `(min-width: ${size.desktop}px)`,
    xl: `(min-width: ${size.largeDesktop}px)`,
};
