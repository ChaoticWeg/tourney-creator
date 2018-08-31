function sanitizePlayerName (name) {
    var result = name.trim();

    result = result.replace(/\</g, "&lt;");
    result = result.replace(/\>/g, "&gt;");

    return result;
};
