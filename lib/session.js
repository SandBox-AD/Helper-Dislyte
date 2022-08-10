async function getAuthSession(ctx) {
    return ctx.req.session.get("user");
}

module.exports = getAuthSession