class HomeController {
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  getHomePage(req, res) {
    if (!req.session.pageVisitCount && req.isAuthenticated()) {
      req.session.pageVisitCount = 1;
    } else if(req.session.pageVisitCount && req.isAuthenticated()) {
      req.session.pageVisitCount = req.session.pageVisitCount + 1;
    }
    res.locals.title = "Home - Nethrenial Co.";
    res.locals.isAuthenticated = !!req.isAuthenticated();
    return res.render("pages/index", {
      pageVisitCount: req.session.pageVisitCount,
    });
  }
}

export const homeController = new HomeController();
