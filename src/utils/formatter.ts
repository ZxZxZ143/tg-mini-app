export const floatFormater = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

export const intFormater = new Intl.NumberFormat('en-US', {});

export const numberFormatterWithK = Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    compactDisplay: "short",
    notation: "compact"
})
