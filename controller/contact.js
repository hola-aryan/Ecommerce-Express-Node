exports.getContacts = (req, res, next) => {
    res.render('contact',{
        pageTitle: 'contact',
        path: '/contact'
      });
  }