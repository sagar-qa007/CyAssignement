const getLocationNames = (locations) => {
    if (!locations || !locations.length) {
        return '(No Locations)';
    }

    const names = [];
    locations.forEach((location) => {
        if (location.name) {
            names.push(location.name);
        }
    });

    return names.join(', ');
}

export {
    getLocationNames,
}