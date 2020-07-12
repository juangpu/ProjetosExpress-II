const controller = {
    the100: (req, res) => {
        res.render("The 100")
    },
    theSociety: (req, res) => {
        res.render("The Society")
    },
    OuterBanks: (req, res) => {
        res.render("Outer Banks")
    }
}

module.exports = controller