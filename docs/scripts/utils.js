function sanitizePlayerName (name) {
    var result = name;

    result = result.replace(/\</g, "&lt;");
    result = result.replace(/\>/g, "&gt;");

    return result;
};
