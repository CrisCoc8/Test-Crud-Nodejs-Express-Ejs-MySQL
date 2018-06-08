const controller = {};

controller.list2 = (req, res) =>{
  req.getConnection((err, conn) => {
    conn.query('Select * FROM catalogo', (err, customers)  => {
    if (err) {
      res.json(err);
      }
        data: customers
        conn.query('Select * FROM categorias', (err, rows)  => {
        if (err) {
          res.json(err);
          }
          res.render('Login', {
            data: customers,
            data2: rows
          });
        });
    });
  });
};

controller.list = (req, res) =>{
  req.getConnection((err, conn) => {
    conn.query('Select * FROM catalogo', (err, customers)  => {
    if (err) {
      res.json(err);
      }
        data: customers
        conn.query('Select * FROM categorias', (err, rows)  => {
        if (err) {
          res.json(err);
          }
          res.render('customers', {
            data: customers,
            data2: rows
          });
        });
    });
  });
};

controller.save = (req, res) =>{
  const data = req.body;
  var registro={
          nombre:req.body.nombre,
          precio:req.body.precio
        };
  var registro2={
          categoria:req.body.categoria
        };
    req.getConnection((err, conn) => {
      conn.query('INSERT INTO catalogo set ?', registro, (err, rows) => {
          if (err) {
          res.json(err);
          }
          console.log(rows);
          //res.redirect('/');
      });
      conn.query('INSERT INTO categorias set ?', registro2, (err, row) => {
          if (err) {
          res.json(err);
          }
          console.log(row);
          res.redirect('/Login');
      });
    });
};

//Metodo Modificar
controller.edit = (req, res) => {
//  const id  = req.params.sid;
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM catalogo WHERE sid = ?', [req.params.sid], (err, rows)  => {
      if (err) {
      res.json(err);
      }
      console.log(rows);
        data: rows[0]
        conn.query('SELECT * FROM categorias WHERE sid = ?', [req.params.sid], (err, rows2)  => {
          if (err) {
          res.json(err);
          }
          console.log(rows2);
          res.render('customer_edit', {
            data: rows[0],
            data2: rows2[0]
          });
        });
    });
  });
};

controller.update = (req, res) => {
const data = req.body;
var registro={
        nombre:req.body.nombre,
        precio:req.body.precio
      };
var registro2={
        categoria:req.body.categoria
      };
  req.getConnection((err, conn) => {
    conn.query('UPDATE catalogo set ? WHERE sid = ?', [registro, req.params.sid], (err, rows)  => {
      if (err) {
      res.json(err);
      }
      conn.query('UPDATE categorias set ? WHERE sid = ?', [registro2, req.params.sid], (err, rows2)  => {
        if (err) {
        res.json(err);
        }
        console.log(req.params.sid);
      });
      res.redirect('/Login');
    });
  });
};

//Metodo para eliminar

controller.delete = (req, res) => {
//  const id  = req.params.sid;
  req.getConnection((err, conn) => {
    conn.query('DELETE FROM catalogo WHERE sid = ?', [req.params.sid], (err, rows)  => {
      if (err) {
      res.json(err);
      }
      conn.query('DELETE FROM categorias WHERE sid = ?', [req.params.sid], (err, rows)  => {
        if (err) {
        res.json(err);
        }
        res.redirect('/Login');
      });
    });
  });
};

///////

controller.NewUser = (req, res) =>{
    const data = req.body;
    var registro={
            usuario:req.body.usuario,
            contrasena:req.body.contrasena
          };
      req.getConnection((err, conn) => {
        conn.query('INSERT INTO usuarios set ?', registro, (err, rows) => {
            if (err) {
            res.json(err);
            }
            console.log(rows);
            res.redirect('/');
        });
  });
};

////////

controller.Verification = (req, res) =>{
  var registro={
          usuario:req.body.usuarioo
        };
  var registro2={
        contrasena:req.body.contrasenaa
        };
  req.getConnection((err, conn) => {
  conn.query('select sid from usuarios where usuario = ? and contrasena = ?', [registro.usuario, registro2.contrasena] ,(err, ff)  => {
    if (err) {
      res.json(err);
      }
        //console.log(ff[0].sid);
        try {
          if(ff[0].sid != null){
             res.redirect('/Login')
           }
        } catch (e) {
          //  window.alert("Credenciales incorrectas");
            res.redirect('/');
            console.log("Credenciales incorrectas");
        }

    });
  });
};

///////////////////

controller.buscar = (req, res) => {
//  const id  = req.params.sid;
var registro={
        nombre:req.body.nombre
      };
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM catalogo WHERE nombre = ?', [registro.nombre], (err, rows)  => {
      if (err) {
      res.json(err);
      }
      try {
        if(rows[0].sid != null){
        //  console.log(rows[0].sid);
          conn.query('SELECT categoria FROM categorias WHERE sid = ?', rows[0].sid, (err, rows2)  => {
            if (err) {
            res.json(err);
            }
          //  console.log(rows2[0].categoria);
          res.render('Resultado', {
              data: rows,
              data2: rows2
           });
           });
         }
       } catch (e) {
         //  window.alert("Credenciales incorrectas");
           res.redirect('/Login');
           console.log("NO existe tal registro");
       }
        });
    });
  };


module.exports = controller;
