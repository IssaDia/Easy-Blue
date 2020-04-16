const credentials = {
    email: "user@domain.tld",
    password: "123456789"
};

export default (req, res) => {

    if (req.method === 'POST') {

        if (req.json == credentials) {
            return res.json({ valid: true });
        }

    } else {
        return res.status(405).send('Invalid method');
    }
}
