const dialogController = {
    home: (req, res) => {
        res.send('Hello World!')
    },
    dialogs: (req, res) => {
        const dialogs = [
            {
                question: "salut",
                answer: "coucou"
            },
            {
                question: "ça va ?",
                answer: "bien et toi ?"
            },
            {
                question: "quel age as-tu ?",
                answer: "22 ans"
            }
        ]
        res.status(200).json({ message: dialogs })
    }
}

module.exports = dialogController