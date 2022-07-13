const controller = {};

// listar
controller.list = (req, res) => {
  //res.send("hello world");
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM customer', (err, rows) => {
      if(err){
        next(err);
      }


      res.render('customer-view', {
        data: rows
      });
    });
  });
};

// Guargar
controller.save = (req, res) => {
  const data = req.body;

  req.getConnection((err, conn) => {
    conn.query("INSERT INTO customer set ?", [data], (err, rows) => {
      res.redirect('/');
    });
  });
};

// Obtener un registro
controller.edit = (req, res) => {
  const {id} = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM customer WHERE id = ?", [id], (err, rows) => {
      res.render('customer-edit', {
        data: rows[0]
      });
    });
  });
};

// Actualizar
controller.update = (req, res) => {
  const {id} = req.params;
  const data = req.body;
  req.getConnection((err, conn) =>{
    conn.query('UPDATE customer set ? WHERE id = ?', [data, id], (err, rows) => {
      res.redirect('/');
    });
  });
};

// Delete
controller.delete = (req, res) => {
  const {id} = req.params;
  req.getConnection((err, conn) => {
    conn.query("DELETE FROM customer WHERE id = ?", [id], (err, rows) => {
      res.redirect('/');
    });
  });
};

// Exportados
module.exports = controller;