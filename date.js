//jshint esversion:6

exports.getDate = () => {
    const today = new Date();

    const option = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    };

    return today.toLocaleDateString("en-us", option);
}

exports.getDay = () => {
    const today = new Date();

    const option = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    return today.toLocaleDateString("en-us", option);
}


